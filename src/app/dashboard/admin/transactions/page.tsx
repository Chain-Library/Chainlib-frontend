"use-client";
import { Header } from "@/components/dashboard/header";

export default function Transactions() {
  return (
    <>
      <Header title="Transactions" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-600 mt-2">
            Welcome to Transactions section of the admin dashboard! Here, you can manage and monitor all transactions on your platform. This space is designed to help you ensure the integrity and security of financial activities, providing insights into transaction history, status, and details. You can also handle any issues related to transactions efficiently.
          </p>
        </div>
      </div>
    </>
  );
}
