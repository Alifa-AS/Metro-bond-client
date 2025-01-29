import React from "react";
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div>
      <div className="text-center">
        <Spinner  color="pink" aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
};

export default Loading;
