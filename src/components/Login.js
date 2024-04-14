import React, { useRef, useState} from 'react';
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice";
import {BG_URL, USER_AVATAR} from "../utils/constants";

const  Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // create new user
    if(!isSignInForm)  {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // to update user profile
          updateProfile(user , {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
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