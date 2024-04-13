import React from "react";

const ShowTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-10 w-screen aspect-video pt-52 md:pt-80 pb-8 pl-10 md:pl-20 bg-gradient-to-r from-black bg-opacity-10 bg-transparent text-white">
      <h1 className="w-36 md:w-auto text-4xl md:text-6xl">{title}</h1>
      <p className="py-2 md:py-6 w-3/6 md:w-2/6 h-40 overflow-y-scroll text-sm md:text-lg">{overview}</p>
      <div className="py-4 ">
        <button className="text-xs md:text-lg px-3 md:px-7 py-2 bg-white text-black rounded-md hover:bg-slate-300">▶ Play</button>
        <button className="text-xs md:text-lg px-2 md:px-4 ml-3  py-2 bg-gray-500 text-white rounded-md hover:bg-slate-700">ⓘ More Info</button>
      </div>
    </div>
  );
};

export default ShowTitle;
