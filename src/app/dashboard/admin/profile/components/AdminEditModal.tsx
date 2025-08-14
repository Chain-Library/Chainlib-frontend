"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ADMINS, Admin } from "../utils/data";
import { Wallet } from "lucide-react";

const ROLES = ["Super Admin", "Admin", "Content Admin", "Moderator"] as const;

type Role = (typeof ROLES)[number];

export default function AdminEditModal() {
  const router = useRouter();
  const sp = useSearchParams();
  const editId = sp.get("edit");
  const admin: Admin | undefined = ADMINS.find((a) => String(a.id) === editId);
  const [email, setEmail] = React.useState(admin?.email);
  const [role, setRole] = React.useState<Role>(
    (admin?.role as Role) ?? "Admin"
  );
  const close = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete("edit");
    router.push(`?${params.toString()}`);
  };

  React.useEffect(() => {
    if (!editId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [editId]);

  if (!editId || !admin) return null;

  const wallet = "0xA3B4...29ABn";
  const createdAt = "16 May, 2025";

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="absolute left-1/2 top-1/2 w-[670px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-[#E5E7EB] mb-3" />
          <div className="text-xl font-semibold">{admin.name}</div>
          <div className="text-sm text-[#6B7280]">Created {createdAt}</div>
          <div className="mt-2 px-3 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280] text-sm">
            {role}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#6B7280]">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#6B7280]">Authorized wallet address</label>
            <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB]">
              <Wallet size={18} className="text-[#1D4ED8]" />
              <input
                value={wallet}
                disabled
                className="flex-1 bg-transparent outline-none text-[#6B7280]"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[#6B7280]">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
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
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}
