import React from "react";
import Review from "./Review";
import { useQuery } from "react-query";

const Reviews = () => {
  const { data: reviews } = useQuery("reviews", () =>
    fetch("https://guarded-bastion-46799.herokuapp.com/reviews").then(
      (response) => response.json()
    )
  );

  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-md px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-10">
            Customer Reviews
          </h2>
          <div class="divide-y">
            {reviews?.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
