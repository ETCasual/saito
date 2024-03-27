/* eslint-disable @next/next/no-img-element */
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";

const courses = new Array<{ video: string; label: string; image: string }>(
  5,
).fill({
  video: "logistics-intro",
  label: "The Prime School of Integrated Logistics",
  image:
    "https://smekwt.net/wp-content/uploads/2023/10/xlogistic.jpg.pagespeed.ic.C2SRkchLnv.webp",
});

const Intro = () => {
  const t = useTranslations("intro");

  const [selectedCourseVideo, setSelectedCourseVideo] = useState("");

  return (
    <Layout>
      <InnerLayout>
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="pb-6 font-montserrat text-[1.75rem] font-bold text-primary">
            {t("title")}
          </h1>
          {selectedCourseVideo ? (
            <div className="relative flex w-full max-w-[1000px] flex-row items-center gap-4">
              <video
                className="aspect-video"
                controls
                controlsList="nodownload"
              >
                <source
                  src={`https://work-temps.s3.ap-southeast-1.amazonaws.com/${selectedCourseVideo}.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <div className="relative flex h-[55dvh] w-full max-w-[1000px] flex-row items-center gap-4">
              {courses.map((c, i) => (
                <div
                  className="relative h-full w-full cursor-pointer"
                  onClick={() => setSelectedCourseVideo(c.video)}
                  key={i}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-tl-[3rem]">
                    <img
                      className="h-[70%] w-full object-cover object-[55%]"
                      alt={c.image}
                      src={c.image}
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#00000000] from-30% to-[#000] to-70% px-5 py-4 font-montserrat text-xl font-bold text-white transition duration-200 ease-in-out hover:to-primary">
                      {c.label}
                    </div>
                  </div>
                  {i === 1 ? (
                    <p className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center font-montserrat font-bold text-primary">
                      Recommended *
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Intro;

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
