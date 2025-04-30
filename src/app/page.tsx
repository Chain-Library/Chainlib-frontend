import React from "react";
// import { redirect } from "next/navigation";
import About from "./about-us/page";

export default function Home() {
  // Redirect to dashboard by default
  // redirect("/");
  return (
    <div>
      {/* <AnalyticsChart /> */}
      <About />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et, sit
      exercitationem repudiandae assumenda veniam reiciendis, doloribus itaque
      aperiam aut consectetur, mollitia quo aliquam labore non minus recusandae!
      Laboriosam, necessitatibus!
    </div>
  );
}

