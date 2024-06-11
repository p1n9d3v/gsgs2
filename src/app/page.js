"use client";

import React from "react";
import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import FirstPage from "@/components/Home/FirstPage";
import SecondPage from "@/components/Home/SecondPage";

export default function Home() {
  React.useEffect(() => {
    $("#fullpage").fullpage({
      scrollOverflow: false,
      sectionsColor: ["#23c796", "#fff"],
    });
  }, []);

  return (
    <div id="fullpage">
      <FirstPage />
      <SecondPage />
    </div>
  );
}
