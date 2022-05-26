import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isLoading,error}=useFetch("http://localhost:8000/blogs")
  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author=='mario')} title="Mario Blogs!"/> */}
    </div>
  );
};

export default Home;
