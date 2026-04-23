import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-light mb-16 text-center tracking-wide animate-fade-in-up text-gradient">
          What I'm Working On
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kids Learning App */}
          <div
            className="group animate-fade-in-up bg-gradient-to-br from-platinum-900/50 to-background border border-platinum-800 p-8 hover:border-electric-400/20 transition-all duration-500 hover:scale-105 hover:glow-electric"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-light text-electric-300">
                Kids Learning App
              </h3>
              <div className="w-3 h-3 bg-green-400 rounded-full glow-green"></div>
            </div>

            <p className="text-platinum-300 mb-6 leading-relaxed">
              The <strong>Kids Learning App</strong> is a complete interactive
              platform for children. It features English alphabets with sounds,
              Telugu alphabets with phonics, numbers, colors, shapes, animals,
              fruits, and vegetables. The app also includes moral stories,
              sing‑along rhymes, memory games, puzzles, and quizzes — making
              learning playful, engaging, and fun.
            </p>

            <a
              href="https://kids-learning-app-lac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3 border border-electric-400 text-electric-300 hover:bg-electric-400 hover:text-background transition-all duration-300 glow-electric-hover text-center"
            >
              <ExternalLink className="w-4 h-4 inline mr-2" />
              Live Project
            </a>
          </div>

          {/* Portfolio Website */}
          <div
            className="group animate-fade-in-up bg-gradient-to-br from-platinum-900/50 to-background border border-platinum-800 p-8 hover:border-electric-400/20 transition-all duration-500 hover:scale-105 hover:glow-electric"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-light text-electric-300">
                Portfolio Website
              </h3>
              <div className="w-3 h-3 bg-green-400 rounded-full glow-green"></div>
            </div>

            <p className="text-platinum-300 mb-6 leading-relaxed">
              A modern, elegant portfolio website showcasing my journey, skills,
              and aspirations. Built with focus on user experience and
              accessibility.
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-electric-500/10 text-electric-300 text-sm border border-electric-500/20 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 border border-electric-400 text-electric-300 hover:bg-electric-400 hover:text-background transition-all duration-300 glow-electric-hover">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              Live Project
            </button>
          </div>

          {/* Future Projects Placeholder */}
          <div
            className="group animate-fade-in-up bg-gradient-to-br from-platinum-900/30 to-background border border-platinum-700 border-dashed p-8 text-center hover:glow-electric"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-6xl mb-6 opacity-20 text-electric-400">+</div>
            <h3 className="text-xl font-display font-light text-platinum-400 mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-platinum-500 text-sm">
              Exciting AI/ML projects and web applications in the pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
