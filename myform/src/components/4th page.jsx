"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const StepFour = ({ setStep }) => {
  useEffect(() => {
    // Save the current step in localStorage to persist progress
    localStorage.setItem("currentStep", 4);
  }, []);

  const handleBack = () => {
    // Navigate back to Step 3
    setStep(3);
    localStorage.setItem("currentStep", 3); // Update step in localStorage
  };

  const handleHome = () => {
    // Navigate to Step 1
    setStep(1);
    localStorage.setItem("currentStep", 1); // Reset step in localStorage
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-sm mx-auto mt-20 flex flex-col gap-6 bg-white border rounded-xl p-8 shadow-md"
    >
      <img src="/Pinecone.png" alt="Example" width={60} height={60} />
      <h1 className="font-semibold text-2xl">You're All Set 🔥</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        We have received your submission. Thank you!
      </h3>

      <div className="flex gap-4 mt-[50px]">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="w-1/2 h-[60px] bg-gray-300 text-black text-2xl rounded-2xl"
        >
          Back
        </button>

        {/* Home Button */}
        <button
          onClick={handleHome}
          className="w-1/2 h-[60px] bg-black text-white text-2xl rounded-2xl"
        >
          Home
        </button>
      </div>
    </motion.div>
  );
};
