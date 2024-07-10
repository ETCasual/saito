/* eslint-disable @next/next/no-img-element */
import { InnerLayout } from "@/components/InnerLayout";
import { Layout } from "@/components/Layout";
import { type GetStaticProps } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslations } from "next-intl";
import useStore from "@/stores/useGeneral";
import { useUser } from "@/stores/useUser";

const Faculty = () => {
  const t = useTranslations();
  const selectedCourse = useStore(useUser, (state) => state.selectedCourse);

  return (
    <Layout>
      <InnerLayout>
        <div className="flex w-full flex-grow flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center lg:pl-0">
            <Splide className="max-h-[500px] w-full max-w-[700px]">
              {selectedCourse === "logistics" ? (
                <>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.first.title")}
                    </h1>
                    <img
                      src="/assets/industry_partner.png"
                      alt="Industry Parter"
                      className="w-full object-cover"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.second.title")}
                    </h1>
                    <img
                      src="/assets/industry_experts.png"
                      alt="Industry Parter"
                      className="w-full object-cover"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.third.title")}
                    </h1>
                    <img
                      src="/assets/academic_team.png"
                      alt="Industry Partner"
                      className="w-full object-cover"
                    />
                  </SplideSlide>
                </>
              ) : selectedCourse === "design" ? (
                <>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.first.title")}
                    </h1>
                    <div className="flex w-full flex-row items-center justify-center gap-1 pt-3">
                      <img
                        src="/assets/faculty/design/industry_partners.png"
                        alt="Industry Partner"
                        className="max-h-[400px] w-full object-scale-down"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.second.title")}
                    </h1>
                    <img
                      src="/assets/faculty/design/industry_experts_1.png"
                      alt="Industry Experts"
                      className="max-h-[400px] w-full object-scale-down"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.second.title")}
                    </h1>
                    <img
                      src="/assets/faculty/design/industry_experts_2.png"
                      alt="Industry Experts"
                      className="max-h-[400px] w-full object-scale-down"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.third.title")}
                    </h1>
                    <img
                      src="/assets/faculty/design/academic_team_1.png"
                      alt="Academic Team"
                      className="max-h-[400px] w-full object-scale-down"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <h1 className="w-full text-center font-montserrat text-[1.75rem] font-bold text-primary">
                      {t("faculty.third.title")}
                    </h1>
                    <img
                      src="/assets/faculty/design/academic_team_2.png"
                      alt="Academic Team"
                      className="max-h-[400px] w-full object-scale-down"
                    />
                  </SplideSlide>
                </>
              ) : null}
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
