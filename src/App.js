import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPost from "./pages/AddPost";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Update from "./pages/Update";
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="app-continer" style={{ padding: "10px 40px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="postdetail/:id" element={<Detail />} />
            <Route path="update/:id" element={<Update />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
