const experiences = [
  {
    company: "FoodPapa",
    period: "May 2026 – Present",
    title: "Social Media Manager & Tech Consultant",
    bullets: [
      "Develop and execute content strategies driving brand awareness and audience growth across Instagram, Facebook, and TikTok.",
      "Plan and run Meta Ads campaigns (Facebook & Instagram) including audience targeting, budget management, and performance optimization.",
      "Track ad performance metrics, analyze audience insights, and iterate on creatives to maximize ROI and campaign effectiveness.",
      "Advise on API-based automation tools and platform integrations to streamline content scheduling and operational workflows.",
    ],
    accent: "var(--cyan)",
  },
  {
    company: "PROCOM 2026, FAST University",
    period: "Sep 2025 – Present",
    title: "Director, Media and Promotions",
    bullets: [
      "Lead digital strategy and brand management for one of Pakistan's largest student tech competitions across 20+ universities.",
      "Manage content pipelines, scheduling, and a cross-functional team to drive event registrations and sponsorship visibility.",
    ],
    accent: "var(--purple)",
  },
  {
    company: "ConnectSaad, YouTube",
    period: "May 2025 – Aug 2025",
    title: "Freelance Video Editor",
    bullets: [
      "Delivered professional edits including colour grading, audio sync, and motion graphics; managed full post-production pipeline optimized for audience retention.",
    ],
    accent: "var(--pink)",
  },
  {
    company: "ACM, FAST NUCES Karachi",
    period: "Sep 2024 – May 2025",
    title: "Media Manager",
    bullets: [
      "Led five creative teams (Design, Animation, Media, Content, and Creativity); streamlined workflows and won Star Performer award.",
    ],
    accent: "var(--blue)",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Journey</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Experience Timeline
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-14">
        A track record of building brands, leading teams, and shipping real work.
      </p>

      <div className="relative">
        {/* Vertical gradient line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, var(--cyan), var(--purple), var(--pink), transparent)" }}
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative md:pl-16 group">
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-0 top-5 w-8 h-8 rounded-full items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle, ${exp.accent}33, ${exp.accent}11)`,
                  border: `1.5px solid ${exp.accent}`,
                  boxShadow: `0 0 12px ${exp.accent}55`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: exp.accent }}
                />
              </div>

              {/* Card */}
              <div
                className="rounded-2xl p-6 md:p-8 border border-[var(--dark-border)] transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: "var(--dark-card)",
                  boxShadow: `0 0 0 0 ${exp.accent}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.accent}44`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${exp.accent}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dark-border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[1rem] font-display font-semibold text-white mb-1">{exp.title}</h3>
                    <div
                      className="text-[0.78rem] font-medium"
                      style={{ color: exp.accent }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <span
                    className="text-[0.72rem] px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center"
                    style={{
                      background: `${exp.accent}15`,
                      border: `1px solid ${exp.accent}30`,
                      color: exp.accent,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 mt-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[0.85rem] text-[var(--lg)] leading-relaxed">
                      <span
                        className="mt-[0.35rem] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exp.accent, opacity: 0.8 }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
