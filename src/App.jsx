import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Project from "@/sections/Projects.jsx";
import Qualifications from "@/sections/Qualifications.jsx";
import Experience from "@/sections/Experience.jsx";
import Contact from "@/sections/Contacts.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Qualifications/>
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
