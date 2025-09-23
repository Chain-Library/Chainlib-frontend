"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import NotificationDetailModal from "./NotificationDetailModal";
import SendMessageModal from "./SendMessageModal";

interface Notification {
  id: string;
  title: string;
  sender: string;
  message: string;
  date: string;
  avatar?: string;
  receiver?: string;
  time?: string;
  status?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Policy Violation",
    sender: "Ola**p@gmail.com",
    message:
      "Your recent account activity has been flagged for violating our Terms of Service concerning unauthorized access.",
    date: "13 June, 2025",
  },
  {
    id: "2",
    title: "Policy Violation",
    sender: "Ola**p@gmail.com",
    message:
      "Your recent account activity has been flagged for violating our Terms of Service concerning unauthorized access.",
    date: "13 June, 2025",
  },
  {
    id: "3",
    title: "Policy Violation",
    sender: "Ola**p@gmail.com",
    message:
      "Your recent account activity has been flagged for violating our Terms of Service concerning unauthorized access.",
    date: "13 June, 2025",
  },
  {
    id: "4",
    title: "Policy Violation",
    sender: "Ola**p@gmail.com",
    message:
      "Your recent account activity has been flagged for violating our Terms of Service concerning unauthorized access.",
    date: "13 June, 2025",
  },
];

const NotificationCard: React.FC<{
  notification: Notification;
  onViewProfile: (notification: Notification) => void;
}> = ({ notification, onViewProfile }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0"></div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  {notification.title}
                </h3>
                <p className="text-sm bg-[#F5F5F5] rounded-full px-4 py-1.5 text-gray-600 mb-2">
                  Sent by: {notification.sender}
                </p>
              </div>

              <p className="text-sm text-gray-700 mb-1">
                {notification.message}
              </p>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </div>

            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => onViewProfile(notification)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DirectNotificationContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Sent by Me">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);

  const filteredNotifications = mockNotifications.filter((notification) => {
    const matchesFilter =
      activeFilter === "All" || activeFilter === "Sent by Me";
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.sender.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleViewProfile = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsDetailModalOpen(true);
  };

  const handleSendMessage = (title: string, body: string) => {
    console.log("Sending message:", { title, body });
    // Here you would typically send the message to your backend
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedNotification(null);
  };

  const closeSendModal = () => {
    setIsSendModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Navigation and Search Bar */}
      <div className="flex flex-col lg:flex-row bg-gray-100 p-2 rounded-lg lg:items-center lg:justify-between gap-4 mb-6">
        {/* Filter Tabs */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1 space-x-2">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeFilter === "All"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Sent by Me")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeFilter === "Sent by Me"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sent by Me
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Search and Send Message */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}

          {/* Send Message Button */}
          <button
            onClick={() => setIsSendModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Send a Message
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onViewProfile={handleViewProfile}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">
            No notifications found
          </div>
          <div className="text-gray-400 text-sm">
            {searchQuery
              ? "Try adjusting your search terms"
              : "No notifications to display"}
          </div>
        </div>
      )}

      {/* Modals */}
      <NotificationDetailModal
        isOpen={isDetailModalOpen}
        onClose={closeDetailModal}
        notification={selectedNotification}
      />

      <SendMessageModal
        isOpen={isSendModalOpen}
        onClose={closeSendModal}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default DirectNotificationContent;
