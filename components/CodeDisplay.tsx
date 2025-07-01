"use client";
import React, { useState, useRef, useMemo, useLayoutEffect, memo } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";

interface CodeDisplayProps {
  code: string;
  showBorder?: boolean;
}

const CodeDisplayComponent: React.FC<CodeDisplayProps> = ({
  code,
  showBorder = false,
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const language = useMemo(() => {
    if (
      code.includes("React.FC") ||
      code.includes("useState") ||
      code.includes("tsx") ||
      code.includes("jsx")
    ) {
      return "tsx";
    }
    if (
      code.trimStart().startsWith("#") ||
      code.includes("def ") ||
      code.includes("import ")
    ) {
      return "python";
    }
    return "typescript";
  }, [code]);

  const finalCode = useMemo(() => {
    let projectComment: string | null = null;
    let trimmed = code;

    if (language === "python") {
      const match = code.match(/^(\s*#.*)/);
      if (match) {
        projectComment = match[1];
        trimmed = code.replace(projectComment, "").trimStart();
      }
    } else {
      const match = code.match(/^(\s*\/\/.*|\/\*[\s\S]*?\*\/)/);
      if (match) {
        projectComment = match[1];
        trimmed = code.replace(projectComment, "").trimStart();
      }
    }

    return projectComment ? `${projectComment}\n${trimmed}` : trimmed;
  }, [code, language]);

  useLayoutEffect(() => {
    setIsLoading(true);
    try {
      const highlighted = Prism.highlight(
        finalCode,
        Prism.languages[language],
        language
      );
      setHighlightedCode(highlighted);
    } catch (error) {
      console.error("Error highlighting code:", error);
      setHighlightedCode(finalCode);
    } finally {
      setIsLoading(false);
    }
  }, [finalCode, language]);

  useLayoutEffect(() => {
    const ref = contentRef.current;
    if (!ref) return;

    const observer = new ResizeObserver(() => {
      const { scrollHeight, clientHeight } = ref;
      setHasOverflow(scrollHeight > clientHeight);
    });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [highlightedCode]);

  const content = (
    <div className="relative group w-[560px] min-h-[182px] flex flex-col">
      <pre className="bg-gray-900/95 p-4 rounded-lg text-[0.85rem] leading-[1.6] font-mono text-white flex-1 overflow-hidden relative">
        <code className="w-full">
          {isLoading ? (
            <div className="flex items-center justify-center py-4 w-full">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              <div
                ref={contentRef}
                className={`transition-all w-full overflow-hidden ${
                  !isExpanded ? "max-h-[182px]" : "max-h-none"
                }`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
              {hasOverflow && !isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/95 to-transparent flex items-end justify-center pb-2">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Show more...
                  </button>
                </div>
              )}
            </>
          )}
        </code>
      </pre>
    </div>
  );

  return (
    <div
      className={`w-[562px] flex items-center justify-center ${
        !showBorder ? "pointer-events-none" : ""
      }`}
    >
      {showBorder ? (
        <div className="relative p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex items-center justify-center">
          <div className="w-[560px] flex items-center justify-center">
            {content}
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

const CodeDisplay = memo(CodeDisplayComponent);
export default CodeDisplay;
