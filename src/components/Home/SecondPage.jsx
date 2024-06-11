import Image from "next/image";
import LinkButton from "../LinkButton";
import cx from "classnames";

function SecondPage() {
  return (
    <section className="section p-4">
      <div
        className={cx(
          "flex gap-8",
          "flex-col",
          "laptop:flex-row-reverse laptop:justify-center",
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
          <div className="flex gap-2 mb-5 [&_a]:bg-[#3160d9] [&_a]:text-white [&_img]:text-white">
            <LinkButton type="apple" color="blue" />
            <LinkButton type="google" color="blue" />
          </div>
        </div>
        <div className={cx("flex justify-center", "mt-8")}>
          <Image
            src="/app.png"
            alt="Picture of the author"
            sizes="100vw"
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
      <footer></footer>
    </section>
  );
}

export default SecondPage;
