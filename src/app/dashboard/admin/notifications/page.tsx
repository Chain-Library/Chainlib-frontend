"use-client";
import { Header } from "@/components/dashboard/header";


export default function Notifications() {

  return (
    <>
      <Header title="Notification" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Notification</h1>
          <p className="text-gray-600 mt-2">
            Welcome to the Notification section of the admin dashboard! Here, you can manage all aspects of notifications on your platform, including user alerts, system messages, and other important communications. This space is designed to help you keep users informed and engaged with timely updates and announcements.
          </p>
        </div>
      </div>
    </>
  );
}
