import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const [cart,setCart]=useState(0);
  return (
    <div >
      <Navbar cart={cart} setCart={setCart} />
      <Header/>
      <Card cart={cart} setCart={setCart} />
      <Footer/>
    </div>
  );
}

export default App;
