"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import Image from "next/image";

interface NotificationDetailProps {
  notification: {
    id: number;
    title: string;
    time: string;
    date: string;
  };
  onBack: () => void;
  onDelete: (id: number) => void;
}

export default function NotificationDetail({
  notification,
  onBack,
  onDelete,
}: NotificationDetailProps) {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="w-full md:w-[642px] mx-auto bg-[#FFFFFF] rounded-[8px] p-4 z-10">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(notification.id)}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-[24px] font-semibold text-[#454545]">
              New Update for Writers
            </h1>
            <p className="text-sm text-[#454545] text-[16px]">
              Step up your writing with our latest update
            </p>
          </div>

          <div className="md:w-[300px] w-full mx-auto">
            <Image
              src="/coming-soon.png"
              alt="Notification Banner"
              width={100}
              height={100}
              className="w-full"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-[#454545] text-[16px] leading-relaxed">
              Compete against players worldwide, climb the global rankings, and
              prove your skills. Test your strategy, outmaneuver your opponents,
              and claim your place at the top. Glory awaits!
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-xs text-[#888888] text-[16px]">
              Sent: {notification.date} {notification.time}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
