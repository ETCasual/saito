import { type FunctionComponent } from "react";

interface CourseLevelProps {
  active?: boolean;
  title: string;
  sub: string;
  onClick: () => void;
}

export const CourseLevel: FunctionComponent<CourseLevelProps> = ({
  active,
  title,
  onClick,
  sub,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex max-w-[200px] flex-col xl:max-w-[350px]"
    >
      <div
        className={`${active ? "bg-primary" : "bg-black"} w-full rounded-t-full text-white`}
      >
        <p className="w-full py-0.5 text-center font-montserrat font-bold">
          {title}
        </p>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: sub }}
        className={`w-full px-2 py-1 font-montserrat text-sm font-semibold xl:px-5 xl:py-2.5 ${active ? "text-primary" : "text-black"}`}
      >
        {/* {sub} */}
      </p>
    </button>
  );
};
