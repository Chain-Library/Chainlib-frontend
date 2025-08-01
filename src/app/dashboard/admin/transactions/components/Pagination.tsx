import { ChevronDown } from "lucide-react";

interface PaginationProps {
    currentItems: number;
    totalItems: number;
    itemsPerPage: number;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentItems, totalItems}) => (
    <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="text-sm text-gray-500">
        Showing 1 to {currentItems} of {totalItems}
      </div>
      <div className="flex items-center gap-2 justify-end">
        <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <ChevronDown className="w-4 h-4 rotate-90" />
        </button>
      </div>
    </div>
  );

export default Pagination