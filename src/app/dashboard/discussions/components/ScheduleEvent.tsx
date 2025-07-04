"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { Input } from "@/components/ui/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Timer, TimerIcon } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export default function ScheduleEvent({ isOpen, onClose, onSubmit }: Props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [genres, setGenres] = React.useState(["Fiction", "Drama"]);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [focusBook, setFocusBook] = React.useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Schedule Event
        </h2>

        <div className="space-y-4 mt-4">
          <div>
            <p className="text-sm  text-[#5D5D5D]">Event Name</p>
            <Input
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 border border-gray-100 w-full h-[46px] placeholder:text-[#B0B0B0]  border-b-0 px-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm  text-gray-700 mb-1">Date</label>
              <div className="flex cursor-pointer items-center gap-x-4 border border-gray-300 rounded-md px-3 py-2">
                <Calendar className="text-[#888888] w-5 h-5" />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date as Date)}
                  dateFormat="dd MMMM, yyyy"
                  className="w-full cursor-pointer outline-none bg-transparent text-[#B0B0B0] text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                <label className="block text-sm  text-gray-700 mb-1">
                  Start
                </label>
                <div className=" flex items-center border border-gray-300 gap-x-2 rounded-md px-3 py-2">
                  <Timer className="text-[#888888] w-5 h-5" />
                  <DatePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="w-full outline-none bg-transparent text-[#B0B0B0] text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm  text-gray-700 mb-1">End</label>
                <div className="flex  items-center border border-gray-300 rounded-md px-2 gap-x-2 py-2">
                  <Timer className="text-[#888888] w-5 h-5" />

                  <DatePicker
                    selected={endTime}
                    onChange={(time) => setEndTime(time as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="w-full outline-none bg-transparent text-[#B0B0B0] text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="genre" className="text-sm text-[#5D5D5D]">
              Genre Focus
            </label>

            <div className="mt-1 block w-full border rounded-md px-3 h-[46px] py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <select
                id="type"
                className="w-full border-none focus:outline-none focus:ring-0 focus:border-none"
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
            <label htmlFor="type" className="text-sm  text-[#5D5D5D]">
              Focus Book
            </label>
            <div className="mt-1 block w-full border rounded-md px-3 h-[46px] py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <select
                id="type"
                value={focusBook}
                className="w-full border-none focus:outline-none focus:ring-0 focus:border-none"
                onChange={(e) => setFocusBook(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-2">
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

        <button
          onClick={() => {
            onClose();
            onSubmit();
          }}
          className="mt-6 w-full py-3 text-white rounded-md bg-gradient-to-b from-[#2A62F3] to-[#0029B3] hover:opacity-90 transition"
        >
          Schedule Event
        </button>
      </div>
    </Modal>
  );
}
