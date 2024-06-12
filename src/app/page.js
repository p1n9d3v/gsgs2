"use client";

import dynamic from "next/dynamic";
import RingLoader from "react-spinners/RingLoader";

export default dynamic(() => import("@/components/Home"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen flex justify-center items-center bg-[#23c796]">
      <RingLoader color="#fff" size={100} />
    </div>
  ),
});
