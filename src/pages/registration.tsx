import { TextField } from "@/components/Form/Field";
import { Layout } from "@/components/Layout";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import type { GetStaticProps } from "next";
import { InnerLayout } from "@/components/InnerLayout";
import { useUser } from "@/stores/useUser";
import { useResult } from "@/stores/useResult";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useTranslations } from "next-intl";

export type FormikRegisterForm = {
  name: string;
  phone: string;
};

export default function Register() {
  const { name } = useUser();
  const { logistics, enforcement, design, graduate, culinary } = useResult();

  const [status, setStatus] = useState<
    "none" | "loading" | "success" | "failed"
  >("none");

  const t = useTranslations();

  return (
    <>
      <Layout>
        <InnerLayout>
          <div
            className={`flex w-full flex-grow flex-col items-center justify-center`}
          >
            {/* <h1 className="font-montserrat text-[1.75rem] font-bold text-primary">
              Registration
            </h1> */}
            <Formik<FormikRegisterForm>
              initialValues={{ name: "", phone: "" }}
              onSubmit={async (values, action) => {
                action.setSubmitting(true);

                setStatus("loading");
                try {
                  const res = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify({
                      ...values,
                      consultedBy: name,
                      logistics,
                      enforcement,
                      culinary,
                      graduate,
                      design,
                    }),
                  });

                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  await res.json();

                  if (res.ok) {
                    setStatus("success");
                    alert(t("registration.register_success"));
                    window.open(
                      "https://markettingapp.safeguards-erp.com/#/account",
                      "_blank",
                    );
                    action.resetForm();
                  } else {
                    setStatus("failed");
                    alert(t("registration.error.server_error_occured"));
                  }
                } catch (err) {
                  console.error(err);
                } finally {
                  action.setSubmitting(false);
                }
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(t("registration.required")),
                phone: Yup.string()
                  .required(t("registration.required"))
                  .matches(
                    /^(\+?6?01)[0|1|2|3|4|6|7|8|9]-*[0-9]{7,8}$/,
                    t("registration.invalid_format"),
                  ),
              })}
            >
              {({ isSubmitting }) => (
                <Form className="flex w-full flex-col items-center justify-center gap-2">
                  <TextField<FormikRegisterForm>
                    disabled={isSubmitting || status === "loading"}
                    formikKey="name"
                    label={t("registration.name")}
                  />
                  <TextField<FormikRegisterForm>
                    disabled={isSubmitting || status === "loading"}
                    type="tel"
                    formikKey="phone"
                    label={t("registration.phone_no")}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || status === "loading"}
                    className="w-full max-w-[400px] rounded-full bg-black py-1.5 text-center font-montserrat uppercase text-white"
                  >
                    {status === "loading" ? (
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        strokeWidth={5}
                        color="white"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      t("registration.btn")
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </InnerLayout>
      </Layout>
    </>
  );
}
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
