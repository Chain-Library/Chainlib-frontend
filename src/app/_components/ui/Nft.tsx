import BookSection from "@/app/_components/ui/BookSection";
import { newReleases, nftEditions, trendingBooksHome } from "@/data";

export default function ELibraryDisplay() {
  return (
    <div className="max-w-6xl mx-auto p-4 px-6 md:px-15">
      <BookSection
        title="New Release"
        description="Fresh from the minds of our authors explore the latest books"
        books={newReleases}
      />

      <BookSection
        title="Trending Books"
        description="Discover what everyone's reading right now"
        books={trendingBooksHome}
      />

      <div className="bg-gray-200 p-6 rounded-lg mb-16">
        <BookSection
          title="Exclusive NFT Edition"
          description="Own limited-edition digital books with special perks bonus content, unique artwork, and collectible value."
          books={nftEditions}
        />
      </div>
    </div>
  );
}
