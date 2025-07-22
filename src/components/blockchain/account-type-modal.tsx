"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

// --- Types ---
type AccountType = "readers" | "writers";

interface AccountTypeOption {
  id: AccountType;
  title: string;
  description: string[];
  dashboardRoute: string;
}

interface AccountTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: AccountType | null;
  onSelectType: (type: AccountType) => void;
  onSubmit: () => void;
}

const accountTypeOptions: AccountTypeOption[] = [
  {
    id: "readers",
    title: "Reader",
    description: [
      "Discover a world of stories — from timeless classics to the latest bestsellers, all in one place",
      "Read anytime, anywhere with a seamless and user-friendly online experience",
      "Build your personal library and keep track of every book you read",
      "Enjoy curated recommendations tailored to your interests and reading habits",
      "Join a vibrant community of book lovers and share your thoughts, reviews, and favorite reads",
    ],
    dashboardRoute: "/dashboard/readers",
  },
  {
    id: "writers",
    title: "Writers",
    description: [
      "Share your voice with the world — publish your stories, poems, or articles and reach a global audience",
      "Build your writer’s profile and showcase your work in a beautiful, organized space",
      "Connect with readers and fellow writers through comments, feedback, and community support",
      "Grow your audience with built-in tools that help your writing get discovered",
      "Track your progress and celebrate every milestone in your writing journey",
    ],
    dashboardRoute: "/dashboard/writers",
  },
];

// --- Animation Variants ---
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
  },
};

export function AccountTypeModal({
  isOpen,
  onClose,
  selectedType,
  onSelectType,
  onSubmit,
}: AccountTypeModalProps) {
  const router = useRouter();

  const handleSelect = (type: AccountType, route: string) => {
    localStorage.setItem("userAccountType", type);
    onSelectType(type);
    router.push(route);
  };

  const handleSubmit = () => {
    if (selectedType) {
      onSubmit();
      const selectedOption = accountTypeOptions.find(
        (option) => option.id === selectedType
      );
      if (selectedOption) {
        localStorage.setItem("userAccountType", selectedType);
        window.location.href = selectedOption.dashboardRoute;
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <motion.div
        className="bg-[#0C1327] rounded-lg max-w-4xl w-full mx-4 p-6 md:p-10 shadow-lg overflow-y-auto max-h-[90vh]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <motion.div className="text-center mb-10" variants={headerVariants}>
          <motion.h1
            className="font-bold text-2xl uppercase text-white mb-4"
            variants={headerVariants}
          >
            How do you want to use Chainlib?
          </motion.h1>
          <motion.p
            className="text-base text-gray-300"
            variants={headerVariants}
          >
            Choose between creating a Reader profile or a Writer profile.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {accountTypeOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="border border-[#343B4F] rounded-xl p-6 md:p-8 bg-[#081028] cursor-pointer hover:shadow-xl transition-shadow"
              variants={cardVariants}
              onClick={() => handleSelect(option.id, option.dashboardRoute)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2 className="text-xl font-semibold text-white mb-4">
                {option.title}
              </motion.h2>
              <motion.ul
                className="list-disc pl-6 mb-6 space-y-2"
                variants={listVariants}
              >
                {option.description.map((item, i) => (
                  <motion.li
                    key={`desc-${index}-${i}`}
                    className="text-sm text-gray-300 leading-relaxed"
                    variants={listItemVariants}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={buttonVariants}>
                <div className="inline-block border border-[#0C1327] text-white hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded-full px-6 py-2 text-sm font-medium">
                  Proceed to dashboard
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
