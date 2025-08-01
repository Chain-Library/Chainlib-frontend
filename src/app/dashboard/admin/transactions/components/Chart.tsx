export interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ChartProps {
  data: ChartData[];
  size?: number;
}

const Chart: React.FC<ChartProps> = ({ data, size = 200 }) => {
  const radius = (size - 40) / 2; // 40 = strokeWidth
  const strokeWidth = 40;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Centered background ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#eaf4fb"
          strokeWidth={strokeWidth}
        />

        {/* Colored segments */}
        {data.map((item, index) => {
          const percent = item.value / 100;
          const strokeLength = percent * circumference;
          const strokeGap = circumference - strokeLength;

          const dashArray = `${strokeLength} ${strokeGap}`;
          const dashOffset = -cumulativePercent * circumference;

          cumulativePercent += percent;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </svg>

      {/* Donut center */}
      <div
        className="absolute"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#eaf4fb",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Chart;

