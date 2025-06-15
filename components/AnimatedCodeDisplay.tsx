"use client";
import { useEffect, useState } from "react";
import CodeDisplay from "./CodeDisplay";
import codeSnippets from "../src/data/codeSnippets.json";

interface CodeSnippet {
  id: number;
  title: string;
  code: string;
}

export default function AnimatedCodeDisplay() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);

  useEffect(() => {
    setSnippets(codeSnippets.snippets.slice(0, 5)); 

    const interval = setInterval(() => {
      setSnippets((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        if (first) updated.push(first);
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-20">
      <div className="relative w-[562px] h-[600px] flex items-center justify-center">
        {snippets.map((snippet, index) => {
          const relativeIndex = index - 2; 
          const translateY = relativeIndex * 120;
          const translateX =
            relativeIndex === 0 ? 0 : relativeIndex < 0 ? -10 : 10;
          const scale = 1 - Math.abs(relativeIndex) * 0.1;
          const opacity = 1 - Math.abs(relativeIndex) * 0.3;

          return (
            <div
              key={snippet.id}
              className="absolute w-full transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu"
              style={{
                opacity,
                zIndex: 5 - Math.abs(relativeIndex),
                top: "50%",
                left: "50%",
                transform: `translate(-50%, calc(${translateY}px - 50%)) scale(${scale})`,
                filter: relativeIndex === 0 ? "none" : "blur(1px)",
              }}
            >
              <div className="text-sm text-gray-400 font-mono mb-1.5 w-full text-left">
                {snippet.title}
              </div>

              <CodeDisplay
                code={snippet.code}
                showBorder={relativeIndex === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
