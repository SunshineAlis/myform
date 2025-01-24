"use client";

import { useState, useEffect } from "react";


export const StepTwo = ({ setStep }) => {
  // Initial state
  const initialState = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formValue, setFormValue] = useState(() => {
    // LocalStorage-оос өгөгдөл сэргээх
    const savedFormValue = localStorage.getItem("stepTwoForm");
    return savedFormValue ? JSON.parse(savedFormValue) : initialState;
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Form-ийн утгыг LocalStorage-д хадгалах
    localStorage.setItem("stepTwoForm", JSON.stringify(formValue));
  }, [formValue]);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{8,12}$/; // Зөвхөн 8-12 оронтой тоо байна
    return re.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 8; // 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};

    // Email validation
    if (!validateEmail(formValue.email)) {
      hasError = true;
      newErrors.email = "Invalid email address";
    }

    // Phone validation
    if (!validatePhone(formValue.phone)) {
      hasError = true;
      newErrors.phone = "Phone number must be 8-12 digits";
    }

    // Password valid
    if (!validatePassword(formValue.password)) {
      hasError = true;
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password 
    if (formValue.password !== formValue.confirmPassword) {
      hasError = true;
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // next
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
    <div className="w-[480px] h-[655px] flex flex-col mt-[100px] ml-[300px] gap-[30px] bg-white border rounded-xl p-8">
      <img src="/Pinecone.png" alt="Example" width={60} height={60} />
      <h1 className="font-semibold text-xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
      <div className="flex flex-col">
        <label>
          Email<span className="text-red">*</span>
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
          className="w-full border py-3 px-2 rounded-xl"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="flex flex-col">
        <label>
          Phone Number <span className="text-red">*</span>
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Phone Number"
          value={formValue.phone}
          onChange={handleChange}
          className="w-full border py-3 px-2 rounded-xl"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div className="flex flex-col">
        <label>
          Password<span>*</span>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={formValue.password}
          onChange={handleChange}
          className="w-full border py-3 px-2 rounded-xl"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="flex flex-col">
        <label>
          Confirm Password<span>*</span>
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formValue.confirmPassword}
          onChange={handleChange}
          className="w-full border py-3 px-2 rounded-xl"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>
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
    </div>
  );
};
