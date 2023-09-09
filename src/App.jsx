import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Header/Home/Home.jsx";
import Product from "./components/Header/Product/Product.jsx";
import Services from "./components/Header/Servicess/Servicess.jsx";
import Contact from "./components/Header/Contact/Contact.jsx";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
