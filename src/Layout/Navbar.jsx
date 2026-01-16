import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#qualifications", label: "Qualifications" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? " glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href=""
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          TSN <span className="text-primary">.</span>
        </a>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* mobile button */}
        <button className="md:hidden p-2 text-foreground" onClick={openMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile view */}
      {isOpen && (
        <div className="glass-strong md:hidden ">
          <div className=" container mx-auto px-6 py-6 flex flex-col gap-4 z-50">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsOpen(false)}
                className="text-lg text-muted-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              {" "}
              <Button onClick={() => setIsOpen(false)}>Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
