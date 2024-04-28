/* eslint-disable @next/next/no-img-element */
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { type FunctionComponent, useState } from "react";

const Support = () => {
  type ImageKeys = keyof typeof img;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const t = useTranslations();

  const imgKeys: ImageKeys[] = [
    "counselling_service",
    "student_council_body",
    "student_accomodation",
    "student_hub",
    "prayer_room",
    "computer_lab",
    "library",
    "sports_and_extracurricular_activities",
    "green_screen_studio",
    "cafe",
  ];

  const img = {
    counselling_service: "support_1",
    student_council_body: "support_2",
    student_accomodation: "support_3",
    student_hub: "support_4",
    prayer_room: "support_5",
    computer_lab: "support_6",
    library: "support_7",
    sports_and_extracurricular_activities: "support_8",
    green_screen_studio: "support_9",
    cafe: "support_10",
  };

  return (
    <Layout>
      <InnerLayout>
        <div className="flex w-full flex-grow flex-col items-center justify-center">
          {/* {!selectedCourse ? (
            <div className="relative translate-x-[15%] translate-y-[6%] overflow-auto 2lg:translate-y-[7%]">
              <button
                onClick={() => setSelectedCourse(true)}
                className="absolute top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="text-left font-montserrat text-xs font-semibold text-white 2lg:text-[2.3]">
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
                <p className="text-left font-montserrat text-xs font-semibold text-white 2lg:text-[2.3]">
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
                <p className="text-left font-montserrat text-xs font-semibold text-white 2lg:text-[2.3]">
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
                <p className="text-left font-montserrat text-xs font-semibold text-white 2lg:text-[2.3]">
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
                className="max-h-[530px] object-scale-down 2lg:max-h-[600px]"
              />
            </div>
          ) : (
            <div className="pl-32 flex h-full flex-col items-start justify-center gap-5 lg:pl-0 lg:w-full lg:flex-row lg:justify-around lg:pl-40">
              <img
                src={`/assets/${level === "foundation" ? "foundation_business" : "diploma"}.png`}
                className="w-[600px]"
                alt=""
              />
              <div className="flex flex-row gap-3 lg:flex-col">
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
          <div className="flex flex-col items-center justify-center lg:pl-0">
            {/* <h1 className="font-montserrat text-[1.75rem] font-bold text-primary">
              Support
            </h1> */}
            {
              selectedCategory === null ? (
                <div className="grid w-full max-w-[650px] grid-cols-3 gap-1 pt-3 lg:max-w-[900px] lg:grid-cols-5">
                  {imgKeys.map((title, i) => (
                    <SupportCategory
                      onClick={() => setSelectedCategory(i)}
                      key={i}
                      title={t(`support.${title}`)}
                      link={String(i + 1)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex h-full min-h-[60vh] flex-grow flex-col items-start justify-center gap-5 lg:max-h-[60vh] lg:min-h-[60vh] lg:w-full lg:justify-around">
                  <img
                    src={`/assets/${img[imgKeys[selectedCategory]!]}.jpg`}
                    className="w-[725px] lg:w-[860px]"
                    alt=""
                  />
                  <div className="flex w-full flex-row items-center justify-between">
                    <button
                      disabled={selectedCategory === 0}
                      className="cursor-pointer rounded-full bg-gray-300 p-2 disabled:opacity-30"
                      onClick={() =>
                        setSelectedCategory((prev) =>
                          prev !== null ? prev - 1 : null,
                        )
                      }
                    >
                      <svg
                        className="h-[1.2em] w-[1.2em] rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                      </svg>
                    </button>
                    <button
                      disabled={selectedCategory === 9}
                      onClick={() =>
                        setSelectedCategory((prev) =>
                          prev !== null ? prev + 1 : null,
                        )
                      }
                      className="cursor-pointer rounded-full bg-gray-300 p-2 disabled:opacity-30"
                    >
                      <svg
                        className="h-[1.2em] w-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                      </svg>
                    </button>
                  </div>
                  {/* <div className="flex flex-row gap-3 lg:flex-col">
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
              </div> */}
                </div>
              )
              //    : selectedCategory === "Funding Support" ? (
              //     <div className="pl-32 flex h-full flex-grow flex-col items-start justify-center gap-5 lg:pl-0 lg:w-full lg:flex-row lg:justify-around lg:pl-40">
              //       <img
              //         src="/assets/funding_support.png"
              //         alt="funding"
              //         className="mt-20 w-[700px] lg:mt-0"
              //       />
              //     </div>
              //   ) : (
              //     <div className="pl-32 flex h-full flex-grow flex-col items-start justify-center gap-5 lg:pl-0 lg:w-full lg:flex-row lg:justify-around lg:pl-40">
              //       <img
              //         src="/assets/career_opportunities.png"
              //         alt="funding"
              //         className="mt-20 w-[700px] lg:mt-0 lg:w-[900px] 2lg:w-[1000px]"
              //       />
              //     </div>
              //   )
            }
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
};

interface SupportCategoryProps {
  title: string;
  onClick: () => void;
  link: string;
}

const SupportCategory: FunctionComponent<SupportCategoryProps> = ({
  title,
  onClick,
  link,
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative transition-all duration-200 ease-in-out"
    >
      <img src={`/assets/support_thumb_${link}.jpg`} alt="" />
      <p className="absolute bottom-2 left-3 z-10 text-left font-montserrat text-xs font-bold text-primary group-hover:text-white lg:text-sm">
        {title}
      </p>
      <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-0 group-hover:opacity-50" />
    </button>
  );
};

export default Support;

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
