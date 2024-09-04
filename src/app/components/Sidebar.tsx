interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'onboarding', label: 'Onboarding to One-click-CICD' },
    // Add more tabs here
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`block w-full text-left px-4 py-2 ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
