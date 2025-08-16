// components/SocialLoginButtons.jsx
import React from 'react';
const SERVER_URL = 'http://localhost:3000'; // your backend
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export default function SocialLoginButtons() {
  const loginWithGoogle = () => {
    window.location.href = `${SERVER_URL}/auth/google`;
  };

  const loginWithGitHub = () => {
    window.location.href = `${SERVER_URL}/auth/github`;
  };

  return (
    <div className='flex'>
      <button onClick={loginWithGoogle} className=' flex items-center gap-2 border-2 bg-white m-2 p-2 rounded font-sans'>Login with Google<FcGoogle size={20} /></button>
      <button onClick={loginWithGitHub} className=' items-center flex gap-2 bg-blue-700 m-2 p-2 rounded font-sans'>Login with GitHub<FaGithub  size={20}/></button>
    </div>
  );
}
