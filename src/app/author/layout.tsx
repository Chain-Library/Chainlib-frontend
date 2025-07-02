"use client";

import React from "react";
import SideNavBar from "@/components/layout/Sidenavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <SideNavBar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
