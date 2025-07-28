import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Star } from "lucide-react";

const genreData = [
  { name: "Fiction", value: 40, color: "#2F80ED" },
  { name: "Fantasy", value: 10, color: "#27AE60" },
  { name: "Science", value: 11, color: "#EB5757" },
  { name: "Romance", value: 12, color: "#9B51E0" },
  { name: "Mystery", value: 10, color: "#F2C94C" },
];

const writerStats = [
  { label: "Verified Writers", value: 3566 },
  { label: "Unverified Writers", value: 546 },
  { label: "Active Writers", value: 27 },
  { label: "Suspended", value: 459 },
  { label: "Regular Book", value: 27 },
  { label: "NFT Edition", value: 459 },
  { label: "Total Published", value: 27 },
];

const bookStats = [
  { label: "Read", value: 192, change: "-22%" },
  { label: "Read Compl Rate", value: "75%", change: "+8%" },
  { label: "Sale", value: 62, change: "+9%" },
  { label: "Total Earning", value: "3150.00" },
  { label: "Average Rating", value: 3.5 },
];

const topBooks = [
  "The Act",
  "Live at Night",
  "Prince of Peace",
  "Late Every Night",
  "The 91 Law of Power",
];

export default function WritersAnalytics() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Writers Analytics</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {["This Week", "This Month", "This Year", "All Time"].map((label) => (
          <button
            key={label}
            className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64 w-full bg-white rounded-lg shadow-md border">
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
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border p-5 grid grid-cols-2 gap-4">
          {writerStats.map((stat, i) => (
            <div
              key={i}
              className=" p-4 rounded-lg border text-sm text-gray-600"
            >
              <p>{stat.label}</p>
              <p className="text-lg font-semibold text-blue-600">
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div>
          <h3 className="font-semibold text-sm mb-2">
            Stats for <span className="bg-gray-100 rounded px-2">The Act</span>
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {bookStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border bg-white flex items-center justify-between text-sm"
              >
                <div>
                  <p className="text-gray-500">{stat.label}</p>
                  <p className="text-lg font-semibold">
                    {stat.label === "Total Earning" ? (
                      `$${stat.value}`
                    ) : stat.label === "Average Rating" ? (
                      <span className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-400" />{" "}
                        {stat.value}
                      </span>
                    ) : (
                      stat.value
                    )}
                  </p>
                </div>
                {stat.change && (
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      stat.change.startsWith("+")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm">Top Performing Books</h3>
            <button className="text-xs text-blue-500 hover:underline">
              View All
            </button>
          </div>
          <ul className="space-y-2">
            {topBooks.map((book, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-gray-600">{i + 1}.</span>{" "}
                  {book}
                </span>
                <button className="text-sm text-blue-500 hover:underline">
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
