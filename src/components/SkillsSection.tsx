const skills = [
  { name: "LLMs", cat: "ai", big: true },
  { name: "Machine Learning", cat: "ai" },
  { name: "Python", cat: "code", big: true },
  { name: "Prompt Engineering", cat: "ai" },
  { name: "Brand Strategy", cat: "creative", big: true },
  { name: "React / Next.js", cat: "code" },
  { name: "Leadership", cat: "lead", big: true },
  { name: "Neural Networks", cat: "ai" },
  { name: "Meta Ads", cat: "creative" },
  { name: "C++", cat: "code" },
  { name: "PyTorch", cat: "ai" },
  { name: "Video Editing", cat: "creative" },
  { name: "Node.js", cat: "code" },
  { name: "PROCOM Director", cat: "lead" },
  { name: "REST APIs", cat: "code" },
  { name: "Figma", cat: "creative" },
  { name: "AI Research", cat: "ai" },
  { name: "Content Strategy", cat: "creative" },
  { name: "JavaScript", cat: "code" },
  { name: "Event Management", cat: "lead" },
  { name: "Photography", cat: "creative" },
  { name: "GitHub", cat: "code" },
  { name: "Collaborative Filtering", cat: "ai" },
  { name: "Graphic Design", cat: "creative" },
  { name: "Assembly", cat: "code" },
  { name: "Community Building", cat: "lead" },
];

const catStyles: Record<string, { border: string; color: string; bg: string; hoverBg: string; shadow: string }> = {
  ai: {
    border: "rgba(6,182,212,0.3)",
    color: "var(--cyan)",
    bg: "rgba(6,182,212,0.06)",
    hoverBg: "rgba(6,182,212,0.15)",
    shadow: "rgba(6,182,212,0.2)",
  },
  code: {
    border: "rgba(139,92,246,0.3)",
    color: "#a78bfa",
    bg: "rgba(139,92,246,0.06)",
    hoverBg: "rgba(139,92,246,0.15)",
    shadow: "rgba(139,92,246,0.2)",
  },
  creative: {
    border: "rgba(236,72,153,0.3)",
    color: "#f472b6",
    bg: "rgba(236,72,153,0.06)",
    hoverBg: "rgba(236,72,153,0.15)",
    shadow: "rgba(236,72,153,0.2)",
  },
  lead: {
    border: "rgba(251,191,36,0.3)",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.06)",
    hoverBg: "rgba(251,191,36,0.15)",
    shadow: "rgba(251,191,36,0.2)",
  },
};

const legend = [
  { label: "AI & Machine Learning", color: "var(--cyan)" },
  { label: "Engineering", color: "#a78bfa" },
  { label: "Creative", color: "#f472b6" },
  { label: "Leadership", color: "#fbbf24" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Capabilities</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Skill Constellation
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Hover to illuminate each node. The brightest clusters reveal where both worlds converge.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {legend.map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-[0.78rem] text-[var(--lg)]">
            <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>

      {/* Skill cloud */}
      <div className="flex flex-wrap gap-3 items-center justify-center px-4 md:px-8">
        {skills.map((skill) => {
          const s = catStyles[skill.cat];
          return (
            <span
              key={skill.name}
              className="skill-chip relative rounded-full font-medium cursor-default transition-all duration-300"
              style={{
                padding: skill.big ? "0.8rem 1.8rem" : "0.6rem 1.4rem",
                fontSize: skill.big ? "1rem" : "0.82rem",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: s.border,
                color: s.color,
                background: s.bg,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = s.hoverBg;
                (e.target as HTMLElement).style.boxShadow = `0 0 20px ${s.shadow}`;
                (e.target as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = s.bg;
                (e.target as HTMLElement).style.boxShadow = "none";
                (e.target as HTMLElement).style.transform = "scale(1)";
              }}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
