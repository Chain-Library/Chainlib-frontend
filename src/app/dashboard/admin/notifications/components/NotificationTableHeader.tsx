import React from "react";

function NotificationTableHeader() {
  return (
    <div className="bg-[#EDF7FF] grid grid-cols-[1fr_1fr_.5fr_.5fr_.5fr_.5fr] text-xs/4 w-full">
      <div className="py-3 px-4">Title</div>
      <div className="py-3 px-4">Sender</div>
      <div className="py-3 px-4">Receiver</div>
      <div className="py-3 px-4">Status</div>
      <div className="py-3 px-4">Date</div>
      <div className="py-3 px-4"></div>
    </div>
  );
}

export default NotificationTableHeader;
