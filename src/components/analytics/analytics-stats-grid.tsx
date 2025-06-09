import React from "react";

const AnalyticsStatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-lg border border-gray-200/40 p-6 gap-6">
      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Total Read</div>
        <div className="text-lg font-semibold text-blue-600">192</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Subscribers</div>
        <div className="text-lg font-semibold text-blue-600">70</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Followers</div>
        <div className="text-lg font-semibold text-blue-600">2071</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Total Purchase</div>
        <div className="text-lg font-semibold text-blue-600">25</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">NFT Minted</div>
        <div className="text-lg font-semibold text-blue-600">18</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Read Completion Rate</div>
        <div className="text-lg font-semibold text-blue-600">70%</div>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-200/40">
        <div className="text-sm text-gray-600 mb-2">Average Rating</div>
        <div className="text-lg font-semibold text-blue-600">4.0</div>
      </div>
    </div>
  );
};

export default AnalyticsStatsGrid;
