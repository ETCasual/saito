/* eslint-disable @next/next/no-img-element */
import { useUser } from "@/stores/useUser";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState, type ReactNode } from "react";
import useStore from "@/stores/useGeneral";
import { IoMdDownload, IoMdLogOut } from "react-icons/io";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const t = useTranslations();
  const router = useRouter();
  const hydrated = useStore(useUser, (state) => state._hasHydrated);
  const name = useStore(useUser, (state) => state.name);
  const selectedCourse = useStore(useUser, (state) => state.selectedCourse);
  const { clear } = useUser();

  const [mounted, setMounted] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event>();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    });
    () =>
      window.removeEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        setInstallPrompt(e);
      });
  }, [mounted]);

  useEffect(() => {
    // console.log(hydrated);
    if (!hydrated) return;
    if (!name) void router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, hydrated]);

  return (
    <main className="flex min-h-screen flex-col bg-[#f3f3f3]">
      {(router.pathname.includes("intro") ||
        router.pathname.includes("course")) &&
        selectedCourse === "logistics" && (
          <img
            className="fixed -bottom-10 -right-32 w-[550px] object-contain opacity-75 mix-blend-darken lg:-right-20"
            src="/assets/intro_bg.png"
            alt="prime_bg"
          />
        )}
      <div className="fixed top-0 z-[100] flex w-full flex-row justify-between px-7 pb-2 pt-6">
        <div className="flex h-[40px] flex-row items-center gap-10">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="object-conltain h-[40px]"
          />
          {(router.pathname.includes("intro") ||
            router.pathname.includes("course")) &&
            selectedCourse === "logistics" && (
              <img
                src="/assets/the_prime_logo.png"
                alt="Prime_Logo"
                className="h-[40px] object-contain"
              />
            )}
        </div>
        {
          name && (
            <div className="flex cursor-pointer flex-row items-center gap-3">
              <p className="font-montserrat text-xl font-bold text-[#808080]">
                {name}
              </p>
              <img
                src="/assets/person.png"
                alt="Person"
                className="h-[35px] w-[35px] object-contain"
              />

              <IoMdDownload
                size={35}
                className="text-[#808080]"
                onClick={async () => {
                  window.open(
                    "https://drive.google.com/file/d/1pUdze7TODrXJPl7br8UcK5ueLTBjVLIW/view?usp=sharing",
                    "_blank",
                  );
                }}
              />

              <IoMdLogOut
                size={35}
                className="text-[#808080]"
                onClick={() => clear()}
              />
            </div>
          )
          // : (
          //   <IoMenu
          //     size={50}
          //     color="gray"
          //     onClick={() => name && setDrawerOpen((prev) => !prev)}
          //   />
          // )
        }
      </div>
      {router.pathname === "/" || name ? (
        <>
          <div className="h-full min-h-screen w-full flex-grow px-10">
            {children}
          </div>
          {router.pathname.includes("home") ||
          router.pathname === "/" ||
          router.pathname.includes("aptitude") ||
          router.pathname.includes("registration") ||
          router.pathname.includes("intro") ? (
            <div className="fixed bottom-0 left-0 flex w-full flex-row items-start">
              <p className="absolute left-12 font-bebas text-2xl uppercase tracking-wide text-gray-400 lg:left-20">
                {t("footer")}
              </p>
              <img src="/assets/bottom_bar.png" alt="bottom-bar" />
            </div>
          ) : null}
        </>
      ) : null}
    </main>
  );
};
