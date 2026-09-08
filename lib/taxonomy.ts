/**
 * Client-safe types and labels for the knowledge base. No Node imports here;
 * this module is imported by client components as well as server code.
 */

/** Kind of knowledge-base note. */
export type NoteType = "concept" | "lab" | "model" | "hub" | "question";

/** Growth stage of a note (digital-garden convention). */
export type NoteStatus = "seed" | "growing" | "evergreen";

/** How well-sourced a perishable note is. */
export type NoteConfidence = "high" | "medium" | "speculative";

export interface NoteSource {
  title: string;
  url?: string;
  accessed?: string;
}

export const NOTE_TYPE_LABELS: Record<NoteType, string> = {
  concept: "Concept",
  lab: "Lab",
  model: "Model",
  hub: "Hub",
  question: "Open question",
};

export const NOTE_STATUS_LABELS: Record<NoteStatus, { label: string; description: string }> = {
  seed: { label: "Seed", description: "A first pass. Incomplete by design." },
  growing: { label: "Growing", description: "Load-bearing in at least one essay; still being extended." },
  evergreen: { label: "Evergreen", description: "Stable. Revised only for corrections." },
};
