import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebase";

// about page 

const AboutPage =  () => {
const [name , setName] = useState('')
const [email , setEmail] = useState('')

  const aboutRef = collection(db, 'user');
  getDocs(aboutRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().description}`);
      let dataa = doc.data() 
      if(doc.id == localStorage.getItem('userUid')){
        setName(dataa.name)
        setEmail(dataa.email)
        // const uData = {
        //   name: doc.data().name,
        //   email: doc.data().email,
        // }
        
        // console.log(uData.name);

      }
    });
  })
 .catch((error) => {
   console.error("Error getting documents: ", error);
 });



  return (
    <div className="bg-white  min-h-screen flex flex-col items-center justify-center sm:p-6">
      <div className="max-w-4xl  mx-auto lg:px-4 lg:py-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <div className="w-full py-5 flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Name : <span>{name.slice(0,1).toUpperCase()}{name.slice(1)}</span></h1>
          <h1 className="font-semibold text-lg">Email : <span>{email}</span></h1>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          We are a team of passionate developers dedicated to building modern web applications using the latest technologies. Our mission is to deliver high-quality software that meets the needs of our clients and exceeds their expectations.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With a strong focus on user experience, performance, and security, we strive to create products that not only look great but also function seamlessly. We believe in continuous learning and improvement, constantly staying updated with the latest trends and best practices in the industry.
        </p>
        <p className="text-lg text-gray-600">
          Whether you are looking for a new website, a mobile app, or a custom software solution, we are here to help you achieve your goals. Let’s work together to bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
