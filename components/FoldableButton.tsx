"use client";

import React, { useState, ReactNode } from "react";

interface FoldableButtonProps {
  title: string;
  icon: string;
  children: ReactNode;
  onClick: () => void;
}

const FoldableButton: React.FC<FoldableButtonProps> = ({
  title,
  icon,
  children,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700/50 transition-colors"
      >
        {/* <i
          className={`ri-arrow-drop-${isOpen ? "down" : "right"}-line text-xl`}
        ></i> */}
        <i className={`${icon}`}></i>
        <span>{title}</span>
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

export default FoldableButton;
