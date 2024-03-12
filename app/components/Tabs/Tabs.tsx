import getArray from "~/utils/getArrayOfChildren";

export const Tabs = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-gray-700 border-b-2">
        {getArray(children).map((childNode, childIndex) => {
          if (childNode?.type?.displayName === "TabList") {
            return (
              <TabList key={`tablist-${childIndex}`}>
                {getArray(childNode.props.children).map((tabNode, tabIndex) => {
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
        {getArray(children).map((childNode, childIndex) => {
          if (childNode?.type?.displayName === "TabPanels") {
            return (
              <TabPanels key={`tabpanels-${childIndex}`}>
                {getArray(childNode.props.children).map(
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
Tabs.displayName = "Tabs";

export const TabList = ({ children }) => {
  return <>{children}</>;
};
TabList.displayName = "TabList";

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
Tab.displayName = "Tab";

export const TabPanels = ({ children }) => {
  return <div>{children}</div>;
};
TabPanels.displayName = "TabPanels";

export const TabPanel = ({ children }) => {
  return <div className="p-0 sm:p-4">{children}</div>;
};
TabPanel.displayName = "TabPanel";
