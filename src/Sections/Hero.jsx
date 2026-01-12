import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import Button from "../Components/Button.jsx";
import profile from "../assets/iruoma-profile.jpeg";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import AnimatedBorderButton from "../Components/AnimatedBoarderButton.jsx";

const Hero = () => {
  const socials = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* bg */}
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      \{/*  */}
      <div>
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content glass */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />{" "}
                Web Developer • Full Stack Javascript
              </span>
            </div>
          </div>
          {/* headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              I <span className="text-primary glow-text">Design,</span>{" "}
              <span className="text-primary glow-text">Build </span>
              <br />
              and <span className="text-primary glow-text">Learn</span>
              <span className="font-serif italic font-normal text-white">
                {" "}
                Every Day.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              I am Oma, a web developer focused on creating simple,
              user-friendly interfaces with HTML, CSS, JavaScript, and React.
              I’m seeking an internship opportunity where I can sharpen my
              skills, collaborate with a team, and build meaningful digital
              experiences.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton>
              <Download />
              Download CV
            </AnimatedBorderButton>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
          {/* right column profile image*/}
          <div>
            {/* Profile Image */}
            <div>
              <div className="absolute inset-0  rounded-3xl bg-gradient-to-br  from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profile}
                  alt="Iruoma's profile"
                  className="w- aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
