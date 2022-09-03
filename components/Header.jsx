import React from "react";
import Image from "next/image";
import Link from "next/link";
import student from "./student.jpg";

const Header = () => {
  return (
    <div className="bg-gray-800 w-full h-full flex flex-row">
      <div
        id="text"
        className="w-[50%] flex flex-col text-white items-center justify-center h-[80%] gap-2 mt-10   "
      >
        <div className="ml-14 w-[70%] text-5xl font-semibold leading-tight font-mono ">
          We Are The Best At Providing The Online Assignment Services
        </div>
        <div className="ml-14 w-[70%] text-sm font-light  font-mono leading-relaxed mt-2 text-slate-400 ">
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
{/*  */}
      {/* <div id="images" className="w-[50%] items-center justify-center flex"> */}
        <div className="w-[20%] h-[70%] rounded-xl overflow-hidden rounded-b-2xl mr-44 border-violet-400 border-4 relative ml-40 mt-20">

          <Image src={student} objectFit={'fill'} layout={'fill'}  ></Image>
       
        </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
