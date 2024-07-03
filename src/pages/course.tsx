/* eslint-disable @next/next/no-img-element */
import { CourseLevel } from "@/components/CourseLevel";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { useUser } from "@/stores/useUser";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Technical = () => {
  const { selectedCourse } = useUser();
  const [hasSelectedCourse, setHasSelectedCourse] = useState(false);
  const [level, setLevel] = useState("foundation");
  const t = useTranslations();
  const [variant, setVariant] = useState("");

  return (
    <Layout>
      <InnerLayout sidelinkDisable={!!hasSelectedCourse}>
        <div
          className={`-mt-5 flex w-full flex-col items-center justify-center`}
        >
          {!hasSelectedCourse && selectedCourse === "logistics" ? (
            <div className="relative overflow-auto">
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("foundation");
                }}
                className="absolute top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.logistics.first.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.logistics.first.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("diploma");
                }}
                className="absolute right-[23.5%] top-[14.5%] flex w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.logistics.second.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.logistics.second.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("ba_a");
                }}
                className="2lg:top-[32.5%] absolute top-[31.5%] flex h-[12%] w-[36.5%] flex-col bg-primary px-3 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.logistics.third.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.logistics.third.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("ba_b");
                }}
                className="2lg:top-[32.5%] absolute right-[23.5%] top-[31.5%] flex h-[12%] w-[36.5%] flex-col bg-primary px-2 py-2.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.logistics.forth.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.logistics.forth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("halal");
                }}
                className="2lg:top-[32.5%] absolute right-[0%] top-[32%] flex h-[12%] w-[19.5%] flex-col justify-center overflow-hidden rounded-lg bg-[#009245] px-4 py-3"
              >
                <p className="2lg:text-[2.3] z-20 w-full text-center font-montserrat text-xs font-semibold leading-[12.5px] text-white">
                  {t("course.logistics.halal.btn")}
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
          ) : !hasSelectedCourse && selectedCourse === "design" ? (
            <div className="relative overflow-auto">
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("f_business");
                  setVariant("business");
                }}
                className="absolute right-[14.75%] top-[0%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.first.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.first.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("f_design");
                  setVariant("design");
                }}
                className="absolute right-[14.75%] top-[7.3%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.second.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.second.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("dip_business");
                  setVariant("business");
                }}
                className="absolute right-[14.75%] top-[14%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.third.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.third.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("dip_multimedia");
                  setVariant("design");
                }}
                className="absolute right-[14.75%] top-[21.5%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.forth.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.forth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("dip_graphic");
                  setVariant("design");
                }}
                className="absolute right-[14.75%] top-[28.5%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.fifth.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.fifth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("dip_interior");
                  setVariant("design");
                }}
                className="absolute right-[14.75%] top-[35.5%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.sixth.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.sixth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("dip_hr");
                  setVariant("hr");
                }}
                className="absolute right-[14.75%] top-[42.5%] flex w-[38%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] text-left font-montserrat text-xs font-semibold text-white">
                  {t("course.design.seventh.btn")}
                </p>
                <p className="font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.seventh.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("degree_business_management");
                  setVariant("business");
                }}
                className="absolute left-0 top-[45%] flex w-[43.5%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] w-full text-right font-montserrat text-xs font-semibold text-white">
                  {t("course.design.eighth.btn")}
                </p>
                <p className="w-full text-right font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.eighth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("degree_business_digital");
                  setVariant("business");
                }}
                className="absolute left-0 top-[52.5%] flex w-[43.5%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] w-full text-right font-montserrat text-xs font-semibold text-white">
                  {t("course.design.ninth.btn")}
                </p>
                <p className="w-full text-right font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.ninth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("degree_graphic");
                  setVariant("design");
                }}
                className="absolute left-0 top-[60%] flex w-[43.5%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] w-full text-right font-montserrat text-xs font-semibold text-white">
                  {t("course.design.tenth.btn")}
                </p>
                <p className="w-full text-right font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.tenth.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("degree_digital_media");
                  setVariant("design");
                }}
                className="absolute left-0 top-[67.5%] flex w-[43.5%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] w-full text-right font-montserrat text-xs font-semibold text-white">
                  {t("course.design.eleventh.btn")}
                </p>
                <p className="w-full text-right font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.eleventh.course_id")}
                </p>
              </button>
              <button
                onClick={() => {
                  setHasSelectedCourse(true);
                  setLevel("degree_hr");
                  setVariant("hr");
                }}
                className="absolute left-0 top-[75%] flex w-[43.5%] flex-col bg-primary px-3 py-0.5"
              >
                <p className="2lg:text-[2.3] w-full text-right font-montserrat text-xs font-semibold text-white">
                  {t("course.design.twelfth.btn")}
                </p>
                <p className="w-full text-right font-montserrat text-[8px] font-thin text-white">
                  {t("course.design.twelfth.course_id")}
                </p>
              </button>
              <img
                src="/assets/course/design/articulation.png"
                alt="Courses"
                className="2lg:max-h-[600px] max-h-[530px] object-scale-down"
              />
            </div>
          ) : hasSelectedCourse && selectedCourse === "design" ? (
            <div className="relative flex h-full flex-row justify-between gap-5 self-start lg:w-full lg:flex-row lg:gap-20">
              <div className="flex min-h-[70vh] flex-grow flex-col justify-between">
                <div className="flex h-full flex-grow flex-col gap-3">
                  <button
                    onClick={() => {
                      setVariant("design");
                      setLevel("f_design");
                    }}
                    className={`${variant === "design" ? "text-primary " : ""}font-montserrat relative w-full pl-4 text-left text-lg font-bold`}
                  >
                    {variant === "design" && (
                      <span className="absolute left-0">•</span>
                    )}{" "}
                    Design
                  </button>
                  <button
                    onClick={() => {
                      setVariant("business");
                      setLevel("f_business");
                    }}
                    className={`${variant === "business" ? "text-primary " : ""}font-montserrat relative w-full pl-4 text-left text-lg font-bold`}
                  >
                    {variant === "business" && (
                      <span className="absolute left-0">•</span>
                    )}{" "}
                    Business
                  </button>
                  <button
                    onClick={() => {
                      setVariant("hr");
                      setLevel("dip_hr");
                    }}
                    className={`${variant === "hr" ? "text-primary " : ""}font-montserrat relative w-full pl-4 text-left text-lg font-bold`}
                  >
                    {variant === "hr" && (
                      <span className="absolute left-0">•</span>
                    )}{" "}
                    Human Resource
                  </button>
                  {variant === "design" &&
                    [
                      {
                        title: t(`course.${selectedCourse}.second.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.second.btn`),
                            label: "",
                            onclick: () => setLevel("f_design"),
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.forth.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.forth.btn`),
                            label: "dip_multimedia",
                            onClick: () => setLevel("dip_multimedia"),
                          },
                          {
                            txt: t(`course.${selectedCourse}.fifth.btn`),
                            label: "dip_graphic",
                            onClick: () => setLevel("dip_graphic"),
                          },
                          {
                            txt: t(`course.${selectedCourse}.sixth.btn`),
                            label: "dip_interior",
                            onClick: () => setLevel("dip_interior"),
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.tenth.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.tenth.btn`),
                            label: "degree_graphic",
                            onClick: () => setLevel("degree_graphic"),
                          },
                          {
                            txt: t(`course.${selectedCourse}.tenth.btn`),
                            onClick: () => setLevel("degree_digital_media"),
                            label: "degree_digital_media",
                          },
                        ],
                      },
                    ].map((s, i) => (
                      <CourseLevel
                        onClick={() =>
                          setLevel(
                            s.title === "Foundation"
                              ? "f_design"
                              : s.title === "Diploma"
                                ? "dip_multimedia"
                                : s.title === "Degree"
                                  ? "degree_graphic"
                                  : s.title.toLowerCase(),
                          )
                        }
                        title={s.title}
                        items={s.sub}
                        school={selectedCourse}
                        variant={variant}
                        level={level}
                        active={
                          (level.startsWith("f_") &&
                            s.title === "Foundation") ||
                          (level.startsWith("dip_") && s.title === "Diploma") ||
                          (level.startsWith("degree_") &&
                            s.title === "Degree") ||
                          level.toLowerCase() === s.title.toLowerCase()
                        }
                        key={i}
                      />
                    ))}
                  {variant === "business" &&
                    [
                      {
                        title: t(`course.${selectedCourse}.first.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.first.btn`),
                            label: "",
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.third.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.third.btn`),
                            label: "dip_business",
                            onclick: () => setLevel("dip_business"),
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.eighth.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.eighth.btn`),
                            label: "degree_business_management",
                            onClick: () =>
                              setLevel("degree_business_management"),
                          },
                          {
                            txt: t(`course.${selectedCourse}.ninth.btn`),
                            onClick: () => setLevel("degree_business_digital"),
                            label: "degree_business_digital",
                          },
                        ],
                      },
                    ].map((s, i) => (
                      <CourseLevel
                        onClick={() =>
                          setLevel(
                            s.title === "Foundation"
                              ? "f_business"
                              : s.title === "Diploma"
                                ? "dip_business"
                                : s.title === "Degree"
                                  ? "degree_business_management"
                                  : s.title.toLowerCase(),
                          )
                        }
                        title={s.title}
                        items={s.sub}
                        school={selectedCourse}
                        variant={variant}
                        level={level}
                        active={
                          (level.startsWith("f_") &&
                            s.title === "Foundation") ||
                          (level.startsWith("dip_") && s.title === "Diploma") ||
                          (level.startsWith("degree_") &&
                            s.title === "Degree") ||
                          level.toLowerCase() === s.title.toLowerCase()
                        }
                        key={i}
                      />
                    ))}
                  {variant === "hr" &&
                    [
                      {
                        title: t(`course.${selectedCourse}.seventh.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.seventh.btn`),
                            label: "dip_hr",
                            onclick: () => setLevel("dip_hr"),
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.twelfth.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.twelfth.btn`),
                            label: "degree_hr",
                            onclick: () => setLevel("degree_hr"),
                          },
                        ],
                      },
                    ].map((s, i) => (
                      <CourseLevel
                        onClick={() =>
                          setLevel(
                            s.title === "Degree"
                              ? "degree_hr"
                              : s.title === "Diploma"
                                ? "dip_hr"
                                : s.title.toLowerCase(),
                          )
                        }
                        title={s.title}
                        items={s.sub}
                        school={selectedCourse}
                        variant={variant}
                        level={level}
                        active={
                          (level.startsWith("dip_") && s.title === "Diploma") ||
                          (level.startsWith("degree_") &&
                            s.title === "Degree") ||
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
                    setHasSelectedCourse(false);
                    setVariant("");
                  }}
                >
                  {t("back_nav")}
                </p>
              </div>
              <div className="flex w-full flex-row items-start justify-normal gap-5 lg:gap-20">
                <img
                  src={`/assets/course/design/${variant}/${level}.png`}
                  className={`h-full max-h-[550px] object-contain`}
                  alt=""
                />
              </div>
            </div>
          ) : (
            hasSelectedCourse &&
            selectedCourse === "logistics" && (
              <div className="relative flex h-full flex-row justify-between gap-5 self-start lg:w-full lg:flex-row lg:gap-20">
                <div className="flex min-h-[70vh] flex-grow flex-col justify-between">
                  <div className="flex h-full flex-grow flex-col gap-3">
                    {[
                      {
                        title: t(`course.${selectedCourse}.first.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.first.btn`),
                            label: "",
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.second.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.second.btn`),
                            label: "",
                          },
                        ],
                      },
                      {
                        title: t(`course.${selectedCourse}.third.type`),
                        sub: [
                          {
                            txt: t(`course.${selectedCourse}.third.btn`),
                            label: "ba_a",
                            onClick: () => setLevel("ba_a"),
                          },
                          {
                            txt: t(`course.${selectedCourse}.forth.btn`),
                            onClick: () => setLevel("ba_b"),
                            label: "ba_b",
                          },
                        ],
                      },
                    ].map((s, i) => (
                      <CourseLevel
                        onClick={() =>
                          setLevel(
                            s.title === "Degree"
                              ? "ba_a"
                              : s.title.toLowerCase(),
                          )
                        }
                        title={s.title}
                        items={s.sub}
                        school={selectedCourse}
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
                      setHasSelectedCourse(false);
                      setVariant("");
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
                  {level !== "foundation" &&
                    level !== "diploma" &&
                    level !== "halal" && (
                      <button
                        onClick={() => {
                          setHasSelectedCourse(true);
                          setLevel("halal");
                        }}
                        className="relative mt-2.5 flex w-[140px] max-w-[140px] flex-col overflow-hidden rounded-lg bg-[#009245] px-4 py-3"
                      >
                        <p className="2lg:text-[2.3] z-20 text-center font-montserrat text-xs font-semibold leading-[12.5px] text-white">
                          {t("course.logistics.halal.btn")}
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
            )
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
