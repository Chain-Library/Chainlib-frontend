import "@/app/globals.css";
import type React from "react";
import { Header } from "../_components/header";
import { ProfileSidebar } from "./_components/profilesidebar";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Header title="Profile" />
      <div className="flex max-w-6xl flex-col gap-x-12 lg:flex-row md:pr-0 md:pb-0 md:p-6 px-6">
        <div className="hidden md:block">
          <ProfileSidebar />
        </div>
        <main className="bg-background max-w-5xl md:mr-8 w-full xl:max-w-6xl min-h-30 mb-10 py-6">{children}</main>
      </div>
    </>
  );
}


