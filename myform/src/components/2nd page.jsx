"use client"; // Add this at the top

import { useState } from "react";

import { Pine } from "../icons/Pine";
export const StepTwo = (setStep) => {
  const [formValue, setFormValue] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};
  };

  return (
    <div className="w-[100%] w-[480px] h-[655px] flex flex-col  mt-[100px] ml-[300px] gap-[30px] bg-white border rounded-xl p-8">
      <Pine className="w-[60px] h-[60px]" />
      <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
      <div className="flex flex-col">
        <label>
          Email<span className="text-red">*</span>
        </label>
        <input
          id=" firstName"
          type="text"
          placeholder="Placeholder"
          onClick={onSubmit}
          className="w-full border py-3 px-2 rounded-xl"
          onChange={onFirstNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label>
          Phone Number <span>*</span>
        </label>
        <input
          id="lastName"
          type="number"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onClick={onSubmit}
          onChange={onSecondNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label>
          Password<span>*</span>
        </label>
        <input
          id="UserName"
          type="text"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onClick={onSubmit}
          onChange={onUserNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label>
          Confirm password<span>*</span>
        </label>
        <input
          id="UserName"
          type="text"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onClick={onSubmit}
          onChange={onUserNameChange}
        />
      </div>
      <div className="flex gap-[5px]">
        <button className="w-[150px] h-[60px] mt-[70px]  mb-[50px] bg-white  border rounded-xl text-gray text-2xl rounded-2xl">
          Back
        </button>
        <button
          onClick={onSubmit}
          className="w-[302px] h-[60px] mt-[70px]  mb-[50px] bg-black text-white text-xl rounded-2xl"
        >
          continue 2/3
        </button>
      </div>
    </div>
  );
};
