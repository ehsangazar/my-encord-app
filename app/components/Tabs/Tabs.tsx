export const Tabs = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-gray-700 border-b-2">
        {Array.isArray(children) &&
          children.map((childNode, childIndex) => {
            if (childNode?.type?.name === "TabList") {
              return (
                <TabList key={`tablist-${childIndex}`}>
                  {childNode.props.children.map((tabNode, tabIndex) => {
                    return (
                      <Tab
                        key={`tab-${tabIndex}`}
                        icon={tabNode.props.icon}
                        active={activeTab === tabIndex}
                        onClick={() => setActiveTab(tabIndex)}
                      >
                        {tabNode.props.children}
                      </Tab>
                    );
                  })}
                </TabList>
              );
            }
          })}
      </ul>
      <div>
        {Array.isArray(children) &&
          children.map((childNode, childIndex) => {
            if (childNode?.type?.name === "TabPanels") {
              return (
                <TabPanels key={`tabpanels-${childIndex}`}>
                  {childNode.props.children.map(
                    (tabPanelNode, tabPanelIndex) => {
                      if (activeTab === tabPanelIndex) {
                        return (
                          <TabPanel key={`tabpanel-${tabPanelIndex}`}>
                            {tabPanelNode.props.children}
                          </TabPanel>
                        );
                      }
                    }
                  )}
                </TabPanels>
              );
            }
          })}
      </div>
    </div>
  );
};

export const TabList = ({ children }) => {
  return <>{children}</>;
};

interface TabProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const Tab = ({ children, icon, active, onClick }: TabProps) => {
  return (
    <li>
      <button
        className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group  ${
          active
            ? "active text-blue-500 border-blue-500"
            : "hover:text-blue-500 hover:border-blue-500"
        }`}
        onClick={onClick && onClick}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    </li>
  );
};

export const TabPanels = ({ children }) => {
  return <div>{children}</div>;
};

export const TabPanel = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
