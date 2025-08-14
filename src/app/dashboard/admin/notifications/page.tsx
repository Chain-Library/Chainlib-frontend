"use client";
import { Header } from "@/components/dashboard/header";
import NotificationFilter from "./components/NotificationFilter";
import NotificationTable from "./components/NotificationTable";
import { useRouter, useSearchParams } from "next/navigation";
import AnnouncementModal from "./components/AnnouncementModal";

export default function Notifications() {
  const router = useRouter();
  const sp = useSearchParams();

  const openAnnouncement = () => {
    const params = new URLSearchParams(sp.toString());
    params.set("announce", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Header title="Notification" />
      <div className="p-6 font-normal text-sm">
        <div className="bg-white p-4 rounded-[12px]">
          <button
            onClick={openAnnouncement}
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

      <AnnouncementModal />
    </>
  );
}
