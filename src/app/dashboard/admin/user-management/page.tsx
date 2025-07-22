"use-client";
import { Header } from "@/components/dashboard/header";

export default function UserManagment() {
  return (
    <>
      <Header title="User Managements" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-600 mt-2">
            Welcome to user management section of the admin dashboard! Here, you can manage all aspects of user accounts, including registration, profiles, and permissions. This space is designed to help you maintain a secure and organized user base, ensuring that users have the appropriate access and capabilities within your platform.
          </p>
        </div>
      </div>
    </>
  );
}
