"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  total: number;
  page: number;
  pageSize: number;
};

export default function AdminTablePagination({ total, page, pageSize }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const clampedPage = Math.min(Math.max(1, page), totalPages);
  const from = total === 0 ? 0 : (clampedPage - 1) * pageSize + 1;
  const to = Math.min(clampedPage * pageSize, total);

  const pushWith = (next: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") params.delete(k);
      else params.set(k, String(v));
    });
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="py-3 px-6 flex justify-between items-center">
      <div className="text-[#888888]">
        {total === 0 ? "No results" : `Showing ${from} to ${to} of ${total}`}
      </div>

      <div className="flex items-center gap-x-2 text-[#B0B0B0]">
        <button
          disabled={clampedPage <= 1}
          onClick={() => pushWith({ page: clampedPage - 1 })}
          className="flex items-center gap-x-1 border border-[#E7E7E7] py-[6px] px-3 rounded-full disabled:opacity-50"
        >
          <ChevronLeft /> Prev
        </button>
        <button
          disabled={clampedPage >= totalPages}
          onClick={() => pushWith({ page: clampedPage + 1 })}
          className="flex items-center gap-x-1 border border-[#E7E7E7] py-[6px] px-3 rounded-full disabled:opacity-50"
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
}
