/* eslint-disable @next/next/no-img-element */
// import { CourseLevel } from "@/components/CourseLevel";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type Event, events } from "@/data/questions";
import { useUser } from "@/stores/useUser";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<Event["type"] | null>(null);
  const [variant, setVariant] = useState("");
  //   const [level, setLevel] = useState("foundation");
  const { selectedCourse } = useUser();
  const t = useTranslations();

  useEffect(
    () => setVariant(String(localStorage.getItem("preferred-variant"))),
    [],
  );

  return (
    <Layout>
      <InnerLayout>
        <div className={`flex w-full flex-col items-center justify-center`}>
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
          <div className={`flex flex-col items-center justify-center`}>
            <h1 className="text-center font-montserrat text-[1.75rem] font-bold text-primary">
              {selectedCategory !== null
                ? events[selectedCourse!].filter((e) =>
                    selectedCourse === "design"
                      ? e.type === selectedType && e.variant === variant
                      : e.type === selectedType,
                  )[selectedCategory]?.title
                : t("events.title")}
            </h1>
            {selectedCategory !== null &&
            events[selectedCourse!].filter((e) =>
              selectedCourse === "design"
                ? e.type === selectedType && e.variant === variant
                : e.type === selectedType,
            )[selectedCategory]?.sub ? (
              <p className="w-full text-center font-montserrat text-sm text-primary">
                {
                  events[selectedCourse!].filter(
                    (e) => e.type === selectedType,
                  )[selectedCategory]?.sub
                }
              </p>
            ) : selectedCategory !== null &&
              events[selectedCourse!].filter((e) =>
                selectedCourse === "design"
                  ? e.type === selectedType && e.variant === variant
                  : e.type === selectedType,
              )[selectedCategory]?.date ? (
              <p className="w-full text-center font-montserrat text-sm text-primary">
                {
                  events[selectedCourse!].filter((e) =>
                    selectedCourse === "design"
                      ? e.type === selectedType && e.variant === variant
                      : e.type === selectedType,
                  )[selectedCategory]?.date
                }
              </p>
            ) : (
              <div className="min-h-[20px]" />
            )}
            {selectedCategory !== null &&
            events[selectedCourse!].filter((e) =>
              selectedCourse === "design"
                ? e.type === selectedType && e.variant === variant
                : e.type === selectedType,
            )[selectedCategory]?.sub &&
            events[selectedCourse!].filter((e) =>
              selectedCourse === "design"
                ? e.type === selectedType && e.variant === variant
                : e.type === selectedType,
            )[selectedCategory]?.date ? (
              <p className="w-full text-center font-montserrat text-sm text-primary">
                {
                  events[selectedCourse!].filter((e) =>
                    selectedCourse === "design"
                      ? e.type === selectedType && e.variant === variant
                      : e.type === selectedType,
                  )[selectedCategory]?.date
                }
              </p>
            ) : (
              <div className="min-h-[20px]" />
            )}
            {
              selectedCategory === null ? (
                <div className="flex max-w-[1200px] flex-row gap-4">
                  {selectedCourse === "logistics" ? (
                    <>
                      <div className="group flex w-full flex-col items-center">
                        <p className="font-montserrat text-[1rem] font-bold group-hover:text-primary">
                          {t("events.applied_learning_tips")}
                        </p>
                        <div
                          onClick={() => {
                            setSelectedType("event");
                            setSelectedCategory(0);
                          }}
                          className="relative grid h-[220px] w-[35vw] cursor-pointer pt-3 lg:h-[300px] lg:w-[30vw]"
                        >
                          <img
                            src="/assets/events/logistics/events.jpg"
                            alt="events_btn"
                            className="visible absolute left-0 top-0 h-full w-full object-cover group-hover:invisible"
                          />
                          <img
                            src="/assets/events/logistics/events_hovered.jpg"
                            alt="events_btn"
                            className="invisible absolute left-0 top-0 h-full w-full object-cover group-hover:visible"
                          />
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedType("activity");
                          setSelectedCategory(0);
                        }}
                        className="group flex w-full flex-col items-center"
                      >
                        <p className="font-montserrat text-[1rem] font-bold group-hover:text-primary">
                          {t("events.student_activities_and_clubs")}
                        </p>
                        <div className="relative grid h-[220px] w-[35vw] cursor-pointer pt-3 lg:h-[300px] lg:w-[30vw]">
                          <img
                            src="/assets/events/logistics/activities.jpg"
                            alt="activities_btn"
                            className="visible absolute left-0 top-0 h-full w-full object-cover group-hover:invisible"
                          />
                          <img
                            src="/assets/events/logistics/activities_hovered.jpg"
                            alt="activities_btn"
                            className="invisible absolute left-0 top-0 h-full w-full object-cover group-hover:visible"
                          />
                        </div>
                      </div>
                    </>
                  ) : selectedCourse === "design" ? (
                    <div
                      onClick={() => {
                        setSelectedType("event");
                        setSelectedCategory(0);
                      }}
                      className="group flex w-full flex-col items-center"
                    >
                      <div className="relative grid h-[320px] w-[45vw] cursor-pointer pt-3 lg:h-[400px] lg:w-[70vw]">
                        <img
                          src="/assets/events/design/events.jpg"
                          alt="activities_btn"
                          className="visible absolute left-0 top-0 h-full w-full object-cover group-hover:invisible"
                        />
                        <img
                          src="/assets/events/design/events_hovered.jpg"
                          alt="activities_btn"
                          className="invisible absolute left-0 top-0 h-full w-full object-cover group-hover:visible"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex h-full min-h-[55vh] flex-grow flex-col items-start justify-center gap-5 lg:max-h-[55vh] lg:justify-around lg:pl-0">
                  <div className="flex max-h-[390px] min-h-[390px] w-[725px] flex-col lg:mt-5 lg:w-[860px]">
                    <img
                      src={`/assets/events/${selectedCourse}/${
                        events[selectedCourse!].filter((e) =>
                          selectedCourse === "design"
                            ? e.type === selectedType && e.variant === variant
                            : e.type === selectedType,
                        )[selectedCategory]?.contentImg
                      }${
                        events[selectedCourse!]
                          .filter((e) =>
                            selectedCourse === "design"
                              ? e.type === selectedType && e.variant === variant
                              : e.type === selectedType,
                          )
                          [selectedCategory]?.contentImg.endsWith("png")
                          ? ""
                          : ".jpg"
                      }`}
                      className="overflow-hidden object-cover"
                      alt=""
                    />
                  </div>
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
                      disabled={
                        (selectedCourse === "logistics" &&
                          selectedCategory === 8) ||
                        (selectedCourse === "design" &&
                          variant === "design_business" &&
                          selectedCategory === 6) ||
                        (selectedCourse === "design" &&
                          variant === "design_design" &&
                          selectedCategory === 15)
                      }
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
              //    : selectedCategory === "Funding Events" ? (
              //     <div className="pl-32 flex h-full flex-grow flex-col items-start justify-center gap-5 lg:pl-0 lg:w-full lg:flex-row lg:justify-around lg:pl-40">
              //       <img
              //         src="/assets/funding_Events.png"
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

// interface EventsCategoryProps {
//   onClick: () => void;
//   img: string;
// }

// const EventsCategory: FunctionComponent<EventsCategoryProps> = ({
//   img,
//   onClick,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="group relative transition-all duration-200 ease-in-out"
//     >
//       <img
//         src={img}
//         alt=""
//         className="h-[100px] w-[200px] object-cover object-center"
//       />
//       {/* <p className="absolute bottom-2 left-3 z-10 text-left font-montserrat text-xs font-bold text-primary group-hover:text-white lg:text-sm">
//         {title}
//       </p> */}
//       <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-0 group-hover:opacity-50" />
//     </button>
//   );
// };

export default Events;

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
