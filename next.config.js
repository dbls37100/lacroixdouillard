const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      // imagesPublicPath: `_next/image/`,
      imagesFolder: "images",
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],
  {
    images: {
      domains: ["https://api.maptiler.com"],
    },
  },
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  },
  nextConfig,
]);
