interface Stat {
    label: string
    value: string
    unit?: string
    color: string
  }
  
  interface StatsGridProps {
    stats: Stat[]
  }
  
  export function StatsGrid({ stats }: StatsGridProps) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-[0.5px] p-2 lg:p-4 rounded-xl">
        {stats.map((stat, index) => (
          <div key={index} className="text-left p-3 rounded-lg hover:bg-[#f8f9ff] transition-all duration-200 border-[0.5px]">
            <div className=" text-xs lg:text-sm text-[#5D5D5D] mb-2">{stat.label}</div>
            <div className="flex items-baseline justify-start gap-1">
              <span className="text-sm lg:text-lg font-bold transition-all duration-300" style={{ color: stat.color }}>
                {stat.value}
              </span>
              {stat.unit && <span className=" text-xs lg:text-sm text-blue-500">{stat.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    )
  }
  