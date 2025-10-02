"use client";

import React, { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  icon?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 p-2 text-left text-white hover:bg-gray-700/50 transition-colors"
      >
        <i
          className={`ri-arrow-${isOpen ? "down" : "right"}-s-fill text-xl`}
        ></i>
        {icon && <i className={`${icon} text-xl`}></i>}
        <span>{title}</span>
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

export default Accordion;
