import React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const AnalyticsHeader = () => {
  return (
    <div className="flex lg:hidden items-center gap-4 mb-6">
      <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
    </div>
  );
};

export default AnalyticsHeader;
