/* eslint-disable @next/next/no-img-element */
import { CourseLevel } from "@/components/CourseLevel";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Technical = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [level, setLevel] = useState("foundation");
  const t = useTranslations();

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
                  {t("course.first.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.first.course_id")}
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
                  {t("course.second.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.second.course_id")}
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
                  {t("course.third.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.third.course_id")}
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
                  {t("course.forth.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.forth.course_id")}
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
                  {t("course.halal.btn")}
                </p>
                <img
                  src="/assets/halal_btn.png"
                  alt=""
                  className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2"
                />
              </button>
              <img
                src={t("course.base_articulation_image")}
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
                      title: t("course.first.type"),
                      sub: [{ txt: t("course.first.btn"), label: "" }],
                    },
                    {
                      title: t("course.second.type"),
                      sub: [
                        {
                          txt: t("course.second.btn"),
                          label: "",
                        },
                      ],
                    },
                    {
                      title: t("course.third.type"),
                      sub: [
                        {
                          txt: t("course.third.btn"),
                          label: "ba_a",
                          onClick: () => setLevel("ba_a"),
                        },
                        {
                          txt: t("course.forth.btn"),
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
                  {t("back_nav")}
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
                      {t("course.halal.btn")}
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
