import React from 'react';
import Image from "next/image";
import Nav from "./components/homePage/nav"
import Footer from "./components/homePage/footer"
import Hero from "./components/homePage/home"
import About from "./components/homePage/aboutUs";
import Categorie  from "./components/homePage/categorie";
export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
    
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Nav />
    <Hero />
    <About />
    <Categorie/>
  
    <Footer/>
    </div>
  );
};

