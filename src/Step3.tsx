// src/components/Step3.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Make type variable and function for type data of value form submit

type StepProps = {
  prevStep: () => void;
  formValues: {
    username: string;
    password: string;
  };
  handleFormSubmit: (values: any) => void;
};

//input type data form to object variable step3 and use formik for validation schema

const Step3: React.FC<StepProps> = ({
  prevStep,
  formValues,
  handleFormSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      username: formValues.username,
      password: formValues.password,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required(
          "Password must contain one uppercase, one lowercase, one number, and one special character"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      handleFormSubmit({ ...formValues, ...values });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="mt-1 block w-full"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-600 text-sm">{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step3;
