import Authors from "@/app/_components/ui/Authors";
import Banner from "@/app/_components/ui/Banner";
import Community from "@/app/_components/ui/Community";
import Hero from "@/app/_components/ui/Hero";
import Nft from "@/app/_components/ui/Nft";
import Partners from "@/app/_components/ui/Partners";
import Tagline from "@/app/_components/ui/Tagline";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tagline />
      <Nft />
      <Banner />
      <Authors />
      <Community />
      <Partners />
      <Footer />
    </>
  );
}

