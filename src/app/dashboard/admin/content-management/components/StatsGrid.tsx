"use client";

import { Card, CardContent } from "@/components/ui/card";

interface StatsGridProps {
  stats: {
    totalBooks: number;
    approved: number;
    pendingApproval: number;
    rejected: number;
    reported: number;
    unpublished: number;
    nftEditionValidated: number;
    approvedStats: number;
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  const statItems = [
    { label: "Total Books", value: stats.totalBooks },
    { label: "Approved", value: stats.approved },
    { label: "Pending Approval", value: stats.pendingApproval },
    { label: "Rejected", value: stats.rejected },
    { label: "Reported", value: stats.reported },
    { label: "Unpublished", value: stats.unpublished },
    { label: "NFT Edition Validated", value: stats.nftEditionValidated },
    { label: "Approved", value: stats.approvedStats },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E7E7E7] rounded-lg p-4 gap-4">
      {statItems.map((item, index) => (
        <Card key={index} className="border border-[#E9F7FF] rounded-lg">
          <CardContent className="p-3 sm:p-4">
            <div className="text-xs sm:text-sm text-[#888888] mb-2">
              {item.label}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-[#888888]">
              {item.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
