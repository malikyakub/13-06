import React from 'react';
import Tab from './Tab';

interface TabData {
  id: string;
  title: string;
}

interface TabHolderProps {
  tabs: TabData[];
  activeTab: string | null;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

const TabHolder: React.FC<TabHolderProps> = ({ tabs, activeTab, onTabClick, onTabClose }) => {
  return (
    <div className="flex border-b border-gray-700">
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          title={tab.title}
          isActive={tab.id === activeTab}
          onClick={() => onTabClick(tab.id)}
          onClose={() => onTabClose(tab.id)}
        />
      ))}
    </div>
  );
};

export default TabHolder;
