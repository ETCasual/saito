import { type Courses } from "@/stores/useUser";
import { type FunctionComponent } from "react";

interface CourseLevelProps {
  active?: boolean;
  title: string;
  onClick: () => void;
  level?: string;
  items: { txt: string; label?: string; onClick?: () => void }[];
  variant?: string;
  school?: Courses;
}

export const CourseLevel: FunctionComponent<CourseLevelProps> = ({
  active,
  title,
  onClick,
  items,
  level,
  variant,
  school,
}) => {
  return (
    <button className="z-20 flex w-[250px] flex-col lg:w-[275px]">
      <div
        onClick={onClick}
        className={`${variant === "design" ? (title === "Diploma" && (level === "dip_multimedia" || level === "dip_graphic" || level === "dip_interior") ? "bg-primary" : title === "Degree" && (level === "degree_graphic" || level === "degree_digital_media") ? "bg-primary" : active ? "bg-primary" : "bg-black") : title === "Degree" && (level === "ba_a" || level === "ba_b") ? "bg-primary" : active ? "bg-primary" : "bg-black"} w-full rounded-t-full text-white`}
      >
        <p className="w-full py-0.5 text-center font-montserrat font-bold">
          {title}
        </p>
      </div>

      <div
        className={`${active ? "flex" : "hidden"} w-full flex-col items-center gap-2 px-2 py-2 font-montserrat text-xs font-semibold lg:px-5 lg:py-2.5`}
      >
        {items?.map((item, i) =>
          school === "logistics" ? (
            <p
              onClick={item.onClick}
              key={i}
              className={`${level && level.toLowerCase() === item.label ? "text-primary" : active && title !== "Degree" ? "text-primary" : "text-black"} w-full text-left`}
            >
              {item.txt}
            </p>
          ) : school === "design" &&
            (variant === "design" ||
              variant === "business" ||
              variant === "hr") ? (
            <p
              onClick={item.onClick}
              key={i}
              className={`${level && level.toLowerCase() === item.label ? "text-primary" : active && title !== "Degree" && title !== "Diploma" ? "text-primary" : "text-black"} w-full text-left`}
            >
              {item.txt}
            </p>
          ) : null,
        )}
      </div>
    </button>
  );
};
