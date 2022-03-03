import React from "react";
import BlogPost from "../components/BlogPost";
import FullBlogPost from "./FullBlogPost";

const HomePage = () => {
  return (
    <div>
      <BlogPost />
      <FullBlogPost />
    </div>
  );
};

export default HomePage;
