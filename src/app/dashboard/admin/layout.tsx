import { Suspense } from "react";
import type React from "react";
import { Sidebar } from "./components/admin-sidenavbar";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <div className="flex min-h-screen bg-[#f6f6f6] mt-17">
          <Sidebar />
          <div className="ml-64 w-full relative">{children}</div>
        </div>
      </Suspense>
    </>
  );
}
