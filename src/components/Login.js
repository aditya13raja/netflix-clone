import React, {useRef, useState} from 'react';
import Header from "./Header";
import {checkValidData} from "../utils/validate";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // creating "Reference" for email and password
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-img" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            placeholder="Full Name"
            type="text"
            className="p-2 my-4 w-full bg-gray-700"/>
        )}
        <input
          ref={email}
          placeholder="Email Address"
          type="text"
          className="p-2 my-4 w-full bg-gray-700" />
        <input
          ref={password}
          placeholder="Password"
          type="password"
          className="p-2 my-4 w-full bg-gray-700" />
        <p className="text-red-800 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignInForm ? "New to Netflix, Sign Up now" : "Already registered, Sign In now"}
        </p>
      </form>
    </div>
  );
}

export default Login;