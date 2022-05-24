import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Part from "./Part";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts").then((response) => response.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl mb-5 mt-5 md:text-4xl md:mt-10 ">
        Parts
      </h1>
      <div className="grid grid-cols-1 px-2 gap-10 md:grid-cols-3 md:px-12">
        {parts?.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
