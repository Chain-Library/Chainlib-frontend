"use client"

import { useState } from "react"
import { FileUpload } from "@/components/common/Upload"
import Image from "next/image"
import { MoveLeft, Bell, BadgeCheck } from "lucide-react"

export default function page() {
  const [seriesType, setSeriesType] = useState<string>("new")

  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto py-6">
        {/* Header with profile and notification */}
        <div className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-3">
          <button className="py-1 px-2 cursor-pointer rounded-md border border-[#888888]">
            <MoveLeft className="w-4 h-4 text-[#888888]" />
          </button>
          <h1 className="text-[#6D6D6D] font-bold">Manage Content</h1>
        </div>

          <div className="flex items-center justify-center space-x-4">
            {/* Notification bell */}
            <div className="relative">
              <button className="text-gray-500 hover:text-gray-700">
            <Bell className="w-5 h-5 text-[#5D5D5D]" fill="currentColor" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  1
                </span>
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center  border border-[#E7E7E7] rounded-md p-2">
              <div className="h-8 w-8 rounded-md overflow-hidden border border-gray-200">
                <Image src="/profile.png" alt="Profile" width={32} height={32} className="h-full w-full object-cover" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-800">Joseph Yanum</p>
                <p className="text-xs text-gray-500">@joeyanum</p>
              </div>
              <BadgeCheck className="w-5 h-5 ml-3 text-[#218DFF]" />
            </div>
          </div>
        </div>

        {/* Step indicators - updated to match the image */}
        <div className="mb-8">
          <div className="relative flex justify-between items-center">
            {/* Connecting lines */}
            <div className="absolute left-0 right-0 top-5 h-[1px] bg-gray-200"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-blue-100 border-6 border-white flex items-center justify-center text-blue-500 text-sm font-medium">
                1
              </div>
              <div className="text-xs text-[#5D5D5D] mt-2">Book Content</div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-gray-100 border-6 border-white flex items-center justify-center text-gray-500 text-sm font-medium">
                2
              </div>
              <div className="text-xs text-[#5D5D5D] mt-2">Book Details</div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-gray-100 border-6 border-white flex items-center justify-center text-gray-500 text-sm font-medium">
                3
              </div>
              <div className="text-xs text-[#5D5D5D] mt-2">Pricing</div>
            </div>
          </div>
        </div>

        <div className="px-2 max-w-[60rem] ">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">Series</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Cover Image Upload */}
              <FileUpload
                supportedFormats="Supported format: JPEG & PNG"
                icon="image"
                acceptedFileTypes={["image/jpeg", "image/png"]}
              />
            </div>

            <div className="space-y-6 bg-white rounded-md p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">Series Content</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="series-type" className="block text-sm font-medium text-gray-700">
                      Series Type
                    </label>
                    <div className="relative text-[#454545]">
                      <select
                        id="series-type"
                        value={seriesType}
                        onChange={(e) => setSeriesType(e.target.value)}
                        className="w-full rounded-md border border-gray-300 text=[#454545] px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                      >
                        <option value="existing">Existing Series</option>
                        <option value="new">New Series</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {seriesType === "existing" && (
                    <>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 h-10 px-4 py-2 text-gray-700">
                        Select Series to Continue
                      </button>

                      <div className="flex items-center p-4 bg-blue-50 rounded-md">
                        <div className="w-12 h-12 rounded overflow-hidden mr-4 bg-gradient-to-br from-purple-500 to-red-500">
                          {/* This is a placeholder for the sunset image in the original */}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Best of the Best</p>
                          <p className="text-sm text-gray-500">Current Series 4</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 text-[#454545]">
                <div className="space-y-2">
                  <label htmlFor="book-title" className="block text-sm font-medium text-gray-700">
                    Book Title
                  </label>
                  <input
                    id="book-title"
                    type="text"
                    placeholder="Paul Smart"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sub-title" className="block text-sm font-medium text-gray-700">
                    Sub-title
                  </label>
                  <input
                    id="sub-title"
                    type="text"
                    placeholder="Paul"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                    >
                      <option>Select Language</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="book-isbn" className="block text-sm font-medium text-gray-700">
                    Book ISBN <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    id="book-isbn"
                    type="text"
                    placeholder="978-1-234-56789-7"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6 w-full">
                <label className="block text-sm font-medium text-gray-700">Manuscript</label>
                <FileUpload
                  supportedFormats="Supported format: DOCX, PDF"
                  icon="file"
                  acceptedFileTypes={[
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ]}
                />
              </div>


              <div className="flex gap-4 pt-4">
                  <button  className="flex-1 p-3 rounded-md bg-[#EDF7FF] text-[#218DFF]">
                    Back
                  </button>
                  <button className="flex-1 p-3 rounded-md bg-blue-500 hover:bg-blue-600">Continue</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
