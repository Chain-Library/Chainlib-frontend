"use client";
import { Camera, Mic, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import AddGuestModal from "../dashboard/readers/discussions-and-clubs/components/AddGuest";
import Link from "next/link";

export default function WaitingRoom() {
  const [guestEmailOpen, setGuestEmailOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-md mx-auto my-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        
        <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
            alt="Two people chatting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 border-[0.5px] border-white/10 bg-white/30 px-2  rounded-full p-1 shadow">
            <button
              aria-label="Toggle Camera"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-blue-100 transition"
            >
              <Camera className="w-5 h-5 text-blue-600" />
            </button>
            <button
              aria-label="Toggle Microphone"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-blue-100 transition"
            >
              <Mic className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        <Link href="/dashboard/discussions/btc-hit-10k">
          <div className="w-full text-center mb-4 bg-blue-600 text-white rounded-xl py-3 text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition">
            <p>Start</p>
          </div>
        </Link>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Native Invisibility
          </h2>

          <InfoRow label="Host" value="You" />
          <InfoRow label="Guest" value="hanayamal@gmail.com" />

          <button
            type="button"
            onClick={() => {
              setGuestEmailOpen(true);
            }}
            className="inline-flex py-3 px-4 rounded-full items-center bg-[#EDF7FF] space-x-1 text-[#5D5D5D] hover:text-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 "
          >
            <PlusCircleIcon className="w-4 h-4 text-blue-500" />
            <span>Another Guest</span>
          </button>
        </div>
      </div>

      <AddGuestModal
        isOpen={guestEmailOpen}
        onClose={() => setGuestEmailOpen(false)}
        addGuest={() => {}}
      />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="inline-block rounded-full bg-gray-200  text-xs px-2 py-0.5 select-none ">
        {label}
      </span>
      <span className=" text-sm">{value}</span>
    </div>
  );
}
