"use client";
import React, { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AdminTableHeader from "./AdminTableHeader";
import AdminTablePagination from "./AdminTablePagination";
import AdminTableRow from "./AdminTableRow";
import { ADMINS } from "../utils/data";
import AdminEditModal from "./AdminEditModal";
import AdminRevokeModal from "./AdminRevokeModal";

type StatusTab = "all" | "active" | "revoked";

export default function AdminTable() {
  const sp = useSearchParams();
  const router = useRouter();

  const status = (sp.get("status") as StatusTab) || "all";
  const page = Number(sp.get("page") || 1);
  const pageSize = Number(sp.get("pageSize") || 5);

  const pushWith = (next: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(sp.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") params.delete(k);
      else params.set(k, String(v));
    });
    router.push(`?${params.toString()}`);
  };

  const setStatus = (next: StatusTab) => {
    const params: Record<string, string | number | undefined> = {
      page: 1,
    };
    if (next !== "all") params.status = next;
    else params.status = undefined;

    pushWith(params);
  };

  const filtered = useMemo(() => {
    if (status === "active") return ADMINS.filter((a) => a.status === "active");
    if (status === "revoked")
      return ADMINS.filter((a) => a.status === "revoked");
    return ADMINS;
  }, [status]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const sliceStart = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(sliceStart, sliceStart + pageSize);

  const isActive = (t: StatusTab) => status === t;

  return (
    <div className="bg-white p-4 rounded-[12px]">
      <button
        className="py-3 px-8 rounded-[12px] text-white mb-6"
        style={{
          background: "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)",
        }}
      >
        Create Admin
      </button>

      <div className="border border-[#E7E7E7] rounded-[8px]">
        <div className="bg-[#F2F2F2] py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => setStatus("all")}
              className={`py-2 px-4 rounded-[8px] ${
                isActive("all") ? "text-white" : "text-[#5D5D5D]"
              }`}
              style={{
                background: isActive("all")
                  ? "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)"
                  : "transparent",
              }}
            >
              All
            </button>
            <button
              onClick={() => setStatus("active")}
              className={`py-2 px-4 rounded-[8px] ${
                isActive("active") ? "text-white" : "text-[#5D5D5D]"
              }`}
              style={{
                background: isActive("active")
                  ? "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)"
                  : "transparent",
              }}
            >
              Active
            </button>
            <button
              onClick={() => setStatus("revoked")}
              className={`py-2 px-4 rounded-[8px] ${
                isActive("revoked") ? "text-white" : "text-[#5D5D5D]"
              }`}
              style={{
                background: isActive("revoked")
                  ? "linear-gradient(180deg, #096CFF 40.7%, #054199 180.61%)"
                  : "transparent",
              }}
            >
              Revoked
            </button>
          </div>
          <div />
        </div>

        <div className="flex flex-col gap-y-2">
          <AdminTableHeader />

          {pageItems.length === 0 ? (
            <div className="py-8 px-4 text-[#888]">No admins found.</div>
          ) : (
            pageItems.map((item) => <AdminTableRow key={item.id} item={item} />)
          )}

          <AdminTablePagination
            total={total}
            page={safePage}
            pageSize={pageSize}
          />
        </div>
      </div>
      <AdminEditModal />
      <AdminRevokeModal />
    </div>
  );
}
