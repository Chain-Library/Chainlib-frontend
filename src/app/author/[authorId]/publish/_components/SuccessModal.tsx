"use client"

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SuccessModal = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[500px] max-w-[75vw] text-center relative">
        <div className=" rounded-full relative size-35 flex items-center justify-center mx-auto mb-6">
          <Image fill
            src="/Done.svg"
            alt="icon success"
            className=" text-blue-600"
          />
        </div>

        <h2 className="text-headline-small font-semibold mb-4">
          Book Published Successfully!
        </h2>
        <p className="text-gray-600 mb-8">
          Your book is now live and ready to be discovered by readers around the
          world.
        </p>

        <button
          onClick={() => router.push(pathname.replace("publish", "manage-content"))
          }
          className="px-8 py-3 bg-[#096cff] cursor-pointer text-white rounded-md"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
