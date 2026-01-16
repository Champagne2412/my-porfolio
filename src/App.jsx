import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About.jsx";
import Project from "./Sections/Projects.jsx";
import Qualifications from "./Sections/Qualifications.jsx";
import Experience from "./Sections/Experience.jsx";
// import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contacts.jsx";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Experience />
        <Project />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
