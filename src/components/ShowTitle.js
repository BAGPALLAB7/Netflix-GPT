import React from "react";

const ShowTitle = ({ title, overview }) => {
  return (
    <div className="z-10 w-screen aspect-video 
     bg-blue-200 pt-80 pb-10 pl-20 bg-gradient-to-r from-black bg-opacity-10 bg-transparent text-white">
      <h1 className="text-6xl">{title}</h1>
      <p className=" py-6 w-2/6 text-md">{overview}</p>
      <div className="py-2">
        <button className="px-7 py-2 bg-white text-black rounded-md hover:bg-slate-300">▶ Play</button>
        <button className="px-4 ml-3  py-2 bg-gray-500 text-white rounded-md hover:bg-slate-700">ⓘ More Info</button>
      </div>
    </div>
  );
};

export default ShowTitle;
