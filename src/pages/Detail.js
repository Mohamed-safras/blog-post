import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../components/useFetch";

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blog/${id}`);

  return (
    <React.Fragment>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <img src={blog.cover} alt={blog.title} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Detail;
