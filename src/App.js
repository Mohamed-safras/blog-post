import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./pages/AddPost";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Reducer from "./pages/Reducer";
import SharedLayOut from "./pages/SharedLayOut";
import Update from "./pages/Update";

const App = () => {
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route index element={<Home />} />
          <Route
            path="addpost"
            element={
              <AddPost
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                error={error}
                handelChange={handelChange}
                setError={setError}
                blog={blog}
                setBlog={setBlog}
              />
            }
          />
          <Route path="postdetail/:id" element={<Detail />} />
          <Route
            path="update/:id"
            element={<Update handelChange={handelChange} />}
          />
          <Route path="reducer" element={<Reducer />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
