import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format must include @")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required"),
});

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="my-4 text-center text-4xl font-semibold text-blue-500">
        Sign Up
      </h1>
      {/* Formik */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          //   console.log(values);
        }}
      >
        {({isSubmitting}) => {
          console.log(isSubmitting);
          return (
            <Form className="w-1/2">
              {/* Username */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="name"
                >
                  Username
                </label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="name"
                  id="name"
                />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="password"
                  id="password"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              {isSubmitting && (
                <button
                  type="button"
                  class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  Disabled button
                </button>
              )}
              {!isSubmitting && (
                <button
                  disabled={isSubmitting}
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
