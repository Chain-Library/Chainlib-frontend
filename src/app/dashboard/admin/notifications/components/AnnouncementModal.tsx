"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Bold,
  Italic,
  Underline,
  Image as ImageIcon,
  Link as LinkIcon,
  Undo2,
} from "lucide-react";

export default function AnnouncementModal() {
  const router = useRouter();
  const sp = useSearchParams();
  const open = sp.get("announce") === "1";

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const close = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete("announce");
    router.push(`?${params.toString()}`);
  };

  // lock scroll while open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] max-w-[95vw] bg-white rounded-2xl p-6 shadow-2xl">
        <button
          onClick={close}
          className="w-10 h-10 rounded-lg border border-[#E5E5E5] flex items-center justify-center mb-4"
          aria-label="Close"
        >
          <ArrowLeft />
        </button>

        <div className="rounded-xl">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border-[1px] border-[#D1D1D1] rounded-lg px-4 py-3 text-xl sm:text-2xl font-semibold outline-none placeholder:text-[#B7BCC2]"
          />

          <div className="flex items-center gap-4 text-[#6B7280] px-1 py-2">
            <Bold size={18} />
            <Italic size={18} />
            <Underline size={18} />
          </div>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
            rows={6}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 outline-none placeholder:text-[#9AA0A6]"
          />

          <div className="flex items-center gap-4 text-[#6B7280] px-1 py-2">
            <Bold size={18} />
            <Italic size={18} />
            <Underline size={18} />
            <span className="mx-1" />
            <span className="text-sm">H1</span>
            <span className="text-sm">H2</span>
            <ImageIcon size={18} />
            <LinkIcon size={18} />
            <Undo2 size={18} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={close}
            className="rounded-xl bg-gradient-to-b from-[#F5F7FA] to-[#E9EEF5] text-[#0F172A] py-3 border border-[#E5EAF1]"
          >
            Cancel
          </button>
          <button
            onClick={close}
            className="rounded-xl text-white py-3"
            style={{
              background:
                "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
