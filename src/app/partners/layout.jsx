import Link from "next/link";
import cx from "classnames";
import Image from "next/image";

function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <header
        className={cx("h-16 px-3 py-4 flex justify-between", "laptop:px-12")}
      >
        <a href="/">
          <Image src="/gsgs-logo-blue.svg" width={100} height={28} />
        </a>
        <div className="max-laptop:hidden">
          <Navigator />
        </div>
      </header>
      <div className="h-full pb-[113px] laptop:pb-[65px]">{children}</div>
      <footer
        className={cx(
          "absolute bottom-0 flex border-t py-5  text-[rgba(0,0,0,0.5)]  w-full px-12",
          "flex-col justify-center items-center gap-y-6",
          "laptop:flex-row laptop:justify-between",
        )}
      >
        <p>@Climate101. All rights reserved 2024</p>
        <Navigator />
      </footer>
    </div>
  );
}

function Navigator() {
  return (
    <ul className={cx("flex gap-6 font-medium text-[rgba(0,0,0,0.5)] ")}>
      <li>
        <Link href="/partners">Partners</Link>
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
  );
}
export default Layout;
