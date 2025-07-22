// import React from "react";
// import { StatCard } from "@/components/dashboard/stat-card";
// import publish from "../../../../public/published.svg";
// import regular from "../../../../public/regular.svg";
// import nft from "../../../../public/dolls.svg";
// import series from "../../../../public/series.svg";
// import collection from "../../../../public/collect.svg";
// import review from "../../../../public/review.svg";
// import draft from "../../../../public/draft.svg";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

// import { BookCard } from "@/components/dashboard/book-card";
// import { CollectionCard } from "@/components/dashboard/collection-card";

// const ManageContent = () => {
//   return (
//     <>
//       {/* Stats Cards */}
//       <div className="grid grid-cols-4 gap-4 mt-20 mb-8">
//         <StatCard
//           title="Published"
//           value="89"
//           icon={publish}
//           badgeColor="#096CFF"
//         />
//         <StatCard
//           title="Regular Book"
//           value="27"
//           icon={regular}
//           iconColor="#239641"
//           badgeColor="#239641"
//           iconBgColor="#e9f7ff"
//         />
//         <StatCard
//           title="NFT Editions"
//           value="7"
//           icon={nft}
//           iconColor="#822ecb"
//           badgeColor="#822ecb"
//           iconBgColor="#f6f6f6"
//         />
//         <StatCard
//           title="Series"
//           value="12"
//           icon={series}
//           badgeColor="#ed8d48"
//         />
//       </div>

//       <div className="grid grid-cols-4 gap-4 mb-8">
//         <StatCard
//           title="Collections"
//           value="12"
//           icon={collection}
//           badgeValue="12"
//           badgeColor="#0f3d99"
//         />
//         <StatCard
//           title="Under Review"
//           value="3"
//           badgeValue="12"
//           icon={review}
//           badgeColor="#dba736"
//         />
//         <StatCard
//           title="Draft"
//           value="6"
//           badgeValue="6"
//           icon={draft}
//           badgeColor="#888888"
//         />
//       </div>

//       {/* Recent Published Books */}
//       <div className="mb-8 mt-12 bg-white p-6 rounded-lg">
//         <h2 className="text-lg text-[#454545] font-semibold mb-4">
//           Your Recent Published Books
//         </h2>
//         <div className="grid grid-cols-4 gap-4">
//           {[1, 2, 3, 4].map((item) => (
//             <BookCard
//               key={item}
//               id={item.toString()}
//               title="Native Invisibility"
//               price="$10"
//               status="Published"
//               statusColor="#34a853"
//             />
//           ))}
//         </div>
//       </div>

//       {/* NFT Edition */}
//       <div className="bg-[#1212120A] p-6 rounded-lg mt-8 mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">NFT Edition</h2>
//           <Link
//             href="/nft-editions"
//             className="flex items-center text-sm text-[#5d5d5d]"
//           >
//             View All
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           <BookCard
//             id="5"
//             title="Peace and Hate"
//             price="$10"
//             status="Published"
//             statusColor="#34a853"
//             isNft
//           />
//           <BookCard
//             id="6"
//             title="Love at Night"
//             price="$10"
//             status="Under Review"
//             statusColor="#dba736"
//             isNft
//           />
//           <BookCard
//             id="7"
//             title="Dark World"
//             price="$10"
//             status="Draft"
//             statusColor="#5d5d5d"
//             isNft
//           />
//           <BookCard
//             id="8"
//             title="Peace and Hate"
//             price="$10"
//             status="Published"
//             statusColor="#34a853"
//             isNft
//           />
//         </div>
//       </div>

