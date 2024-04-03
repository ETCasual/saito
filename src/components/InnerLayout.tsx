import type { ReactNode } from "react";
import { CategoryIcon } from "./categories/Icon";
import { useRouter } from "next/router";

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

export const InnerLayout = ({ children }: { children?: ReactNode }) => {
  const router = useRouter();
  return (
    <div className="relative flex flex-grow flex-col items-center justify-center lg:min-h-[unset]">
      <div className="fixed left-7 top-1/2 z-[100] flex -translate-y-1/2 flex-col gap-3">
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
      {children}
    </div>
  );
};
