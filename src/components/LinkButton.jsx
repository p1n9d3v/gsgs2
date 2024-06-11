import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
function LinkButton({ type, color = "white" }) {
  const apple = {
    img: (
      <Image
        src={color === "white" ? "/apple.svg" : "/apple-white.svg"}
        alt="apple"
        width={20}
        height={24}
      />
    ),
    text: "App Store",
    src: "",
  };
  const google = {
    img: (
      <Image
        src={color === "white" ? "/playstore.svg" : "/playstore-white.svg"}
        alt="google"
        width={21}
        height={20}
      />
    ),
    text: "Google Play",
    src: "",
  };

  return (
    <Link
      className={cx(
        "flex gap-2 items-center justify-center  rounded-xl h-11 w-40 text-black",
        {
          ["text-black bg-white"]: color === "white",
          ["text-white bg-[#3160d9]"]: color === "blue",
        },
      )}
      href=""
    >
      {type === "apple" && (
        <>
          {apple.img}
          {apple.text}
        </>
      )}
      {type === "google" && (
        <>
          {google.img}
          {google.text}
        </>
      )}
    </Link>
  );
}

export default LinkButton;
