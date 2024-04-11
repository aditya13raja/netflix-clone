import React, {useEffect} from 'react';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate(('/error'));
    });
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
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between">
      <img
        className="w-48"
        src={LOGO}
        alt="logo"/>
      {user && (
        <div className="flex p-4">
          <img
            className="w-12 h-12 pr-2"
            alt="user"
            src={user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>
      )}
    </div>
  );
}

export default Header;