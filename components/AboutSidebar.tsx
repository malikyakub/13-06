"use client";
import React from "react";
import Accordion from "./Accordion";
import FoldableButton from "./FoldableButton";

interface AboutSidebarProps {
  onSelect: (selection: string) => void;
}

const AboutSidebar: React.FC<AboutSidebarProps> = ({ onSelect }) => {
  return (
    <aside className="w-full md:w-64 bg-gray-900 text-white border-r border-gray-700">
      <Accordion title="personal-info" icon="ri-folder-3-fill">
        <button
          onClick={() => onSelect("bio")}
          className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-folder-2-fill text-red-400"></i>
          <span>bio</span>
        </button>
        <button
          onClick={() => onSelect("interests")}
          className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-folder-2-fill text-teal-400"></i>
          <span>interests</span>
        </button>
        <FoldableButton
          title="education"
          icon="ri-folder-2-fill text-blue-400"
          onClick={() => onSelect("education")}
        >
          <button
            onClick={() => onSelect("school")}
            className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700/50 transition-colors"
          >
            <i className="ri-markdown-line text-gray-400"></i>
            <span>school</span>
          </button>
          <button
            onClick={() => onSelect("university")}
            className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700/50 transition-colors"
          >
            <i className="ri-markdown-line text-gray-400"></i>
            <span>university</span>
          </button>
        </FoldableButton>
      </Accordion>
      <Accordion title="contacts" icon="ri-folder-3-fill">
        <a
          href="mailto:malikyakub@hotmail.com"
          className="flex items-center gap-2 p-2 hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-mail-fill text-gray-400"></i>
          <span>malikyakub@hotmail.com</span>
        </a>
        <a
          href="https://wa.me/qr/QYLDBCRGJHXPN1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-whatsapp-fill text-gray-400"></i>
          <span>+252-613673734</span>
        </a>
        <a
          href="https://github.com/malikyakub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-github-fill text-gray-400"></i>
          <span>github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/malik-yakub-90a752346"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 hover:bg-gray-700/50 transition-colors"
        >
          <i className="ri-linkedin-box-fill text-gray-400"></i>
          <span>linkedin</span>
        </a>
      </Accordion>
    </aside>
  );
};

export default AboutSidebar;
