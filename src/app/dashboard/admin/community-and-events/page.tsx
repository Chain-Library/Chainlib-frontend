"use-client";
import { Header } from "@/components/dashboard/header";

export default function CommunityAndEvents() {
  return (
    <>
      <Header title="Community and Events" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Community and events</h1>
          <p className="text-gray-600 mt-2">
            Welcome to Community and Events section of the admin dashboard! Here, you can manage community interactions, events, and engagement activities. This space is designed to help you foster a vibrant community around your platform, ensuring that users have a place to connect, share, and participate in events.
          </p>
        </div>
      </div>
    </>
  );
}
