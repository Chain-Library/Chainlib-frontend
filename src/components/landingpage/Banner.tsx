"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <div className="px-[100px] mb-10">
      <div className="bg-blue-50 rounded-xl p-8 flex justify-between items-center">
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
              className="flex flex-wrap justify-center gap-3"
            >
              {row.map((cat, catIndex) => (
                <motion.span
                  key={catIndex}
                  className={`px-6 py-2 rounded-full ${cat.color} text-blue-900 font-medium hover:scale-105 transition-all cursor-pointer`}
                >
                  {cat.label}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
