// src/components/Step2.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Make type variable and function for type data of value form submit

type StepProps = {
  nextStep: () => void;
  prevStep: () => void;
  formValues: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string | number;
  };
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
};

//input type data form to object variable step1 and use formik for validation schema

const Step2: React.FC<StepProps> = ({
  nextStep,
  prevStep,
  formValues,
  setFormValues,
}) => {
  const formik = useFormik({
    initialValues: {
      streetAddress: formValues.streetAddress,
      city: formValues.city,
      state: formValues.state,
      zipCode: formValues.zipCode,
    },
    validationSchema: Yup.object({
      streetAddress: Yup.string().required("Street Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zipCode: Yup.number().required("Zip Code is required"),
    }),
    onSubmit: (values) => {
      setFormValues({ ...formValues, ...values });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="streetAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Street Address
        </label>
        <input
          id="streetAddress"
          name="streetAddress"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.streetAddress}
          className="mt-1 block w-full"
        />
        {formik.touched.streetAddress && formik.errors.streetAddress ? (
          <div className="text-red-600 text-sm">
            {formik.errors.streetAddress}
          </div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="mt-1 block w-full"
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-600 text-sm">{formik.errors.city}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          id="state"
          name="state"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
          className="mt-1 block w-full"
        />
        {formik.touched.state && formik.errors.state ? (
          <div className="text-red-600 text-sm">{formik.errors.state}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-700"
        >
          Zip Code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zipCode}
          className="mt-1 block w-full"
        />
        {formik.touched.zipCode && formik.errors.zipCode ? (
          <div className="text-red-600 text-sm">{formik.errors.zipCode}</div>
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
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
