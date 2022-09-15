import React from "react";
import Image from "next/image";
import Link from "next/link";
import student from "./student.jpg";
import animationData from "./study.json"
import Lottie from "react-lottie";
import team from './team.jpg'
import Fade from 'react-reveal/Fade';



const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-gray-800 w-full h-full flex flex-row backy" style={{  
      backgroundImage: "url(" + "https://i.ibb.co/2jfs7PZ/Group-1.png" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

    <Fade left>
      <div
        id="text"
        className="w-[50%] flex flex-col text-white  h-[70%] gap-2  mr-auto items-center justify-center mt-24    "
      >
        
        <div className="ml-14 w-[70%] text-5xl font-semibold leading-tight font-sans ">
          We Are The Best At Providing The Online Assignment Services
        </div>
        <div className="ml-14 w-[70%] text-sm font-light  font-mono leading-relaxed mt-2 text-white ">
          We help you with all your academic hurdles whether it be assignment,
          projects or online tests. You are just one click aways from acheiving
          your dream.
        </div>
        <div className="w-[70%] flex flex-row gap-3 mt-4">
          <div className="flex items-center justify-center rounded-3xl bg-violet-700 p-2 w-[25%] ml-8 hover:cursor-pointer ">
            <Link href={"#"}>Contact Us</Link>
          </div>
          <div className="flex items-center justify-center rounded-3xl border-white border text-white p-2 w-[25%] hover:cursor-pointer ">
            {" "}
            <Link href={"#"}>Join Us</Link>
          </div>
        </div>
      </div>
      </Fade>

      
    </div>
  );
};

export default Header;
