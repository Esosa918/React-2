import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Portfolio from "./Components/Portfolio";
import Blog1 from "./Components/Blog1";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
      <div>
        <SignUp />
        <SignIn />
      </div>
    </Router>
  );
}

export default App;
