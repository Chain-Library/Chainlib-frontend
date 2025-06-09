"use client";

import { motion } from "framer-motion";
import React from "react";

const categories = [
  [
    { label: "Fiction", color: "bg-yellow-100" },
    { label: "Fact Books", color: "bg-blue-200" },
    { label: "Fantasy", color: "bg-green-200" },
  ],
  [
    { label: "Humor & Science", color: "bg-blue-300" },
    { label: "Picture", color: "bg-blue-100" },
    { label: "Reference", color: "bg-yellow-200" },
    { label: "Science", color: "bg-red-200" },
  ],
  [
    { label: "Science Book", color: "bg-green-100" },
    { label: "Non-Fiction", color: "bg-blue-400" },
    { label: "Adventure", color: "bg-red-300" },
  ],
];

export default function BookCategories() {
  return (
    <div className="bg-primary-50 rounded-large md:mx-auto max-w-5xl xl:max-w-6xl mx-6 p-6 px-4 sm:px-6 lg:py-10 md:px-15 xl:px-25 flex flex-col md:flex-row justify-between items-center mb-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-blue-900">
            Publish and Read
            <br />
            Multiple Type of Books
          </h2>
        </motion.div>
      </div>


      <div className="flex flex-col space-y-4">
        {categories.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-3"
          >
            {row.map((cat, catIndex) => (
              <motion.span
                key={catIndex}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className={`px-6 py-2 rounded-full ${cat.color} text-blue-900 font-medium hover:scale-105 transition-all cursor-pointer`}
              >
                {cat.label}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
