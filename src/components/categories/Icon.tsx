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
      className={`relative z-20 border ${first ? "self-start " : ""}${stage === "active" ? "border-primary" : stage === "completed" ? "border-red-400" : "border-black"} bg-white px-5 py-2`}
    >
      <p
        className={`font-montserrat text-sm font-bold capitalize ${stage === "active" ? "text-primary" : stage === "completed" ? "text-red-400" : "text-black"}`}
      >
        {label}
      </p>
      {stage === "active" && (
        <div
          className={`absolute left-0 top-1/2 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full${stage === "active" ? " bg-primary" : ""}`}
        />
      )}
    </button>
  );
};
