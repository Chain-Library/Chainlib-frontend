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
            <p className="text-sm font-medium text-gray-700">Club Name</p>
            <Input
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 border border-gray-100 w-full py-4 border-b-0 px-2"
            />
          </div>

          <div>
            <label
              htmlFor="genre"
              className="text-sm font-medium text-gray-700"
            >
              Genre Focus
            </label>
            <div className="mt-1 border rounded-md px-3 py-2 min-h-[42px] text-sm text-gray-500 bg-white">
              Genres
              <div className="flex flex-wrap gap-2 mt-2">
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
          </div>

          <div>
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
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
            <label htmlFor="type" className="text-sm font-medium text-gray-700">
              Club Type
            </label>
            <select
              id="type"
              value={clubType}
              onChange={(e) => setClubType(e.target.value)}
              className="mt-1 block w-full border rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="mt-6 w-full py-3 text-white rounded-md bg-gradient-to-b from-[#2A62F3] to-[#0029B3] hover:opacity-90 transition"
        >
          Create Club
        </button>
      </div>
    </Modal>
  );
}
