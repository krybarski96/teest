import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analics from "./components/Analics";
import Newsletter from "./components/Newsletter";
import Offert from "./components/Offert";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analics/>
      <Newsletter/>
      <Offert/>
      <Footer/>
    </div>
  );
}

export default App;
