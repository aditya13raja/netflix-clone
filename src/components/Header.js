import React, {useEffect} from 'react';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import {toggleShowGptSearchView} from "../utils/gptSlice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const gptSearchButton = useSelector(store => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate(('/error'));
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleShowGptSearchView());
  }

  useEffect(() => {

    // Come from firebase->manage user website
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex flex-col md:flex-row justify-between">
      <img
        className="w-48 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"/>
      {user && (
        <div className="flex p-4">
          <button
            className="py-2 px-4 mx-8 my-2 bg-purple-800 text-white font-bold rounded-lg"
            onClick={handleGptSearchClick}
          >
            {gptSearchButton ? "Homepage" : "GPT Search" }
          </button>
          <img
            className="w-12 h-12"
            src={user.photoURL}
            alt="profile"/>
          <button
            onClick={handleSignOut}
            className="py-2 px-4 mx-8 my-2  bg-green-900 opacity-90 text-white font-bold rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;