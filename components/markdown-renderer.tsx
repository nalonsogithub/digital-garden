import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./markdown-renderer.module.css";

export interface MarkdownViewerProps {
  /** Raw markdown string to render. */
  content: string;
  /** Optional class name for the wrapper (e.g. for compact or large variants). */
  className?: string;
}

/**
 * Site-wide markdown viewer. Use anywhere you need to render markdown text:
 * detail pages, inline summaries, or custom content blocks.
 * Supports standard markdown + GFM (tables, strikethrough, autolinks, task lists).
 */
export function MarkdownViewer({ content, className }: MarkdownViewerProps) {
  return (
    <div className={`${styles.markdown} ${className ?? ""}`.trim()}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

/** @deprecated Use MarkdownViewer instead. Kept for backward compatibility. */
export function MarkdownRenderer({ content }: { content: string }) {
  return <MarkdownViewer content={content} />;
}
