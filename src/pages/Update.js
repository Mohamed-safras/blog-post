import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";

const Update = () => {
  const Navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:8000/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
    };
    getData();
  }, [id]);

  const update = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        setIsLoading(false);
        Navigate("/");
        return res.json();
      })

      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };
  return (
    <form className="post-form" onSubmit={update}>
      <div className="input-field">
        <input
          value={blog.title}
          onChange={handelChange}
          name="title"
          type="text"
          placeholder="enter title"
        />
      </div>

      <textarea
        value={blog.description}
        onChange={handelChange}
        name="description"
        type="text"
        placeholder="Enter description"
      />

      <select
        value={blog.blogtype}
        className="blogtypes"
        name="blogtype"
        onChange={handelChange}
      >
        <option value="medical">medical</option>
        <option value="design">design</option>
      </select>
      <div className="input-field">
        <input
          value={blog.cover}
          onChange={handelChange}
          name="cover"
          type="url"
          placeholder="Enter cover image url"
        />
      </div>
      <button className="submit">{!isLoading ? `update` : <Spinner />}</button>
    </form>
  );
};

export default Update;
