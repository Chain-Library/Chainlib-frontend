"use-client";
import { Header } from "@/components/dashboard/header";
import { ListFilter } from "lucide-react";
import NotificationFilter from "./components/NotificationFilter";
import NotificationTable from "./components/NotificationTable";

export default function Notifications() {
  return (
    <>
      <Header title="Notification" />
      <div className="p-6 font-normal  text-sm ">
        <div className="bg-white p-4">
          <button
            className="py-3 px-8 rounded-[12px] text-white mb-6"
            style={{
              background:
                "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)",
            }}
          >
            Make Announcement
          </button>

          <div className="flex flex-col gap-y-8">
            <NotificationFilter />

            <NotificationTable />
          </div>
        </div>
      </div>
    </>
  );
}
