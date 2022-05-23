import React from "react";
import { TailSpin } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <TailSpin height="150" width="150" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loading;
