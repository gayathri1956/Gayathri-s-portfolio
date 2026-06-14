import { Code, Monitor, Database, Wrench, Users, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & AI/ML",
      icon: Code,
      skills: [
        { name: "C Programming", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "Java", level: 75, color: "from-orange-500 to-red-500" },
        { name: "Python", level: 85, color: "from-yellow-500 to-green-500" },
        { name: "Artificial Intelligence", level: 70, color: "from-indigo-500 to-purple-600" },
        { name: "Machine Learning", level: 65, color: "from-pink-500 to-red-500" },
      ],
    },
    {
      title: "Front-End Technologies",
      icon: Monitor,
      skills: [
        { name: "HTML", level: 90, color: "from-orange-400 to-red-500" },
        { name: "CSS", level: 85, color: "from-blue-400 to-indigo-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "React.js", level: 75, color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", level: 70, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Back-End Technologies",
      icon: Wrench,
      skills: [
        { name: "Node.js", level: 70, color: "from-green-500 to-emerald-600" },
        { name: "Express.js", level: 65, color: "from-teal-500 to-blue-500" },
      ],
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75, color: "from-blue-500 to-indigo-600" },
        { name: "MongoDB", level: 65, color: "from-green-500 to-emerald-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", level: 80, color: "from-gray-500 to-black" },
        { name: "GitHub", level: 80, color: "from-gray-700 to-black" },
        { name: "Vercel", level: 70, color: "from-purple-500 to-indigo-600" },
        { name: "VS Code", level: 85, color: "from-blue-500 to-cyan-500" },
      ],
    },
    {
      title: "AI Tools",
      icon: Bot,
      skills: [
        { name: "Copilot", level: 85, color: "from-sky-500 to-blue-600" },
        { name: "Gemini", level: 80, color: "from-purple-500 to-pink-600" },
        { name: "ChatGPT", level: 90, color: "from-green-500 to-emerald-600" },
      ],
    },
  ];

  const otherSkills = [
    { name: "Problem-Solving", description: "Analytical thinking and creative solutions" },
    { name: "Debugging", description: "Identifying and fixing issues efficiently" },
    { name: "Collaboration", description: "Working effectively in teams" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-light mb-20 text-center tracking-wide animate-fade-in-up">
          Skills & <span className="text-gradient glow-text">Expertise</span>
        </h2>

        {/* Technical Skills */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="animate-fade-in-up bg-gradient-to-br from-platinum-900/30 to-background p-10 border border-platinum-800/50 rounded-2xl card-glow hover:scale-105 transition-transform duration-500"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-12">
                  <div className="w-14 h-14 bg-electric-500/10 rounded-full flex items-center justify-center mr-4 border border-electric-500/20 group-hover:glow-electric">
                    <category.icon className="w-7 h-7 text-electric-400" />
                  </div>
                  <h3 className="text-3xl font-display font-medium tracking-wide text-electric-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-10">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-4">
                        <span className="text-xl font-light text-platinum-200 group-hover:text-electric-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-electric-400 font-medium text-lg">{skill.level}%</span>
                      </div>
                      <div className="relative w-full h-3 bg-platinum-900 rounded-full overflow-hidden">
                        <div
                          className={`absolute h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full glow-electric`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-16">
            <div className="w-14 h-14 bg-electric-500/10 rounded-full flex items-center justify-center mr-4 border border-electric-500/20">
              <Users className="w-7 h-7 text-electric-400" />
            </div>
            <h3 className="text-4xl font-display font-medium tracking-wide text-gradient glow-text">
              Other Skills
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-electric-500/20 to-electric-400/10 text-electric-300 border border-electric-500/30 rounded-full text-lg font-light hover:scale-110 transition-transform duration-300 glow-electric-hover"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
