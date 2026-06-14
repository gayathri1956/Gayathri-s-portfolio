import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-platinum-950/10 to-background opacity-50 animate-gradient-x"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div
            className="animate-fade-in-up mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Gayathri Lakshmi Chandrakala"
                className="w-48 h-48 rounded-full mx-auto border-2 border-electric-500/30 object-cover shadow-2xl transform hover:scale-105 transition-all duration-700 card-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500/10 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <div
            className="animate-fade-in-up mb-6"
            style={{ animationDelay: "0.4s" }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light mb-4 leading-tight tracking-wide">
              Hi, I'm{" "}
              <span className="font-medium text-gradient glow-text">
                Gayathri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-platinum-300 max-w-2xl mx-auto">
              Web Developer & AI Enthusiast — building modern web apps and exploring AI tools to solve real problems.
            </p>
          </div>

          {/* Social Icons Row */}
          <div
            className="flex justify-center gap-8 mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-electric-300 hover:text-electric-400 transition">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-electric-300 hover:text-electric-400 transition">
              <Github className="w-7 h-7" />
            </a>
            <a href="mailto:your.email@example.com" className="text-electric-300 hover:text-electric-400 transition">
              <Mail className="w-7 h-7" />
            </a>
          </div>

          {/* Quick Highlights Row */}
          <div
            className="flex justify-center gap-6 mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            {["3+ Projects", "AI Tools", "Web Development"].map((highlight, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-electric-500/10 text-electric-300 border border-electric-500/20 rounded-full text-sm font-light hover:scale-110 transition-transform duration-300 glow-electric-hover"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Button */}
          <div
            className="animate-fade-in-up mt-10"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              asChild
              className="bg-transparent border-2 border-electric-500/50 text-white hover:bg-electric-500/10 hover:border-electric-400 hover:text-electric-300 px-16 py-6 text-xl font-light tracking-widest rounded-lg transform hover:scale-105 transition-all duration-500 border-glow hover:glow-text"
            >
              <Link to="/portfolio">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
