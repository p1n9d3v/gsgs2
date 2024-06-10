"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

export default function Home() {
  React.useEffect(() => {
    $("#fullpage").fullpage({
      scrollOverflow: false,
      sectionsColor: ["#23c796", "#fff"],
    });
  }, []);

  return (
    <>
      <div id="fullpage">
        <FirstPage />
        <div className="section">second page</div>
        <div className="section">third page</div>
      </div>{" "}
    </>
  );
}

export const FirstPage = () => (
  <section className="section">
    <div className={cx("flex flex-col items-center justify-center")}>
      <div>
        <Image src="/gsgs-logo.svg" width={100} height={28} />
      </div>
      <div>
        <h1>Not for experts. Just for climate dummies.</h1>
        <p>The World First Challenge dApp For Climate Dummies.</p>
      </div>
      <div>
        <button>Go to Playstore</button>
        <ul>
          <li>Home</li>
          <li>Partners</li>
          <li>Docs</li>
          <li>Links</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <div className="rounded-xl overflow-hidden max-w-[800px] max-h-[450px]">
          <video src="/gigs.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  </section>
);
