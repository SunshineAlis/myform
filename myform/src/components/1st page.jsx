"use client"; // Add this at the top

import { useState } from "react";

import { Pine } from "../icons/Pine";
export const StepOne = (setStep) => {
  const [formValue, setFormValue] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = () => {
    if (!formValue.firstName || formValue.firstName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        firstName: "please must be write name",
      }));
      alert("please write name");
      return;
    }

    if (!formValue.secondName || formValue.secondName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        secondName: "please must be write name",
      }));
      alert("please sur name");
      return;
    }
    if (!formValue.userName || formValue.userName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        userName: "please must be write name",
      }));
      alert("please user name");
      return;
    }
    setStep(2);
  };

  const onFirstNameChange = (e) =>
    setFormValue({
      ...formValue,
      firstName: e.target.value,
    });

  const onSecondNameChange = (e) =>
    setFormValue({
      ...formValue,
      secondName: e.target.value,
    });

  const onUserNameChange = (e) =>
    setFormValue({
      ...formValue,
      userName: e.target.value,
    });
  return (
    <div className="w-[100%] w-[480px] h-[655px] flex flex-col  mt-[100px] ml-[300px] gap-[30px] bg-white border rounded-xl p-8">
      <Pine className="w-[60px] h-[60px]" />
      <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately
      </h3>
      <div className="flex flex-col">
        <label>
          First name<span>*</span>
        </label>
        <input
          id=" firstName"
          type="text"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={onFirstNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label>
          Last name<span>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={onSecondNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label>
          User Name<span>*</span>
        </label>
        <input
          id="UserName"
          type="text"
          placeholder="Placeholder"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={onUserNameChange}
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          className="w-full h-[60px] mt-[70px]  mb-[50px] bg-black text-white text-2xl rounded-2xl"
        >
          continue 1/3
        </button>
      </div>
    </div>
  );
};
