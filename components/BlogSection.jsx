import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";


const BlogSection = ({ data,cmd,featured,theme }) => {
    console.log("Featured: ",featured)
    cmd?cmd:cmd=""
  const baseURL = "https://guarded-atoll-38212.herokuapp.com";
  const [myData, setData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    
    fetch(
      `https://guarded-atoll-38212.herokuapp.com/api/geek-blogs?${featured===true?"filters[Featured][$eq]=true&pagination[start]=0&pagination[limit]=3":""}&populate=*&_sort=date:DESC`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`w-full min-h-[60vh] flex flex-wrap items-center flex-col ${theme=="light"?"bg-white":"bg-gray-800"} `}>
          {featured === true?<div className={`text-5xl ${theme=="light"?"text-gray-700":"text-gray-300"} font-bold ml-auto mr-auto my-10 `}>Featured Blogs</div>:<div className="text-6xl text-slate-700 font-black ml-auto mr-auto my-10 capitalize font-mono "> Blog </div>}
      {!loading ? (
        <div className={`flex   items-center justify-center flex-wrap h-[90%]  p-14 ${featured==true?'gap-14':'gap-4'} `}>
          
          {Object.entries(myData).map((item) => (
            <Link href={'/Blog/'+item[1].attributes.Heading.split(" ").join("-")}>
            <div className="ml-auto max-w-[300px]  rounded-xl overflow-hidden  mr-auto   mt-auto s mb-10 bg-white  h-[26rem] hover:-translate-y-6 hover:cursor-pointer transition-all duration-700  shadow-lg   ">
              <div id="Image" className="h-[50%]  overflow-hidden" onClick={(e) => e.preventDefault()}>
                <Image src={
                      baseURL +
                      item[1].attributes.Image.data.attributes.formats.medium.url
                  }
                  width={"700"}
                  height={400}
                ></Image>
              </div>
              <div className="mx-4 ">
                <div id="Heading" className="flex text-lg leading-relaxed font-bold mt-4 md:text-lg lg:text-xl ">
                  {item[1].attributes.Heading}
                </div>
                <div id="Description" className="flex text-sm text-gray-500 mt-2 leading-relaxed lg:text-base md:text-sm">{item[1].attributes.Description}</div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-20">
          <CircularProgress></CircularProgress>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
