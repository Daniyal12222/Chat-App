
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//  loding page


export default function Loader() {
const navigate = useNavigate();
  useEffect(() => {
    chackuser()
  }, []);
  // chackuser
 const chackuser = async ()=>{
  const user = await localStorage.getItem('userUid')
 setTimeout(()=>{

   if(user !== null){
     navigate('/home')
   }else{
 
     navigate('/login')
 
   }
 },3000)
 }
 


  return (
    <>
    <div className="w-full h-[100vh] flex justify-center items-center">
      
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
        </div>
        </>
      )
    };

   
 