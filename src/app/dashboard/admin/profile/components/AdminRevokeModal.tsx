"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ADMINS, Admin } from "../utils/data";
import { AlertTriangle } from "lucide-react";

export default function AdminRevokeModal() {
  const router = useRouter();
  const sp = useSearchParams();
  const revokeId = sp.get("revoke");

  const admin: Admin | undefined = ADMINS.find(
    (a) => String(a.id) === revokeId
  );

  const close = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete("revoke");
    router.push(`?${params.toString()}`);
  };

  React.useEffect(() => {
    if (!revokeId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [revokeId]);

  if (!revokeId || !admin) return null;

  const atName = `@${admin.name.replace(/\s+/g, " ").trim()}`;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      <div className="absolute left-1/2 top-1/2 w-[460px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 text-center shadow-2xl font-normal">
        <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-[#F3F4F6] flex items-center justify-center">
          <AlertTriangle size={44} className="text-[#9CA3AF]" />
        </div>

        <p className="text-lg/[26px] text-[#5D5D5D] mb-4">
          Are you sure you want to revoke{" "}
          <span className="text-[#0061FF]">{atName}</span> access?
        </p>

        <p className="text-[#5D5D5D] text-lg/[26px] mb-6">
          This action will immediately disable his login and remove their
          permissions. You can restore access later if needed.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={close}
            className="rounded-xl py-3 border border-[#E5EAF1] bg-gradient-to-b from-[#F5F7FA] to-[#E9EEF5] text-[#0F172A]"
          >
            Confirm
          </button>

          <button
            onClick={close}
            className="rounded-xl text-white py-3"
            style={{
              background:
                "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
