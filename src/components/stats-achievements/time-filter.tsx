"use client"

interface TimeFilterProps {
  selectedPeriod: string
  onPeriodChange: (period: string) => void
}

export function TimeFilter({ selectedPeriod, onPeriodChange }: TimeFilterProps) {
  const periods = ["This Week", "This Month", "This Year", "All Time"]

  return (
    <div className="flex flex-wrap gap-1 lg:gap-2">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => onPeriodChange(period)}
          className={`px-2 lg:px-3 py-1.5 text-xs lg:text-sm rounded-[4px] transition-all duration-200 ${
            selectedPeriod === period
              ? "bg-[#F6F6F6] text-[#454545] "
              : "text-[#888888] hover:bg-[#f6f6f6] "
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  )
}
