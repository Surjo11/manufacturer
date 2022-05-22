import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12 min-h-screen flex justify-center items-center">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex flex-col items-center">
          {/* <!-- logo - start --> */}
          <a
            href="/"
            class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 mb-8"
            aria-label="logo"
          >
            Bit by Bit
          </a>
          {/* <!-- logo - end --> */}

          <p class="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
            That's a 404
          </p>
          <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
            Page not found
          </h1>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
            The page you're looking for doesn't exist.
          </p>

          <Link
            to="/home"
            class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
