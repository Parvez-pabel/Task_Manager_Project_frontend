import React from "react";
import "./FullScreenLoader.css";
import { useSelector } from "react-redux";
const FullScreenLoader = () => {
  // TODO: Add your custom loader here
  const loader = useSelector((state) => state.settings.loader);

  return (
    <>
      <div className={loader + "container mx-auto"}>
        <svg
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 340 340"
        >
          <circle cx={170} cy={170} r={160} stroke="#002642" />
          <circle cx={170} cy={170} r={135} stroke="#840032" />
          <circle cx={170} cy={170} r={110} stroke="#002642" />
          <circle cx={170} cy={170} r={85} stroke="#840032" />
        </svg>
      </div>
    </>
  );
};

export default FullScreenLoader;
