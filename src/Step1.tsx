// src/components/Step1.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Make type variable and function for type data of value form submit

type StepProps = {
  nextStep: () => void;
  formValues: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
  };
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
};

//input type data form to object variable step1 and use formik for validation schema

const Step1: React.FC<StepProps> = ({
  nextStep,
  formValues,
  setFormValues,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: formValues.firstName,
      lastName: formValues.lastName,

      email: formValues.email,
      dateOfBirth: formValues.dateOfBirth,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Full Name is required"),
      lastName: Yup.string().required("Last Name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      dateOfBirth: Yup.date().required("Date of Birth is required").nullable(),
    }),
    onSubmit: (values) => {
      setFormValues({ ...formValues, ...values });
      nextStep();
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          Fist Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="mt-1 block w-full"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="mt-1 block w-full"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateOfBirth}
          className="mt-1 block w-full"
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div className="text-red-600 text-sm">
            {formik.errors.dateOfBirth}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Next
      </button>
    </form>
  );
};

export default Step1;
