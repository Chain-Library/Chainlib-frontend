"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TimeFilterProps {
  timeFilter: string;
  setTimeFilter: (filter: string) => void;
}

export function TimeFilter({ timeFilter, setTimeFilter }: TimeFilterProps) {
  const timeFilters = ["This Week", "This Month", "This Year", "All Time"];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-3">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {timeFilters.map((filter) => (
          <Button
            key={filter}
            size="sm"
            variant="ghost"
            onClick={() => setTimeFilter(filter)}
            className={`text-xs sm:text-sm rounded-md px-1 sm:px-2 lg:px-4 py-1 sm:py-2 ${
              timeFilter === filter ? "bg-[#F6F6F6] text-black" : ""
            }`}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            placeholder="dd/mm/yyyy"
            className="w-24 sm:w-32 text-xs sm:text-sm text-[#B0B0B0]"
          />
          <span className="text-xs sm:text-sm text-[#888888]">to</span>
          <Input
            placeholder="dd/mm/yyyy"
            className="w-24 sm:w-32 text-xs sm:text-sm text-[#B0B0B0]"
          />
        </div>
        <Button
          size="sm"
          variant="outline"
          className="rounded-md bg-[#E7E7E7] text-[#888888] text-xs sm:text-sm w-full sm:w-auto"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
