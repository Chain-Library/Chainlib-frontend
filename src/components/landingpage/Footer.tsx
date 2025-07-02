import Linkedin from "@/app/svg/Linkedin";
import Telegram from "@/app/svg/Telegram";
import X from "@/app/svg/X";
import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-white mx-[60px] border-t-[#E7E7E7] border-t-[1px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center mb-10">
            <img
              src="/logo.svg"
              className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center mr-2"
            />
            <h2 className="text-[#0F265C] text-xl font-bold">ChainLib</h2>
          </div>
          <div className="flex space-x-4">
            <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
              <X />
            </button>
            <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
              <Telegram />
            </button>
            <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
              <Linkedin />
            </button>
          </div>
          <div className="mt-7">
            <p className="text-[#5D5D5D] text-xs">
              © 2025 ChainLib. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 text-sm">
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-500 font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
