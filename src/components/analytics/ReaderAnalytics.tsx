import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const genreData = [
  { name: "Fiction", value: 40, color: "#2F80ED" },
  { name: "Fantasy", value: 10, color: "#27AE60" },
  { name: "Science", value: 11, color: "#EB5757" },
  { name: "Romance", value: 12, color: "#9B51E0" },
  { name: "Mystery", value: 10, color: "#F2C94C" },
];

const stats = [
  { label: "Total Readers", value: 3566 },
  { label: "Active Subscription", value: 2210 },
  { label: "Expired Subscription", value: 597 },
  { label: "Active Readers", value: 27 },
  { label: "Suspended", value: 459 },
];

export default function ReadersAnalytics() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Readers Analytics</h2>

      <div className="flex gap-4 mb-6 flex-wrap">
        {["This Week", "This Month", "This Year", "All Time"].map((label) => (
          <button
            key={label}
            className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition"
          >
            {label}
          </button>
        ))}
        <div className="flex items-center gap-2">
          <input type="date" className="px-2 py-1 border rounded-md text-sm" />
          <span>to</span>
          <input type="date" className="px-2 py-1 border rounded-md text-sm" />
          <button className="bg-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-400">
            Apply
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="w-full h-64 bg-white rounded-lg shadow-md border">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
              >
                {genreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-lg border p-5">
          {stats.map((stat, idx) => (
            <div key={idx} className=" p-4 rounded-lg border">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-xl font-semibold text-blue-600">
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
