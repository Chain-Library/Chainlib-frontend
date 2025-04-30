import React from "react";
import LandingPage from "@/app/landing-page/page";
// import { redirect } from "next/navigation";
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
}

