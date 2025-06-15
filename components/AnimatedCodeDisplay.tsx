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
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    setSnippets(codeSnippets.snippets.slice(0, 10));

    const interval = setInterval(() => {
      setSnippets((prev) => {
        const newSnippets = [...prev];
        const first = newSnippets.shift();
        if (first) newSnippets.push(first);
        return newSnippets;
      });
      setActiveIndex((prev) => (prev === 4 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-20">
      <div className="relative w-[562px] h-[420px] flex items-center justify-center">
        {snippets.map((snippet, index) => {
          const scale =
            index === 2 ? 1 : index === 1 || index === 3 ? 0.85 : 0.7;
          const opacity =
            index === 2 ? 1 : index === 1 || index === 3 ? 0.5 : 0.2;
          const translateY = (index - 2) * 120;
          const translateX = index === 2 ? 0 : index < 2 ? -20 : 20;

          return (
            <div
              key={snippet.id}
              className="absolute w-full transition-all duration-700 ease-in-out"
              style={{
                opacity,
                zIndex: 5 - Math.abs(index - 2),
                top: "50%",
                left: "50%",
                transformOrigin: "center center",
                transform: `translate(-50%, calc(${translateY}px - 50%)) scale(${scale})`,
                filter: index === 2 ? "none" : "blur(1px)",
              }}
            >
              {/* Gently display the project title */}
              <div className="text-sm text-gray-400 font-mono mb-1.5">
                {snippet.title}
              </div>

              <CodeDisplay code={snippet.code} showBorder={index === 2} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
