'use client';

import React, { useState } from 'react';

interface TabProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

interface TabsProps {
  children: React.ReactNode;
  defaultTab?: string;
}

// Individual Tab Component
export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

// Tabs Container Component
export const Tabs: React.FC<TabsProps> = ({ children, defaultTab }) => {
  // Convert children to array to work with them
  const tabChildren = React.Children.toArray(children);
  
  // Get tab IDs from children
  const tabIds = tabChildren.map((child) => {
    if (React.isValidElement(child)) {
      return child.props.id;
    }
    return null;
  }).filter(Boolean);
  
  // Set active tab state
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabIds[0] || '');

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabChildren.map((child) => {
          if (React.isValidElement(child)) {
            const { title, id } = child.props;
            return (
              <button
                key={id}
                className={`tab-button ${activeTab === id ? 'active' : ''}`}
                onClick={() => handleTabClick(id)}
              >
                {title}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="tab-content">
        {tabChildren.map((child) => {
          if (React.isValidElement(child)) {
            return (
              <div
                key={child.props.id}
                className={`tab-pane ${activeTab === child.props.id ? 'active' : ''}`}
              >
                {activeTab === child.props.id && child}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

// export default TabSystem;
