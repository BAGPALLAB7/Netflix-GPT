import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useToggleGPT from "../customHooks/useToggleGPT";
import { toggleGPTSearch } from "../utils/store/gptSlice";
import { LANG_OPT } from "../utils/constaints";
import { changeLang } from "../utils/store/languageSlice";

const Header = () => {
  const [showSignOut, setShowSignOut] = useState(false);

  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const loadSearchGPT = () => {
    dispatch(toggleGPTSearch());
  };
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign out successful.");
      })
      .catch((error) => {
        // An error happened.
        alert("while sign out" + error);
      });
  };
  const setLanguage = (e) => {
    dispatch(changeLang(e.target.value));
  };
  console.log("header render");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        console.log("user from header:", user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        nevigate("/browse");
        setShowSignOut(true);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("from header: No user");
        dispatch(removeUser());
        nevigate("/");
        setShowSignOut(false);
      }
    });
  }, []);
  const searchGPTStatus = useSelector((store) => store.showGPT.showSearchGPT);
  console.log("gpt page status", searchGPTStatus);
  return (
    <>
      <div className="absolute bg-gradient-to-b from-black px-8 py-2 flex justify-between w-full items-center ">
        <img
          className="w-48 z-50"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {showSignOut && (
        <div className="absolute w-screen items-end">
          <div className=" z-10 flex justify-end h-24 items-center mr-16">
            {searchGPTStatus && (
              <select
                className="bg-gray-400 text-white p-2 rounded-sm"
                onChange={setLanguage}
              >
                {LANG_OPT.map((language) => {
                  return (
                    <option key={language.identifer} value={language.identifer}>
                      {language.name}
                    </option>
                  );
                })}
              </select>
            )}
            <button
              type="button"
              className="mx-4 text-white z-10 bg-purple-500 px-4 py-2 rounded-sm"
              onClick={loadSearchGPT}
            >
              {!searchGPTStatus ? "Use GPT" : "Main Page"}
            </button>
            <img
              className="h-10 w-10 z-10"
              src="data:image/png;base64,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"
              alt="user-icon"
            />
            <button
              type="button"
              className="mx-2 text-white z-10"
              onClick={userSignout}
            >
              (Sign out)
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
