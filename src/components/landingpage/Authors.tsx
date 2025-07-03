"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type AuthorCardProps = {
  name: string;
  image: string;
  verified?: boolean;
};

const AuthorCard = ({ name, image, verified = false }: AuthorCardProps) => (
  <motion.div
    className="relative rounded-lg overflow-hidden"
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
  >
    <div className="aspect-w-1 aspect-h-1">
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
        <Image
          src={image}
          alt={`Author ${name}`}
          width={120}
          height={120}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="absolute bottom-6 left-4 flex items-center">
      <h3 className="text-white text-md font-medium">{name}</h3>
      {verified && (
        <motion.span
          className="ml-2 text-blue-400"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.span>
      )}
    </div>
  </motion.div>
);

export default function TopAuthorsSection() {
  const authors = [
    {
      name: "Elizabeth Joe",
      image: "/Eliazerbert.png",
      verified: true,
    },
    {
      name: "Alex Paul",
      image: "/alex.png",
      verified: true,
    },
    {
      name: "Samson Tersoor",
      image: "/samson.png",
      verified: true,
    },
    {
      name: "Vamika Maya",
      image: "/maya.png",
      verified: true,
    },
    {
      name: "Faith Musa",
      image: "/faith.png",
      verified: true,
    },
  ];

  return (
    <div className="px-[100px] mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#0F265C]">
          Top Authors For This Week
        </h2>
        <p className="text-gray-700 text-sm">
          This week's most-read and most-loved authors don't miss their latest
          work
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {authors.map((author, index) => (
          <AuthorCard
            key={index}
            name={author.name}
            image={author.image}
            verified={author.verified}
          />
        ))}
      </div>
    </div>
  );
}
