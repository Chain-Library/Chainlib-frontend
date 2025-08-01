import React from 'react';
import type { ChartData } from './Chart'; 

interface ChartLegendProps {
    data: ChartData[];
  }
  
  const ChartLegend: React.FC<ChartLegendProps> = ({ data }) => (
    <div className="space-y-2 mx-14">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div 
            className="w-2 h-2 rounded-full" 
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="text-sm text-gray-600">
            {item.value}% {item.label}
          </span>
        </div>
      ))}
    </div>
  );

export default ChartLegend;