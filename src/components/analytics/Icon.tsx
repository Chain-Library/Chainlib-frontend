"use client";
import React from "react";

type IconName =
  | "briefcase"
  | "book"
  | "users"
  | "wallet"
  | "chevron-down"
  | "arrow-up";

type IconProps = {
  name: IconName;
} & React.SVGProps<SVGSVGElement>;

const iconPaths: Record<IconName, React.ReactNode> = {
  briefcase: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.075c0 1.313-.964 2.44-2.25 2.654l-5.25.875a2.25 2.25 0 01-2.25 0l-5.25-.875a2.66 2.66 0 01-2.25-2.654V14.15M12 12.375a2.25 2.25 0 01-2.25-2.25V6.375a2.25 2.25 0 012.25-2.25h.008a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25 2.25h-.008z"
    />
  ),
  book: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  wallet: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v3m18 0a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25m15-3.002a2.25 2.25 0 00-2.25-2.25H9.75a2.25 2.25 0 00-2.25 2.25m4.5 0a2.25 2.25 0 00-2.25-2.25H9.75a2.25 2.25 0 00-2.25 2.25"
    />
  ),
  "chevron-down": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  ),
  "arrow-up": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  ),
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
};

export default Icon;
