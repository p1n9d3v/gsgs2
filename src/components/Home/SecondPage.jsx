import Image from "next/image";
import LinkButton from "../LinkButton";
import cx from "classnames";
import Link from "next/link";

function SecondPage() {
  return (
    <section className="section relative">
      <div
        className={cx(
          "flex gap-8 p-4",
          "flex-col pt-16 max-laptop:pb-40",
          "laptop:flex-row-reverse laptop:justify-center laptop:gap-x-28",
        )}
      >
        <div
          className={cx(
            "flex flex-col justify-center",
            "items-center gap-y-5",
            "laptop:gap-y-8 laptop:items-start",
          )}
        >
          <Image
            src="/gsgs-logo-blue.svg"
            width={100}
            height={28}
            className="laptop:w-[140px]"
          />
          <div className={cx("text-center", "laptop:text-start")}>
            <h1
              className={cx(
                "font-black",
                "mb-4 text-[32px] leading-10",
                "laptop:text-[56px] laptop:leading-[64px]",
              )}
            >
              Collect points
              <br />
              while power
              <br className="tablet:hidden" /> saving mode 
            </h1>
            <p>
              Just tap on your smartphone
              <br className="tablet:hidden" /> and get rewards for saving the
              earth{" "}
            </p>
          </div>
          <div className="flex gap-2  [&_a]:bg-[#3160d9] [&_a]:text-white [&_img]:text-white">
            <LinkButton type="apple" color="blue" />
            <LinkButton type="google" color="blue" />
          </div>
        </div>
        <div className={cx("flex justify-center")}>
          <Image
            src="/app.png"
            alt="Picture of the author"
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "540px",
              maxHeight: "640px",
            }}
            width={540}
            height={640}
          />
        </div>
      </div>
      <footer
        className={cx(
          "absolute bottom-0 flex border-t py-5  text-[rgba(0,0,0,0.5)] w-full px-12",
          "flex-col justify-center items-center gap-y-6",
          "laptop:flex-row laptop:justify-between",
        )}
      >
        <p>@Climate101. All rights reserved 2024</p>
        <ul className={cx("flex gap-6 font-medium")}>
          <li>
            <Link href="#">Partners</Link>
          </li>
          <li>
            <Link href="#">Docs</Link>
          </li>
          <li>
            <Link href="https://linktr.ee/climate101gigs" target="_blank">
              Links
            </Link>
          </li>
          <li>
            <Link href="#">FAQs</Link>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default SecondPage;
