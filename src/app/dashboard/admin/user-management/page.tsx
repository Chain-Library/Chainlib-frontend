"use client"
import { Header } from "@/components/dashboard/header"
import { useState } from "react"

// Dummy sample data (replace with your data source)
const stats = [
  { label: "Writers", value: 257, icon: "👨‍💻" },
  { label: "Verified Writers", value: 83, icon: "✅" },
  { label: "Readers", value: 1093, icon: "📖" },
  { label: "Subscribed Readers", value: 204, icon: "🔄" },
  { label: "Total Users", value: 257, icon: "👥" },
]

const readers = [
  {
    name: "Jane Doe",
    wallet: "0xABC...789",
    joined: "27 May,2025",
    purchased: 13,
    rank: "Bookworm",
  },
  {
    name: "Ole Paul",
    wallet: "0xABC...789",
    joined: "7 June,2025",
    purchased: 3,
    rank: "Enthusiast",
  },
  {
    name: "Aminu Sani",
    wallet: "0xABC...789",
    joined: "27 May,2025",
    purchased: 9,
    rank: "Scholar",
  },
  {
    name: "Faith Adamu",
    wallet: "0xABC...789",
    joined: "7 June,2025",
    purchased: 11,
    rank: "Connoisseur",
  },
  {
    name: "Wood Word",
    wallet: "0xABC...789",
    joined: "27 May,2025",
    purchased: 4,
    rank: "Scholar",
  },
]

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState("Readers")
  const [search, setSearch] = useState("")

  return (
    <>
      <Header title="User Management" />
      <div className="p-8">
        {/* ==== STATS GRID ==== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.slice(0, 4).map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-lg shadow border flex items-center justify-between"
            >
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
          ))}
          {/* Show Total Users in a single full-width box */}
          <div className="bg-white p-6 rounded-lg shadow border flex items-center col-span-2 md:col-span-1">
            <div>
              <div className="text-2xl font-bold">{stats[4].value}</div>
              <div className="text-sm text-gray-600">{stats[4].label}</div>
            </div>
            <div className="ml-auto text-2xl">{stats[4].icon}</div>
          </div>
        </div>

        {/* ==== USER TABLE CARD ==== */}
        <div className="bg-white border rounded-lg shadow">
          {/* Smaller Top Bar: Tabs + Search + Sort/Filter */}
          <div
            className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2"
            style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          >
            {/* Tabs */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setActiveTab("Readers")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "Readers"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-transparent text-gray-700"
                }`}
                style={{ minWidth: 80 }}
              >
                Readers
              </button>
              <button
                onClick={() => setActiveTab("Writers")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "Writers"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-transparent text-gray-700"
                }`}
                style={{ minWidth: 80 }}
              >
                Writers
              </button>
            </div>

            {/* Search, Sort, Filter */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  className="pl-8 pr-2 py-1.5 rounded-md border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder={`Search for a ${activeTab === "Readers" ? "Reader" : "Writer"}`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: 200, height: 32 }}
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="8" r="6" />
                    <line x1="13" y1="13" x2="15" y2="15" />
                  </svg>
                </span>
              </div>
              {/* Sort */}
              <button className="flex items-center space-x-0.5 text-gray-500 focus:outline-none text-sm px-1 py-1 hover:bg-gray-100 rounded">
                <span>Sort</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h8M6 9h4M7 12h2" />
                </svg>
              </button>
              {/* Filter */}
              <button className="flex items-center space-x-0.5 text-gray-500 focus:outline-none text-sm px-1 py-1 hover:bg-gray-100 rounded">
                <span>Filter</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h8M6 9h4M7 12h2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto px-6 pb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2 text-left min-w-[140px]">Reader Name</th>
                  <th className="py-2 text-left">Wallet Address</th>
                  <th className="py-2 text-left">Joined Date</th>
                  <th className="py-2 text-left">Books Purchased</th>
                  <th className="py-2 text-left">Reading Rank</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {readers
                  .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
                  .map((reader) => (
                    <tr key={reader.name} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="py-3">{reader.name}</td>
                      <td className="py-3">{reader.wallet}</td>
                      <td className="py-3">{reader.joined}</td>
                      <td className="py-3">{reader.purchased}</td>
                      <td className="py-3">{reader.rank}</td>
                      <td className="py-3">
                        <a href="#" className="text-blue-600 font-medium hover:underline">
                          View Profile
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="py-3 text-center text-sm text-gray-500">Showing 1 to 5 of 12</div>
          </div>
        </div>
      </div>
    </>
  )
}
