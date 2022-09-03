import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const PostContent = () => {
    const source = `
  # Hello, world!
  ---
  ~this doesn't work.~
  `;
    return <ReactMarkdown remarkPlugins={[gfm]} children={source} />;
  };
    export default PostContent