import React from "react";
import AnimatedBorderButton from "../Components/AnimatedBoarderButton";
import project2 from "../assets/project2.jpg";
import project9 from "../assets/project9.jpg";
import project7 from "../assets/project7.jpg";
import project6 from "../assets/project6.jpg";
import project5 from "../assets/project5.jpg";
import project1 from "../assets/project1.jpg";
import project3 from "../assets/project3.jpg";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Food Ordering Platform",
      description:
        "A frontend food ordering interface that allows users to browse meals, view details, and place orders through a clean and responsive UI.",
      image: project2,
      tags: ["React", "NodeJS", "Express JS", "Mongo DB"],
      link: "#",
      github: "#",
    },
    {
      title: "Blog Website",
      description:
        "A responsive blog website where users can read articles, explore posts by category, and enjoy a simple, user-friendly reading experience.",
      image: project9,
      tags: ["React"],
      link: "#",
      github: "#",
    },
    {
      title: "Food Order E-Commerce Platform",
      description:
        "A fullstack food e-commerce platform with features like user authentication, product listings, cart functionality, and order management.",
      image: project7,
      tags: ["React", "NodeJS", "Express JS", "Mongo DB"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Chatbot Application",
      description:
        "A fullstack AI chatbot application designed to simulate human-like conversations and provide helpful responses through an interactive interface.",

      image: project6,
      tags: ["React", "NodeJS", "Express JS", "Mongo DB", "Gemini API"],
      link: "#",
      github: "#",
    },
    {
      title: "School Program Platform",
      description:
        "A frontend platform built to showcase school programs in a structured and easy-to-navigate layout.",
      image: project5,
      tags: ["React"],
      link: "#",
      github: "#",
    },
    {
      title: "Hotel Booking Website",
      description:
        "A frontend hotel booking website that allows users to explore rooms, view amenities, and check availability through a modern interface.",
      image: project1,
      tags: ["React"],
      link: "#",
      github: "#",
    },
    {
      title: "Personal Blog Platform",
      description:
        "A fullstack personal blog built with Node.js, Express, EJS, and MongoDB, featuring post creation, editing, and dynamic content rendering.",
      image: project3,
      tags: ["EJS", "NodeJS", "Express JS", "Mongo DB"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              makes an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect- ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Champagne2412" target="blank">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
