"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "Software Engineer...",
  "Front-end Developer...",
  "Mobile App Developer...",
  "UI/UX Designer...",
  "AI Enthusiast...",
  "Problem Solver...",
];

const AnimatedTitle = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentRole.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
          return;
        }
        setCurrentText(currentRole.slice(0, currentText.length - 1));
        setTypingSpeed(30);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting, typingSpeed]);

  return (
    <p className="text-teal-500 text-2xl font-semibold">
      &gt; {currentText}
      <span className="animate-blink">|</span>
    </p>
  );
};

export default AnimatedTitle;
