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
    <button className="flex w-[250px] flex-col xl:w-[325px]">
      <div
        onClick={onClick}
        className={`${title === "Degree" && (level === "ba_a" || level === "ba_b") ? "bg-primary" : active ? "bg-primary" : "bg-black"} w-full rounded-t-full text-white`}
      >
        <p className="w-full py-0.5 text-center font-montserrat font-bold">
          {title}
        </p>
      </div>

      <div
        className={`${active ? "flex" : "hidden"} w-full flex-col items-center gap-2 px-2 py-1 font-montserrat text-xs font-semibold xl:px-5 xl:py-2.5`}
      >
        {items?.map((item, i) => {
          console.log(level, item.label);
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
