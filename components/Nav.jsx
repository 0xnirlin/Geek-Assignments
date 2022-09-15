import Image from "next/image";
import React from "react";
import Link from "next/link";
// import BOE from './BOE.svg'

// import { AiOutlineHome } from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link href="/" className="flex items-center"><div><img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Online Geeks</span></div>
        </Link>
        <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="/About/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                </li>
                <li>
                    <Link href="/Blog" className="text-gray-900 dark:text-white hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  );
};

export default Nav;
