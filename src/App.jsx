import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import {Route, Routes} from "react-router-dom"
import Clothing from "./pages/clothing"
import Electronics from "./pages/electronics";
import Jewelry from "./pages/Jewelry";
import Home from "./pages/Home";


function App() {

  return (
    <div>
      <Navbar />
      <Carousel />
      <Home />
      {/* <Routes>
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/jewlery" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes> */}
    </div>
  );
}

export default App;
