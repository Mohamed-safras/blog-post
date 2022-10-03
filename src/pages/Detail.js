import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../assets/Spinner.svg";
import useFetch from "../components/useFetch";
import "../styles/detail.scss";

const Detail = () => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { pathname } = useLocation();

  const id = pathname.split("/")[2];
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDeletePost = async () => {
    setIsDeleting(true);
    try {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (!response.ok) {
          throw new Error("post already deleted");
        }
        setIsDeleting(false);
        console.log("blog successfully deleted");
        navigate("/");
      });
    } catch (error) {
      setIsDeleting(false);
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {blog && (
        <div>
          <h1 className="post-title">{blog.title}</h1>
          <p className="description">{blog.description}</p>
          <div className="cover-image">
            <img src={blog.cover} alt={blog.title} />
          </div>
          <div className="button-continer">
            <button onClick={handleDeletePost} className="btn">
              {!isDeleting ? (
                `delete blog`
              ) : (
                <img src={Spinner} alt="spinner" />
              )}
            </button>

            <button className="btn">
              <Link to={`/update/${id}`}>update blog</Link>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Detail;
