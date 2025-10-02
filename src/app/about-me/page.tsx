"use client";
import React, { useState } from "react";
import AboutSidebar from "../../../components/AboutSidebar";
import EditorDisplay from "../../../components/EditorDisplay";
import TabHolder from "../../../components/TabHolder";
import contents from "../../data/content.json";

interface TabData {
  id: string;
  title: string;
}

const AboutMePage = () => {
  const [openTabs, setOpenTabs] = useState<TabData[]>([
    { id: "bio", title: "bio" },
  ]);
  const [activeTab, setActiveTab] = useState<string | null>("bio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelect = (selection: string) => {
    const existingTab = openTabs.find((tab) => tab.id === selection);
    if (!existingTab) {
      const newTab = { id: selection, title: selection };
      setOpenTabs((prevTabs) => [...prevTabs, newTab]);
    }
    setActiveTab(selection);
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleTabClose = (tabId: string) => {
    setOpenTabs((prevTabs) => {
      const tabIndex = prevTabs.findIndex((tab) => tab.id === tabId);
      const newTabs = prevTabs.filter((tab) => tab.id !== tabId);

      if (activeTab === tabId) {
        if (newTabs.length === 0) {
          setActiveTab(null);
        } else {
          const newActiveIndex = Math.max(0, tabIndex - 1);
          setActiveTab(newTabs[newActiveIndex].id);
        }
      }
      return newTabs;
    });
  };

  const activeContent = activeTab
    ? contents.contents.find(
        (c) => c.name.toLowerCase() === activeTab.toLowerCase()
      )?.content || ""
    : "";

  return (
    <div className="flex pt-16 md:pt-12 w-full h-screen overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-full bg-gray-900 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:inset-y-auto md:left-auto md:z-auto md:w-64`}
      >
        <div className="pt-16 md:pt-0 h-full">
          <AboutSidebar onSelect={handleSelect} />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 flex flex-col min-w-0">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden p-2 text-gray-300 flex items-center border-b border-gray-700"
        >
          <i className="ri-menu-line text-xl"></i>
          <span className="ml-2">personal-info</span>
        </button>
        <TabHolder
          tabs={openTabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onTabClose={handleTabClose}
        />
        <div className="flex-1 overflow-auto">
          <EditorDisplay code={activeContent} />
        </div>
      </main>
    </div>
  );
};

export default AboutMePage;
