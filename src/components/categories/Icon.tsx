import { type FunctionComponent } from "react";

interface CategoryIconProps {
  label: string;
  stage?: "active" | "completed" | "otw";
  onClick?: () => void;
  first?: boolean;
}

export const CategoryIcon: FunctionComponent<CategoryIconProps> = ({
  label,
  onClick,
  first,
  stage = "otw",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative z-20 border ${first ? "self-start " : ""}${stage === "active" ? "border-primary" : stage === "completed" ? "border-red-400" : "border-black"} bg-white px-3 py-2 lg:px-5`}
    >
      <p
        className={`font-montserrat text-[10px] font-bold capitalize lg:text-sm ${stage === "active" ? "text-primary" : stage === "completed" ? "text-red-400" : "text-black"}`}
      >
        {label}
      </p>
      {stage === "active" && (
        <div
          className={`absolute left-0 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 lg:h-[15px] lg:w-[15px] rounded-full${stage === "active" ? " bg-primary" : ""}`}
        />
      )}
    </button>
  );
};
