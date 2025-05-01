import Navbar from '@/components/common/Navbar';
import Authors from "@/components/landingpage/Authors";
import Banner from "@/components/landingpage/Banner";
import Community from "@/components/landingpage/Community";
import Hero from "@/components/landingpage/Hero";
import Nft from "@/components/landingpage/Nft";
import Partners from "@/components/landingpage/Partners";
import Tagline from "@/components/landingpage/Tagline";
import Footer from '@/components/layout/Footer';
import React from "react";

// import About from "./about-us/page";

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

