"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", Readers: 35, Writers: 22 },
  { name: "Tue", Readers: 45, Writers: 30 },
  { name: "Wed", Readers: 48, Writers: 33 },
  { name: "Thu", Readers: 40, Writers: 28 },
  { name: "Fri", Readers: 35, Writers: 55 },
  { name: "Sat", Readers: 60, Writers: 40 },
  { name: "Sun", Readers: 58, Writers: 38 },
];

const SignupChart = () => {
  return (
    <div className="w-full h-[350px] bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Readers"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="Writers"
            stroke="#0ea5e9"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SignupChart;
