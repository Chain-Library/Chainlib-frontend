import React from "react";

function AdminTableHeader() {
  return (
    <div className="bg-[#EDF7FF] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] text-xs/4 w-full">
      <div className="py-3 px-4">Name</div>
      <div className="py-3 px-4">Email</div>
      <div className="py-3 px-4">Last Login</div>
      <div className="py-3 px-4">Status</div>
      <div className="py-3 px-4"></div>
    </div>
  );
}

export default AdminTableHeader;
