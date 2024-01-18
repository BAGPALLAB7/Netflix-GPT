import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignIn, setSignIn] = useState(true);
  // console.log(isSignIn);
  const handleButtonClick = () => {
    
    const validateMessage = checkValidateData(
      email.current.value,
      password.current.value
    );
    if (validateMessage) {
      setErrorMessage(validateMessage);
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("uer created in firebase database : ", user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              
                console.log("update profile successful");
              
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          console.log("login user: -", user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    return;
  };

  const toggleSignUp = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-opacity-80 bg-black rounded-md w-4/12 my-24 h-5/6 mx-auto right-0 left-0 text-white p-10 flex flex-col"
      >
        <h1 className=" mx-auto text-3xl my-4 w-10/12">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-4 mx-auto my-2 w-10/12 bg-gray-700 rounded-md "
          />
        )}

        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email address"
          className="p-4 mx-auto my-2 w-10/12 bg-gray-700 rounded-md "
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 mx-auto my-2 w-10/12 bg-gray-700 rounded-md "
        />
        {errorMessage && (
          <p className="text-red-700 text-lg w-10/12 mx-auto">{errorMessage}</p>
        )}
        <button
          className="p-4 mt-8 mx-auto bg-red-500 w-10/12 rounded-md "
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="text-gray-400 w-10/12 mx-auto py-32">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer" onClick={toggleSignUp}>
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-400 w-10/12 mx-auto py-32">
            Already a user?{" "}
            <span className="text-white cursor-pointer" onClick={toggleSignUp}>
              Sign In.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
