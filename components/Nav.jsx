import Image from "next/image";
import React from "react";
import Link from "next/link";
// import BOE from './BOE.svg'

// import { AiOutlineHome } from "react-icons/ai";

const Nav = () => {
  return (
    <div className=" w-full md:w-full flex shadow border-slate-500   h-20 bg-gray-800 font-dyno   text-lg  justify-evenly  items-center  text-gray-200 font-dyno   " >
      <div id="logo" className=" w-[20%] md:w[20%] flex ">
        <Link href={"/"}>
          <div className=" lg:ml-20 md:ml-20 hover:cursor-pointer text-gray-200 text-xl ">LOGO</div>
        </Link>
      </div>
      <div id="menu" className="flex justify-between  w-[40%] hidden  lg:flex md:flex ">
        <Link href={"/dead"}>
          <div className="hover:cursor-pointer  hover:text-rose-700">Home</div>
        </Link>
        <Link href={"/"}>
          <div className="hover:cursor-pointer  hover:text-rose-700">Mint</div>
        </Link>
        <Link href={"/"}>
          <div className="hover:cursor-pointer  hover:text-rose-700">Tool</div>
        </Link>
        <Link href={"/"}>
          <div className="hover:cursor-pointer  hover:text-rose-700">Contact</div>
        </Link>
      </div>
      <div
        id="login with metamask"
        className=" w-[20%]   text-xl  items-center justify-center hidden lg:flex md:flex "
      >
      
      </div>
    </div>
  );
};

export default Nav;
