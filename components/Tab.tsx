"use client";
import React from 'react';

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  onClose: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onClick, onClose }) => {
  const activeClasses = isActive ? 'bg-gray-800' : 'bg-gray-900';

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent onClick on tab when closing
    onClose();
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 cursor-pointer text-white ${activeClasses} hover:bg-gray-700/50 transition-colors border-r border-gray-700`}
    >
      <span>{title}</span>
      <button onClick={handleClose} className="ml-4 text-gray-400 hover:text-white">
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
};

export default Tab;
