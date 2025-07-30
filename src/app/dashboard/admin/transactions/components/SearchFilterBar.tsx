import TimeFilter from "./TimeFilter";

interface SearchFilterBarProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  searchPlaceholder?: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  timeFilter,
  onTimeFilterChange,
}) => (
  <div className="p-4 border-b border-gray-200">
  <div className="flex flex-wrap items-center justify-between gap-4">
    {/* Time Filter on the left */}
    <TimeFilter
      activeFilter={timeFilter}
      onFilterChange={onTimeFilterChange}
    />

    {/* Button on the right */}
    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 bg-gray-200 rounded-lg">
      Filter by
    </button>
  </div>
</div>

);
export default SearchFilterBar;
