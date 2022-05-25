import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/pages/Blogs";
import Home from "./components/pages/Home/Home";
import MyPortfolio from "./components/pages/MyPortfolio";
import NotFound from "./components/shared/NotFound";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import RequireAuth from "./components/shared/RequireAuth";
import Purchase from "./components/pages/Purchase";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route
          path="purchase/:partId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
