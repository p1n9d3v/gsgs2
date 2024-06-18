import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

function Partners() {
  return (
    <section className="h-full py-12 laptop:py-20">
      <div className={cx("flex flex-col items-center h-full")}>
        <div className="text-center">
          <h1
            className={cx(
              "font-black capitalize mb-4",
              "text-[32px]",
              "laptop:text-[56px]",
            )}
          >
            partners
          </h1>
          <p>Introducing our partners</p>
        </div>
        <div
          className={cx(
            "flex flex-1",
            "flex-col gap-8 items-center justify-center",
            "laptop:w-full laptop:flex-row laptop:justify-evenly",
          )}
        >
          <Image
            src="/Venture.svg"
            width={240}
            height={70}
            className={cx("w-full", "max-w-[180px]", "laptop:max-w-[241px]")}
          />
          <Image
            src="/FirstBlock.svg"
            width={180}
            height={70}
            className={cx("w-full", "max-w-[144px]", "laptop:max-w-[193px]")}
          />
          <Image
            src="/Slowmist.svg"
            width={230}
            height={70}
            className={cx("w-full", "max-w-[221px]", "laptop:max-w-[295px]")}
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;
