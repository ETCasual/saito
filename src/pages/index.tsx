import { TextField } from "@/components/Form/Field";
import { Layout } from "@/components/Layout";
import { useUser } from "@/stores/useUser";
import { Form, Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { GetStaticProps } from "next";
import { Oval } from "react-loader-spinner";
import { useTranslations } from "next-intl";

export type FormikLoginForm = {
  username: string;
  password: string;
};

export default function Index() {
  const router = useRouter();
  const { name, login } = useUser();
  const [status, setStatus] = useState<
    "none" | "loading" | "success" | "failed"
  >("none");

  useEffect(() => {
    if (!name) return;
    void router.push("/home");
  }, [name, router]);

  // console.log(loading);

  const t = useTranslations();

  return (
    <>
      <Head>
        <title>Saito Sales Kit</title>
        <meta name="description" content="Saito Consultation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Formik<FormikLoginForm>
          initialValues={{ password: "", username: "" }}
          onSubmit={async (values, action) => {
            action.setSubmitting(true);
            setStatus("loading");
            try {
              await login(values.username, values.password, router, (type) => {
                setStatus("failed");
                if (type === 403)
                  action.setFieldError(
                    "password",
                    t("login.error.invalid_credentials"),
                  );
                if (type === 500)
                  action.setFieldError(
                    "password",
                    t("login.error.server_error_occured"),
                  );
              });
            } catch (err) {
              console.error(err);
            } finally {
              action.setSubmitting(false);
            }
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required(t("login.required")),
            password: Yup.string().required(t("login.required")),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="flex min-h-[90vh] w-full flex-col items-center justify-center gap-2 py-16">
              <TextField<FormikLoginForm>
                disabled={isSubmitting || status === "loading"}
                formikKey="username"
                label={t("login.username")}
              />
              <TextField<FormikLoginForm>
                disabled={isSubmitting || status === "loading"}
                formikKey="password"
                type="password"
                label={t("login.password")}
              />
              <button
                disabled={isSubmitting || status === "loading"}
                type="submit"
                className="flex w-full max-w-[400px] flex-row items-center justify-center rounded-full bg-black py-1.5 font-montserrat uppercase text-white"
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
                  t("login.button")
                )}
              </button>
            </Form>
          )}
        </Formik>
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
