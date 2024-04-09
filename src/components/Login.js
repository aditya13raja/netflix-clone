import React, { useState } from 'react';
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(null);

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
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            placeholder="Full Name"
            type="text"
            className="p-2 my-4 w-full bg-gray-700"/>
        )}
        <input
          placeholder="Email Address"
          type="text"
          className="p-2 my-4 w-full bg-gray-700" />
        <input
          placeholder="Password"
          type="password"
          className="p-2 my-4 w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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