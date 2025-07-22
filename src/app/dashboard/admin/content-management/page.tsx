"use-client";
import { Header } from "@/components/dashboard/header";

export default function ContentManagement() {
  return (
    <>
      <Header title="Content Management" />
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Content management</h1>
          <p className="text-gray-600 mt-2">
            Welcome to the Content Management section of the admin dashboard! Here, you can manage all aspects of content on your platform, including articles, blogs, and other media. This space is designed to help you maintain a rich and engaging content library for your users.
          </p>
        </div>
      </div>
    </>
  );
}
