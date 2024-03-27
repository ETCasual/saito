/* eslint-disable @next/next/no-img-element */
import { useUser } from "@/stores/useUser";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";
import { IoMenu } from "react-icons/io5";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const t = useTranslations();
  const { name } = useUser();
  return (
    <main className="flex min-h-screen flex-col bg-[#f3f3f3]">
      <div className="flex flex-row justify-between px-14 pb-6 pt-10">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="h-[40px] object-contain 2xl:h-[50px]"
        />
        {name ? (
          <div className="flex flex-row items-center gap-3">
            <p className="font-montserrat text-xl font-bold text-[#808080]">
              {name}
            </p>
            <img
              src="/assets/person.png"
              alt="Person"
              className="h-[45px] w-[45px] object-contain"
            />
          </div>
        ) : (
          <IoMenu size={50} color="gray" />
        )}
      </div>
      <div className="px-14">{children}</div>
      <div className="fixed bottom-0 left-0 flex w-full flex-row items-start">
        <p className="absolute left-20 mt-5 font-bebas text-[2.25rem] uppercase tracking-wide text-gray-400">
          {t("footer")}
        </p>
        <img src="/assets/bottom_bar.png" alt="bottom-bar" />
      </div>
    </main>
  );
};