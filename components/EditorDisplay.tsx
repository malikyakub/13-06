"use client";
import React, { useState, useRef, useMemo, useLayoutEffect, memo } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";

interface EditorDisplayProps {
  code: string;
  showBorder?: boolean;
}

const EditorDisplayComponent: React.FC<EditorDisplayProps> = ({
  code,
  showBorder = false,
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
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

  useLayoutEffect(() => {
    setIsLoading(true);
    try {
      const replacements: { placeholder: string; value: string }[] = [];
      let tempCode = code;

      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      tempCode = tempCode.replace(linkRegex, (match, text, url) => {
        const placeholder = `__LINK_PLACEHOLDER_${replacements.length}__`;
        replacements.push({
          placeholder,
          value: `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:underline">${text}</a>`,
        });
        return placeholder;
      });

      const highlighted = Prism.highlight(
        tempCode,
        Prism.languages[language],
        language
      );

      let finalHtml = highlighted;
      replacements.forEach((rep) => {
        finalHtml = finalHtml.replace(rep.placeholder, rep.value);
      });

      setHighlightedCode(finalHtml);
    } catch (error) {
      console.error("Error highlighting code:", error);
      const fallbackCode = code.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:underline">$1</a>'
      );
      setHighlightedCode(fallbackCode);
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  const lines = useMemo(() => highlightedCode.split("\n"), [highlightedCode]);

  const content = (
    <div className="relative w-full flex flex-col">
      <pre className="p-4 text-[0.85rem] leading-[1.6] font-mono text-white flex-1 overflow-auto whitespace-pre-wrap">
        <code className="w-full">
          {isLoading ? (
            <div className="flex items-center justify-center py-4 w-full">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            <div ref={contentRef}>
              {lines.map((line, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-right pr-4 text-gray-500 select-none min-w-[40px]">
                    {index + 1}
                  </span>
                  <span
                    className="flex-1"
                    dangerouslySetInnerHTML={{ __html: line || " " }}
                  />
                </div>
              ))}
            </div>
          )}
        </code>
      </pre>
    </div>
  );

  return (
    <div className={`w-full flex ${!showBorder ? "pointer-events-none" : ""}`}>
      {showBorder ? (
        <div className="relative p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            {content}
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

const EditorDisplay = memo(EditorDisplayComponent);
export default EditorDisplay;
