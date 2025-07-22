"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCheck } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Header } from "@/components/dashboard/header";
import { NotificationDetailPage } from "./notification-detail";

const notifications = [
  {
    id: 1,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "Today",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
  {
    id: 2,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "Today",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
  {
    id: 3,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "Yesterday",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
  {
    id: 4,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "Yesterday",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
  {
    id: 5,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "Yesterday",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
  {
    id: 6,
    title: "New updates for Writers",
    time: "12:18 PM",
    date: "12 April, 2025",
    isNew: true,
    content: "Step up your writing with our latest update",
  },
];

function NotificationPage() {
  const [filter, setFilter] = useState("");
  const [viewNotf, setViewNotf] = useState(false);

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {} as Record<string, typeof notifications>);

  function backhandler() {
    setViewNotf(false);
  }
  function viewNotificationhandler() {
    setViewNotf(true);
  }
  if (viewNotf) {
    return <NotificationDetailPage back={backhandler} />;
  }



  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Header title="Notification"  />

      {/* Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto mt-16">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Header */}
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#B0B0B0]">
                  <h2 className="text-lg font-medium">All Notifications</h2> (7)
                </div>
                <div className="flex items-center gap-4">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-32 bg-[#F6F6F6] shadow-none rounded-[8px] border-none">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="unread">Unread</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button variant="ghost" className="text-[#5D5D5D] bg-[#F6F6F6]">
                <CheckCheck className="w-4 h-4 mr-2" />
                Mark all as read
              </Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="divide-y divide-gray-200">
            {Object.entries(groupedNotifications).map(
              ([date, dateNotifications]) => (
                <div key={date}>
                  {date !== "Today" && (
                    <div className="px-4 lg:px-6 py-3 bg-gray-50">
                      <p className="text-sm font-medium text-gray-600">
                        {date}
                      </p>
                    </div>
                  )}
                  {date === "Today" && (
                    <div className="px-4 lg:px-6 py-3">
                      <p className="text-sm font-medium text-gray-600">
                        {date}
                      </p>
                    </div>
                  )}
                  {dateNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 lg:p-6 hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 bg-gray-200">
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900">
                              {notification.title}
                            </h3>
                            {notification.isNew && (
                              <Badge
                                variant="destructive"
                                className="text-xs text-[#ED4D48] bg-[#ED4D4833]"
                              >
                                New
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {notification.time}
                          </p>
                        </div>
                        <Button
                          variant="link"
                          className="text-blue-600"
                          onClick={viewNotificationhandler}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;

