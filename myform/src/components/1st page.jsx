"use client";

import { useState, useEffect } from "react";


export const StepOne = ({ setStep }) => {
  const initialState = {
    firstName: "",
    secondName: "",
    userName: "",
  };

  const [formValue, setFormValue] = useState(() => {
    // Restore form data from localStorage
    const savedFormValue = localStorage.getItem("stepOneForm");
    return savedFormValue ? JSON.parse(savedFormValue) : initialState;
  });

  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    userName: "",
  });

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stepOneForm", JSON.stringify(formValue));
  }, [formValue]);

  const onSubmit = () => {
    let hasError = false;
    const newErrors = {};

    // First name validation
    if (!formValue.firstName || formValue.firstName.trim().length === 0) {
      newErrors.firstName = "Please enter your first name";
      hasError = true;
    }

    // Last name validation
    if (!formValue.secondName || formValue.secondName.trim().length === 0) {
      newErrors.secondName = "Please enter your last name";
      hasError = true;
    }

    // User name validation
    if (!formValue.userName || formValue.userName.trim().length === 0) {
      newErrors.userName = "Please enter your user name";
      hasError = true;
    }

    // Set errors if validation fails
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
    <div className="w-[100%] w-[480px] h-[655px] flex flex-col mt-[100px] ml-[300px] gap-[30px] bg-white border rounded-xl p-8">
   <img src="/Pinecone.png" alt="Example" width={60} height={60} />
      <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately
      </h3>

      {/* First Name Field */}
      <div className="flex flex-col">
        <label>
          First name<span className="text-red">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={handleChange}
          value={formValue.firstName}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>

      {/* Last Name Field */}
      <div className="flex flex-col">
        <label>
          Last name<span className="text-red">*</span>
        </label>
        <input
          id="secondName"
          type="text"
          placeholder="Enter your last name"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={handleChange}
          value={formValue.secondName}
        />
        {errors.secondName && <p className="text-red-500">{errors.secondName}</p>}
      </div>

      {/* User Name Field */}
      <div className="flex flex-col">
        <label>
          User Name<span className="text-red">*</span>
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Enter your user name"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={handleChange}
          value={formValue.userName}
        />
        {errors.userName && <p className="text-red-500">{errors.userName}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          onClick={onSubmit}
          className="w-full h-[60px] mt-[70px] mb-[50px] bg-black text-white text-2xl rounded-2xl"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
