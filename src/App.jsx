import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Project from "@/sections/Projects.jsx";
import Experience from "@/sections/Experience.jsx";
import Testimonials from "@/sections/Testimonials.jsx";
import Contact from "@/sections/Contacts.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
