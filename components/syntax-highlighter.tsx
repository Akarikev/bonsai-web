"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  className?: string;
}

export function SyntaxHighlighter({
  code,
  language = "tsx",
  className = "",
}: SyntaxHighlighterProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`language-${language} ${className}`}>
      <code className={`language-${language} font-mono`}>{code}</code>
    </pre>
  );
}
