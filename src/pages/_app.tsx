import { NextIntlClientProvider } from "next-intl";
import { type AppType } from "next/app";
import { Montserrat, Bebas_Neue } from "next/font/google";

import "@/styles/globals.css";
import "@splidejs/splide/css";

import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Kuala_Lumpur"
      // @ts-expect-error unsure types
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      messages={pageProps.messages}
    >
      <main className={`font-sans ${montserrat.variable} ${bebas.variable}`}>
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  );
};

export default MyApp;
