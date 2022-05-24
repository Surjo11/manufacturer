import React from "react";

const BusinessSummary = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 lg:mt-10">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 uppercase">
              Reasons Why We are the Best
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              We are trusted by million of Peoples.that's why we are best
              manufacturer among the all competition.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                150+
              </div>
              <div className="text-sm sm:text-base font-semibold">
                Countries
              </div>
            </div>
            {/* <!-- stat - end -->

      <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                500K
              </div>
              <div className="text-sm sm:text-base font-semibold">Reviews</div>
            </div>

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                100K
              </div>
              <div className="text-sm sm:text-base font-semibold">
                Customers
              </div>
            </div>
            {/* <!-- stat - end -->

      <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                24/7
              </div>
              <div className="text-sm sm:text-base font-semibold">Support</div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center shadow-lg rounded-lg p-4 sm:p-8">
              <div className="mb-4 sm:mb-8 lg:mb-0">
                <h2 className="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">
                  Get the latest updates
                </h2>
                <p className="text-gray-500 text-center lg:text-left">
                  Sign up for our newsletter
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <form className="w-full max-w-md flex gap-2 mb-3">
                  <input
                    placeholder="Email"
                    className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />

                  <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
                    Send
                  </button>
                </form>

                <p className="text-gray-400 text-xs text-center lg:text-right">
                  By signing up to our newsletter you agree to our{" "}
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                  >
                    Term of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
