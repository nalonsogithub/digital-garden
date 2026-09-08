"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { WikiGraph, GraphNode } from "@/lib/wiki";
import styles from "./wiki-graph.module.css";

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface SimEdge {
  source: SimNode;
  target: SimNode;
}

const WIDTH = 900;
const HEIGHT = 620;
const ITERATIONS = 320;

/**
 * Minimal force-directed layout (repulsion + springs + centering), run once on
 * mount. Deterministic seed so the graph looks the same on every load.
 */
function layout(graph: WikiGraph): { nodes: SimNode[]; edges: SimEdge[] } {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const nodes: SimNode[] = graph.nodes.map((n) => ({
    ...n,
    x: WIDTH / 2 + (rand() - 0.5) * WIDTH * 0.6,
    y: HEIGHT / 2 + (rand() - 0.5) * HEIGHT * 0.6,
    vx: 0,
    vy: 0,
  }));
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges: SimEdge[] = graph.edges
    .map((e) => ({ source: byId.get(e.source), target: byId.get(e.target) }))
    .filter((e): e is SimEdge => Boolean(e.source && e.target));

  const repulsion = 2600;
  const springLength = 95;
  const springK = 0.035;
  const gravity = 0.015;

  for (let it = 0; it < ITERATIONS; it++) {
    const cooling = 1 - it / ITERATIONS;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 1) {
          dx = rand() - 0.5;
          dy = rand() - 0.5;
          d2 = 1;
        }
        const f = repulsion / d2;
        const d = Math.sqrt(d2);
        const fx = (dx / d) * f;
        const fy = (dy / d) * f;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }
    }
    for (const e of edges) {
      const dx = e.target.x - e.source.x;
      const dy = e.target.y - e.source.y;
      const d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const f = (d - springLength) * springK;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      e.source.vx += fx;
      e.source.vy += fy;
      e.target.vx -= fx;
      e.target.vy -= fy;
    }
    for (const n of nodes) {
      n.vx += (WIDTH / 2 - n.x) * gravity;
      n.vy += (HEIGHT / 2 - n.y) * gravity;
      n.x += n.vx * 0.08 * cooling;
      n.y += n.vy * 0.08 * cooling;
      n.vx *= 0.6;
      n.vy *= 0.6;
      n.x = Math.min(WIDTH - 30, Math.max(30, n.x));
      n.y = Math.min(HEIGHT - 30, Math.max(30, n.y));
    }
  }
  return { nodes, edges };
}

function radiusFor(n: GraphNode): number {
  const base = n.kind === "essay" ? 9 : n.kind === "track" ? 8 : 5;
  return base + Math.min(8, n.inbound * 1.2);
}

export function WikiGraphView({ graph }: { graph: WikiGraph }) {
  const router = useRouter();
  const { nodes, edges } = useMemo(() => layout(graph), [graph]);
  const [hover, setHover] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "note" | "essay">("all");

  const neighbors = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const e of edges) {
      if (!m.has(e.source.id)) m.set(e.source.id, new Set());
      if (!m.has(e.target.id)) m.set(e.target.id, new Set());
      m.get(e.source.id)!.add(e.target.id);
      m.get(e.target.id)!.add(e.source.id);
    }
    return m;
  }, [edges]);

  const visible = (n: GraphNode) =>
    filter === "all" || n.kind === filter || (filter === "note" && n.kind === "track");

  const isDim = (id: string) => hover !== null && hover !== id && !neighbors.get(hover)?.has(id);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls} aria-label="Graph filters">
        {(["all", "note", "essay"] as const).map((k) => (
          <button
            key={k}
            type="button"
            className={filter === k ? styles.filterActive : styles.filter}
            onClick={() => setFilter(k)}
          >
            {k === "all" ? "All" : k === "note" ? "Notes" : "Essays"}
          </button>
        ))}
        <span className={styles.legend}>
          <span className={`${styles.swatch} ${styles.swatchNote}`} /> note
          <span className={`${styles.swatch} ${styles.swatchEssay}`} /> essay
          <span className={`${styles.swatch} ${styles.swatchTrack}`} /> track
          <span className={styles.legendHint}>node size = inbound links</span>
        </span>
      </div>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Knowledge graph of notes and essays"
      >
        <g>
          {edges.map((e, i) => {
            if (!visible(e.source) || !visible(e.target)) return null;
            const dim = hover !== null && hover !== e.source.id && hover !== e.target.id;
            return (
              <line
                key={i}
                x1={e.source.x}
                y1={e.source.y}
                x2={e.target.x}
                y2={e.target.y}
                className={dim ? styles.edgeDim : styles.edge}
              />
            );
          })}
        </g>
        <g>
          {nodes.map((n) => {
            if (!visible(n)) return null;
            const r = radiusFor(n);
            const dim = isDim(n.id);
            return (
              <g
                key={n.id}
                className={`${styles.node} ${dim ? styles.nodeDim : ""}`}
                transform={`translate(${n.x},${n.y})`}
                onMouseEnter={() => setHover(n.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => n.href && router.push(n.href)}
                tabIndex={0}
                onKeyDown={(ev) => {
                  if ((ev.key === "Enter" || ev.key === " ") && n.href) router.push(n.href);
                }}
                role="link"
                aria-label={`${n.title} (${n.kind})`}
              >
                <circle
                  r={r}
                  className={
                    n.kind === "essay"
                      ? styles.circleEssay
                      : n.kind === "track"
                        ? styles.circleTrack
                        : n.status === "evergreen"
                          ? styles.circleEvergreen
                          : n.status === "growing"
                            ? styles.circleGrowing
                            : styles.circleSeed
                  }
                />
                <text
                  y={r + 11}
                  textAnchor="middle"
                  className={hover === n.id || n.kind !== "note" || n.inbound >= 3 ? styles.label : styles.labelQuiet}
                >
                  {n.title.length > 28 ? `${n.title.slice(0, 27)}…` : n.title}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <p className={styles.hint}>
        Hover a node to highlight its neighbours. Click to open it. {nodes.length} nodes, {edges.length} links.
      </p>
    </div>
  );
}
