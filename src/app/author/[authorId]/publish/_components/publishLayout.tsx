"use client"

import { pubType } from "@/types/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useCallback, useState } from "react";
import { Header } from "../../_components/header";
import PublishTypeModal from "../../_components/PublishTypeModal";
import BookPreviewModal from "./book-preview-modal";
import BookUpload from "./BookUpload";
import StepIndicator from "./StepIndicator";

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

const PublishLayout = ({ children }: { children: ReactNode }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const step = Number(searchParams.get("step") ?? 1)
    const type = searchParams.get("type") ?? ""

    const [openPreview, setOpenPreview] = useState(false);

    const updateSearchParams = useCallback((type: string, step: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("type", type);
        params.set("step", step.toString());
        router.push(pathname + '?' + params.toString())
    }, [searchParams, pathname, router,])

    const handleBookTypeSelect = (val: pubType) => {
        updateSearchParams(val, 1)
    };

    return (
        <>
            <Header button title="Manage Content" onClick={() => router.push(pathname.replace("publish", "manage-content"))
            } />

            {type ? (
                <>
                    <StepIndicator currentStep={step} />

                    <div className="mt-5 xl:mr-27 lg:mr-8">
                        <h2 className="text-2xl font-semibold mb-6">{type}</h2>
                        <div className="flex flex-col md:grid grid-cols-11 gap-10 w-full mx-auto">
                            {/* Book Cover Upload */}
                            <div className="w-80 mx-auto md:w-full md:col-span-4">
                                <BookUpload
                                    supportedFormats="Supported format: JPEG & PNG"
                                    acceptedFileTypes={["image/jpeg", "image/png"]}
                                />
                                {step === 3 && <button
                                    onClick={() => setOpenPreview(true)}
                                    className="w-full flex items-center justify-center space-x-2 cursor-pointer border border-[#888888] rounded-xl py-4 px-8 mt-6 text-[#888888]"
                                >
                                    <div className="relative size-5">
                                        <Image src="/play.svg" alt="play Icon" fill />
                                    </div>
                                    <span>Preview Book</span>
                                </button>}
                            </div>

                            {/* Form Content */}
                            {children}

                            {/* Book Preview Modal */}
                            <BookPreviewModal
                                isOpen={openPreview}
                                onClose={() => setOpenPreview(false)}
                            // bookTitle={formData.bookTitle}
                            // authorName={formData.authorName}
                            />
                        </div>
                    </div>
                </>) : <PublishTypeModal onSelect={handleBookTypeSelect} />

            }
        </>
    );
};

export default PublishLayout;

// {/* <div className="flex flex-col md:flex-row gap-10 w-full mx-auto">
//                             {/* Book Cover Upload */}
//                             <div className="w-80 mx-auto md:w-85">
//                                 <BookUpload
//                                     supportedFormats="Supported format: JPEG & PNG"
//                                     acceptedFileTypes={["image/jpeg", "image/png"]}
//                                 />
//                                 {step === 3 && <button
//                                     onClick={() => setOpenPreview(true)}
//                                     className="w-full flex items-center justify-center space-x-2 cursor-pointer border border-[#888888] rounded-xl py-4 px-8 mt-6 text-[#888888]"
//                                 >
//                                     <div className="relative size-5">
//                                         <Image src="/play.svg" alt="play Icon" fill />
//                                     </div>
//                                     <span>Preview Book</span>
//                                 </button>}
//                             </div>

//                             {/* Form Content */}
//                             {children}

//                             {/* Book Preview Modal */}
//                             <BookPreviewModal
//                                 isOpen={openPreview}
//                                 onClose={() => setOpenPreview(false)}
//                             // bookTitle={formData.bookTitle}
//                             // authorName={formData.authorName}
//                             />
// </div> */}