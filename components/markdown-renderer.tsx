import ReactMarkdown from "react-markdown";
import styles from "./markdown-renderer.module.css";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
