/* eslint-disable @next/next/no-img-element */
import { InnerLayout } from "@/components/InnerLayout";
import { IntroSlides } from "@/components/IntroSlides";
import { Layout } from "@/components/Layout";
import { useResult } from "@/stores/useResult";
import { type Courses, useUser } from "@/stores/useUser";
import { getKeyWithLargestValue } from "@/utils/helper";
import { type GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
// import { useTranslations } from "next-intl";
import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import YouTube, { type YouTubeEvent } from "react-youtube";

type TimestampOpts = {
  title: string;
  toTime: number;
};

const timestamps: Record<
  string,
  Record<string, Record<"en" | "ms", TimestampOpts[]>>
> = {
  logistics_intro: {
    default: {
      en: [
        {
          title: "Introduction of Logistics in Malaysia",
          toTime: 0,
        },
        {
          title: "Students' Insights",
          toTime: 37,
        },
        {
          title: "Dato Amin's Insights",
          toTime: 131,
        },
        {
          title: "Latest News of Logistics in Malaysia",
          toTime: 265,
        },
        {
          title: "Saito's Leadership in Education",
          toTime: 285,
        },
        {
          title: "Charles Brewer as Industry Expert",
          toTime: 314,
        },
        {
          title: "Dato Amin as Industry Expert",
          toTime: 366,
        },
      ],
      ms: [
        {
          title: "Pengenalan Logistik di Malaysia",
          toTime: 0,
        },
        {
          title: "Pandangan Pelajar",
          toTime: 37,
        },
        {
          title: "Pandangan Dato Amin",
          toTime: 131,
        },
        {
          title: "Berita Terkini Logistik di Malaysia",
          toTime: 265,
        },
        {
          title: "Kepimpinan Saito dalam Pendidikan",
          toTime: 285,
        },
        {
          title: "Charles Brewer sebagai Pakar Industri",
          toTime: 314,
        },
        {
          title: "Dato Amin sebagai Pakar Industri",
          toTime: 366,
        },
      ],
    },
  },
  design_intro: {
    design: {
      en: [
        {
          title: "Dean's Introduction to Saito K² School",
          toTime: 0,
        },
        {
          title: "The Creative Industry in Malaysia",
          toTime: 120,
        },
        {
          title: "Alumni Reviews",
          toTime: 180,
        },
        {
          title: "Students' Reviews",
          toTime: 628,
        },
        {
          title: "Lecturers' Sharing",
          toTime: 803,
        },
        {
          title: "Dean's Closing Remarks",
          toTime: 951,
        },
      ],
      ms: [
        {
          title: "Pengenalan Dekan kepada Saito K² School",
          toTime: 0,
        },
        {
          title: "Industri Kreatif di Malaysia",
          toTime: 120,
        },
        {
          title: "Ulasan Alumni",
          toTime: 180,
        },
        {
          title: "Ulasan Pelajar",
          toTime: 628,
        },
        {
          title: "Perkongsian Pensyarah",
          toTime: 803,
        },
        {
          title: "Ucapan Penutup Dekan",
          toTime: 951,
        },
      ],
    },

    business: {
      en: [
        {
          title: "Dean's Introduction to Saito K² School",
          toTime: 0,
        },
        {
          title: "The Business Industry in Malaysia",
          toTime: 120,
        },
        {
          title: "Alumni Reviews",
          toTime: 180,
        },
        {
          title: "Students' Reviews",
          toTime: 307,
        },
        {
          title: "Lecturers' Sharing",
          toTime: 410,
        },
        {
          title: "Dean's Closing Remarks",
          toTime: 465,
        },
      ],
      ms: [
        {
          title: "Pengenalan Dekan kepada Saito K² School",
          toTime: 0,
        },
        {
          title: "Industri Perniagaan di Malaysia",
          toTime: 120,
        },
        {
          title: "Ulasan Alumni",
          toTime: 180,
        },
        {
          title: "Ulasan Pelajar",
          toTime: 307,
        },
        {
          title: "Perkongsian Pensyarah",
          toTime: 410,
        },
        {
          title: "Ucapan Penutup Dekan",
          toTime: 465,
        },
      ],
    },
    hr: {
      en: [
        {
          title: "Dean's Introduction to Saito K² School",
          toTime: 0,
        },
        {
          title: "The HR Industry in Malaysia",
          toTime: 120,
        },
        {
          title: "Alumni Reviews",
          toTime: 185,
        },
        {
          title: "Students' Reviews",
          toTime: 323,
        },
        {
          title: "Lecturers' Sharing",
          toTime: 423,
        },
        {
          title: "Dean's Closing Remarks",
          toTime: 523,
        },
      ],
      ms: [
        {
          title: "Pengenalan Dekan kepada Saito K² School",
          toTime: 0,
        },
        {
          title: "Industri Perniagaan di Malaysia",
          toTime: 120,
        },
        {
          title: "Ulasan Alumni",
          toTime: 185,
        },
        {
          title: "Ulasan Pelajar",
          toTime: 323,
        },
        {
          title: "Perkongsian Pensyarah",
          toTime: 423,
        },
        {
          title: "Ucapan Penutup Dekan",
          toTime: 523,
        },
      ],
    },
  },
};

const courses: Omit<
  CourseSelectionProps,
  "setSelectedCourseVideo" | "hasRecommended"
>[] = [
  {
    video: "logistics_intro",
    label: "The Prime School of Integrated Logistics",
    image: "/assets/intro/logistics.jpg",
    selector: "logistics",
  },
  {
    video: "design_intro",
    label: "K²\nSchool of Business and Design",
    image: "/assets/intro/design.jpg",
    selector: "design",
  },
  {
    video: "enforcement_intro",
    label: "Saito Law Enforcement and Public Sector Management",
    image: "/assets/intro/enforcement.jpg",
    selector: "enforcement",
  },
  {
    video: "culinary_intro",
    label: "Lé Masters School of Hospitality and Culinary Arts",
    image: "/assets/intro/culinary.jpg",
    selector: "culinary",
  },
  {
    video: "graduate_intro",
    label: "Saito Graduate School",
    image: "/assets/intro/graduate.jpg",
    selector: "graduate",
  },
];
const Intro = () => {
  // const t = useTranslations("intro");

  const [hasRecommended, setHasRecommended] = useState(true);
  const [selectedCourseVideo, setSelectedCourseVideo] = useState("");
  const [variant, setVariant] = useState<string>("");
  const [selection, setSelection] = useState<string>("");
  const [slide, setSlide] = useState(1);
  const t = useTranslations();
  const router = useRouter();
  const [videoRef, setVideoRef] = useState<YouTubeEvent>();

  useEffect(() => {
    setHasRecommended(
      localStorage.getItem("recommended") === null ? true : false,
    );
    localStorage.removeItem("preferred-variant");
    setTimeout(() => localStorage.removeItem("recommended"));
  }, []);

  return (
    <Layout>
      <InnerLayout>
        <div className="mr-4 flex h-full w-full flex-col items-center justify-center">
          {/* <h1 className="pb-6 font-montserrat text-[1.75rem] font-bold text-primary">
            {t("title")}
          </h1> */}
          {selectedCourseVideo === "logistics_intro" ? (
            <div className="relative flex w-full max-w-[620px] flex-row gap-1 lg:ml-0 lg:mt-0">
              {/* <video
                className="aspect-video"
                controls
                controlsList="nodownload"
              >
                <source
                  src={`https://work-temps.s3.ap-southeast-1.amazonaws.com/${selectedCourseVideo}.mp4`}
                  type="video/mp4"
                />
              </video> */}
              {router.locale === "en" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="jsTKYlrVX-Y"
                />
              ) : router.locale === "ms" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="2kABQlvyKAU"
                />
              ) : null}
              <div className="flex max-h-[360px] w-full max-w-[135px] flex-col gap-2 overflow-y-auto">
                {router.locale === "en"
                  ? timestamps[selectedCourseVideo]?.default?.en.map((ts) => (
                      <VideoTimestampButton
                        key={ts.toTime}
                        title={ts.title}
                        toTime={ts.toTime}
                        videoRef={videoRef}
                      />
                    ))
                  : router.locale === "ms"
                    ? timestamps[selectedCourseVideo]?.default?.ms.map((ts) => (
                        <VideoTimestampButton
                          key={ts.toTime}
                          title={ts.title}
                          toTime={ts.toTime}
                          videoRef={videoRef}
                        />
                      ))
                    : null}
              </div>
            </div>
          ) : selectedCourseVideo === "design_intro" && variant === "" ? (
            <div className="relative flex h-[250px] w-full max-w-[650px] flex-row items-center justify-center gap-7 lg:ml-0 lg:mt-0">
              <button
                onClick={async () => {
                  setVariant("design");
                  localStorage.setItem("preferred-variant", "design_design");
                }}
                className="group relative flex flex-row items-start gap-3 outline-none"
              >
                <img
                  src={"/assets/intro/k2/design.png"}
                  alt="Design"
                  className="h-[200px] w-[200px] rounded-full border-primary object-cover group-hover:border-2"
                />
                {/* <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    Design
                  </div> */}
                <div
                  className={`absolute bottom-0 w-full translate-y-[150%] text-center font-montserrat font-bold capitalize`}
                >
                  {t("intro.design")}
                </div>
                {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
              </button>
              <button
                onClick={async () => {
                  setVariant("business");
                  localStorage.setItem("preferred-variant", "design_business");
                }}
                className="group relative flex flex-row items-start gap-3 outline-none"
              >
                <img
                  src={"/assets/intro/k2/business.png"}
                  alt="Business"
                  className="h-[200px] w-[200px] rounded-full border-primary object-cover group-hover:border-2"
                />
                {/* <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    Design
                  </div> */}
                <div
                  className={`absolute bottom-0 w-full translate-y-[150%] text-center font-montserrat font-bold capitalize`}
                >
                  {t("intro.business")}
                </div>
                {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
              </button>
              <button
                onClick={async () => {
                  setVariant("hr");
                  localStorage.setItem("preferred-variant", "design_hr");
                }}
                className="group relative flex flex-row items-start gap-3 outline-none"
              >
                <img
                  src={"/assets/intro/k2/hr.png"}
                  alt="HR"
                  className="h-[200px] w-[200px] rounded-full border-primary object-cover group-hover:border-2"
                />
                {/* <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    Design
                  </div> */}
                <div
                  className={`absolute bottom-0 w-full translate-y-[150%] text-center font-montserrat font-bold capitalize`}
                >
                  {t("intro.hr")}
                </div>
                {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
              </button>
            </div>
          ) : selectedCourseVideo === "design_intro" &&
            variant !== "" &&
            selection === "" ? (
            <div className="relative flex h-[250px] w-full max-w-[650px] flex-row items-center justify-center gap-7 lg:ml-0 lg:mt-0">
              <button
                onClick={async () => {
                  setSelection("video");
                }}
                className="group relative flex flex-row items-start gap-3 outline-none"
              >
                <img
                  src={"/assets/intro/k2/video.png"}
                  alt="HR"
                  className="h-[200px] w-[200px] rounded-full border-primary object-cover group-hover:border-2"
                />
                {/* <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    Design
                  </div> */}
                <div
                  className={`absolute bottom-0 w-full translate-y-[150%] text-center font-montserrat font-bold capitalize`}
                >
                  {t("intro.video")}
                </div>
                {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
              </button>
              <button
                onClick={async () => {
                  setSelection("prospectus");
                }}
                className="group relative flex flex-row items-start gap-3 outline-none"
              >
                <img
                  src={"/assets/intro/k2/prospectus.png"}
                  alt="HR"
                  className="h-[200px] w-[200px] rounded-full border-primary object-cover group-hover:border-2"
                />
                {/* <div className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black font-montserrat font-bold text-white">
                    Design
                  </div> */}
                <div
                  className={`absolute bottom-0 w-full translate-y-[150%] text-center font-montserrat font-bold capitalize`}
                >
                  {t("intro.prospectus")}
                </div>
                {/* <p className="text-left font-montserrat text-base">
                    {t(q[2])}
                  </p> */}
              </button>
            </div>
          ) : selectedCourseVideo === "design_intro" &&
            variant === "design" &&
            selection === "video" ? (
            <div className="relative flex w-full max-w-[620px] flex-row gap-1 lg:ml-0 lg:mt-0">
              {/* <video
              className="aspect-video"
              controls
              controlsList="nodownload"
            >
              <source
                src={`https://work-temps.s3.ap-southeast-1.amazonaws.com/${selectedCourseVideo}.mp4`}
                type="video/mp4"
              />
            </video> */}
              {router.locale === "en" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="gbPTYulG9Hg"
                />
              ) : router.locale === "ms" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="8ykbJYv6q2Q"
                />
              ) : null}
              <div className="flex max-h-[360px] w-full max-w-[135px] flex-col gap-2 overflow-y-auto">
                {router.locale === "en"
                  ? timestamps[selectedCourseVideo]?.design?.en.map((ts) => (
                      <VideoTimestampButton
                        key={ts.toTime}
                        title={ts.title}
                        toTime={ts.toTime}
                        videoRef={videoRef}
                      />
                    ))
                  : router.locale === "ms"
                    ? timestamps[selectedCourseVideo]?.design?.ms.map((ts) => (
                        <VideoTimestampButton
                          key={ts.toTime}
                          title={ts.title}
                          toTime={ts.toTime}
                          videoRef={videoRef}
                        />
                      ))
                    : null}
              </div>
            </div>
          ) : selectedCourseVideo === "design_intro" &&
            variant === "design" &&
            selection === "prospectus" ? (
            <IntroSlides
              max={selection === "prospectus" ? 26 : 1}
              onClose={() => {
                setSelection("");
                setSlide(1);
              }}
              selection={selection}
              setSlide={setSlide}
              slide={slide}
              variant={"design"}
            />
          ) : selectedCourseVideo === "design_intro" &&
            variant === "hr" &&
            selection === "prospectus" ? (
            <IntroSlides
              max={selection === "prospectus" ? 26 : 1}
              onClose={() => {
                setSelection("");
                setSlide(1);
              }}
              selection={selection}
              setSlide={setSlide}
              slide={slide}
              variant={"design"}
            />
          ) : selectedCourseVideo === "design_intro" &&
            variant === "business" &&
            selection === "video" ? (
            <div className="relative flex w-full max-w-[620px] flex-row gap-1 lg:ml-0 lg:mt-0">
              {/* <video
            className="aspect-video"
            controls
            controlsList="nodownload"
          >
            <source
              src={`https://work-temps.s3.ap-southeast-1.amazonaws.com/${selectedCourseVideo}.mp4`}
              type="video/mp4"
            />
          </video> */}
              {router.locale === "en" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="p37fqrsr1eE"
                />
              ) : router.locale === "ms" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="7kLlfyAY7xQ"
                />
              ) : null}
              <div className="flex max-h-[360px] w-full max-w-[135px] flex-col gap-2 overflow-y-auto">
                {router.locale === "en"
                  ? timestamps[selectedCourseVideo]?.business?.en.map((ts) => (
                      <VideoTimestampButton
                        key={ts.toTime}
                        title={ts.title}
                        toTime={ts.toTime}
                        videoRef={videoRef}
                      />
                    ))
                  : router.locale === "ms"
                    ? timestamps[selectedCourseVideo]?.business?.ms.map(
                        (ts) => (
                          <VideoTimestampButton
                            key={ts.toTime}
                            title={ts.title}
                            toTime={ts.toTime}
                            videoRef={videoRef}
                          />
                        ),
                      )
                    : null}
              </div>
            </div>
          ) : selectedCourseVideo === "design_intro" &&
            variant === "hr" &&
            selection === "video" ? (
            <div className="relative flex w-full max-w-[620px] flex-row gap-1 lg:ml-0 lg:mt-0">
              {/* <video
          className="aspect-video"
          controls
          controlsList="nodownload"
        >
          <source
            src={`https://work-temps.s3.ap-southeast-1.amazonaws.com/${selectedCourseVideo}.mp4`}
            type="video/mp4"
          />
        </video> */}
              {router.locale === "en" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="KObGUi_3d2M"
                />
              ) : router.locale === "ms" ? (
                <YouTube
                  opts={{
                    width: "485px",
                  }}
                  onReady={(e: YouTubeEvent) => {
                    // console.log(e.target);
                    setVideoRef(e);
                  }}
                  className="aspect-video w-[485px]"
                  videoId="WiLxLXtTUiE"
                />
              ) : null}
              <div className="flex max-h-[360px] w-full max-w-[135px] flex-col gap-2 overflow-y-auto">
                {router.locale === "en"
                  ? timestamps[selectedCourseVideo]?.hr?.en.map((ts) => (
                      <VideoTimestampButton
                        key={ts.toTime}
                        title={ts.title}
                        toTime={ts.toTime}
                        videoRef={videoRef}
                      />
                    ))
                  : router.locale === "ms"
                    ? timestamps[selectedCourseVideo]?.hr?.ms.map((ts) => (
                        <VideoTimestampButton
                          key={ts.toTime}
                          title={ts.title}
                          toTime={ts.toTime}
                          videoRef={videoRef}
                        />
                      ))
                    : null}
              </div>
            </div>
          ) : (
            <div className="relative flex h-[55dvh] w-full max-w-[700px] flex-row items-center gap-4 lg:ml-0 lg:max-w-[900px]">
              {courses.map((c, i) => (
                <CourseSelection
                  key={i}
                  image={c.image}
                  video={c.video}
                  label={c.label}
                  selector={c.selector}
                  hasRecommended={hasRecommended}
                  setSelectedCourseVideo={setSelectedCourseVideo}
                />
              ))}
            </div>
          )}
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Intro;

