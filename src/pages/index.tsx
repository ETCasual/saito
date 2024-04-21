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

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
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
                  action.setFieldError("password", "Invalid Credentials.");
                if (type === 500)
                  action.setFieldError("password", "Server Error Occured.");
              });
            } catch (err) {
              console.error(err);
            } finally {
              action.setSubmitting(false);
            }
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Required."),
            password: Yup.string().required("Required."),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="flex min-h-[90vh] w-full flex-col items-center justify-center gap-2 py-16">
              <TextField<FormikLoginForm>
                disabled={isSubmitting || status === "loading"}
                formikKey="username"
                label="Username"
              />
              <TextField<FormikLoginForm>
                disabled={isSubmitting || status === "loading"}
                formikKey="password"
                type="password"
                label="Password"
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
                  "Login"
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
