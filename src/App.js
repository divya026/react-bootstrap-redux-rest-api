import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./screens/Contacts";
import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AllPosts from "./screens/AllPosts";
import PostDetails from "./screens/PostDetails";
import CreatePost from "./screens/CreatePost";
import Signup from "./screens/Signup";
import Login from "./screens/Login";

function DynamicRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/posts" element={<AllPosts />}></Route>
        <Route
          exact
          path="/posts/:postId/:userId"
          element={<PostDetails />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/create" element={<CreatePost />}></Route>
        <Route
          exact
          path="/create/:postId/:userId"
          element={<CreatePost />}
        ></Route>
        <Route exact path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DynamicRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
