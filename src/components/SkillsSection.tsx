import { useRef, useState } from "react";

const skills = [
  { name: "LLMs",                cat: "ai" },
  { name: "Python",              cat: "code" },
  { name: "Brand Strategy",      cat: "creative" },
  { name: "Leadership",          cat: "lead" },
  { name: "Machine Learning",    cat: "ai" },
  { name: "React / Next.js",     cat: "code" },
  { name: "Video Editing",       cat: "creative" },
  { name: "Prompt Engineering",  cat: "ai" },
  { name: "Figma",               cat: "creative" },
  { name: "PyTorch",             cat: "ai" },
  { name: "Node.js",             cat: "code" },
  { name: "PROCOM Director",     cat: "lead" },
  { name: "AI Research",         cat: "ai" },
  { name: "JavaScript",          cat: "code" },
  { name: "Meta Ads",            cat: "creative" },
  { name: "Neural Networks",     cat: "ai" },
  { name: "C++",                 cat: "code" },
  { name: "Graphic Design",      cat: "creative" },
  { name: "Community Building",  cat: "lead" },
  { name: "REST APIs",           cat: "code" },
  { name: "Photography",         cat: "creative" },
  { name: "GitHub",              cat: "code" },
  { name: "Event Management",    cat: "lead" },
  { name: "Content Strategy",    cat: "creative" },
  { name: "Assembly",            cat: "code" },
];

const cats = [
  { key: null,       label: "All",         color: "#ffffff" },
  { key: "ai",       label: "AI & ML",     color: "#06b6d4" },
  { key: "code",     label: "Engineering", color: "#a78bfa" },
  { key: "creative", label: "Creative",    color: "#f472b6" },
  { key: "lead",     label: "Leadership",  color: "#fbbf24" },
];

const catColor: Record<string, string> = {
  ai:       "#06b6d4",
  code:     "#a78bfa",
  creative: "#f472b6",
  lead:     "#fbbf24",
};

function SkillCard({ skill, visible }: { skill: typeof skills[0]; visible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const color = catColor[skill.cat];

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -14, y: x * 14 });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        perspective: "600px",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0.1,
        transform: visible ? "scale(1)" : "scale(0.95)",
      }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-6px)" : "translateY(0)"}`,
          transition: hovered
            ? "transform 0.12s ease-out, box-shadow 0.25s ease, border-color 0.25s ease"
            : "transform 0.5s ease, box-shadow 0.4s ease, border-color 0.4s ease",
          transformStyle: "preserve-3d",
          background: hovered
            ? `radial-gradient(circle at 40% 30%, ${color}14, rgba(10,10,18,0.92) 70%)`
            : "rgba(12,12,22,0.75)",
          border: `1px solid ${hovered ? color + "88" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "16px",
          padding: "22px 14px 18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          cursor: "default",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: hovered
            ? `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${color}44, 0 0 30px ${color}22`
            : "0 2px 16px rgba(0,0,0,0.35)",
          position: "relative",
          overflow: "hidden",
          minHeight: "80px",
        }}
      >
        {/* Top shine */}
        {hovered && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: `linear-gradient(to right, transparent, ${color}99, transparent)`,
            pointerEvents: "none",
          }} />
        )}

        {/* Dot indicator */}
        <div style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: color,
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hovered ? `0 0 10px ${color}, 0 0 20px ${color}88` : "none",
          flexShrink: 0,
        }} />

        {/* Name */}
        <span style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          fontFamily: "var(--font-display)",
          color: hovered ? color : "rgba(255,255,255,0.65)",
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          transition: "color 0.25s ease",
          textShadow: hovered ? `0 0 16px ${color}` : "none",
        }}>
          {skill.name}
        </span>

        {/* Bottom color bar */}
        <div style={{
          position: "absolute", bottom: 0,
          left: hovered ? "10%" : "25%",
          right: hovered ? "10%" : "25%",
          height: "2px",
          borderRadius: "2px",
          background: color,
          opacity: hovered ? 0.9 : 0.2,
          transition: "opacity 0.3s ease, left 0.3s ease, right 0.3s ease",
        }} />
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding">
      {/* Header */}
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">
        Capabilities
      </div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Skill Constellation
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[480px] mb-10">
        Hover any card to illuminate it. Filter by domain below.
      </p>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {cats.map((c) => {
          const active = activeFilter === c.key;
          return (
            <button
              key={String(c.key)}
              onClick={() => setActiveFilter(active ? null : c.key)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "7px 18px",
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: active ? `${c.color}18` : "rgba(255,255,255,0.04)",
                border: `1px solid ${active ? c.color + "99" : "rgba(255,255,255,0.1)"}`,
                color: active ? c.color : "rgba(255,255,255,0.45)",
                boxShadow: active ? `0 0 20px ${c.color}33` : "none",
                letterSpacing: "0.03em",
              }}
            >
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: c.color, opacity: active ? 1 : 0.5,
                flexShrink: 0,
              }} />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: "14px",
        }}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            visible={activeFilter === null || skill.cat === activeFilter}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
