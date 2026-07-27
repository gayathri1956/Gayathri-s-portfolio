import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex items-start justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-electric-900/10 to-background opacity-80"></div>
      <div className="absolute inset-x-0 top-0 h-80 bg-electric-500/10 blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-electric-500/10 rounded-full blur-3xl top-16 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <p className="text-electric-400 uppercase tracking-[5px] mb-4 font-semibold">AI & ML Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm
            <br />
            <span className="text-gradient">Gayathri Lakshmi Chandrakala</span>
            <br />
            <span className="text-gradient">Lingampalli</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-electric-400">
            <TypeAnimation
              sequence={["AI & ML Student", 2000, "React Developer", 2000, "Mobile App Creator", 2000, "Problem Solver", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg text-platinum-300 leading-8 max-w-xl">
            Motivated B.Tech student focused on Artificial Intelligence and Machine Learning, with practical experience in responsive web and mobile application development. I build polished user interfaces, AI-driven solutions, and scalable products with modern tools.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-xl">
            {[
              "AI Intern @ NIT AP",
              "Oracle Certified",
              "React & Tailwind",
              "Web & Mobile Apps",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-platinum-800/50 bg-platinum-950/40 p-5 text-center text-sm text-platinum-300 shadow-[0_20px_60px_rgba(13,16,26,0.18)]">
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button asChild className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-6">
              <Link to="/portfolio">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-electric-500 text-electric-300 hover:bg-electric-500 hover:text-white px-8 py-6">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-6 mt-10">
            <a href="https://github.com/gayathri1956" target="_blank" rel="noopener noreferrer" className="hover:text-electric-400 transition">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/lingampalli-gayathri-lakshmi-chandrakala-0186b0320/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-400 transition">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:gayatrilingampalli6@gmail.com" className="hover:text-electric-400 transition">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className={`flex justify-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-electric-500/20 blur-3xl"></div>
            <img
              src={profileImage}
              alt="Gayathri Lakshmi Chandrakala"
              className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full border-4 border-electric-500 object-cover shadow-[0_0_50px_rgba(59,130,246,0.35)] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
