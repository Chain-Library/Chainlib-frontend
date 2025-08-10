"use client";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Header } from "@/components/dashboard/header";
import { ArrowLeft } from "lucide-react";
import { COMMUNITIES } from "../utills/data";
import DiscussionsTab from "./components/DiscussionsTab";
import DiscussionSummary from "./components/DiscussionSummary";

type TabKey = "discussion" | "live" | "about" | "members";
const TABS: TabKey[] = ["discussion", "live", "about", "members"];

export default function Page() {
  const router = useRouter();
  const sp = useSearchParams();
  const params = useParams<{ id: string }>();

  const numericId = Number(params.id);
  const community = COMMUNITIES.find((c) => c.id === numericId);

  // tabs from ?tab=
  const tabParam = (sp.get("tab") as TabKey) || "discussion";
  const tab: TabKey = TABS.includes(tabParam) ? tabParam : "discussion";

  const setTab = (next: TabKey) => {
    const qp = new URLSearchParams(sp.toString());
    if (next === "discussion") qp.delete("tab");
    else qp.set("tab", next);
    router.push(`?${qp.toString()}`);
  };

  if (!community) {
    return (
      <>
        <Header title="Community and Events" />
        <div className="p-6">
          <button
            onClick={() => router.back()}
            className="mb-3 inline-flex items-center gap-2 text-[#3A3A3A]"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div className="bg-white p-6 rounded-[8px]">Community not found.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header title={`Community and Events / ${community.name}`} />
      <div className="p-6">
        <button
          onClick={() => router.push("/dashboard/admin/community-and-events")}
          className="mb-3 inline-flex items-center gap-2 text-[#3A3A3A]"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <DiscussionSummary community={community} />

        <div
          className="mt-4 rounded-[8px] bg-white p-4"
          style={{ boxShadow: "0px 6px 6px 0px #1212120A" }}
        >
          <div className="flex gap-2 items-center mb-6">
            <button
              onClick={() => setTab("discussion")}
              className={`py-2 px-4 rounded-[8px] text-[#5D5D5D]  ${
                tab === "discussion" && " font-bold bg-[#F6F6F6]"
              }`}
            >
              Discussion
            </button>
            <button
              onClick={() => setTab("live")}
              className={`py-2 px-4 rounded-[8px] text-[#5D5D5D] flex items-center gap-x-2 ${
                tab === "live" && " font-bold bg-[#F6F6F6]"
              }`}
            >
              Live
              {community.liveNow && (
                <span className="w-4 h-4 text-[11px] flex items-center justify-center bg-[#FF5C5C] text-white rounded-full">
                  1
                </span>
              )}
            </button>
            <button
              onClick={() => setTab("about")}
              className={`py-2 px-4 rounded-[8px] text-[#5D5D5D]  ${
                tab === "about" && " font-bold bg-[#F6F6F6]"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setTab("members")}
              className={`py-2 px-4 rounded-[8px] text-[#5D5D5D]  ${
                tab === "members" && " font-bold bg-[#F6F6F6]"
              }`}
            >
              Members
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {tab === "discussion" && <DiscussionsTab />}

            {tab === "live" && (
              <div className="text-[#555]">
                {community.liveNow
                  ? "A live session is currently running."
                  : "No live sessions right now."}
              </div>
            )}

            {tab === "about" && (
              <div className="text-[#444] leading-7">
                {community.description}
              </div>
            )}

            {tab === "members" && (
              <div className="text-[#666]">Members list coming soon…</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
