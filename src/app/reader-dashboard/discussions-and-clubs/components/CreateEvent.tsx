"use client";

import React from "react";
import Modal from "./Modal";
import { Input } from "@/components/ui/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export default function CreateClubModal({ isOpen, onClose, onSubmit }: Props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [genres, setGenres] = React.useState(["Fiction", "Drama"]);
  const [clubType, setClubType] = React.useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Create a new Club
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Launch your book club! Gather readers, share favorites, and spark
          discussions
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm  text-[#5D5D5D]">Club Name</p>
            <Input
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 border border-gray-100 w-full h-[46px]  border-b-0 px-3"
            />
          </div>

          <div>
            <label htmlFor="genre" className="text-sm text-[#5D5D5D]">
              Genre Focus
            </label>

            <div className="mt-1 block w-full border rounded-md px-3 h-[46px] py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <select
                id="type"
                value={clubType}
                className="w-full border-none focus:outline-none focus:ring-0 focus:border-none"
                // onChange={(e) => setGenres(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="public">Fiction</option>
                <option value="private">Drama</option>
              </select>
            </div>
             <div className="flex flex-wrap gap-2 mt-4">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-[#EDF4FF] text-[#2A62F3] text-xs px-3 py-1 rounded-full"
                  >
                    {genre} <span className="ml-1 cursor-pointer">×</span>
                  </span>
                ))}
              </div>
          </div>

          <div>
            <label htmlFor="description" className="text-sm text-[#5D5D5D]">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe your club"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="type" className="text-sm  text-[#5D5D5D]">
              Club Type
            </label>
            <div className="mt-1 block w-full border rounded-md px-3 h-[46px] py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <select
                id="type"
                value={clubType}
                className="w-full border-none focus:outline-none focus:ring-0 focus:border-none"
                onChange={(e) => setClubType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onSubmit();
          }}
          className="mt-6 w-full py-3 text-white rounded-md bg-gradient-to-b from-[#2A62F3] to-[#0029B3] hover:opacity-90 transition"
        >
          Create Club
        </button>
      </div>
    </Modal>
  );
}
