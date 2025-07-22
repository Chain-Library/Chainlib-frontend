"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { TransactionHistoryInterface } from "@/lib/interfaces/TransactionIHistoryInterface"
import MobileLoanRow from "./MobileLoanRow"

interface MobileTableProps {
    transactionHistoryData: TransactionHistoryInterface[]
    startIndex: number
    endIndex: number
    currentPage: number
    totalPages: number
    handlePrev: () => void
    handleNext: () => void
    generatePagination: () => (number | string)[]
    setCurrentPage: (page: number) => void
}

export default function MobileTable({
    transactionHistoryData,
    startIndex,
    endIndex,
    currentPage,
    totalPages,
    handlePrev,
    handleNext,
    generatePagination,
    setCurrentPage,
}: MobileTableProps) {
    return (
        <div className="bg-white mt-4 w-full flex flex-col">
            <div className="overflow-x-auto">
                <table className="min-w-[300px] text-sm text-left w-full">
                    <thead className="text-[#5D5D5D] border-b border-gray-600 bg-[#EDF7FF]">
                        <tr className="uppercase text-[10px] font-normal">
                            <th className="py-3 px-2">Transaction Type</th>
                            <th className="py-3 px-2">Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistoryData.slice(startIndex, endIndex).map((loanDetails, i) => (
                            <MobileLoanRow tableData={loanDetails} key={i} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Pagination Footer */}
            <div className="text-center text-[#888888] text-sm font-normal mt-6 flex items-center flex-col justify-center gap-4">
                <p className="text-xs">
                    Showing {startIndex + 1} to{" "}
                    {endIndex > transactionHistoryData.length ? transactionHistoryData.length : endIndex} of{" "}
                    {transactionHistoryData.length}
                </p>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage <= 1}
                        className="p-2 disabled:opacity-30 flex items-center justify-center"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <ul className="flex items-center gap-1">
                        {generatePagination().map((page, index) => (
                            <li
                                key={index}
                                onClick={() => typeof page === "number" && setCurrentPage(page)}
                                className={`px-2 py-1 rounded cursor-pointer text-xs ${page === currentPage
                                        ? "text-[#096CFF] bg-[#096CFF]/10"
                                        : typeof page === "number"
                                            ? "text-[#888888] hover:text-[#096CFF]"
                                            : "cursor-default text-[#888888]"
                                    }`}
                            >
                                {page}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleNext}
                        disabled={currentPage >= totalPages}
                        className="p-2 disabled:opacity-30 flex items-center justify-center"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}
