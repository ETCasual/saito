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
      <InnerLayout>
        <div className="flex w-full flex-col items-center justify-center pt-20 xl:pt-0">
          {!selectedCourse ? (
            <div className="relative translate-x-[15%] translate-y-[6%] overflow-auto 2xl:translate-y-[7%]">
              <button
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("foundation");
                }}
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
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("diploma");
                }}
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
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("ba_a");
                }}
                className="absolute top-[31.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5 2xl:top-[32.5%]"
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
                onClick={() => {
                  setSelectedCourse(true);
                  setLevel("ba_b");
                }}
                className="absolute right-[23.5%] top-[31.5%] flex w-[36.5%] flex-col bg-primary px-2 py-2.5 2xl:top-[32.5%]"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2xl:text-[2.3]">
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
                className="absolute right-[0%] top-[32%] flex w-[19.5%] flex-col overflow-hidden rounded-lg bg-[#009245] px-4 py-3 2xl:top-[32.5%]"
              >
                <p className="z-20 text-center font-montserrat text-xs font-semibold leading-[12.5px] text-white 2xl:text-[2.3]">
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
                className="max-h-[530px] object-scale-down 2xl:max-h-[600px]"
              />
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-5 pl-32 xl:w-full xl:flex-row xl:items-center xl:justify-evenly xl:pt-20">
              <img
                src={`/assets/${level}.png`}
                className="max-h-[70vh] w-full max-w-[500px] object-contain xl:max-w-[600px] 2xl:max-w-[700px]"
                alt=""
              />
              <div className="flex h-full flex-row gap-3 xl:flex-col">
                {[
                  {
                    title: "Foundation",
                    sub: [{ txt: "Foundation in Business Studies", label: "" }],
                  },
                  {
                    title: "Diploma",
                    sub: [
                      { txt: "Foundation in Logistics Management", label: "" },
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
                    onClick={() => setLevel(s.title.toLowerCase())}
                    title={s.title}
                    items={s.sub}
                    level={level}
                    active={level.toLowerCase() === s.title.toLowerCase()}
                    key={i}
                  />
                ))}
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
