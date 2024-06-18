"use client";

import React from "react";
import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import "fullpage.js/vendors/scrolloverflow";
import FirstPage from "@/components/Home/FirstPage";
import SecondPage from "@/components/Home/SecondPage";

export default function Home() {
  // const router = userRouter();
  React.useEffect(() => {
    $("#fullpage").fullpage({
      scrollOverflow: true,
      sectionsColor: ["#23c796", "#fff"],
    });

    () => {
      $.fn.fullpage.destroy("all");
    };
  }, []);

  return (
    <div id="fullpage">
      <FirstPage />
      <SecondPage />
    </div>
  );
}
