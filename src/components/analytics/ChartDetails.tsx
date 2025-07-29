"use client";
import React from "react";

const stats = [
  { label: "Total Writers", value: "3,566" },
  { label: "Total Readers", value: "105,094" },
  { label: "Active Writers", value: "27" },
  { label: "Active Readers", value: "459" },
  { label: "Total Books", value: "10,903" },
  { label: "Total Revenue", value: "$370.00" },
];

const ChartDetails = () => {
  return (
    <div className=" md:h-[350px] mt-4 md:mt-0 md:ml-2 bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-md p-3 text-center hover:shadow-sm transition"
          >
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className="text-lg font-semibold text-blue-500">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartDetails;
