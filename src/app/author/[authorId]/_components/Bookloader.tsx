
export default function Bookloader() {
    return (
        <div className="sm:gap-x-4 lg:gap-x-10 gap-6 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    )
}

function BookCard() {
    return (
        <div className="animate-pulse rounded-base overflow-hidden md:shadow-small border border-neutral-100 p-4 pt-8 min-w-54">
            <div className="rounded-small relative bg-gray-200 flex mx-auto justify-center items-center size-44 md:size-36 mb-8" />

            <h3 className="rounded-small font-semibold text-gray-800 bg-gray-200 h-6 w-32 mb-1"></h3>

            <div className="rounded-small flex h-5 w-30 bg-gray-200 items-center" />

            <div className="rounded-small flex h-6 justify-between items-center mt-2">
                <p className="rounded-small font-bold bg-gray-200 w-7 h-full"></p>
                <div className="rounded-small w-10 h-full flex bg-gray-200 items-center" />
            </div>
        </div>)

}
