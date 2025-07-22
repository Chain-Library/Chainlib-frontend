"use client";

import { Header } from "@/components/dashboard/header";
import { TimeFilter } from "@/components/stats-achievements/time-filter";
import { StatsGrid } from "@/components/stats-achievements/stats-grid";
import { BadgeSection } from "@/components/stats-achievements/badge-section";
import { GoalsSection } from "@/components/stats-achievements/goals-section";
import { AchievementsSection } from "@/components/stats-achievements/achievements-section";
import { useState } from "react";

// Mock data for different time periods
const timeData = {
  "This Week": {
    hours: 16,
    minutes: 37,
    stats: [
      { label: "Books Completed", value: "2", color: "#096CFF" },
      {
        label: "Average Session",
        value: "45",
        unit: "Minutes",
        color: "#096CFF",
      },
      { label: "Most Read Genre", value: "Fiction", color: "#096CFF" },
      { label: "Most Read Author", value: "J.K. Rowling", color: "#096CFF" },
      { label: "Longest Read", value: "4", unit: "Hours", color: "#096CFF" },
      { label: "Sessions", value: "12", color: "#096CFF" },
      { label: "Abandoned", value: "1", color: "#096CFF" },
    ],
  },
  "This Month": {
    hours: 68,
    minutes: 24,
    stats: [
      { label: "Books Completed", value: "8", color: "#096CFF" },
      {
        label: "Average Session",
        value: "52",
        unit: "Minutes",
        color: "#096CFF",
      },
      { label: "Most Read Genre", value: "Mystery", color: "#096CFF" },
      { label: "Most Read Author", value: "Agatha Christie", color: "#096CFF" },
      { label: "Longest Read", value: "6", unit: "Hours", color: "#096CFF" },
      { label: "Sessions", value: "45", color: "#096CFF" },
      { label: "Abandoned", value: "3", color: "#096CFF" },
    ],
  },
  "This Year": {
    hours: 324,
    minutes: 18,
    stats: [
      { label: "Books Completed", value: "42", color: "#096CFF" },
      {
        label: "Average Session",
        value: "48",
        unit: "Minutes",
        color: "#096CFF",
      },
      { label: "Most Read Genre", value: "Sci-Fi", color: "#096CFF" },
      { label: "Most Read Author", value: "Isaac Asimov", color: "#096CFF" },
      { label: "Longest Read", value: "8", unit: "Hours", color: "#096CFF" },
      { label: "Sessions", value: "186", color: "#096CFF" },
      { label: "Abandoned", value: "12", color: "#096CFF" },
    ],
  },
  "All Time": {
    hours: 1247,
    minutes: 52,
    stats: [
      { label: "Books Completed", value: "156", color: "#096CFF" },
      {
        label: "Average Session",
        value: "51",
        unit: "Minutes",
        color: "#096CFF",
      },
      { label: "Most Read Genre", value: "Fantasy", color: "#096CFF" },
      {
        label: "Most Read Author",
        value: "Brandon Sanderson",
        color: "#096CFF",
      },
      { label: "Longest Read", value: "12", unit: "Hours", color: "#096CFF" },
      { label: "Sessions", value: "743", color: "#096CFF" },
      { label: "Abandoned", value: "28", color: "#096CFF" },
    ],
  },
};

export default function StatsAndAchievementsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const currentData = timeData[selectedPeriod as keyof typeof timeData];
 

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header title="Stats & Achievements"  />

      <div className="p-4 lg:p-6 space-y-6">
        {/* Total Hours Read Section */}
        <div className="bg-white rounded-lg border border-[#e7e7e7] px-2 py-4 lg:p-6">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-400 mb-4">
              Total Hours Read
            </h2>
            <TimeFilter
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </div>

          {/* Large Time Display */}
          <div className="bg-[#096CFF0A] rounded-lg p-6 mb-6 border-[0.5px] border-[#4BB1FF]">
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-center items-center gap-2">
                <div className="text-2xl lg:text-4xl font-bold text-blue-600 transition-all duration-300">
                  {currentData.hours}
                </div>
                <div className="text-sm text-blue-500 font-light mt-1 bg-[#096CFF1A] px-3 py-1 rounded-3xl">
                  Hours
                </div>
              </div>
              <span className="text-[#D6ECFF] text-3xl">:</span>
              <div className="text-center flex items-center gap-2">
                <div className="text-2xl lg:text-4xl font-bold text-blue-600 transition-all duration-300">
                  {currentData.minutes}
                </div>
                <div className="text-sm font-light text-blue-500 mt-1 bg-[#096CFF1A] px-3 py-1 rounded-3xl">
                  Minutes
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <StatsGrid stats={currentData.stats} />
        </div>
        <div className="rounded-xl border border-[#e7e7e7] bg-white space-y-4">
          {/* Badge Section */}
          <BadgeSection />

          {/* Goals Section */}
          <GoalsSection />

          {/* Achievements Section */}
          <AchievementsSection />
        </div>
      </div>
    </div>
  );
}
