import { Search, Filter } from "lucide-react";

export interface Tab {
  name: string;
  badge?: string;
  active?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tab: string) => void;
  // searchPlaceholder?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabClick }) => (
  <div className="flex items-center justify-between border-b border-gray-200">
    <div className="flex overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => onTabClick(tab.name)}
          className={`px-4 md:px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap flex-shrink-0 ${
            activeTab === tab.name
              ? 'text-white bg-[#155dfc]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.name}
          {tab.badge && (
            <span className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
    
    <div className="flex items-center gap-4 ml-4">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a Reader"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-64"
        />
      </div>
      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
        Sort <Filter className="w-4 h-4 text-gray-400 fill-current" />
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
        Filter <Filter className="w-4 h-4 text-gray-400 fill-current"/>
      </button>
    </div>
  </div>
);

export default TabNavigation;

