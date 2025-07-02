import Image from "next/image";
import Image2 from "@/assets/Images/image.png";
import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import JoinOurCommunity from "./components/JoinOurCommunity";
import WhatIsChainLib from "./components/WhatIsChainLib";

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-[120px]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F265C]">
            <span className="text-[#0061FF]">Empowering</span> Stories,
            <br />
            Decentralized Freedom.
          </h1>
        </div>

        <Image
          src={Image2}
          alt="Diverse community of readers and writers"
          className="h-[186px] w-full rounded-lg my-5"
        />
        <WhatIsChainLib />
        <WhatMakesUsDifferent />
        <JoinOurCommunity />
      </main>
      <Footer />
    </>
  );
}
