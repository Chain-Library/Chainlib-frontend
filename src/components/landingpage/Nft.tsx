import BookSection from "@/components/landingpage/BookSection";

export default function ELibraryDisplay() {
  const newReleases = [
    {
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: "10",
      rating: "4.5",
      verified: true,
    },
    {
      title: "Creative Minds",
      author: "Jane Doe",
      price: "12",
      rating: "4.8",
      verified: true,
    },
    {
      title: "Dreamscape",
      author: "John Smith",
      price: "15",
      rating: "4.9",
      verified: true,
    },
    {
      title: "Hidden Voices",
      author: "Mary Lane",
      price: "9",
      rating: "4.7",
      verified: true,
    },
    {
      title: "Beyond Borders",
      author: "Leo Thomas",
      price: "13",
      rating: "4.6",
      verified: true,
    },
  ];

  const trendingBooks = [
    {
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: "10",
      rating: "4.5",
      verified: true,
    },
    {
      title: "Creative Minds",
      author: "Jane Doe",
      price: "12",
      rating: "4.8",
      verified: true,
    },
    {
      title: "Dreamscape",
      author: "John Smith",
      price: "15",
      rating: "4.9",
      verified: true,
    },
    {
      title: "Hidden Voices",
      author: "Mary Lane",
      price: "9",
      rating: "4.7",
      verified: true,
    },
    {
      title: "Beyond Borders",
      author: "Leo Thomas",
      price: "13",
      rating: "4.6",
      verified: true,
    },
  ];
  const nftEditions = [
    {
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: "10",
      rating: "4.5",
      verified: true,
    },
    {
      title: "Creative Minds",
      author: "Jane Doe",
      price: "12",
      rating: "4.8",
      verified: true,
    },
    {
      title: "Dreamscape",
      author: "John Smith",
      price: "15",
      rating: "4.9",
      verified: true,
    },
    {
      title: "Hidden Voices",
      author: "Mary Lane",
      price: "9",
      rating: "4.7",
      verified: true,
    },
    {
      title: "Beyond Borders",
      author: "Leo Thomas",
      price: "13",
      rating: "4.6",
      verified: true,
    },
  ];

  return (
    <div className="px-[100px] p-4">
      <BookSection
        title="New Release"
        description="Fresh from the minds of our authors explore the latest books"
        books={newReleases}
      />

      <BookSection
        title="Trending Books"
        description="Discover what everyone's reading right now"
        books={trendingBooks}
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
