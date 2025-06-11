"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BackButton({ type }: { type?: string }) {
    const navigate = useRouter()
    const searchParams = useSearchParams()

    const handleBack = () => {
        const step = Number(searchParams.get("step")) ?? 1
        if (type === "auth" && step > 1) {
            const params = new URLSearchParams(searchParams);
            params.set("step", (step - 1).toString());
        }
        navigate.back()
    };
    return (
        <button
            onClick={handleBack}
            className="inline-flex ring-1 ring-neutral-100 space-x-2 items-center text-title-medium text-gray-500 mb-12 rounded-base pl-4 pr-6 py-2"
        >
            <ArrowLeft size={20} />
            <span>Back</span>
        </button>)
}
