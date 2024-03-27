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
    label: "Technical",
    path: "/technical",
  },
  {
    label: "Support",
    path: "/support",
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
    <div className="relative flex flex-col items-center justify-center">
      <div className="fixed left-14 top-1/2 flex -translate-y-3/4 flex-col gap-3">
        {links.map((l) => (
          <CategoryIcon
            onClick={() => router.push(l.path)}
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
