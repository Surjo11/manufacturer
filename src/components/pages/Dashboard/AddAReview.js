import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddAReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for your Review",
      showConfirmButton: false,
      timer: 2000,
    });
    reset();
  };
  return (
    <div className="w-1/2 mx-auto">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="inline-block text-gray-800 text-sm sm:text-base mb-2">
          Please rate us from 1 to 5
        </h1>
        <input
          className="w-full h-12 mb-5 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded border-none transition duration-100 px-3 py-2"
          type="number"
          {...register("rating", { min: 1, max: 5, required: true })}
        />
        <p className="text-red-700 mt-2">{errors.rating?.message}</p>
        <h1 className="inline-block text-gray-800 text-sm sm:text-base mb-2">
          Description
        </h1>
        <textarea
          className="w-full h-44 mb-5  bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded border-none transition duration-100 px-3 py-2"
          type="textarea"
          {...register("description", { required: true })}
        />
        <button
          type="submit"
          className="flex justify-center items-center w-52 md:w-96 mt-5 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          Add Review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddAReview;
