import React from "react";

import { Header } from "@/components/dashboard/header";
import ManageContent from "./Manage-content";

export default function Home() {
  return (
    <div>
      <Header title="Manage Content" />

      <div className="p-6">
        <ManageContent />
      </div>
    </div>
  );
}
