import { Inter, Inter_Tight } from "next/font/google";
import cx from "classnames";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });
const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "Climate101",
  metadataBase: new URL("https://climate101.io"),
  description: "",
  // openGraph: {
  //   title: "Climate101",
  //   description:
  //     "Climate101 is a collection of resources to help you understand climate change and what you can do to help.",
  //   url: "https://climate101.io/opengraph-image.png",
  //   siteName: "Climate101",
  //   locale: "ko_KR",
  //   type: "website",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* <meta */}
        {/*   property="og:image" */}
        {/*   content="https://climate101.io/opengraph-image.png" */}
        {/* /> */}
        {/* <meta property="og:image:type" content="<generated>" /> */}
        {/* <meta property="og:image:width" content="<generated>" /> */}
        {/* <meta property="og:image:height" content="<generated>" /> */}
      </head>
      <body className={cx(inter_tight.className, inter.className, "h-screen")}>
        {children}
      </body>
    </html>
  );
}
