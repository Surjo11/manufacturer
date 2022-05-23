import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
const SignUp = () => {
  const navigate = useNavigate();

  //   FirebaseHooks for Profile
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  //   FirebaseHooks for Email and Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // HookForm
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.displayName });
    reset();
  };

  // User
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });
  //   Loading Component
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mb-14">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg border rounded-lg mx-auto"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="text"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                placeholder="Your Name"
                {...register("displayName", {
                  required: true,
                })}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Looks like this is not an Email",
                  },
                })}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <p className="text-red-700 mt-2">{errors.email?.message}</p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Password
              </label>
              <input
                placeholder="••••••••"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Passwords must be six or more characters", // JS only: <p>error message</p> TS only support string
                  },
                })}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <p className="text-red-700 mt-2">{errors.password?.message}</p>
            </div>

            <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 uppercase">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <p className="text-gray-500 text-sm text-center">
              Already have an account?
              <Link
                to="/signin"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 uppercase"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