interface CourseSelectionProps {
  setSelectedCourseVideo: Dispatch<SetStateAction<string>>;
  video: string;
  image: string;
  label: string;
  hasRecommended: boolean;
  selector: Courses;
}

const CourseSelection: FunctionComponent<CourseSelectionProps> = ({
  setSelectedCourseVideo,
  video,
  image,
  selector,
  label,
  hasRecommended,
}) => {
  const res = useResult();

  // const highest = getHighestOccurrence(result);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const widthPercentage = selector ? Number(res[selector]) : 0;
  const highest = getKeyWithLargestValue({
    culinary: res.culinary ?? 0,
    logistics: res.logistics ?? 0,
    design: res.design ?? 0,
    enforcement: res.enforcement ?? 0,
  });
  const { setSelectedCourse } = useUser();
  const t = useTranslations();
  return (
    <div
      className="relative flex h-full w-full cursor-pointer flex-col gap-2"
      onClick={() => {
        setSelectedCourse(selector);
        setSelectedCourseVideo(video);
      }}
    >
      <div className="relative h-[20px] w-full bg-gray-300">
        <div
          className="absolute left-0 top-0 z-10 h-full bg-primary"
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-tl-[2rem] lg:rounded-tl-[3rem]">
        <img
          style={{
            objectPosition: "60% 0px",
          }}
          className="h-[60%] w-full object-cover"
          alt={image}
          src={image}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: label.replaceAll("\n", "<br/>"),
          }}
          className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#00000000] from-30% to-[#000] to-60% px-3 py-4 font-montserrat text-sm font-bold text-white transition duration-200 ease-in-out hover:to-primary lg:text-base"
        />
      </div>
      {selector === highest && hasRecommended ? (
        <p className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center font-montserrat text-xs font-bold text-primary lg:text-base">
          {t("intro.recommended")} *
        </p>
      ) : null}
    </div>
  );
};

interface VideoTimestampButtonProps {
  title: string;
  toTime: number;
  videoRef?: YouTubeEvent;
}

const VideoTimestampButton: FunctionComponent<VideoTimestampButtonProps> = ({
  title,
  videoRef,
  toTime,
}) => {
  return (
    <button
      onClick={() => {
        if (!videoRef) return;
        console.log(videoRef?.target);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        videoRef?.target.seekTo?.(toTime);
      }}
      className="bg-primary px-2 py-1 font-montserrat text-sm text-white"
    >
      {title}
    </button>
  );
};

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
