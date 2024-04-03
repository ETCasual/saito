/* eslint-disable @next/next/no-img-element */
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRouter } from "next/router";
import { useUser } from "@/stores/useUser";
import { useEffect } from "react";

const Faculty = () => {
  const router = useRouter();
  const { name } = useUser();

  useEffect(() => {
    if (name) return;
    void router.push("/");
  }, [name, router]);

  return (
    <Layout>
      <InnerLayout>
        <div className="flex min-h-[90vh] w-full flex-grow flex-col items-center justify-center pb-20 pt-32">
          <div className="ml-40 flex flex-col items-center justify-center xl:pl-0">
            <Splide className="w-full max-w-[700px] xl:max-w-[750px]">
              <SplideSlide>
                <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                  Industry Partners
                </h1>
                <div className="flex w-full flex-row items-center justify-center gap-1 pt-3">
                  <img
                    src="/assets/industry_partner.png"
                    alt="Industry Parter"
                    className="w-full object-cover"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                  Industry Experts as Lecturers
                </h1>
                <div className="flex w-full flex-row items-center justify-center gap-1 pt-3">
                  <img
                    src="/assets/industry_experts.png"
                    alt="Industry Parter"
                    className="w-full object-cover"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                  Academic Team
                </h1>
                <div className="flex w-full flex-row items-center justify-center gap-1 pt-3">
                  <img
                    src="/assets/academic_team.png"
                    alt="Industry Parter"
                    className="w-full object-cover"
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Faculty;

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
