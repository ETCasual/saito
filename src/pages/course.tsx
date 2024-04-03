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
            <div className="flex h-full flex-col items-center justify-center gap-5 pl-32 xl:w-full xl:flex-row xl:items-center xl:justify-evenly xl:pt-20">
              <img
                src={`/assets/${level === "foundation" ? "foundation_business" : "diploma"}.png`}
                className="w-[500px] xl:w-[600px] 2xl:w-[700px]"
                alt=""
              />
              <div className="flex h-full flex-row gap-3 xl:flex-col">
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
                    sub: `Bachelor of Business in Logistics Management & E-Business (Honours)<br/><br/>Bachelor of Business in Logistics & Supply Chain Management (Honours)`,
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
