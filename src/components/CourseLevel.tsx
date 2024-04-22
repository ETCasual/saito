import { type FunctionComponent } from "react";

interface CourseLevelProps {
  active?: boolean;
  title: string;
  onClick: () => void;
  level?: string;
  items: { txt: string; label?: string; onClick?: () => void }[];
}

export const CourseLevel: FunctionComponent<CourseLevelProps> = ({
  active,
  title,
  onClick,
  items,
  level,
}) => {
  return (
    <button className="z-20 flex w-[250px] flex-col lg:w-[275px]">
      <div
        onClick={onClick}
        className={`${title === "Degree" && (level === "ba_a" || level === "ba_b") ? "bg-primary" : active ? "bg-primary" : "bg-black"} w-full rounded-t-full text-white`}
      >
        <p className="w-full py-0.5 text-center font-montserrat font-bold">
          {title}
        </p>
      </div>

      <div
        className={`${active ? "flex" : "hidden"} w-full flex-col items-center gap-2 px-2 py-2 font-montserrat text-xs font-semibold lg:px-5 lg:py-2.5`}
      >
        {items?.map((item, i) => {
          return (
            <p
              onClick={item.onClick}
              key={i}
              className={`${level && level.toLowerCase() === item.label ? "text-primary" : active && title !== "Degree" ? "text-primary" : "text-black"}`}
            >
              {item.txt}
            </p>
          );
        })}
      </div>
    </button>
  );
};
