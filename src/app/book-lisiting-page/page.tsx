import ExploreBooks from "@/components/BookListingPage/ExploreBooks";
import NewRelease from "@/components/BookListingPage/NewRelease";
import NftEdition from "@/components/BookListingPage/NftEdition";
import Trending from "@/components/BookListingPage/Trending";



export default function Page() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6 " >
            <section className="w-full text-center  py-10 px-8 flex items-center justify-center  " >
                <h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px] " >Dive Into a <span className="text-[#096CFF] "  > Wide Range of Books</span> Across Genres</h1>
            </section>
            <div className="px-[4%] w-full flex flex-col gap-22 " >
                <NewRelease />
                <Trending />
                <NftEdition/>
                <ExploreBooks />
            </div>
        </div>
    )
}