//   {/* Series */}
//   <div className="p-6 bg-white rounded-lg mt-8 mb-8">
//     <div className="flex items-center justify-between mb-4">
//       <h2 className="text-lg font-semibold">Series</h2>
//       <Link
//         href="/series"
//         className="flex items-center rounded-b-4xl py-2 px-4 text-sm text-[#5d5d5d]"
//       >
//         View All
//         <ChevronRight size={16} />
//       </Link>
//     </div>
//     <div className="grid grid-cols-4 gap-4">
//       <BookCard
//         id="9"
//         title="Native Invisibility"
//         price="$10"
//         status="Published"
//         statusColor="#34a853"
//         isSeries
//       />
//       <BookCard
//         id="10"
//         title="Love at Night"
//         price="$10"
//         status="Under Review"
//         statusColor="#dba736"
//         isSeries
//       />
//       <BookCard
//         id="11"
//         title="Dark World"
//         price="$10"
//         status="Draft"
//         statusColor="#5d5d5d"
//         isSeries
//       />
//       <BookCard
//         id="12"
//         title="Peace and Hate"
//         price="$10"
//         status="Published"
//         statusColor="#34a853"
//         isSeries
//       />
//     </div>
//   </div>

//   {/* Collections */}
//   <div className="bg-white p-6 rounded-lg mt-8 mb-8">
//     <div className="flex items-center justify-between mb-4">
//       <h2 className="text-lg font-semibold">Collections</h2>
//       <Link
//         href="/collections"
//         className="flex items-center text-sm text-[#5d5d5d]"
//       >
//         View All
//         <ChevronRight size={16} />
//       </Link>
//     </div>
//     <div className="grid grid-cols-4 gap-4">
//       <CollectionCard id="1" title="Top Tech Books" price="$10" />
//       <CollectionCard id="2" title="My Best Boook" price="$10" owners={1} />
//       <CollectionCard id="3" title="Most Read" price="$10" />
//       <CollectionCard id="4" title="Comics" price="$10" />
//     </div>
//   </div>
//     </>
//   );
// };

// export default ManageContent;

"use client";

import React, { useState } from "react";
import { ChevronRight, Link, Search } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { BookCard } from "@/components/dashboard/book-card";
import { CollectionCard } from "@/components/dashboard/collection-card";
import publish from "../../../../../public/published.svg";
import regular from "../../../../../public/regular.svg";
import nft from "../../../../../public/dolls.svg";
import series from "../../../../../public/series.svg";
import collection from "../../../../../public/collect.svg";
import review from "../../../../../public/review.svg";
import draft from "../../../../../public/draft.svg";
import PublishTypeModal from "./PublishTypeModal";
import BookCreationFlow from "./BookCreationFlow";

