import type React from "react";
import { Sidebar } from "./_components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto no-scrollbar bg-neutral-50">
        {children}
      </main>
    </div>
  );
}
