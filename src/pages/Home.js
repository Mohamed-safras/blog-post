import React from "react";
import Posts from "../components/Posts";
import useFetch from "../components/useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blog");

  return (
    <React.Fragment>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blogs && <Posts blogs={blogs} />}
    </React.Fragment>
  );
};

export default Home;
