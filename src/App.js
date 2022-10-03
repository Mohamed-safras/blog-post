import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddPost from "./pages/AddPost";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Reducer from "./pages/Reducer";
import SharedLayOut from "./pages/SharedLayOut";
import Update from "./pages/Update";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route index element={<Home />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="postdetail/:id" element={<Detail />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