const ManageContent = () => {
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handlePublishClick = () => {
    setShowPublishModal(true);
  };

  const handleBookTypeSelect = (type: string) => {
    setShowPublishModal(false);
    if (type === "e-book") {
      setCurrentStep(1);
    }
    if (type === "nft") {
      setCurrentStep(1);
    }
    if (type === "series") {
      setCurrentStep(1);
    }
  };

  if (currentStep > 0) {
    return (
      <BookCreationFlow
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    );
  }

  return (
    <>
      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-20">
          <div className="relative w-80">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b0b0b0]"
              size={18}
            />
            <input
              type="text"
              placeholder="What are we looking for"
              className="w-full pl-10 pr-4 py-2.5 border border-[#e7e7e7] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#096cff]"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#5d5d5d]">Book Type</span>
              <button className="flex items-center gap-1 px-2 py-1.5 ">
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#5d5d5d]">Status</span>
              <button className="flex items-center gap-1 px-2 py-1.5">
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#5d5d5d]">Genre</span>
              <button className="flex items-center gap-1 px-2 py-1.5">
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#5d5d5d]">Collaborations</span>
              <button className="flex items-center gap-1 px-2 py-1.5 ">
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>
          </div>
        </div>

        <button
          className="px-10 py-2.5 bg-[#096cff] cursor-pointer text-white rounded-md font-medium"
          onClick={handlePublishClick}
        >
          Publish a Book
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mt-20 mb-8">
        <StatCard
          title="Published"
          value="89"
          icon={publish}
          badgeColor="#096CFF"
        />
        <StatCard
          title="Regular Book"
          value="27"
          icon={regular}
          iconColor="#239641"
          badgeColor="#239641"
          iconBgColor="#e9f7ff"
        />
        <StatCard
          title="NFT Editions"
          value="7"
          icon={nft}
          iconColor="#822ecb"
          badgeColor="#822ecb"
          iconBgColor="#f6f6f6"
        />
        <StatCard
          title="Series"
          value="12"
          icon={series}
          badgeColor="#ed8d48"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Collections"
          value="12"
          icon={collection}
          badgeValue="12"
          badgeColor="#0f3d99"
        />
        <StatCard
          title="Under Review"
          value="3"
          badgeValue="12"
          icon={review}
          badgeColor="#dba736"
        />
        <StatCard
          title="Draft"
          value="6"
          badgeValue="6"
          icon={draft}
          badgeColor="#888888"
        />
      </div>

      {/* Recent Published Books */}
      <div className="mb-8 mt-12 bg-white p-6 rounded-lg">
        <h2 className="text-lg text-[#454545] font-semibold mb-4">
          Your Recent Published Books
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <BookCard
              key={item}
              id={item.toString()}
              title="Native Invisibility"
              price="$10"
              status="Published"
              statusColor="#34a853"
            />
          ))}
        </div>
      </div>

      {/* NFT Edition */}
      <div className="bg-[#1212120A] p-6 rounded-lg mt-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">NFT Edition</h2>
          <Link
            href="/nft-editions"
            className="flex items-center text-sm text-[#5d5d5d]"
          >
            View All
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <BookCard
            id="5"
            title="Peace and Hate"
            price="$10"
            status="Published"
            statusColor="#34a853"
            isNft
          />
          <BookCard
            id="6"
            title="Love at Night"
            price="$10"
            status="Under Review"
            statusColor="#dba736"
            isNft
          />
          <BookCard
            id="7"
            title="Dark World"
            price="$10"
            status="Draft"
            statusColor="#5d5d5d"
            isNft
          />
          <BookCard
            id="8"
            title="Peace and Hate"
            price="$10"
            status="Published"
            statusColor="#34a853"
            isNft
          />
        </div>
      </div>

      {/* Series */}
      <div className="p-6 bg-white rounded-lg mt-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Series</h2>
          <Link
            href="/series"
            className="flex items-center rounded-b-4xl py-2 px-4 text-sm text-[#5d5d5d]"
          >
            View All
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <BookCard
            id="9"
            title="Native Invisibility"
            price="$10"
            status="Published"
            statusColor="#34a853"
            isSeries
          />
          <BookCard
            id="10"
            title="Love at Night"
            price="$10"
            status="Under Review"
            statusColor="#dba736"
            isSeries
          />
          <BookCard
            id="11"
            title="Dark World"
            price="$10"
            status="Draft"
            statusColor="#5d5d5d"
            isSeries
          />
          <BookCard
            id="12"
            title="Peace and Hate"
            price="$10"
            status="Published"
            statusColor="#34a853"
            isSeries
          />
        </div>
      </div>

      {/* Collections */}
      <div className="bg-white p-6 rounded-lg mt-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Collections</h2>
          <Link
            href="/collections"
            className="flex items-center text-sm text-[#5d5d5d]"
          >
            View All
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CollectionCard id="1" title="Top Tech Books" price="$10" />
          <CollectionCard id="2" title="My Best Boook" price="$10" owners={1} />
          <CollectionCard id="3" title="Most Read" price="$10" />
          <CollectionCard id="4" title="Comics" price="$10" />
        </div>
      </div>

      {/* Publish Type Modal */}
      {showPublishModal && (
        <PublishTypeModal
          onClose={() => setShowPublishModal(false)}
          onSelect={handleBookTypeSelect}
        />
      )}
    </>
  );
};

export default ManageContent;
