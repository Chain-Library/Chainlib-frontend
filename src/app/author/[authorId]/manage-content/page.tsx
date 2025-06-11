"use client";

import CustomLink from "@/app/_components/CustomLink";
import SearchBar from "@/app/_components/SearchBar";
import { collections, filterOptions, nftBooks, recentDashBoardBooks, seriesBooks, statsCardsBottom, statsCardsTop } from "@/data";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { pubType } from "@/types/types";
import { ChevronRight, Filter, FilterX, MoveRight } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { Ref, Suspense, useCallback, useState } from "react";
import { BookCard } from "../_components/book-card";
import { CollectionCard } from "../_components/collection-card";
import { Header } from "../_components/header";
import ProfileCompletionAlert from "../_components/ProfileCompletionAlert";
import ProfileCompletionModal from "../_components/ProfileCompletionModal";
import PublishTypeModal from "../_components/PublishTypeModal";
import { StatCard } from "../_components/stat-card";

interface Book {
  id: string;
  title: string;
  price: string;
  status: string;
  statusColor: string;
}

interface ExtraProps {
  isNft?: boolean;
  isSeries?: boolean;
}

interface SectionProps {
  title: string;
  length: number;
  linkHref?: string;
  className?: string;
  children: React.ReactNode;
}

const Page = ({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const router = useRouter();
  const pathname = usePathname()
  const searchParam = searchParams
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(true);
  const [showProfileAlert] = useState(true);

  const handlePublishClick = () => setShowPublishModal(true);

  const filterRef = useOutsideClick(() => setFilter(false)) as Ref<SVGSVGElement>

  const updateSearchParams = useCallback((type: pubType, step: number) => {
    // Ensure we are handling the right type here
    const params = new URLSearchParams(
      searchParam instanceof URLSearchParams ? searchParam.toString() : ''
    );
    params.set("type", type);
    params.set("step", step.toString());

    router.push(pathname.replace("manage-content", "publish") + '?' + params.toString());
  }, [searchParam, pathname, router]);

  const handleBookTypeSelect = (val: pubType) => {
    updateSearchParams(val, 1)
    setShowPublishModal(false);
  };

  const renderBookCards = (books: Book[], extraProps: ExtraProps = {}) =>
    books.map((book) => <BookCard key={book.id} {...book} {...extraProps} />);

  return (
    <div className="max-w-6xl">
      <Header title="Manage Content" />
      {/* Search and Filters */}
      <section className="flex items-center justify-between w-full py-4 px-6">
        <div className="relative w-54 hidden md:block">
          <SearchBar placeholder="What are we looking for" />
        </div>

        <div className="relative">
          <div className={cn("md:hidden transition-all duration-300 ease-in-out p-3 border border-neutral-400 absolute bg-background -top-6 left-0 flex flex-col justify-start gap-y-3 rounded-base overflow-hidden")}>
            {!filter ? <Filter ref={filterRef} onClick={() => { setFilter(() => true); console.log("yes") }} size={24} /> : <FilterX ref={filterRef} onClick={() => { setFilter(() => false); console.log("no") }} size={24} />}

            <ul className={cn("flex-col justify-end gap-y-2 bg-background transition-all duration-300 ease-in-out", filter ? "size-full flex" : "size-0 hidden")}>
              {filterOptions.map((label) => (
                <li key={label} className="flex items-center gap-1">
                  <span className="text-sm text-[#5d5d5d]">{label}</span>
                  <button className="flex items-center gap-1 px-2 py-1.5">
                    <ChevronRight className="rotate-90" size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div> </div>

        <div className="md:flex hidden  items-center gap-3">
          {filterOptions.map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-sm text-[#5d5d5d]">{label}</span>
              <button className="flex items-center gap-1 px-2 py-1.5">
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>
          ))}
        </div>

        <button
          className="px-10 py-2.5 bg-[#096cff] cursor-pointer text-white rounded-md font-medium"
          onClick={handlePublishClick}
        >
          Publish a Book
        </button>
      </section>

      <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 md:p-8 overflow-hidden mx-6">
        <div className="absolute bottom-0 right-0 md:right-1/4 w-54 md:w-80 h-24">
          <Image
            src="/headerEllipse.svg"
            alt="Decorative background"
            fill
            style={{ objectFit: "contain" }}
            className="scale-150 pointer-events-none select-none"
            priority
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-2">
            <span>Your Words</span>
            <br className="hidden md:block" />
            <span> Deserve</span>
            <br className="md:hidden" />
            <span> the World</span>

          </h1>
        </div>
      </div>

      <div className="px-6">
        <ProfileCompletionAlert label="Complete Your Profile" showProfileAlert={showProfileAlert} setShowProfileModal={setShowProfileModal} />
      </div>


      {/* Stats Cards */}
      {
        isLoading ? <StatsCardLoader length={4} /> : <section className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6 md:gap-4 px-6">
          {statsCardsTop.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </section>
      }


      {
        isLoading ? <StatsCardLoader length={3} />
          : <section className="grid px-6 grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-2">
            {statsCardsBottom.map((card) => (
              <StatCard key={card.title} {...card} />
            ))}
          </section>
      }

      {/* Recent Published Books */}
      <Section length={8} className="my-15 px-6" title="Your Recent Published Books" >
        {renderBookCards(recentDashBoardBooks)}
      </Section>

      {/* NFT Edition */}
      <Section className="bg-[#0F265C]" length={4} title="NFT Edition" linkHref="/publications">
        {renderBookCards(nftBooks, { isNft: true })}
      </Section>

      {/* Series */}
      <Section length={4} className="my-15" title="Series" linkHref="/publications">
        {renderBookCards(seriesBooks, { isSeries: true })}
      </Section>

      {/* Collections */}
      <Section length={4} className="mb-15" title="Collections" linkHref="/publications">
        {collections.map((col) => (
          <CollectionCard key={col.id} {...col} />
        ))}
      </Section>

      {/* Publish Type Modal */}
      {
        showPublishModal && (
          <PublishTypeModal onClose={() => setShowPublishModal(false)} onSelect={handleBookTypeSelect} />
        )
      }

      {/* Profile Completion Modal */}
      <ProfileCompletionModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div >
  );
};

// Reusable Section component
const Section: React.FC<SectionProps> = ({ title, linkHref, children, className, length }) => (
  <div className={cn("p-6 mx-6 bg-white shadow-small rounded-lg", className)}>
    <div className="flex items-center justify-between mb-8">
      <h2 className={`${className === "bg-[#0F265C]" ? "text-[#EDF7FF]" : "text-neutral-800"} text-body-large font-bold`}>{title}</h2>
      {linkHref && (
        <CustomLink route={linkHref} classname="hidden md:flex items-center gap-2 px-2 py-1 rounded-large text-body-small text-neutral-300 font-medium border border-neutral-100">
          View All
          <MoveRight size={16} />
        </CustomLink>
      )}
    </div>
    <Suspense fallback={<BookCardLoader length={length} />} >
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:overflow-hidden lg:grid-cols-4">
        {children}
      </div>
    </Suspense>

    {linkHref && (<CustomLink route={linkHref} classname="flex md:hidden mx-auto mt-4 items-center gap-2 px-8 py-2.5 rounded-small text-body-small text-neutral-300 font-medium border border-neutral-100">
      View All
      <MoveRight size={16} />
    </CustomLink>)}
  </div>
);

function BookCardLoader({ length }: { length: number }) {
  return (
    <div className="grid no-scrollbar overflow-x-scroll grid-flow-col snap-start sm:grid-cols-[auto] lg:grid-cols-4 md:grid-flow-row md:grid-cols-3 md:overflow-hidden gap-4">
      {Array.from({ length }).map((x, index: number) => <div key={index} className="animate-pulse p-6 pt-8 md:p-4 xl:p-6 min-w-58 md:min-w-[20%] rounded-base border border-neutral-100 ">
        <div className="bg-gray-200 mx-auto max-w-46 size-44 md:size-[10vw] mb-8" />

        <div className="mt-3 w-full">
          <div className="flex items-center gap-1 mb-1 w-full">
            <span className="bg-gray-200 rounded-small h-7 w-3/5"></span>
            <span className="bg-gray-200 rounded-small h-7 w-8"></span>
          </div>

          <h3 className="bg-gray-200 my-2 rounded-small w-full h-7"></h3>

          <div className="bg-gray-200 h-6 rounded-small w-12" />

          <div className="flex items-center justify-between xl:justify-start xl:space-x-5 mt-2 w-full">
            <div className="rounded-small w-8 h-4 bg-gray-200" />

            <div className="rounded-small w-8 h-4 bg-gray-200" />

            <div className="rounded-small w-8 h-4 bg-gray-200" />

            <div className="bg-gray-200 w-8 h-4 rounded-small" />
          </div>
        </div>
      </div>)}
    </div>
  )
}

function StatsCardLoader({ length }: { length: number }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-2">
      {Array.from({ length }).map((x, index) => <div key={index} className="bg-white animate-pulse p-4 size-full flex flex-col justify-between rounded-lg border border-[#e7e7e7] shadow-small">
        <div className="flex items-center justify-between mb-2 w-full">
          <div className="gap-y-1 flex flex-col w-full">
            <div className="rounded-small bg-gray-200 w-3/4 h-5.5" />
            <div className="rounded-small bg-gray-200 w-1/2 h-5.5" />
          </div>
          <div className="size-8 bg-gray-200 rounded-full" />
        </div>
        <div className="rounded-small bg-gray-200 h-8 w-1/3" />
      </div>)}
    </section>
  )
}

export default Page;
