import type React from "react";
import "@/app/globals.css";
import { ProfileSidebar } from "./component/profilesidebar";
import { ProfileHeader } from "./component/profileHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileHeader />
      <div className="flex flex-col lg:flex-row min-h-screen ">
        <ProfileSidebar />
        <div className=" w-full">{children}</div>
      </div>
    </>
  );
}
