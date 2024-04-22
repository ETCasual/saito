/* eslint-disable @next/next/no-img-element */
import { CategoryIcon } from "@/components/categories/Icon";
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { questions } from "@/data/questions";
import { useResult } from "@/stores/useResult";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Aptitude = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const t = useTranslations("aptitude");
  const router = useRouter();

  const {
    setAnswered,
    setFirst,
    setSecond,
    setThird,
    appearance,
    interest,
    personality,
    clear,
  } = useResult();

  const q = Object.values(questions[questionIndex]!);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <Layout>
      <InnerLayout>
        <div className="flex h-full w-full max-w-[800px] flex-col items-center justify-center lg:max-w-[900px]">
          <div className="relative -ml-20 w-full max-w-[500px] flex-row items-center lg:max-w-[700px]">
            <div className="z-20 flex flex-row items-center justify-between">
              {Object.values(questions).map((d, i) => (
                <CategoryIcon
                  key={i}
                  onClick={() => setQuestionIndex(i + 1)}
                  label={t(d.title)}
                  first={i === 0}
                  stage={
                    questionIndex === i + 1
                      ? "active"
                      : i + 1 === 1 && appearance
                        ? "completed"
                        : i + 1 === 2 && interest
                          ? "completed"
                          : i + 1 === 3 && personality
                            ? "completed"
                            : "otw"
                  }
                />
              ))}
              <div />
            </div>
            <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-black" />
            <div
              onClick={async () => {
                if (!interest || !personality || !appearance)
                  return alert("Unanswered questions remain.");

                await router.push("intro");
              }}
              className="absolute right-0 top-1/2 flex -translate-y-1/2 translate-x-full cursor-pointer flex-row items-center gap-3"
            >
              <div className={`h-[15px] w-[15px] rounded-full bg-black`} />
              <p className={`font-montserrat text-[14px] lg:text-lg`}>
                Results
              </p>
            </div>
          </div>

          <div className="w-full max-w-[900px] py-7 lg:max-w-[800px] lg:pl-0">
            <p className="pb-7 text-center font-montserrat text-lg">
              {t(q[1])}
            </p>
            {
              // questionIndex === 4 ? (
              <div className="flex flex-row items-center justify-center gap-10">
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "appearance"
                        : questionIndex === 2
                          ? "interest"
                          : "personality";

                    await setAnswered(key);

                    if (questionIndex === 1) {
                      await setFirst("logistics").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 2) {
                      await setSecond("logistics").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 3) {
                      await setThird("design").then(async () => {
                        await router.push("/intro");
                      });
                    }
                  }}
                  className="group relative flex flex-col items-start gap-3 outline-none"
                >
                  <img
                    // @ts-expect-error ignore for now
                    src={t(q[2]?.src)}
                    alt="A"
                    className="h-[150px] w-[150px] rounded-full border-primary object-cover group-hover:border-2"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    A
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      /* @ts-expect-error ignore for now */
                      __html: t(q[2]?.label),
                    }}
                    className={`absolute bottom-0 w-full translate-y-[150%] ${questionIndex === 3 ? "text-center" : "text-left"} font-montserrat capitalize`}
                  >
                    {/* {t(q[2]?.label)} */}
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "appearance"
                        : questionIndex === 2
                          ? "interest"
                          : "personality";

                    await setAnswered(key);

                    if (questionIndex === 1) {
                      await setFirst("design").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 2) {
                      await setSecond("design").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 3) {
                      await setThird("enforcement").then(async () => {
                        await router.push("/intro");
                      });
                    }
                  }}
                  className="group relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    // @ts-expect-error ignore for now
                    src={t(q[3]?.src)}
                    alt="B"
                    className="h-[150px] w-[150px] rounded-full border-primary object-cover group-hover:border-2"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    B
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      /* @ts-expect-error ignore for now */
                      __html: t(q[3]?.label),
                    }}
                    className={`absolute bottom-0 w-full translate-y-[150%] ${questionIndex === 3 ? "text-center" : "text-left"} font-montserrat capitalize`}
                  >
                    {/* {t(q[2]?.label)} */}
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "appearance"
                        : questionIndex === 2
                          ? "interest"
                          : "personality";

                    await setAnswered(key);

                    if (questionIndex === 1) {
                      await setFirst("enforcement").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 2) {
                      await setSecond("enforcement").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 3) {
                      await setThird("logistics").then(async () => {
                        await router.push("/intro");
                      });
                    }
                  }}
                  className="group relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    // @ts-expect-error ignore for now
                    src={t(q[4]?.src)}
                    alt="C"
                    className="h-[150px] w-[150px] rounded-full border-primary object-cover group-hover:border-2"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    C
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      /* @ts-expect-error ignore for now */
                      __html: t(q[4]?.label),
                    }}
                    className={`absolute bottom-0 w-full translate-y-[150%] ${questionIndex === 3 ? "text-center" : "text-left"} font-montserrat capitalize`}
                  >
                    {/* {t(q[2]?.label)} */}
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "appearance"
                        : questionIndex === 2
                          ? "interest"
                          : "personality";

                    await setAnswered(key);

                    if (questionIndex === 1) {
                      await setFirst("culinary").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 2) {
                      await setSecond("culinary").then(async () => {
                        setQuestionIndex((prev) => prev + 1);
                      });
                    }
                    if (questionIndex === 3) {
                      await setThird("culinary").then(async () => {
                        await router.push("/intro");
                      });
                    }
                  }}
                  className="group relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    // @ts-expect-error ignore for now
                    src={t(q[5]?.src)}
                    alt="D"
                    className="h-[150px] w-[150px] rounded-full border-primary object-cover group-hover:border-2"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    D
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      /* @ts-expect-error ignore for now */
                      __html: t(q[5]?.label),
                    }}
                    className={`absolute bottom-0 w-full translate-y-[150%] ${questionIndex === 3 ? "text-center" : "text-left"} font-montserrat capitalize`}
                  >
                    {/* {t(q[2]?.label)} */}
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
              </div>
              // )
              // : (
              // <div className="flex flex-col gap-3">
              //   <button
              //     onClick={async () => {
              //       const key =
              //         questionIndex === 1
              //           ? "interest"
              //           : questionIndex === 2
              //             ? "responsibilty"
              //             : questionIndex === 3
              //               ? "work_life"
              //               : questionIndex === 4
              //                 ? "appearance"
              //                 : "accountability";
              //       await setResult(key, "D").then(async () => {
              //         if (questionIndex === 5) {
              //           return await router.push("intro");
              //         } else setQuestionIndex((prev) => prev + 1);
              //       });
              //     }}
              //     className="flex flex-row items-start gap-3 outline-none"
              //   >
              //     <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
              //       A
              //     </div>
              //     <p className="text-left font-montserrat text-base">
              //       {t(q[2])}
              //     </p>
              //   </button>
              //   <button
              //     onClick={async () => {
              //       const key =
              //         questionIndex === 1
              //           ? "interest"
              //           : questionIndex === 2
              //             ? "responsibilty"
              //             : questionIndex === 3
              //               ? "work_life"
              //               : questionIndex === 4
              //                 ? "appearance"
              //                 : "accountability";
              //       await setResult(key, "B").then(async () => {
              //         if (questionIndex === 5) {
              //           return await router.push("intro");
              //         } else setQuestionIndex((prev) => prev + 1);
              //       });
              //     }}
              //     className="flex flex-row items-start gap-3"
              //   >
              //     <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
              //       B
              //     </div>
              //     <p className="text-left font-montserrat text-base">
              //       {t(q[3])}
              //     </p>
              //   </button>
              //   <button
              //     onClick={async () => {
              //       const key =
              //         questionIndex === 1
              //           ? "interest"
              //           : questionIndex === 2
              //             ? "responsibilty"
              //             : questionIndex === 3
              //               ? "work_life"
              //               : questionIndex === 4
              //                 ? "appearance"
              //                 : "accountability";
              //       await setResult(key, "C").then(async () => {
              //         if (questionIndex === 5) {
              //           return await router.push("intro");
              //         } else setQuestionIndex((prev) => prev + 1);
              //       });
              //     }}
              //     className="flex flex-row items-start gap-3"
              //   >
              //     <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
              //       C
              //     </div>
              //     <p className="text-left font-montserrat text-base">
              //       {t(q[4])}
              //     </p>
              //   </button>
              //   <button
              //     onClick={async () => {
              //       const key =
              //         questionIndex === 1
              //           ? "interest"
              //           : questionIndex === 2
              //             ? "responsibilty"
              //             : questionIndex === 3
              //               ? "work_life"
              //               : questionIndex === 4
              //                 ? "appearance"
              //                 : "accountability";
              //       await setResult(key, "D").then(async () => {
              //         if (questionIndex === 5) {
              //           return await router.push("intro");
              //         } else setQuestionIndex((prev) => prev + 1);
              //       });
              //     }}
              //     className="flex flex-row items-start gap-3"
              //   >
              //     <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
              //       D
              //     </div>
              //     <p className="text-left font-montserrat text-base">
              //       {t(q[5])}
              //     </p>
              //   </button>
              // </div>
              // )
            }
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Aptitude;

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
