"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import EbookCreationFlow from "./_components/ebook-flow";
import NFTBookCreationFlow from "./_components/nft-flow";
import SeriesBookCreationFlow from "./_components/series-flow";

export interface IData {
    bookTitle: string;
    subtitle: string;
    language: string;
    isbn: string;
    authorName: string;
    genres: string[],
    seriesType: string,
    tags: string[],
    description: string;
    pricingOption: string
    price: string
    stark: string
    contributors: Array<{ name: string; type: string; email?: string }>,
}

const Page = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const step = Number(searchParams.get("step") ?? 1)
    const type = searchParams.get("type") ?? ""

    const updateSearchParams = useCallback((type: string, step: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("type", type);
        params.set("step", step.toString());
        router.push(pathname + '?' + params.toString())
    }, [searchParams, pathname, router,])

    const handleNext = () => {
        if (step < 3) {
            updateSearchParams(type, step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            updateSearchParams(type, step - 1);
        } else {
            updateSearchParams(type, 0);
        }
    };

    return (
        <>
            {type === "Series" ? <SeriesBookCreationFlow handleBack={handleBack} handleNext={handleNext} step={step} /> : type === "Exclusive NFT Edition" ? <NFTBookCreationFlow handleBack={handleBack} handleNext={handleNext} step={step} /> : <EbookCreationFlow handleBack={handleBack} handleNext={handleNext} step={step} />
            }
        </>
    );
};

export default Page;
