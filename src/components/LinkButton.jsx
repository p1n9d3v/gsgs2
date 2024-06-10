import React from "react";
import Image from "next/image";
function LinkButton({ type }) {
  const apple = {
    img: <Image src="/apple.svg" alt="apple" width={24} height={24} />,
    text: "App Store",
  };
  const google = {
    img: <Image src="/playstore.svg" alt="google" width={24} height={24} />,
    text: "Google Play",
  };
  return (
    <button className="flex gap-1 items-center justify-center bg-white rounded-lg h-11 w-40 text-black">
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
    </button>
  );
}

export default LinkButton;
