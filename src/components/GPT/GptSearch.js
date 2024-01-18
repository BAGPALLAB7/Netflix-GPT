import React from "react";
import { BG_IMG } from "../../utils/constaints";
import { languageConfig } from "../../utils/languageConfig";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const languageKey = useSelector((store) => store.changeLanguage.currentLanguage);
  return (
    <div className="">
      <div className="absolute -z-10">
        <img className="" src={BG_IMG} alt="background" />
      </div>
      <div className="pt-48 w-full flex justify-center">
        <input
          type="text"
          placeholder={languageConfig[languageKey].placeHolder}
          className="border-black border-2 w-5/12 p-4 "
        />
        <button
          type="button"
          className="mx-4 text-white z-10 bg-red-500 px-8 rounded-sm"
        >
          {languageConfig[languageKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
