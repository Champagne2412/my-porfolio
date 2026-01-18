import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center px-8 mt-32 lg:w-[70%] md:w-[90%] mx-auto"
    >
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
        My experience
      </span>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Fullstack Developer{" "}
          <span className="font-serif italic font-normal text-white">
            (Projects & Practice)
          </span>
        </h3>
        <p className=" text-justify text-muted-foreground animate-fade-in animation-delay-200">
          I’ve gained hands-on experience building and maintaining fullstack web
          applications through structured training and real project work. My
          focus has been on creating functional, user-friendly interfaces while
          developing reliable backend systems to support them.
        </p>
        <div>
          <h4 className="text-start my-4 text-secondary-foreground text-2xl  animate-fade-in animation-delay-300">
            What I’ve worked on:
          </h4>
          <div className="glass lg:w-[80%] md:w-[95%] sm:w-[90%] flex flex-col items-center mx-auto rounded-2xl mb-10 py-10 px-10 glow-border animate-fade-in animation-delay-400">
            <ul className=" list-disc justify-start lg:leading-10 items-center text-start italic ">
              <li>
                Built frontend interfaces using HTML, CSS, JavaScript, and React
              </li>
              <li>
                Developed backend services with Node.js, Express, and MongoDB
              </li>
              <li>Performed full CRUD operations with proper error handling and input validation.</li>
              <li>Implemented CRUD operations and basic user authentication</li>
              <li>Managed server-side logic and MongoDB database operations.</li>
              <li>
                Used Git and GitHub for version control and project organization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
