import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const { data: part } = useQuery("part", () =>
    fetch(`http://localhost:5000/part/${partId}`).then((response) =>
      response.json()
    )
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      quantity: part?.quantity,
    },
  });
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/orders`;
    const partInformation = {
      displayName: data.displayName,
      email: data.email,
      address: data.address,
      quantity: data.quantity,
      number: data.number,
      partImage: part?.image,
      partName: part?.name,
    };
    // console.log(partInformation);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(partInformation),
    })
      .then((res) => res.json())
      .then((partInformation) => {
        // console.log(data);
        // console.log(partInformation);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Ordered",
          showConfirmButton: false,
          timer: 2000,
        });
        reset();
      });
  };

  return (
    <div className="mt-10 px-2 md:flex flex-wrap justify-evenly items-center">
      <div class="card w-auto mb-5 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={part?.image} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="font-bold text-xl md:text-xl">{part?.name}</h2>
          <p className="text-sm font-medium">Part ID: {part?._id}</p>
          <p className="w-auto md:w-96 text-sm text-gray-500">
            {part?.description}
          </p>
          <p className="text-lg font-medium text-orange-600">
            Minimum Order: {part?.minimumquantity}
          </p>
          <p className="text-lg font-medium text-green-600">
            Available: {part?.availablequantity}
          </p>
        </div>
      </div>
      {/* Form Infomation */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Fill Your Some Information
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="max-w-screen-md mx-auto"
          >
            <div class="sm:col-span-2 mb-2">
              <label
                for="displayName"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                {...register("displayName")}
                value={user?.displayName}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div class="sm:col-span-2 mb-2">
              <label
                for="email"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                {...register("email")}
                value={user?.email}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div class="sm:col-span-2 mb-2">
              <label
                for="address"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Address
              </label>
              <input
                {...register("address", { required: true })}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div class="sm:col-span-2 mb-2">
              <label
                for="number"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Phone
              </label>
              <input
                {...register("number", {
                  required: true,
                })}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <p className="text-red-700 mt-2">{errors.number?.message}</p>
            </div>
            {/* Quantity Information */}
            <div class="sm:col-span-2 mb-2">
              <label
                for="number"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Enter Your Order
              </label>
              <input
                type="number"
                placeholder={part?.minimumquantity}
                {...register("quantity", {
                  required: true,
                  max: {
                    value: part?.availablequantity,
                    message: `You can't order more than ${part?.availablequantity} parts`,
                  },
                  min: {
                    value: part?.minimumquantity,
                    message: `You have to order at least ${part?.minimumquantity} parts`,
                  },
                })}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <p className="text-red-700 mt-2">{errors.quantity?.message}</p>
            </div>
            {isValid ? (
              <button className="flex justify-center items-center w-full mt-5 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            ) : (
              <button
                disabled
                className="flex justify-center items-center w-full mt-5 bg-indigo-500 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none px-8 py-3 opacity-25"
              >
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
