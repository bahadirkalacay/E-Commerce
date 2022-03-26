import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Slider />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
