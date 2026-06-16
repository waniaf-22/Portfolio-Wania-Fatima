import { useState } from "react";

const socialGroups = [
  {
    label: "Platforms I Manage",
    tools: ["Instagram", "Facebook", "X (Twitter)", "Threads", "LinkedIn", "TikTok", "YouTube"],
  },
  {
    label: "Ads",
    tools: ["Meta Ads Manager"],
  },
  {
    label: "Management & Strategy",
    tools: ["Meta Business Suite", "Buffer", "Trello", "Google Analytics"],
  },
  {
    label: "AI Content Writing",
    tools: ["ChatGPT", "Gemini", "Claude"],
  },
  {
    label: "Creative & Editing",
    tools: ["Canva", "Adobe Illustrator", "Adobe Premiere Pro", "CapCut"],
  },
];

const techGroups = [
  {
    label: "Frontend",
    tools: ["React", "Next.js", "TailwindCSS", "Vite", "Framer Motion"],
  },
  {
    label: "Backend",
    tools: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    label: "AI & ML Libraries",
    tools: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "OpenAI API", "Jupyter", "Anaconda"],
  },
  {
    label: "Databases",
    tools: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    label: "DevOps & Tools",
    tools: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vercel", "NPM", "Linux"],
  },
];


const PillGroup = ({
  groups,
  accentColor,
}: {
  groups: { label: string; tools: string[] }[];
  accentColor: string;
}) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {groups.map((group) => {
        const isActive = active === group.label;
        const dimmed = active !== null && !isActive;
        return (
          <div
            key={group.label}
            className="transition-opacity duration-300"
            style={{ opacity: dimmed ? 0.3 : 1 }}
          >
            <button
              className="flex items-center gap-3 mb-3"
              onClick={() => setActive(isActive ? null : group.label)}
            >
              <div
                className="w-1 h-4 rounded-full transition-all duration-200"
                style={{
                  background: accentColor,
                  boxShadow: isActive ? `0 0 10px ${accentColor}` : "none",
                  opacity: isActive ? 1 : 0.5,
                }}
              />
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isActive ? accentColor : "rgba(255,255,255,0.35)",
                }}
              >
                {group.label}
              </span>
            </button>

            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-[0.78rem] font-medium cursor-default transition-all duration-200"
                  style={{
                    background: isActive ? `${accentColor}10` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isActive ? accentColor + "40" : "rgba(255,255,255,0.08)"}`,
                    color: isActive ? accentColor : "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ToolsSection = () => (
  <section id="tools" className="section-padding">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-14">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">My Arsenal</p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1]">
          Tools & Platforms
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT: Social Media */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 rounded-full" style={{ background: "#ec4899" }} />
            <h3 className="text-[0.95rem] font-display font-semibold text-white">Social Media & Creative</h3>
          </div>
          <PillGroup groups={socialGroups} accentColor="#ec4899" />
        </div>

        {/* Divider */}
        <div className="hidden lg:block absolute" />

        {/* RIGHT: Tech Stack */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 rounded-full" style={{ background: "#8b5cf6" }} />
            <h3 className="text-[0.95rem] font-display font-semibold text-white">Tech Stack</h3>
          </div>
          <PillGroup groups={techGroups} accentColor="#8b5cf6" />
        </div>

      </div>
    </div>
  </section>
);

export default ToolsSection;
