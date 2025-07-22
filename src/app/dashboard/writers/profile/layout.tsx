import type React from "react";
import "@/app/globals.css";
import { ProfileSidebar } from "./component/profilesidebar";
import { Header } from "@/components/dashboard/header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header title="Profile"  />
      <div className="flex flex-col lg:flex-row min-h-screen mt-16">
        <ProfileSidebar />
        <div className=" w-full">{children}</div>
      </div>
    </>
  );
}
