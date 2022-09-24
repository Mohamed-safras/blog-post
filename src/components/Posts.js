import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = ({ blogs }) => {
  return (
    <React.Fragment>
      {blogs.map((blog) => (
        <Link
          to={`postdetail/${blog.id}`}
          style={{ color: "black" }}
          key={blog.id}
        >
          <Post {...blog} />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default Posts;
