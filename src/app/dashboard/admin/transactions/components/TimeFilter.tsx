interface TimeFilterProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    showDateRange?: boolean;
    showApplyButton?: boolean;
  }
  
  const TimeFilter: React.FC<TimeFilterProps> = ({ 
    activeFilter, 
    onFilterChange, 
    showDateRange = true,
    showApplyButton = true 
  }) => {
    const filters = ['This Week', 'This Month', 'This Year', 'All Time'];
  
    return (
      <div className="flex gap-4 items-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-2 py-2 text-sm rounded whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-gray-200 text-gray-700'
                : 'text-gray-500 hover:text-gray-600'
            }`}
          >
            {filter}
          </button>
        ))}
        
        {showDateRange && (
          <div className="flex gap-2 ml-auto">
            <input
              type="date"
              className="px-2 py-1 border border-gray-100 text-gray-400 rounded text-sm"
              placeholder="dd/mm/yyyy"
            />
            <span className="flex items-center text-gray-500">to</span>
            <input
              type="date"
              className="px-2 py-1 border border-gray-100 text-gray-400 rounded text-sm"
              placeholder="dd/mm/yyyy"
            />
            {showApplyButton && (
              <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded text-sm whitespace-nowrap">
                Apply
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

export default TimeFilter;