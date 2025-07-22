


import type React from "react";
import { Sidebar } from "./components/reader-side-navbar";
import "@/app/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

     <div className="flex min-h-screen bg-[#f6f6f6] mt-17">
      <Sidebar />
      <div className="ml-64 w-full relative">
        {children}
      </div>
    </div>
    </>
   
  );
}