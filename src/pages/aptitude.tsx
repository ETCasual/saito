/* eslint-disable @next/next/no-img-element */
import { CategoryIcon } from "@/components/categories/Icon";
import { Layout } from "@/components/layout";
import { questions } from "@/data/questions";
import { useResult } from "@/stores/useResult";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Aptitude = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const t = useTranslations("aptitude");

  const {
    accountability,
    interest,
    appearance,
    responsibilty,
    work_life,
    setResult,
  } = useResult();

  const q =
    questionIndex !== 6 ? Object.values(questions[questionIndex]!) : "nothing";
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="pb-6 font-montserrat text-[1.75rem] font-bold text-primary">
          Aptitude Test
        </h1>
        <div className="relative w-full max-w-[800px] flex-row items-center">
          <div className="z-20 flex flex-row items-center gap-7">
            {Object.values(questions).map((d, i) => (
              <CategoryIcon
                key={i}
                onClick={() => setQuestionIndex(i + 1)}
                label={t(d.title)}
                stage={
                  questionIndex === i + 1
                    ? "active"
                    : i + 1 === 1 && interest
                      ? "completed"
                      : i + 1 === 2 && responsibilty
                        ? "completed"
                        : i + 1 === 3 && work_life
                          ? "completed"
                          : i + 1 === 4 && appearance
                            ? "completed"
                            : i + 1 === 5 && accountability
                              ? "completed"
                              : "otw"
                }
              />
            ))}
          </div>
          <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-black" />
          <div
            onClick={() => {
              if (
                !interest ||
                !responsibilty ||
                !work_life ||
                !appearance ||
                !accountability
              )
                return alert("Unanswered questions remain.");

              setQuestionIndex(6);
            }}
            className="absolute right-0 top-1/2 flex -translate-y-1/2 translate-x-full cursor-pointer flex-row items-center gap-3"
          >
            <div
              className={`h-[15px] w-[15px] rounded-full ${questionIndex === 6 ? "bg-primary" : "bg-black"}`}
            />
            <p
              className={`font-montserrat${questionIndex === 6 ? " text-primary" : ""}`}
            >
              Results
            </p>
          </div>
        </div>
        {questionIndex !== 6 ? (
          <div className="w-full max-w-[800px] py-7">
            <p className="pb-7 font-montserrat text-lg">{t(q[1])}</p>
            {questionIndex === 4 ? (
              <div className="flex flex-row items-center justify-center gap-10">
                <button
                  onClick={async () => {
                    const key = "appearance";
                    await setResult(key, "A").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    src={t(q[2])}
                    alt="A"
                    className="h-[150px] w-[150px] object-cover"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    A
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key = "appearance";
                    await setResult(key, "B").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    src={t(q[3])}
                    alt="B"
                    className="h-[150px] w-[150px] object-cover"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    B
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key = "appearance";
                    await setResult(key, "C").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    src={t(q[4])}
                    alt="C"
                    className="h-[150px] w-[150px] object-cover"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    C{" "}
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
                <button
                  onClick={async () => {
                    const key = "appearance";
                    await setResult(key, "D").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="relative flex flex-row items-start gap-3 outline-none"
                >
                  <img
                    src={t(q[5])}
                    alt="D"
                    className="h-[150px] w-[150px] object-cover"
                  />
                  <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    D
                  </div>
                  {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "interest"
                        : questionIndex === 2
                          ? "responsibilty"
                          : questionIndex === 3
                            ? "work_life"
                            : questionIndex === 4
                              ? "appearance"
                              : "accountability";
                    await setResult(key, "A").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="flex flex-row items-start gap-3 outline-none"
                >
                  <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    A
                  </div>
                  <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p>
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "interest"
                        : questionIndex === 2
                          ? "responsibilty"
                          : questionIndex === 3
                            ? "work_life"
                            : questionIndex === 4
                              ? "appearance"
                              : "accountability";
                    await setResult(key, "B").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="flex flex-row items-start gap-3"
                >
                  <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    B
                  </div>
                  <p className="text-left font-montserrat text-base">
                    {t(q[3])}
                  </p>
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "interest"
                        : questionIndex === 2
                          ? "responsibilty"
                          : questionIndex === 3
                            ? "work_life"
                            : questionIndex === 4
                              ? "appearance"
                              : "accountability";
                    await setResult(key, "C").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="flex flex-row items-start gap-3"
                >
                  <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    C
                  </div>
                  <p className="text-left font-montserrat text-base">
                    {t(q[4])}
                  </p>
                </button>
                <button
                  onClick={async () => {
                    const key =
                      questionIndex === 1
                        ? "interest"
                        : questionIndex === 2
                          ? "responsibilty"
                          : questionIndex === 3
                            ? "work_life"
                            : questionIndex === 4
                              ? "appearance"
                              : "accountability";
                    await setResult(key, "D").then(() =>
                      setQuestionIndex((prev) => prev + 1),
                    );
                  }}
                  className="flex flex-row items-start gap-3"
                >
                  <div className="flex min-h-[27px] min-w-[27px] flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    D
                  </div>
                  <p className="text-left font-montserrat text-base">
                    {t(q[5])}
                  </p>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-[800px] py-7">
            <div className="flex h-full w-full flex-col items-start justify-center gap-3">
              <div className="flex h-[30px] flex-row items-center gap-5">
                <div
                  className={`w-[450px] text-end font-montserrat font-bold text-primary`}
                >
                  The Prime School of Integrated Logistics
                </div>

                <div
                  style={{ width: `${"200"}px` }}
                  className={`h-full bg-gradient-to-r from-black to-primary transition-all duration-200 ease-in-out`}
                />
              </div>
              <div className="flex h-[30px] flex-row items-center gap-5">
                <div
                  className={`w-[450px] text-end font-montserrat font-bold text-primary`}
                >
                  K² School of Business and Design
                </div>

                <div
                  style={{ width: `${"165"}px` }}
                  className={`h-full bg-gradient-to-r from-black to-primary transition-all duration-200 ease-in-out`}
                />
              </div>
              <div className="flex h-[30px] flex-row items-center gap-5">
                <div
                  className={`w-[450px] text-end font-montserrat font-bold text-primary`}
                >
                  Saito Law Enforcement & Public Sector Management
                </div>

                <div
                  style={{ width: `${"145"}px` }}
                  className={`h-full bg-gradient-to-r from-black to-primary transition-all duration-200 ease-in-out`}
                />
              </div>
              <div className="flex h-[30px] flex-row items-center gap-5">
                <div
                  className={`w-[450px] text-end font-montserrat font-bold text-primary`}
                >
                  Lé Masters School of Hospitality & Culinary Arts
                </div>

                <div
                  style={{ width: `${"20"}px` }}
                  className={`h-full bg-gradient-to-r from-black to-primary transition-all duration-200 ease-in-out`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
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
