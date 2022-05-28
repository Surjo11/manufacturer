import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("singleUser", async () => {
    const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
    return res.json();
  });
  console.log(users);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    const email = user?.email;
    // console.log(email);
    const url = `http://localhost:5000/user/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Updated Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        reset();
        refetch();
      });
  };
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-base text-2xl">Personal Information</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-48 w-48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                Name
              </label>
              <div className="text-2xl font-semibold">{user?.displayName}</div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <div className="text-2xl font-semibold">{user?.email}</div>
            </div>
            <div className="col-span-full">
              <label for="education" className="text-sm">
                Education
              </label>
              <div className="text-2xl font-semibold">{users?.education}</div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="location" className="text-sm">
                Location
              </label>
              <div className="text-2xl font-semibold">{users?.location}</div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="phone" className="text-sm">
                Phone
              </label>
              <div className="text-2xl font-semibold">{users?.phone}</div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="linkedin" className="text-sm">
                Linkedin
              </label>
              <div className="text-medium font-semibold">{users?.linkedin}</div>
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <form className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-base text-2xl">Update Information</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-48 w-48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            <div className="col-span-full">
              <label for="education" className="text-sm">
                Education
              </label>
              <input
                {...register("education", { required: true })}
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="location" className="text-sm">
                Location
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="phone" className="text-sm">
                Phone
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="linkedin" className="text-sm">
                Linkedin
              </label>
              <input
                {...register("linkedin", { required: true })}
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center w-full mt-5 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Update
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </form>
        </fieldset>
      </div>
    </section>
  );
};

export default MyProfile;
