import type { ReactNode } from "react";
import { CategoryIcon } from "./categories/Icon";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const links = [
  {
    label: "Aptitude Tests",
    path: "/aptitude",
  },
  {
    label: "Introduction",
    path: "/intro",
  },
  {
    label: "Course Program",
    path: "/course",
  },
  {
    label: "Faculty Members",
    path: "/faculty",
  },
  {
    label: "Support",
    path: "/support",
  },
  {
    label: "Events / Activities",
    path: "/events",
  },
  {
    label: "Fees Structure",
    path: "/fees",
  },
  {
    label: "Registration",
    path: "/registration",
  },
];

export const InnerLayout = ({
  children,
  sidelinkDisable,
  hideTitle,
}: {
  children?: ReactNode;
  sidelinkDisable?: boolean;
  hideTitle?: boolean;
}) => {
  const router = useRouter();
  const t = useTranslations();

  const titleKey = router.asPath.split("/").splice(-1)[0];

  return (
    <div className="relative flex h-full min-h-screen flex-row justify-center gap-5">
      {!sidelinkDisable ? (
        <div className="sticky left-7 top-1/2 z-[100] flex h-full min-w-[125px] -translate-y-[40%] flex-col gap-3 lg:min-w-[175px]">
          {links.map((l) => (
            <CategoryIcon
              onClick={async () => {
                if (router.pathname.includes(l.path)) return router.reload();
                if (l.path === "/intro")
                  localStorage.setItem("recommended", "false");
                await router.push(l.path);
              }}
              label={l.label}
              key={l.label}
              stage={router.pathname === l.path ? "active" : "otw"}
            />
          ))}
        </div>
      ) : null}

      <div className="flex h-full w-full flex-col items-center justify-center">
        {hideTitle ? (
          <div className="pt-28" />
        ) : titleKey !== "course" &&
          titleKey !== "events" &&
          titleKey !== "faculty" ? (
          <h1 className="pb-6 pt-28 text-center font-montserrat text-[1.75rem] font-bold text-primary">
            {t(`${titleKey}.title`)}
          </h1>
        ) : (
          <div className="pt-28" />
        )}
        {children}
      </div>
    </div>
  );
};
