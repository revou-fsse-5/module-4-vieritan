// src/components/MultiStepForm.tsx
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  });
  console.log(formValues);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormSubmit = (values: typeof formValues) => {
    console.log("Final Form Values:", values);
    // Handle final form submission here
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {step === 3 && (
        <Step3
          prevStep={prevStep}
          formValues={formValues}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;