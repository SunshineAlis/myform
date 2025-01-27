import { useState, useEffect } from "react";
import { Input } from "./Input";
import { motion } from "framer-motion";
import { CardHeader } from "./CardHeader";

export const StepTwo = ({ setStep }) => {
  const initialState = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  //
  const [formValue, setFormValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFormValue = localStorage.getItem("stepTwoForm");
      try {
        return savedFormValue ? JSON.parse(savedFormValue) : initialState;
      } catch (error) {
        console.error("Error parsing saved form data:", error);
        return initialState;
      }
    }
    return initialState; //
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("stepTwoForm", JSON.stringify(formValue));
    }
  }, [formValue]);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{8,12}$/; //
    return re.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 8; //
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};

    if (!validateEmail(formValue.email)) {
      hasError = true;
      newErrors.email = "Invalid email address";
    }

    if (!validatePhone(formValue.phone)) {
      hasError = true;
      newErrors.phone = "Phone number must be 8-12 digits";
    }

    if (!validatePassword(formValue.password)) {
      hasError = true;
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formValue.password !== formValue.confirmPassword) {
      hasError = true;
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setStep((prevStep) => prevStep + 1);
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
        id="email"
        label="Email"
        placeholder="Enter your email"
        value={formValue.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        id="phone"
        label="Phone number"
        placeholder="Enter your phone number"
        value={formValue.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formValue.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        value={formValue.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <div className="flex gap-[10px]">
        <button
          className="w-[150px] h-[60px] bg-gray-200 border rounded-xl text-gray-700 text-xl"
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="w-[302px] h-[60px] bg-black text-white text-xl rounded-2xl"
        >
          Continue 2/3
        </button>
      </div>
    </motion.div>
  );
};
