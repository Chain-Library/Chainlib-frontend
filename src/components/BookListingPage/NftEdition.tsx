"use client"


import { bookData } from "@/lib/MockData";
import BookCard from "../reader/BookCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function NftEdition() {
  const NftEdition = bookData.filter(book => book.isNFT);



  return (
    <section className="bg-[#000B2133] rounded-lg w-full py-7  px-2 md:px-5 flex flex-col items-start gap-[25px] md:gap-[50px] pb-30">
      <div className="block">
        <h2 className="text-[#0F265C] font-bold text-2xl md:text-[32px]">
          Exclusive NFT Edition
        </h2>
        <p className="text-[#000B21] text-lg font-normal">
          Own limited-edition digital books with special perks, bonus content, unique artwork, and collectible value.
        </p>
      </div>

      <Splide
        options={{
          type: 'loop',
          perPage: 4,
          gap: '24px',
          arrows: false,
          pagination: true,
          autoplay: true,
          interval: 3000,
          drag: 'free',
          breakpoints: {
            768: { perPage: 2 },
            1024: { perPage: 3 },
            1290: { perPage: 3 },
          },
        }}
        aria-label="NFT Edition Books"
        className="w-full"
      >
        {NftEdition.map((book, index) => (
          <SplideSlide key={index}>
            <BookCard nftSection={true} bookData={book} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
