"use client"; // Add this at the top

import { useState } from "react";

import { Pine } from "../icons/Pine";
export const StepFour = (setStep) => {
  return (
    <div className="w-[100%] w-[480px] h-[655px] flex flex-col  mt-[100px] ml-[300px] gap-[10px] bg-white border rounded-xl p-8">
      <Pine className="w-[60px] h-[60px]" />
      <h1 className="font-semibold text-2xl">You're All Set 🔥</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        We have received your submission. Thank you!
      </h3>
    </div>
  );
};
