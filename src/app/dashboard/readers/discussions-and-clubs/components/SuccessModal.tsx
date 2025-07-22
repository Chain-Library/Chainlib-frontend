"use client";

import React from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export default function EventScheduleModal({
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideClose className="max-w-md">
      <div className="py-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-30 h-30 flex items-center justify-center rounded-full bg-[#D6ECFF]">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#096CFF]">
              <CheckIcon className="text-white w-10 h-10" />
            </div>
          </div>
          <h2 className="text-lg font-semibold">
            Event Successfully Scheduled
          </h2>
          <div className="bg-gray-100 w-fit rounded-full px-4 py-2 flex items-center justify-between  max-w-xs">
            <span className="truncate text-sm text-gray-700">
              ChLbevent1200Sh...
            </span>
            <button
              onClick={() => navigator.clipboard.writeText("ChLbevent1200Sh")}
              className="ml-3 text-sm font-medium text-blue-600 hover:underline"
            >
              Copy
            </button>
          </div>
          <Link
            href="/waiting-room"
            className="w-full max-w-xs h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700"
          >
            <p>Start</p>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
