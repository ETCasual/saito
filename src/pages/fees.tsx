/* eslint-disable @next/next/no-img-element */
import { CourseLevel } from "@/components/CourseLevel";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { type FunctionComponent, useState } from "react";

const Fees = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [level, setLevel] = useState("foundation");

  return (
    <Layout>
      <InnerLayout
        hideTitle={!!selectedCategory}
        sidelinkDisable={!!selectedCategory}
      >
        <div className="flex w-full flex-grow flex-col items-center justify-center">
          {/* {!selectedCourse ? (
            <div className="relative translate-x-[15%] translate-y-[6%] overflow-auto 2xl:translate-y-[7%]">
              <button
                onClick={() => setSelectedCourse(true)}
                className="absolute top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2xl:text-[2.3]">
                  Foundation in Business Studies
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  R/340/3/0777 (12/27) MQA/FA8545
                </p>
              </button>
              <button
                onClick={() => setSelectedCourse(true)}
                className="absolute right-[23.5%] top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2xl:text-[2.3]">
                  Diploma in Logicstic Management
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  JPT/BPP(U)1000-801/158 Jld 3 (9) (04/26) MQA/PA14545 (04/26)
                </p>
              </button>
              <button
                onClick={() => setSelectedCourse(true)}
                className="absolute top-[31.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2xl:text-[2.3]">
                  Bachelor of Business in Logistics Management & E-Business
                  (Honours)
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  JPT/BPP (U)1000-801/158 Jld2 (50) (03/25) MQA/PA13028 (03/25)
                </p>
              </button>
              <button
                onClick={() => setSelectedCourse(true)}
                className="absolute right-[23.5%] top-[31.5%] flex w-[36.5%] flex-col bg-primary px-2 py-2.5"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2xl:text-[2.3]">
                  Bachelor of Business in Logistics & Supply Chain Management
                  (Honours)
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  (MQA/PA17205)
                </p>
              </button>
              <img
                src="/assets/articulation.png"
                alt="Courses"
                className="max-h-[530px] object-scale-down 2xl:max-h-[600px]"
              />
            </div>
          ) : (
            <div className="pl-32 flex h-full flex-col items-start justify-center gap-5 xl:pl-0 xl:w-full xl:flex-row xl:justify-around xl:pl-40">
              <img
                src={`/assets/${level === "foundation" ? "foundation_business" : "diploma"}.png`}
                className="w-[600px]"
                alt=""
              />
              <div className="flex flex-row gap-3 xl:flex-col">
                {[
                  {
                    title: "Foundation",
                    sub: "Foundation in Business Studies",
                  },
                  {
                    title: "Diploma",
                    sub: "Foundation in Logistics Management",
                  },
                  {
                    title: "Degree",
                    sub: `Bachelor of Business in Logistics Management & E-Business (Honours)<br/>Bachelor of Business in Logistics & Supply Chain Management (Honours)`,
                  },
                ].map((s, i) => (
                  <CourseLevel
                    onClick={() => setLevel(s.title.toLowerCase())}
                    title={s.title}
                    sub={s.sub}
                    active={level.toLowerCase() === s.title.toLowerCase()}
                    key={i}
                  />
                ))}
              </div>
            </div>
          )} */}

          {!selectedCategory ? (
            <div className="flex flex-col items-center justify-center">
              {/* <h1 className="font-montserrat text-[1.75rem] font-bold text-primary">
                Fees Structure / Financial Assistance
              </h1> */}
              <div className="flex w-full max-w-[700px] flex-row items-center justify-center gap-1 pt-3">
                {[
                  { title: "Course Fees", image: "/assets/fees_thumb_1.jpg" },
                  {
                    title: "Funding Support",
                    image: "/assets/fees_thumb_2.jpg",
                  },
                  {
                    title: "Job Opportunities",
                    image: "/assets/fees_thumb_3.jpg",
                  },
                ].map((fee, i) => (
                  <FeesCategory
                    onClick={() => setSelectedCategory(fee.title)}
                    key={i}
                    title={fee.title}
                    image={fee.image}
                  />
                ))}
              </div>
            </div>
          ) : selectedCategory === "Course Fees" ? (
            <div className="flex h-full flex-grow flex-row items-start justify-center gap-5 xl:w-full xl:flex-row xl:justify-around">
              <div className="flex min-h-[70vh] flex-grow flex-col justify-between">
                <div className="flex flex-col gap-3">
                  {[
                    {
                      title: "Foundation",
                      sub: [
                        { txt: "Foundation in Business Studies", label: "" },
                      ],
                    },
                    {
                      title: "Diploma",
                      sub: [
                        {
                          txt: "Foundation in Logistics Management",
                          label: "",
                        },
                      ],
                    },
                    {
                      title: "Degree",
                      sub: [
                        {
                          txt: "Bachelor of Business in Logistics Management & E-Business (Honours)",
                          label: "ba_a",
                          onClick: () => setLevel("ba_a"),
                        },
                        {
                          txt: "Bachelor of Business in Logistics & Supply Chain Management (Honours)",
                          onClick: () => setLevel("ba_b"),
                          label: "ba_b",
                        },
                      ],
                    },
                  ].map((s, i) => (
                    <CourseLevel
                      onClick={() =>
                        setLevel(
                          s.title === "Degree" ? "ba_a" : s.title.toLowerCase(),
                        )
                      }
                      title={s.title}
                      items={s.sub}
                      level={level}
                      active={
                        (level.startsWith("ba") && s.title === "Degree") ||
                        level.toLowerCase() === s.title.toLowerCase()
                      }
                      key={i}
                    />
                  ))}
                </div>
                <p
                  className="cursor-pointer font-montserrat text-lg font-bold hover:text-primary"
                  onClick={() => {
                    setLevel("foundation");
                    setSelectedCategory("");
                  }}
                >
                  Back
                </p>
              </div>
              <img
                src={`/assets/fees_${level === "ba_b" ? "ba_a" : level}.jpg`}
                className="max-h-[75vh] w-[600px] object-contain"
                alt=""
              />
            </div>
          ) : selectedCategory === "Funding Support" ? (
            <div className="relative flex h-full flex-grow flex-col items-start justify-center gap-5 xl:w-full xl:flex-row xl:justify-around">
              <img
                src="/assets/funding_support.png"
                alt="funding"
                className="mt-20 w-[800px] lg:w-[1000px] xl:mt-0"
              />
              <p
                className="absolute -bottom-14 -left-14 z-10 cursor-pointer font-montserrat text-lg font-bold hover:text-primary lg:bottom-0 lg:left-0"
                onClick={() => {
                  setLevel("foundation");
                  setSelectedCategory("");
                }}
              >
                Back
              </p>
            </div>
          ) : (
            <div className="relative flex h-full flex-grow flex-col items-start justify-center gap-5 xl:w-full xl:flex-row xl:justify-around">
              <img
                src="/assets/career_opportunities.png"
                alt="funding"
                className="mt-20 w-[800px] lg:w-[1000px] xl:mt-0"
              />
              <p
                className="absolute -bottom-14 -left-14 z-10 cursor-pointer font-montserrat text-lg font-bold hover:text-primary lg:bottom-0 lg:left-0"
                onClick={() => {
                  setLevel("foundation");
                  setSelectedCategory("");
                }}
              >
                Back
              </p>
            </div>
          )}
        </div>
      </InnerLayout>
    </Layout>
  );
};

interface FeesCategoryProps {
  title: string;
  onClick: () => void;
  image: string;
}

const FeesCategory: FunctionComponent<FeesCategoryProps> = ({
  title,
  onClick,
  image,
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative transition-all duration-200 ease-in-out"
    >
      {/* https://via.placeholder.com/200x125 */}
      <img src={image} alt="" />
      <p className="absolute bottom-2 left-3 z-10 font-montserrat text-sm font-bold text-primary group-hover:text-white">
        {title}
      </p>
      <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-0 group-hover:opacity-50" />
    </button>
  );
};

export default Fees;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      messages: (await import(`@/locales/${context.locale}.json`)).default,
    },
  };
};
