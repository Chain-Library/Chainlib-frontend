import Hero from "@/components/landingpage/Hero";
import Tagline from "@/components/landingpage/Tagline";
import Nft from "@/components/landingpage/Nft";
import Authors from "@/components/landingpage/Authors";
import Banner from "@/components/landingpage/Banner";
import Community from "@/components/landingpage/Community";
import Partener from "@/components/landingpage/Partener";
import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";

export default function landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <Tagline />
      <Nft />
      <Banner />
      <Authors />
      <Community />
      <Partener />
      <Footer />
    </>
  );
}
