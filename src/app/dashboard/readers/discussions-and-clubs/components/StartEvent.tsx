"use client";

import React from "react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  startEvent: () => void;
  instantEvent: () => void;
};

export default function StartEventModal({
  isOpen,
  onClose,
  startEvent,
  instantEvent,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md" >
      <div className="space-y-4 px-10 py-4">
        <button
          onClick={() => {
            onClose();
            startEvent();
          }}
          className=" w-full py-3  rounded-[16px]  bg-[#E7E7E7] hover:opacity-90 transition"
        >
          Create Club
        </button>

        <button
          onClick={() => {
            onClose();
            instantEvent();
          }}
          className=" w-full py-3  rounded-[16px]  bg-[#E7E7E7] hover:opacity-90 transition"
        >
          Schedule
        </button>
      </div>
    </Modal>
  );
}
