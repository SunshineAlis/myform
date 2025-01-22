"use client";
import { useState } from "react";
import { StepOne } from "@/components/1st page";
import { StepTwo } from "@/components/2nd page";
import { StepThree } from "@/components/3th page";
import { StepFour } from "@/components/4th page";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? <StepOne setStep={setStep} /> : <></>}
      {step === 2 ? <stepTwo setStep={setStep} /> : <></>}
      {step === 3 ? <StepThree setStep={setStep} /> : <></>}
      {step === 4 ? <StepFour setStep={setStep} /> : <></>}

      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
}
