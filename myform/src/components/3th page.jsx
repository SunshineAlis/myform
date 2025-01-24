"use client";

import { useState, useEffect } from "react";

export const StepThree = ({ setStep }) => {
  const [formValue, setFormValue] = useState(() => {
    // Load form data from localStorage if it exists
    const savedData = localStorage.getItem("stepThreeForm");
    return savedData
      ? JSON.parse(savedData)
      : { dateOfBirth: "", profileImage: null };
  });

  const [errors, setErrors] = useState({
    dateOfBirth: "",
    profileImage: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Save form data to localStorage
    localStorage.setItem("stepThreeForm", JSON.stringify(formValue));
  }, [formValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValue((prev) => ({
        ...prev,
        profileImage: file,
      }));
      setErrors((prev) => ({
        ...prev,
        profileImage: "",
      }));

      // Set preview image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    let hasError = false;
    const newErrors = {};

    // Validate Date of Birth
    if (!formValue.dateOfBirth) {
      hasError = true;
      newErrors.dateOfBirth = "Please select a date.";
    }

    // Validate Profile Image
    if (!formValue.profileImage) {
      hasError = true;
      newErrors.profileImage = "Image cannot be blank.";
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Proceed to the next step if no errors
    setStep(4); // Move to Step 4
  };

  return (
    <div className="w-[100%] max-w-[480px] h-[655px] flex flex-col mt-[100px] ml-[300px] gap-[30px] bg-white border rounded-xl p-8">
      <img src="/Pinecone.png" alt="Example" width={60} height={60} />
      <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>

      {/* Date of Birth Field */}
      <div className="flex flex-col">
        <label>
          Date of Birth<span className="text-red">*</span>
        </label>
        <input
          id="dateOfBirth"
          type="date"
          className="w-full border py-3 px-2 rounded-xl"
          onChange={(e) =>
            setFormValue((prev) => ({
              ...prev,
              dateOfBirth: e.target.value,
            }))
          }
          value={formValue.dateOfBirth}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Profile Image Field */}
      <div className="flex flex-col">
        <label>
          Profile Image<span className="text-red">*</span>
        </label>
        <div className="border py-4 px-4 rounded-xl flex flex-col items-center bg-gray-100">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full mb-2"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full mb-2">
              <span className="text-gray-500">No image</span>
            </div>
          )}
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="profileImage"
            className="cursor-pointer text-gray-500 border px-4 py-2 rounded-lg bg-white"
          >
            {formValue.profileImage
              ? "Change Image"
              : "Add Image"}
          </label>
        </div>
        {errors.profileImage && (
          <p className="text-red-500">{errors.profileImage}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-[10px] mt-4 mb-4">
        {/* Back Button */}
        <button
          className="w-[150px] h-[60px] bg-gray-200 border rounded-xl text-gray-700 text-xl"
          onClick={() => setStep((prevStep) => prevStep - 1)} // Go back to Step 2
        >
          Back
        </button>

        {/* Submit Button */}
        <button
          onClick={onSubmit} // Submit and proceed to Step 4
          className="w-[302px] h-[60px] bg-black text-white text-xl rounded-2xl"
        >
          Submit 3/3
        </button>
      </div>
    </div>
  );
};
