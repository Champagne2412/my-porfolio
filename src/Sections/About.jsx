import React from "react";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing clear, readable code that’s easy to maintain and improve over time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Building smooth, responsive interfaces with performance in mind.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Enjoy working with others, sharing ideas, and learning in a team environment.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Curious about new tools and best practices, and always eager to learn.",
    },
  ];
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning, Building,
              <span className="text-white font-serif italic font-normal text-white">
                {" "}
                and
              </span>{" "}
              Growing
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p className="text-justify">
                I am a passionate fullstack developer with a strong interest in
                building modern and responsive web applications. I enjoy turning
                ideas and designs into functional websites while paying
                attention to details and usability.
              </p>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-justify text-lg font-medium italic text-foreground">
                  As an aspiring developer, I’m eager to learn from experienced
                  professionals and apply my skills in a real-world environment.
                  I’m currently seeking an internship opportunity where I can
                  grow technically, collaborate effectively, and add value to a
                  development team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
