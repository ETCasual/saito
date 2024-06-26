import { Layout } from "@/components/Layout";
import { useUser } from "@/stores/useUser";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export type FormikLoginForm = {
  username: string;
  password: string;
};

export default function Home() {
  const router = useRouter();
  const { name } = useUser();
  const t = useTranslations();

  useEffect(() => {
    if (name) return;
    void router.push("/");
  }, [router, name]);

  return (
    <>
      <Layout>
        <div className="flex min-h-[90vh] flex-grow flex-col items-center justify-center">
          <h1 className="pb-14 font-montserrat text-[1.5rem] font-bold text-primary">
            {t("welcome.title")}
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <p className="font-montserrat text-lg">{t("welcome.subtitle")}</p>
            <Link
              href="/aptitude"
              locale="en"
              className="w-full max-w-[400px] rounded-full bg-black py-2 text-center font-montserrat uppercase text-white"
            >
              English
            </Link>
            <Link
              href="/aptitude"
              locale="ms"
              className="w-full max-w-[400px] rounded-full bg-black py-2 text-center font-montserrat uppercase text-white"
            >
              Bahasa Melayu
            </Link>
            <Link
              href="/aptitude"
              locale="zh"
              className="w-full max-w-[400px] rounded-full bg-black py-2 text-center font-montserrat uppercase text-white"
            >
              中文
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      messages: (await import(`@/locales/${context.locale}.json`)).default,
    },
  };
};
