/* eslint-disable @next/next/no-img-element */
import { CourseLevel } from "@/components/CourseLevel";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { useState } from "react";

const Technical = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [level, setLevel] = useState("foundation");

  return (
    <Layout>
      <InnerLayout sidelinkDisable={!!selectedCourse}>
        <div
          className={`-mt-5 flex w-full flex-col items-center justify-center`}
        >
          {!selectedCourse ? (
            <div className="relative overflow-auto">
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("foundation");
                }}
                className="absolute top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  Foundation in Business Studies
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  R/340/3/0777 (12/27) MQA/FA8545
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("diploma");
                }}
                className="absolute right-[23.5%] top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  Diploma in Logicstic Management
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  JPT/BPP(U)1000-801/158 Jld 3 (9) (04/26) MQA/PA14545 (04/26)
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("ba_a");
                }}
                className="2lg:top-[32.5%] absolute top-[31.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  Bachelor of Business in Logistics Management & E-Business
                  (Honours)
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  JPT/BPP (U)1000-801/158 Jld2 (50) (03/25) MQA/PA13028 (03/25)
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("ba_b");
                }}
                className="2lg:top-[32.5%] absolute right-[23.5%] top-[31.5%] flex w-[36.5%] flex-col bg-primary px-2 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  Bachelor of Business in Logistics & Supply Chain Management
                  (Honours)
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  (MQA/PA17205)
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("halal");
                }}
                className="2lg:top-[32.5%] absolute right-[0%] top-[32%] flex w-[19.5%] flex-col overflow-hidden rounded-lg bg-[#009245] px-4 py-3"
              >
                <p className="2lg:text-[2.3] z-20 text-center font-montserrat text-xs font-semibold leading-[12.5px] text-white">
                  Certificate in Halal Logistics Management
                </p>
                <img
                  src="/assets/halal_btn.png"
                  alt=""
                  className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2"
                />
              </button>
              <img
                src="/assets/articulation.png"
                alt="Courses"
                className="2lg:max-h-[600px] max-h-[530px] object-scale-down"
              />
            </div>
          ) : (
            <div className="relative flex h-full flex-row justify-between gap-5 self-start lg:w-full lg:flex-row lg:gap-20">
              <div className="flex min-h-[70vh] flex-grow flex-col justify-between">
                <div className="flex h-full flex-grow flex-col gap-3">
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
                    setSelectedCourse(false);
                  }}
                >
                  Back
                </p>
              </div>
              <div className="flex w-full flex-row items-start justify-normal gap-5 lg:gap-20">
                <img
                  src={`/assets/course_${level}.png`}
                  className={`h-full max-h-[550px] object-contain`}
                  alt=""
                />
                {level !== "foundation" && level !== "diploma" && (
                  <button
                    onClick={() => {
                      setSelectedCourse(true);
                      setLevel("halal");
                    }}
                    className="relative mt-2.5 flex w-[140px] max-w-[140px] flex-col overflow-hidden rounded-lg bg-[#009245] px-4 py-3"
                  >
                    <p className="2lg:text-[2.3] z-20 text-center font-montserrat text-xs font-semibold leading-[12.5px] text-white">
                      Certificate in Halal Logistics Management
                    </p>
                    <img
                      src="/assets/halal_btn.png"
                      alt=""
                      className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2"
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Technical;

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
