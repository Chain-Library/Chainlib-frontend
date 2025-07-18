'use client';

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

interface ProfileFormData {
    firstName: string;
    lastName: string;
    pseudonym: string;
    email: string;
    bio: string;
    profilePicture: string | null;
  }

export const ProfileForm = () => {


  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "Joseph",
    lastName: "Paul",
    pseudonym: "Joe Paul",
    email: "example@gmail.com",
    bio: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
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
        <div className=" mt-5 bg-geen-200 p-5 w-full mx-auto rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-yellow-400">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Profile Preview"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-yellow-400">
                    {/* Placeholder silhouette if no image */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-yellow-600"
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
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <button
              type="button"
              onClick={triggerFileInput}
              className="py-2 px-4 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
            >
              Upload a Profile Picture
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label htmlFor="pseudonym" className="block text-gray-700 mb-2">
                Pseudonym (Optional)
              </label>
              <input
                type="text"
                id="pseudonym"
                name="pseudonym"
                value={formData.pseudonym}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your pseudonym"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="bio" className="block text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your bio"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full md:w-auto py-3 px-[5rem] bg-[#EDF7FF] text-black rounded-md hover:bg-blue-100 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </form>
      </div>
    )
}