"use client";

import React from "react";
import Modal from "./Modal";
import { Input } from "@/components/ui/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  addGuest: () => void;
};

export default function AddGuestModal({ isOpen, onClose, addGuest }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="space-y-5 px-5 py-1">
        <p className="text-xl text-[#454545] text-center font-semibold">
          Guest Email Address
        </p>
        <div className="space-y-2">
          <p className="text-[#5D5D5D]">Guest Email Address</p>
          <Input
            className="h-[46px] text-[#B0B0B0]"
            placeholder="Enter guest email address"
          />
        </div>
        <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-4 w-fit">
          <img
            src="/authorImg2.png"
            alt="Joseph Yanum"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-semibold">Joseph Yanum</p>
            <p className="text-sm text-[#888888]">josephyanum75@gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => {
            onClose();
            addGuest();
          }}
          className="mb-5 w-full py-3 text-white rounded-md bg-gradient-to-b from-[#2A62F3] to-[#0029B3] hover:opacity-90 transition"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
