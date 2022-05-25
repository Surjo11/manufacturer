import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const { data: part } = useQuery("part", () =>
    fetch(`http://localhost:5000/part/${partId}`).then((response) =>
      response.json()
    )
  );
  return (
    <div className="mt-10 px-2 md:flex flex-wrap justify-evenly items-center">
      <div class="card w-auto mb-5 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-80" src={part?.image} alt="Album" />
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
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Fill Your Some Information
            </h2>
          </div>
          <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                name="text"
                value={user?.displayName}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                name="email"
                value={user?.email}
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="address"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Address
              </label>
              <input
                name="address"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="number"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Phone
              </label>
              <input
                name="phone"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
          </form>
          <button class="inline-block w-full mt-5 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
