"use client";

import type React from "react";

import { useState, useRef, type ChangeEvent } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { Header } from "@/components/dashboard/header";
interface ProfileFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  bio: string;
  profilePicture: string | null;
}

export default function ProfileDetailsPage() {
  const router = useRouter();
  const { openMobileMenu } = useMobileMenu();
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "Faith",
    lastName: "Haruna",
    username: "Faith_Haruna",
    email: "example@gmail.com",
    bio: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState<string | null>(
    "/reader-profile-dummy-image.png"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setFormData((prev) => ({
        ...prev,
        profilePicture: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


  return (
    <>
      <Header title="Profile"  />
      <div className="bg-white m-4 md:m-6 rounded-xl">
        {/* Mobile Header */}
        <div className="lg:hidden bg-gray-50 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={openMobileMenu} className="p-1">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
          </div>
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            Edit Profile
          </button>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center text-center ">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden ">
                  {preview ? (
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt="Profile Preview"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-pink-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-600 shadow-sm"
                >
                  Change
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <div className="space-y-2">
                <div className="flex gap-x-2">
                  {" "}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {formData.username}
                  </h2>
                  <div className="flex items-center justify-center gap-2 px-3 py-1 border border-blue-600 bg-blue-50 rounded-full ">
                    <span className="bg-gray-300 rounded-full h-4 w-4"></span>
                    <span className=" text-gray-900 text-sm font-medium">
                      Enthusiast
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">ID: CLRD00010</p>
                <p className="text-sm text-gray-500">
                  Following{" "}
                  <span className="text-blue-600 font-medium">17</span>
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-sm text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-300"
                  placeholder="Faith"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-sm text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Haruna"
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-sm text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Faith_Haruna"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-sm text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-3 border text-sm text-gray-400 border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter your bio"
              />
            </div>

            {/* Desktop Edit Button */}
            <div className="hidden lg:flex justify-start w-1/2">
              <button
                type="submit"
                className="px-8 w-full py-3 bg-gradient-to-b from-[#EDF7FF] via-[#cee6f9] to-[#5f9efd] text-gray-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
