import { Cloud, Cpu, Database, Monitor, Code } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Technical Skills",
      icon: Monitor,
      skills: [
        "Python",
        "Java",
        "Software Engineering",
        "Web Development",
        "Artificial Intelligence",
        "Machine Learning",
      ],
    },
    {
      title: "Front-End Technologies",
      icon: Code,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Back-End Technologies",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "Java Spring Boot",
      ],
    },
    {
      title: "Databases & Tools",
      icon: Cloud,
      skills: [
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Vercel",
        "VS Code",
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-light mb-20 text-center tracking-wide animate-fade-in-up">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="animate-fade-in-up rounded-[2rem] border border-platinum-800/50 bg-platinum-950/60 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-electric-500/30 bg-electric-500/10 text-electric-300">
                  <group.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-platinum-500">
                    Category
                  </p>
                  <h3 className="text-3xl font-display font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-platinum-800/60 bg-platinum-900/80 px-4 py-3 text-sm text-platinum-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:border-electric-400/30 hover:text-electric-200"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-electric-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-platinum-800/50 bg-platinum-950/60 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl">
          <h3 className="text-3xl font-display font-semibold text-foreground mb-6">
            Soft Skills & Languages
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Problem-solving",
              "Debugging",
              "API Testing",
              "Responsive Design",
              "UI/UX Review",
              "Team Collaboration",
              "English",
              "Telugu",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-platinum-800/50 bg-platinum-900/80 px-5 py-4 text-platinum-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
