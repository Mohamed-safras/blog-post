import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../pages/Input";
import "../styles/addpost.scss";
const AddPost = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    blogtype: "design",
    cover: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await fetch("http://localhost:8000/blogs", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(blog),
      }).then((request) => {
        if (!request.ok) {
          throw Error(
            "Something went wrong with the request , could not add blog"
          );
        }

        setIsLoading(false);
        setError(null);

        setBlog({
          title: "",
          description: "",
          cover: "",
          blogtype: "design",
        });

        console.log("blog post successfully added");
        navigate("/");
      });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <form className="post-form" onSubmit={handelSubmit}>
          <Input
            isLoading={isLoading}
            typeOfAction="Add Blog"
            {...blog}
            handelChange={handelChange}
          />
        </form>
      )}
    </React.Fragment>
  );
};

export default AddPost;
