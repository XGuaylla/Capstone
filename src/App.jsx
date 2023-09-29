import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Clothing from "./pages/clothing";
import Electronics from "./pages/electronics";
import Jewelry from "./pages/Jewelry";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import MultiCarousel from "./components/MultiCarousel";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <Navbar setToken={setToken} token={token} />
      {/* <MultiCarousel /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronic" element={<Electronics />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
