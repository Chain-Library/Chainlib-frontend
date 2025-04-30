import LandingPage from "@/app/landing-page/page";
import React from "react";
// import { redirect } from "next/navigation";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/layout/Footer';
import About from "./about-us/page";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <LandingPage />
      </div>

      <div>
        {/* <AnalyticsChart /> */}
        <About />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et, sit
        exercitationem repudiandae assumenda veniam reiciendis, doloribus itaque
        aperiam aut consectetur, mollitia quo aliquam labore non minus recusandae!
        Laboriosam, necessitatibus!
      </div>
    </>
  );
  // <>
  //   <Navbar />
  //   <h1 className="my-72 text-display-large text-center">Chainlib Platform</h1>
  //   <Footer />
  // </>
  // )
}

