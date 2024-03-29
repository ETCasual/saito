import { TextField } from "@/components/Form/Field";
import { Layout } from "@/components/Layout";
import { useUser } from "@/stores/useUser";
import { Form, Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Yup from "yup";
import type { GetStaticProps } from "next";

export type FormikLoginForm = {
  username: string;
  password: string;
};

export default function Index() {
  const router = useRouter();
  const { name, setUser } = useUser();

  useEffect(() => {
    if (!name) return;
    void router.push("/home");
  }, [name, router]);

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
            try {
              const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(values),
              });

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const response: { loggedIn: boolean; name: string } =
                await res.json();

              if (res.ok) {
                await setUser(response.name);
                void router.push("/home");
              }
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
                disabled={isSubmitting}
                formikKey="username"
                label="Username"
              />
              <TextField<FormikLoginForm>
                disabled={isSubmitting}
                formikKey="password"
                label="Password"
              />
              <button
                type="submit"
                className="w-full max-w-[400px] rounded-full bg-black py-1.5 font-montserrat uppercase text-white"
              >
                Login
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
