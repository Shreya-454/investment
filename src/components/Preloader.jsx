import React from "react";
import logo from '../assets/images/svg/Logo.svg'
const Preloader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black ">
      
    <div className="relative flex justify-center items-center flex-col">
    <div className="absolute animate-spin-slow rounded-full h-72 w-72 border-t-8 border-b-8 border-[#A854E9]"></div>
    <img src={logo} alt="logo" className=" animate-pulse" />
</div>
      </div>
  );
};

export default Preloader;