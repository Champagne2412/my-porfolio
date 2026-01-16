import React from "react";

const Qualifications = () => {
  const qualifications = [
    {
      period: "2025",
      heading: "Backend Development (Technical Training)",
      description:
        "Built server-side applications using Node.js, Express, and MongoDB, focusing on API development, database operations, authentication, and application logic.",
      technologies: ["Node JS", "Express JS", "Mongo DB"],
      current: true,
    },
    {
      period: "2025",
      heading: "Frontend Development (Technical Training)",
      description:
        "Completed structured training in frontend development, covering HTML, CSS, JavaScript, and modern web development fundamentals.",
      technologies: ["Html", "Css", "Tailwind Css", "Javascript", "React JS"],
      current: false,
    },
    {
      period: "2019-2024",
      heading: "Estate Management (B.Sc.)",
      description:
        "Completed a Bachelor’s degree in Estate Management, gaining strong foundations in property management, valuation, planning, and analytical problem-solving skills.",
      technologies: [],
      current: false,
    },
  ];
  return (
    <section id="qualifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            <span className="font-serif italic font-normal text-white">
              My{" "}
            </span>
            Qualifications
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From earning a university degree to completing structured fullstack
            training at a tech academy, my learning journey reflects consistent
            growth and a strong commitment to developing practical software
            skills.
          </p>
        </div>
        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* content */}
          <div className="space-y-12">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {qualification.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {qualification.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {qualification.heading}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-4">
                      {qualification.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {qualification.technologies.map((tech, techindex) => (
                        <span
                          key={techindex}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
