import React from "react";
import Indabba from "./Indabba";
import { AiFillStar } from "react-icons/ai";
import { RiPriceTag2Fill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";

const Dabba = () => {
  let arr = [
    {
      heading: "Money Back Gurantee",
      text: "Lifetime money back gurantee in case of any inconvinience",
      icon: <AiFillStar  size={'40'}></AiFillStar>,
    },

    {
      heading: "Affordable Pricing",
      text: "Pricing packages that are in range of every one.",
      icon: <MdOutlinePriceChange  size={'40'}></MdOutlinePriceChange>,
    },

    {
      heading: "Subject Matter Experts",
      text: "Experts hired to help you with any problem at hand.",
      icon: <RiPriceTag2Fill  size={'40'}></RiPriceTag2Fill>,

    },
  ];
  return (
    <div className="flex items-center justify-center h-44 w-full mt-[50px]  ">
      <div className="flex flex-row h-fit gap-3 mt-4 bg-white  shadow-2xl border-slate-800 w-[70%] rounded-2xl p-6  ml-4">
        {arr.map((info) => (
          <Indabba
            heading={info.heading}
            text={info.text}
            icon={info.icon}
          ></Indabba>
        ))}
      </div>
    </div>
  );
};

export default Dabba;
