// components/SocialLoginButtons.jsx
import React from 'react';
const SERVER_URL = 'http://localhost:3000'; // your backend
import { FaGoogle } from "react-icons/fa6";
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
      <button onClick={loginWithGoogle} className=' flex items-center gap-2 border-2 bg-white m-2 p-2 rounded font-sans'>Login with Google<FaGoogle size={14} /></button>
      <button onClick={loginWithGitHub} className=' items-center flex gap-2 bg-blue-600 m-2 p-2 rounded font-sans'>Login with GitHub<FaGithub  /></button>
    </div>
  );
}
