import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";

const Page = ({ blogData }) => {
  const baseURL = "https://guarded-atoll-38212.herokuapp.com";
  // console.log("Data Locl: ", blogData);

  return (
    <div className="flex h-auto w-full items-center justify-center">
      {blogData ? (
        <div id="bgImg" className="w-[80%] h-auto relative border mt-10 mb-10 pb-10 ">
          <div
            id="BlogHeading"
            className="w-full h-[25vh] flex items-center justify-center relative mt-14 mb-14   "
          >
            <div
              id="heading-box"
              className="flex flex-col w-[70%] h-[100%]   absolute items-center justify-center p-10 font-black text-6xl text-gray-900 leading-[4.7rem] font-[Helvetica] mt-20   "
            >
                {blogData?.data[0].attributes.Heading}
                <div className="font-light text-base mr-auto mt-5"><span className="w-5 h-10 border border-slate-600 rounded-full">blogData?.data[0].attributes.authorImage</span> By {blogData?.data[0].attributes.Author}</div>
                <div className="font-light text-lg text-gray-600 mt-7"><span className="text-lg font-bold text-gray-600">Summary: </span>{blogData?.data[0].attributes.Description}</div>
            </div>
          </div>
            <div className="w-full h-[80vh] relative mt-36 rounded-lg overflow-hidden  ">
            
            <Image
                src={
                baseURL +
                blogData?.data[0].attributes.Image.data.attributes.formats.large
                    .url
                }
               
                layout={'fill'}
                objectFit={'contain'}
            ></Image>
            </div>
            <div id="KOntant" className="w-full h-auto flex justify-center mt-20">
                <div className=" w-[80%] h-auto border-l-2 border-violet-700 pl-10  ">
                <ReactMarkdown children={blogData?.data[0].attributes.Content} remarkPlugins={[gfm]}
                rehypePlugins={[rehypeRaw]}
                className="prose min-w-full"
escapeHtml={false}  />
                {/* {blogData.data[0].attributes.Content} */}
                {/* {blogData.data[0].attributes.Content} */}
                </div>
            </div>
        </div>




      ) : (
        <div className="flex w-full h-screen items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const baseURL = "https://guarded-atoll-38212.herokuapp.com";
  //fetch the data from the required api
  const response = await fetch("https://guarded-atoll-38212.herokuapp.com/api/geek-blogs");
  const dataObject = await response.json();
  const paths = Object.entries(dataObject)[0][1].map((data) => {
    console.log("HEADING: ", data.attributes.Heading);
    return {
      params: {
        slug: data.attributes.Heading.split(" ").join("-"),
      },
    };
  });

  // create the array of params with the ids
  return {
    paths: [{ params: { slug: "1" } }],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const pid = params.slug;
  console.log("PID: ", pid);
  //fetch
  const response = await fetch(
    `https://guarded-atoll-38212.herokuapp.com/api/geek-blogs?filters[Slug][$eq]=${pid}&pagination[start]=0&pagination[limit]=1&populate=*`
  );
  const blogData = await response.json();
  console.log("Current Blog: ", blogData.data[0].attributes);
  //get the data and pass to the page
  return {
    // Passed to the page component as props
    props: { blogData },
  };
}

export default Page;
