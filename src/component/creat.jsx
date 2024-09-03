import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth , db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Swal from 'sweetalert2'


//  sign up  page

const Creat = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const  handleSignUp = (e)=>{
     e.preventDefault();
     createUserWithEmailAndPassword(auth,email,password)
      .then(async (userCredential) => {
         // Signed in user
         var user = userCredential.user;
         console.log("User created successfully:", user);
         // ...
         localStorage.setItem('userUid', user.uid)
         const userData = {
             name: name,
             email: email,
             uid: user.uid
         }
        await setDoc( doc(db,'user',user.uid),userData )
        Swal.fire({
         title: "SignUp Completed",
         text: "Do You Want to Continue",
         icon: "success"
       });
         navigate('/home')
         
  })
    .catch((error) => {
        alert("Error creating user:", error);
  Swal.fire({
    title: "error",
    text: "Sumthing want wrong",
    icon: "error"
  });
 });
}
    
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
    <div className="relative py-3 sm:max-w-xs sm:mx-auto">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="m-0 text-[16px] font-semibold dark:text-white">
              Login to your Account
            </p>
            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
              Get started with our app, just start section and enjoy experience.
            </span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">
              Full Name
            </label>
            <input
            onChange={e => setName(e.target.value)}
              placeholder="Full Name"
              type="text"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">
              Email
            </label>
            <input
            onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-xs text-gray-400">
            Password
          </label>
          <input
          onChange={e => setPassword(e.target.value)}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button
          
          onClick={handleSignUp }
          className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
            Sign Up
          </button>
        </div>
        <div className="flex mt-3 justify-between items-center text-sm text-center">
         <a href="*" className="text-blue-600 font-semibold">forgot password</a>
         <a href="/login" className="text-blue-900 font-semibold">Sign In</a>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Creat;

