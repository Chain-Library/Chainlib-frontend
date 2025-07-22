"use-client";
import { Header } from "@/components/dashboard/header";

export default function Analytics() {
  return (
    <>
      <Header title="Analytics" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
          <p className="text-gray-600 mt-2">
            Welcome to Analytics
          </p>
        </div>
      </div>
    </>
  );
}
