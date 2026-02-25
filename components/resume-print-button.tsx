"use client";

import { useCallback } from "react";
import { DownloadIcon } from "@/components/icons";
import styles from "./resume-print-button.module.css";

export function ResumePrintButton() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={styles.button}
      aria-label="Print or save resume as PDF"
    >
      <DownloadIcon size={18} className={styles.icon} />
      Print / save as PDF
    </button>
  );
}
