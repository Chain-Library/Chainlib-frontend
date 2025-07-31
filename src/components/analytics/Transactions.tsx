"use client"
import Icon from "./Icon";

const Transactions = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700">Transactions</h2>
      <button className="flex items-center text-sm text-gray-500 border rounded-md px-3 py-1">
        Filter <Icon name="chevron-down" className="w-4 h-4 ml-1" />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border-r pr-6">
        <p className="text-sm text-gray-500">Total Transactions</p>
        <p className="text-3xl font-bold text-blue-600">109,837.06</p>
        <div className="text-sm text-green-500 flex items-center mt-1">
          <span>20%</span>
          <Icon name="arrow-up" className="h-4 w-4 ml-1" />
        </div>
      </div>
      <div className="border-r pr-6">
        <p className="text-sm text-gray-500">Commission Eared</p>
        <p className="text-xl font-semibold text-gray-800">
          21,070.93 <span className="text-sm text-gray-400">STR</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">Pending Payout</p>
        <p className="text-xl font-semibold text-gray-800">
          12,070.93 <span className="text-sm text-gray-400">STR</span>
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Payout Sent</p>
        <p className="text-xl font-semibold text-gray-800">
          51,070.93 <span className="text-sm text-gray-400">STR</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">Payout Sent</p>
        <p className="text-xl font-semibold text-gray-800">
          21,070.93 <span className="text-sm text-gray-400">STR</span>
        </p>
      </div>
    </div>
  </div>
);
export default Transactions;
