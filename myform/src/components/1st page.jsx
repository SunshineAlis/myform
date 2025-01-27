"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { CardHeader } from "./CardHeader";

export const StepOne = ({ setStep }) => {
  const initialState = {
    firstName: "",
    secondName: "",
    userName: "",
  };

  const [formValue, setFormValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFormValue = localStorage.getItem("stepOneForm");
      return savedFormValue ? JSON.parse(savedFormValue) : initialState;
    }
    return initialState; //
  });

  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("stepOneForm", JSON.stringify(formValue));
    }
  }, [formValue]);

  const onSubmit = () => {
    const newErrors = {};
    let hasError = false;

    if (!formValue.firstName.trim()) {
      newErrors.firstName = "Please enter your first name";
      hasError = true;
    }

    if (!formValue.secondName.trim()) {
      newErrors.secondName = "Please enter your last name";
      hasError = true;
    }

    if (!formValue.userName.trim()) {
      newErrors.userName = "Please enter your user name";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Go to the next step if no errors
    setStep(2);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-sm mx-auto mt-20 flex flex-col gap-6 bg-white border rounded-xl p-8 shadow-md"
    >
      <CardHeader />

      <Input
        id="firstName"
        label="First Name"
        placeholder="Enter your first name"
        value={formValue.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />

      <Input
        id="secondName"
        label="Last Name"
        placeholder="Enter your last name"
        value={formValue.secondName}
        onChange={handleChange}
        error={errors.secondName}
      />

      <Input
        id="userName"
        label="User Name"
        placeholder="Enter your user name"
        value={formValue.userName}
        onChange={handleChange}
        error={errors.userName}
      />

      <div>
        <button
          onClick={onSubmit}
          className="w-full h-14 bg-black text-white text-xl rounded-xl hover:bg-gray-800 transition"
        >
          Continue 1/3
        </button>
      </div>
    </motion.div>
  );
};
