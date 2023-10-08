import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";
import Services from "./components/Servicess/Servicess.jsx";
import Contact from "./components/Contact/Contact.jsx";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="App  flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
