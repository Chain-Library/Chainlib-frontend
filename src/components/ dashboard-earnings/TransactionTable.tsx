import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { transactionHistoryData } from '@/lib/MockData';
import FilterBar from './FilterBar';
import LoanRow from './LoanRow';
import MobileTable from './MobileTable';
import useIsMobile from '@/lib/hooks/useIsMobile';


export default function TransactionTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactionHistoryData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const generatePagination = () => {
    const delta = 1;
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push('...');

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push('...');
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="bg-white mt-4 w-full md:flex-1 h-full flex flex-col">
        <FilterBar />

        <div className="overflow-x-auto mt-6 flex-1">
          <table className="min-w-full text-sm text-left">
            <thead className="text-[#5D5D5D] border-b border-gray-600 bg-[#EDF7FF]">
              <tr className="uppercase text-[10px] md:text-xs font-normal">
                <th className="py-3 px-2 md:px-4">Transaction ID</th>
                <th className="py-3 px-2 md:px-4">Transaction Type</th>
                <th className="py-3 px-2 md:px-4">Amount (STRK)</th>
                <th className="py-3 px-2 md:px-4">Status</th>
                <th className="py-3 px-2 md:px-4">Date</th>
                <th className="py-3 px-2 md:px-4"></th>
              </tr>
            </thead>
            <tbody>
              {transactionHistoryData.slice(startIndex, endIndex).map((loanDetails, i) => (
                <LoanRow tableData={loanDetails} key={i} />
              ))}
            </tbody>
          </table>

          {/* Pagination Footer */}
          <div className="text-center text-[#888888] text-sm font-normal mt-6 flex items-center flex-col md:flex-row justify-between gap-10">
            <p>
              Showing {startIndex + 1} to{' '}
              {endIndex > transactionHistoryData.length ? transactionHistoryData.length : endIndex} of{' '}
              {transactionHistoryData.length}
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                disabled={currentPage <= 1}
                className="p-2 disabled:opacity-30"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                className="p-2 disabled:opacity-30"
              >
                <ChevronRight />
              </button>

              <ul className="flex items-center gap-1">
                {generatePagination().map((page, index) => (
                  <li
                    key={index}
                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                    className={`px-2 py-1 rounded cursor-pointer text-sm ${page === currentPage
                        ? 'text-[#096CFF]'
                        : typeof page === 'number'
                          ? 'text-[#888888] hover:text-[#096CFF]'
                          : 'cursor-default text-[#888888]'
                      }`}
                  >
                    {page}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <MobileTable
      transactionHistoryData={transactionHistoryData}
      startIndex={startIndex}
      endIndex={endIndex}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePrev={handlePrev}
      handleNext={handleNext}
      generatePagination={generatePagination}
      setCurrentPage={setCurrentPage}
    />
  );
}
