import Link from "next/link";
import LinkButton from "../LinkButton";
import Image from "next/image";
import cx from "classnames";

function FirstPage() {
  return (
    <section className="section">
      <div className="p-4">
        <div
          className={cx(
            "flex flex-col items-center justify-center",
            "gap-y-5",
            "laptop:gap-y-8",
          )}
        >
          <Image
            src="/gsgs-logo.svg"
            width={100}
            height={28}
            className="laptop:w-[140px]"
          />
          <div className="text-center text-white">
            <h1
              className={cx(
                "text-center font-black",
                "mb-4 text-[32px] leading-10",
                "laptop:text-[56px] laptop:leading-[64px]",
              )}
            >
              Not for experts.
              <br /> Just for climate dummies.
            </h1>
            <p>
              The World First Challenge App <br className="laptop:hidden" />
              For Climate Dummies.
            </p>
          </div>
          <div>
            <div className="flex gap-2 mb-5">
              <LinkButton type="apple" />
              <LinkButton type="google" />
            </div>
            <ul
              className={cx(
                "flex justify-center  text-[rgba(255,255,255,0.5)] [&>li:hover]:text-white",
                "gap-x-4",
                "laptop:gap-x-6",
              )}
            >
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="https://climate101-docs.gitbook.io/whitepaper_v1">
                  Docs
                </Link>
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
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-[800px] max-h-[450px]">
            <video
              data-autoplay
              src="/gigs.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstPage;
