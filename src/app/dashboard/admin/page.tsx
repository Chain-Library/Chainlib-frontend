"use-client";
import { Header } from "@/components/dashboard/header";

export default function DashboardHome() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome to your personalized admin space!
          </p>
        </div>
      </div>
    </>
  );
}
