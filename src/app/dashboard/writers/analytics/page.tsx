import AnalyticsHeader from "@/components/analytics/analytics-header";
import AnalyticsStatsGrid from "@/components/analytics/analytics-stats-grid";
import AnalyticsTabs from "@/components/analytics/analytics-tabs";
import { Header } from "@/components/dashboard/header";
import { useState } from "react";

export default function AnalyticsDashboard() {


  return (

    <>
     <Header title="Analytics" />
      <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with back button */}
        <AnalyticsHeader />
        {/* Top Stats Grid */}
        <AnalyticsStatsGrid />

        <div className="flex flex-col bg-white rounded-lg border border-gray-200/40 p-6 gap-6">
          {/* Book Performance Stats */}
          <div className="bg-white p-3">
            <h2 className="text-xl px-4 font-bold text-gray-400 mb-4">
              Book Performance Stats
            </h2>
            <AnalyticsTabs />
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}
