"use client";

import {  MoveLeft, Trash2 } from "lucide-react";
import Image from "next/image";
import soon from "../../../../../public/coming-soon.png"


interface NotificationDetailPageProps {
  back: () => void;
}

export function NotificationDetailPage({ back }: NotificationDetailPageProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
            <div className="flex justify-between items-center">
              <div
                onClick={back}
                className="cursor-pointer border border-[#888888] rounded-[8px] text-[#888888] p-2"
              >
                <MoveLeft />
              </div>
              <div className="cursor-pointer border border-[#888888] rounded-[8px] text-[#888888] p-2">
                <Trash2 />
              </div>
            </div>
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">
                New Update for Writers
              </h1>
              <p className="text-gray-600">
                Step up your writing with our latest update
              </p>

             
                       <div className="md:w-[400px] w-full mx-auto">
                         <Image
                           src={soon}
                           alt="Notification Banner"
                        //    width={100}
                        //    height={100}
                           className="w-full border "
                         />
                       </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Compete against players worldwide, climb the global rankings,
                  and prove your skills. Test your strategy, outmaneuver your
                  opponents, and claim your place at the top. Glory awaits!
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Sent; Today 12:18 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
