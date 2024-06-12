/** @type {import('next').NextConfig} */

import webpack from "webpack";
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    loader: "akamai",
    path: "/",
  },
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        IScroll: "iscroll",
      }),
    );
    return config;
  },
};

export default nextConfig;
