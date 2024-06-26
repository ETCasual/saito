import withPWAInit from "@ducanh2912/next-pwa";
import { env } from "./src/env.js";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const withPWA = withPWAInit({
  dest: "public",
  disable: env.NEXT_PUBLIC_IS_STAGING === "1",
  register: true,
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en", "ms", "zh"],
    defaultLocale: "en",
  },
};

export default withPWA(config);
