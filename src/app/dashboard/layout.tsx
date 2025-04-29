import type React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-[#f6f6f6]">
          <Sidebar />
          <div className="ml-64 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
