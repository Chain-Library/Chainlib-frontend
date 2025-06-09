'use client';

import PageDetail from "@/app/_components/PageDetail";
import VerifiedIcon from "@/assets/svg/VerifiedIcon";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  pseudonym: string;
  email: string;
  bio: string;
  profilePicture: string | null;
}

interface ProfileData {
  id: string;
  name: string;
  followers: number;
  isVerified: boolean;
  profileImage: string;
}

const profileDataSample: ProfileData = {
  id: '1',
  name: 'Joseph Paul',
  followers: 1027,
  isVerified: true,
  profileImage: '/user.svg',
};

export const ProfileForm = ({ profile = profileDataSample }: { profile?: ProfileData }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "Joseph",
    lastName: "Paul",
    pseudonym: "Joe Paul",
    email: "example@gmail.com",
    bio: "",
    profilePicture: null,
  });

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
      <PageDetail title="Profile Details">
        <button
          type="submit"
          className="w-fit h-full bg-[linear-gradient(to_right,#EDF7FF_2px,transparent_2px),linear-gradient(to_bottom,#EDF7FF_2px,transparent_2px)] bg-[size:96px_96px] hover:bg-primary-400 p-1 px-4 text-black rounded-large bg-blue-100 transition-colors"
        >
          Edit Profile
        </button>
      </PageDetail>

      <form onSubmit={handleSubmit} className="flex-1 md:p-4 lg:p-6 pb-10 justify-center items-center w-full space-y-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-yellow-400">
              <Image
                src={profile.profileImage}
                alt="Profile Preview"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Change Button */}
            <div onClick={triggerFileInput} className="absolute bottom-0 right-0 bg-neutral-50 px-2 py-1 rounded-full text-neutral-600 text-label-small font-normal shadow-md border border-neutral-400 ">
              <label htmlFor="changeAvatar">Change</label>
              <input
                type="file"
                name="changeAvatar"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          {/* Name and Verification */}
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-body-18px-large font-bold text-neutral-800">
              {profile.name}
            </h1>
            {profile.isVerified && (
              <VerifiedIcon />
            )}
          </div>

          {/* Followers Count */}
          <div className="text-gray-600">
            <span className="text-label-large">Followers </span>
            <span className="text-blue-500 text-label-medium font-semibold">
              {profile.followers}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

          <div className="md:col-span-2">
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

          <div className="md:block col-span-1 hidden">
            <button
              type="submit"
              className="w-full bg-[linear-gradient(to_right,#EDF7FF_2px,transparent_2px),linear-gradient(to_bottom,#EDF7FF_2px,transparent_2px)] bg-[size:96px_96px] hover:bg-primary-400 py-3 px-[5rem] text-black rounded-md bg-blue-100 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

