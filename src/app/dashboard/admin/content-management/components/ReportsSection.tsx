"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReportsSectionProps {
  book: any;
}

export function ReportsSection({ book }: ReportsSectionProps) {
  return (
    <div className="bg-white p-4 rounded-lg space-y-4 shadow-sm">
      <h2 className="text-lg font-semibold text-[#888888]">
        Reports & Comments
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div className="border border-[#E7E7E7] rounded-lg p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>LV</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <span className="font-medium text-sm sm:text-base">
                    Lana Victor
                  </span>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Badge
                variant="destructive"
                className="text-xs bg-[#EDF7FF] py-1 px-2 sm:px-3 rounded-xl text-[#5D5D5D]"
              >
                {"Plagiarism and Inappropriate Content"}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-[#888888] mt-2">
              Presenting someone else's work and used images, that are
              unsuitable, offensive, harmful, disturbing, often based on
              societal norms, legal standards, age
            </p>
          </div>
        </div>

        <div className="border border-[#E7E7E7] rounded-lg p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SY</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <span className="font-medium text-sm sm:text-base">
                    Samuel Yaro
                  </span>
                  <span className="text-xs text-gray-500">5 June, 2025</span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Badge
                variant="destructive"
                className="text-xs bg-[#EDF7FF] py-1 px-2 sm:px-3 rounded-xl text-[#5D5D5D]"
              >
                Inappropriate Content
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-[#888888] mt-2">
              Unsuitable, offensive, harmful, disturbing, often based on
              societal norms, legal standards, age
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
