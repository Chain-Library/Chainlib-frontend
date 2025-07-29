"use client"
const Header = () => (
  <header className="flex flex-wrap justify-between items-center mb-6 gap-4">
    <div className="flex items-center space-x-4">
      <button className="text-sm font-semibold text-blue-600 border-b-2 border-blue-600 pb-2">
        This Week
      </button>
      <button className="text-sm text-gray-500 pb-2">This Month</button>
      <button className="text-sm text-gray-500 pb-2">This Year</button>
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        className="border rounded-md px-3 py-1.5 text-sm w-32"
      />
      <span className="text-gray-500">to</span>
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        className="border rounded-md px-3 py-1.5 text-sm w-32"
      />
      <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600">
        Apply
      </button>
      <button className="border rounded-md px-3 py-1.5 text-sm text-gray-600">
        Filter By
      </button>
    </div>
  </header>
);
export default Header;
