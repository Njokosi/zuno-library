import React from "react";
import { LoadingCard } from "./cards";

const LoadingMedias = () => {
  return (
    <div className={`grid grid-cols-3 gap-6`}>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default LoadingMedias;
