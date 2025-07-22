"use client";

import type React from "react";

import { useEffect } from "react";
import {
  ChevronLeft,
  Plus,
  Minus,
  PenLine,
  Layout,
  Link2,
  Maximize2,
  Bell,
} from "lucide-react";
import Image from "next/image";
import user from "../../../../../public/user1.svg";
import check from "../../../../../public/check.svg";

interface BookPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle?: string;
  authorName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bookContent?: any;
}

const BookPreviewModal: React.FC<BookPreviewModalProps> = ({
  isOpen,
  onClose,
  authorName = "Brianna Wiest",
  bookContent,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sampleContent = `to be for the rest of your life. How genuinely are you going to live? How afraid are you going to be? For how many more years are you going to let your demons conquer you?
  
    You are only in your 20s. It is not too late to start over.
    
    In fact, I hope you start over all the time. Not by burning bridges or ditching town or closing yourself to what you have, but by no longer fearing what you don't. I hope you spend your free afternoons working on the skills you need to have the job you want someday. I hope you accept that you're not supposed to look the way you did in high school, or really want the same things. I hope you ask yourself: "What do I want now?" every time it occurs to you to do so. I hope you learn that there is only one way to guide your life, and it is by consistently focusing on the next right step.
    
    Genuinely unhappy people are never upset by their circumstances; they are upset because they have externalized their power. They put their faith in finding the right person as opposed to being able to attract and choose the right person. They put their faith in finding the right job, in the right economy, as opposed to honing their skills to the point that a company would be remiss to overlook them.
    
    If you want to genuinely start over, clear the slate of everything you ever thought about how to get your life together. Don't predict, project, mind-read, assume. Don't imagine a better elevator speech. Don't only think of what it makes sense to do. Think of what it feels right to do. Not what your impulses say, not what your laziness says, not what your fear says. Those things have probably gotten you where you are. But a layer beneath them is a more resolute voice, and it will tell you which way to go. You only have to get quiet, listen, and act.
    
    Learn to live your life more than you're inclined to sit around wondering about it. You can't reflect your way into a new existence, but you can think yourself into paralysis. If you know, at your core, that you must start over, it's not a matter of whether`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-[#f6f6f6] w-full h-full md:h-[90vh] md:w-[90vw] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e7e7] bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center cursor-pointer gap-1 px-3 py-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <Minus className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <PenLine className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <Layout className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <Link2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-[#e7e7e7] rounded-md hover:bg-[#f6f6f6] transition-colors">
              <Maximize2 className="w-4 h-4" />
            </button>
            <span className="text-sm text-[#5d5d5d]">Page 1-37</span>
          </div>
          <div className="flex items-center gap-4 space-x-3">
            <div className="relative">
              <Bell className="text-[#5d5d5d] cursor-pointer" size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5c5c] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 border p-1 border-[#E7E7E7] rounded">
              <div className="w-8 h-8 rounded-sm bg-[#dba736] flex items-center justify-center overflow-hidden">
                <Image
                  src={user}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-medium">Joseph Yanum</span>
                  <Image src={check} alt="Profile" className="object-cover" width={32}/>
                  
                </div>
                <span className="text-[#888888] text-xs">@joeyyanum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-[#e7e7e7] flex flex-col overflow-hidden">
            <div className="px-4 py-6">
              <h1 className="text-lg font-semibold text-[#3d3d3d]">
                Book Preview
              </h1>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-y border-[#e7e7e7]">
              <h2 className="text-sm font-medium text-[#3d3d3d]">
                Table of Content
              </h2>
              <button className="p-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Cover
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Praise
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Title
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Chapter 1
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  How it Started
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Let Go
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Chapter 2
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  How it Started
                </li>
                <li className="px-4 py-2 hover:bg-[#f6f6f6] cursor-pointer">
                  Where Are We
                </li>
              </ul>
            </div>
          </div>

          {/* Book Content */}
          <div className="flex-1 bg-white overflow-auto p-6">
            <div className="max-w-3xl mx-auto">
              <div className="whitespace-pre-line text-[#3d3d3d] leading-relaxed">
                {bookContent || sampleContent}
              </div>
              <div className="flex items-center justify-between mt-12 text-sm text-[#5d5d5d]">
                <span>276</span>
                <div className="uppercase font-medium">{authorName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreviewModal;
