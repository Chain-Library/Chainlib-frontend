"use client";

import { useState } from "react";
import { ArrowLeft, BadgeCheck, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import Image from "next/image";

interface FollowingUser {
  id: string;
  name: string;
  username: string;
  isVerified: boolean;
  avatar?: string;
}

export default function FollowingPage() {
  const router = useRouter();
  const { openMobileMenu } = useMobileMenu();
  const [activeTab, setActiveTab] = useState<
    "total" | "verified" | "unverified"
  >("total");

  const followingUsers: FollowingUser[] = Array.from({ length: 9 }, (_, i) => ({
    id: `user-${i + 1}`,
    name: "Darrin Collins",
    username: "@darrin_collins",
    isVerified: i < 7, // First 7 are verified
    avatar: "/reader-image.png?height=40&width=40",
  }));

  const totalCount = followingUsers.length;
  const verifiedCount = followingUsers.filter((user) => user.isVerified).length;
  const unverifiedCount = totalCount - verifiedCount;

  const filteredUsers = followingUsers.filter((user) => {
    if (activeTab === "verified") return user.isVerified;
    if (activeTab === "unverified") return !user.isVerified;
    return true;
  });

  const handleUnfollow = (userId: string) => {
    console.log("Unfollow user:", userId);
  };

  return (
    <div className="bg-white min-h-screen m-4 md:m-6">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-50 p-4 flex items-center gap-3">
        <button onClick={openMobileMenu} className="p-1">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Following</h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-start gap-3 mb-10">
          <h1 className="text-xl font-semibold text-gray-800">Following</h1>
        </div>

        {/* Stats Tabs */}
        <div className="flex gap-6 mb-6 ">
          <button
            onClick={() => setActiveTab("total")}
            className={`px-3 py-1 text-sm font-medium border-[0.5px] rounded-2xl transition-colors ${
              activeTab === "total"
                ? "text-gray-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Total <span className="ml-1 font-bold">{totalCount}</span>
          </button>
          <button
            onClick={() => setActiveTab("verified")}
            className={`px-3 py-1 text-sm font-medium border-[0.5px] rounded-2xl  transition-colors ${
              activeTab === "verified"
                ? "text-gray-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Verified <span className="ml-1 font-bold">{verifiedCount}</span>
          </button>
          <button
            onClick={() => setActiveTab("unverified")}
            className={`px-3 py-1 text-sm font-medium border-[0.5px] rounded-2xl  transition-colors ${
              activeTab === "unverified"
                ? "text-gray-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Unverified <span className="ml-1 font-bold">{unverifiedCount}</span>
          </button>
        </div>

        {/* Following List */}
        <div className="space-y-4 ">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50  transition-colors border-b-[0.5px] border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src={user.avatar || "/reader-image.png"}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{user.name}</span>
                  {user.isVerified && (
                    <BadgeCheck size={16} className="text-blue-500" />
                  )}
                </div>
              </div>
              <button
                onClick={() => handleUnfollow(user.id)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100  rounded-2xl transition-colors"
              >
                Unfollow
              </button>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No users found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
