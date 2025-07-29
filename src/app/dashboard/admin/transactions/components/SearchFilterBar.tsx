import TimeFilter  from "./TimeFilter";

interface SearchFilterBarProps {
    timeFilter: string;
    onTimeFilterChange: (filter: string) => void;
    searchPlaceholder?: string;
  }
  
  const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
    timeFilter,
    onTimeFilterChange
  }) => (
    <div className="p-4 border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-4">
        <TimeFilter activeFilter={timeFilter} onFilterChange={onTimeFilterChange} />
        <div className="text-sm text-gray-500">Filter by</div>
      </div>
    </div>
  );
export default SearchFilterBar  