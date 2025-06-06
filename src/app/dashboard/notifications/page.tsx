"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import NotificationDetail from "../components/notification-detail";

export default function Component() {
  const notifications = [
    {
      id: 1,
      title: "New updates for Writers",
      time: "12:16 PM",
      isNew: true,
      date: "Today",
    },
    {
      id: 2,
      title: "New updates for Writers",
      time: "12:19 PM",
      isNew: true,
      date: "Today",
    },
    {
      id: 3,
      title: "New updates for Writers",
      time: "12:16 PM",
      isNew: true,
      date: "Yesterday",
    },
    {
      id: 4,
      title: "New updates for Writers",
      time: "12:19 PM",
      isNew: true,
      date: "Yesterday",
    },
    {
      id: 5,
      title: "New updates for Writers",
      time: "12:25 PM",
      isNew: true,
      date: "Yesterday",
    },
    {
      id: 6,
      title: "New updates for Writers",
      time: "12:19 PM",
      isNew: true,
      date: "12 April, 2025",
    },
  ];

  const [selectedNotification, setSelectedNotification] = useState<
    (typeof notifications)[0] | null
  >(null);

  const handleViewDetails = (notification: (typeof notifications)[0]) => {
    setSelectedNotification(notification);
  };

  const handleBack = () => {
    setSelectedNotification(null);
  };

  const handleDelete = (id: number) => {
    console.log("Delete notification:", id);
    setSelectedNotification(null);
  };

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {} as Record<string, typeof notifications>);

  return (
    <main className="w-full relative p-6 pr-10">
      <div className=" bg-[#FFFFFF] p-4 rounded-[8px] w-full mx-auto shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-gray-900">
              All Notifications (7)
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-gray-500 h-auto p-0"
            >
              Filter by
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-blue-600 h-auto p-0 hover:text-blue-700"
            >
              <Check className="mr-1 h-3 w-3" />
              Mark all as read
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(groupedNotifications).map(([date, notifications]) => (
            <div key={date}>
              <div className="bg-[#F6F6F6] px-4 pt-3 mb-3 flex items-center rounded-sm">
                <h3 className="text-xs font-medium text-gray-500 mb-3">
                  {date}
                </h3>
              </div>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center gap-3"
                  >
                    <Avatar className="flex justify-center items-center h-8 w-8 bg-gray-200">
                      W
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </span>
                        {notification.isNew && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-red-100 text-red-700 hover:bg-red-100"
                          >
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-blue-600 h-auto p-0 hover:text-blue-700"
                      onClick={() => handleViewDetails(notification)}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedNotification && (
        <div className="absolute inset-0 bg-white">
          <NotificationDetail
            notification={selectedNotification}
            onBack={handleBack}
            onDelete={handleDelete}
          />
        </div>
      )}
    </main>
  );
}
