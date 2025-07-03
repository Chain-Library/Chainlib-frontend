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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-5 px-10 py-4">
        <p>Guest Email Address</p>
        <div>
          <p>Guest Email Address</p>
          <Input placeholder="Enter guest email address" />
        </div>

        <button
          onClick={() => {
            onClose();
            addGuest();
          }}
          className="mt-6 w-full py-3 text-white rounded-md bg-gradient-to-b from-[#2A62F3] to-[#0029B3] hover:opacity-90 transition"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
