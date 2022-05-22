import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/pages/Blogs";
import Home from "./components/pages/Home/Home";
import SignIn from "./components/pages/SignIn";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signin" element={<SignIn></SignIn>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
