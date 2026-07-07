"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./mandelbrot-explorer.module.css";

const DEFAULT_VIEW = { centerX: -0.5, centerY: 0, width: 3.2 };
const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 360;

function iterationsForZoom(zoomFactor: number): number {
  return Math.min(800, Math.round(120 + 60 * Math.log2(zoomFactor + 1)));
}

function escapeIterations(cRe: number, cIm: number, maxIter: number): number {
  let zRe = 0;
  let zIm = 0;
  let i = 0;
  while (zRe * zRe + zIm * zIm <= 4 && i < maxIter) {
    const nextRe = zRe * zRe - zIm * zIm + cRe;
    const nextIm = 2 * zRe * zIm + cIm;
    zRe = nextRe;
    zIm = nextIm;
    i++;
  }
  return i;
}

function colorFor(iter: number, maxIter: number): [number, number, number] {
  if (iter >= maxIter) return [8, 10, 24];
  const t = iter / maxIter;
  const r = Math.round(235 - t * 210);
  const g = Math.round(245 - t * 200);
  const b = Math.round(255 - t * 90);
  return [r, g, b];
}

export function MandelbrotExplorer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [view, setView] = useState(DEFAULT_VIEW);
  const [rendering, setRendering] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setRendering(true);
    const { centerX, centerY, width } = view;
    const height = (width * CANVAS_HEIGHT) / CANVAS_WIDTH;
    const zoomFactor = DEFAULT_VIEW.width / width;
    const maxIter = iterationsForZoom(zoomFactor);

    const imageData = ctx.createImageData(CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let py = 0; py < CANVAS_HEIGHT; py++) {
      const cIm = centerY + (py / CANVAS_HEIGHT - 0.5) * height;
      for (let px = 0; px < CANVAS_WIDTH; px++) {
        const cRe = centerX + (px / CANVAS_WIDTH - 0.5) * width;
        const iter = escapeIterations(cRe, cIm, maxIter);
        const [r, g, b] = colorFor(iter, maxIter);
        const idx = (py * CANVAS_WIDTH + px) * 4;
        imageData.data[idx] = r;
        imageData.data[idx + 1] = g;
        imageData.data[idx + 2] = b;
        imageData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    setRendering(false);
  }, [view]);

  useEffect(() => {
    draw();
  }, [draw]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * CANVAS_WIDTH;
    const py = ((e.clientY - rect.top) / rect.height) * CANVAS_HEIGHT;
    const height = (view.width * CANVAS_HEIGHT) / CANVAS_WIDTH;
    const clickRe = view.centerX + (px / CANVAS_WIDTH - 0.5) * view.width;
    const clickIm = view.centerY + (py / CANVAS_HEIGHT - 0.5) * height;
    const zoomIn = !e.shiftKey;
    const nextWidth = zoomIn ? view.width * 0.45 : view.width / 0.45;
    setView({
      centerX: clickRe,
      centerY: clickIm,
      width: Math.min(nextWidth, DEFAULT_VIEW.width),
    });
  };

  const zoomLevel = DEFAULT_VIEW.width / view.width;

  return (
    <div className={styles.wrap}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className={styles.canvas}
        onClick={handleClick}
        onContextMenu={(e) => e.preventDefault()}
        role="img"
        aria-label="Interactive Mandelbrot set explorer. Click to zoom in, shift-click to zoom out."
      />
      <div className={styles.controls}>
        <span className={styles.zoomLabel}>
          {rendering ? "Rendering…" : `Zoom: ${zoomLevel < 1.05 ? "1" : zoomLevel.toFixed(1)}×`}
        </span>
        <button type="button" className={styles.button} onClick={() => setView(DEFAULT_VIEW)}>
          Reset view
        </button>
      </div>
      <p className={styles.caption}>
        <strong>Figure 4.</strong> The equation above, iterated live in your browser. Dark points
        stay bounded forever; pale points escape, shaded by how quickly. Click anywhere to zoom in
        on the boundary; shift-click to zoom back out. The boundary is infinitely intricate: new
        structure keeps appearing no matter how far in you go.
      </p>
    </div>
  );
}
