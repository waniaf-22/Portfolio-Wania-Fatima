import { useState } from "react";

const skillGroups = [
  {
    label: "AI & Machine Learning",
    color: "#06b6d4",
    skills: ["LLMs", "Machine Learning", "Prompt Engineering", "Neural Networks", "PyTorch", "AI Research", "Collaborative Filtering"],
  },
  {
    label: "Engineering",
    color: "#a78bfa",
    skills: ["Python", "React / Next.js", "Node.js", "REST APIs", "C++", "JavaScript", "GitHub", "Assembly"],
  },
  {
    label: "Creative",
    color: "#f472b6",
    skills: ["Brand Strategy", "Video Editing", "Figma", "Meta Ads", "Photography", "Graphic Design", "Content Strategy"],
  },
  {
    label: "Leadership",
    color: "#fbbf24",
    skills: ["Leadership", "PROCOM Director", "Event Management", "Community Building"],
  },
];

const SkillsSection = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Capabilities</p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1]">
            Skills
          </h2>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => {
            const isActive = active === group.label;
            const dimmed = active !== null && !isActive;
            return (
              <div
                key={group.label}
                className="transition-opacity duration-300"
                style={{ opacity: dimmed ? 0.35 : 1 }}
              >
                {/* Group label */}
                <button
                  className="flex items-center gap-3 mb-4 group"
                  onClick={() => setActive(isActive ? null : group.label)}
                >
                  <div
                    className="w-1 h-4 rounded-full transition-all duration-200"
                    style={{ background: group.color, boxShadow: isActive ? `0 0 10px ${group.color}` : "none" }}
                  />
                  <span
                    className="text-[0.72rem] uppercase tracking-[0.25em] font-semibold transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isActive ? group.color : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {group.label}
                  </span>
                </button>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 rounded-full text-[0.8rem] font-medium transition-all duration-200 cursor-default"
                      style={{
                        background: isActive ? `${group.color}12` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isActive ? group.color + "44" : "rgba(255,255,255,0.09)"}`,
                        color: isActive ? group.color : "rgba(255,255,255,0.6)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
