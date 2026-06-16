const experiences = [
  {
    company: "FoodPapa",
    period: "Professional",
    title: "Social Media Manager",
    desc: "Owned social strategy, content production, and Meta advertising. Built audience segments, A/B tested creative, and delivered consistent growth in reach and engagement for a food delivery brand.",
  },
  {
    company: "ConnectSaad",
    period: "Contract",
    title: "Brand & Marketing Consultant",
    desc: "Developed brand guidelines, social presence, and go-to-market strategy. Delivered end-to-end creative direction for digital channels.",
  },
  {
    company: "PROCOM",
    period: "2024 – 2025",
    title: "Director of Media & Marketing",
    desc: "Led marketing for Pakistan's largest student-run CS competition. Managed teams, designed systems for campaign delivery, and achieved record-level digital reach for the event.",
  },
  {
    company: "ACM NUCES",
    period: "2023 – 2024",
    title: "Media Manager",
    desc: "Managed all social channels, event photography and videography, and community-building initiatives for the ACM student chapter at FAST NUCES.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Journey</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-12">
        Experience Timeline
      </h2>

      <div className="relative pl-8">
        {/* Gradient line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, var(--purple), transparent)" }}
        />

        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 pl-4">
            {/* Dot */}
            <div
              className="absolute -left-[2.05rem] top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--purple)", boxShadow: "0 0 8px var(--purple)" }}
            />

            <div className="flex items-center gap-4 mb-2">
              <span
                className="text-[0.82rem] font-semibold px-3 py-1 rounded-md text-[#a78bfa]"
                style={{ background: "rgba(139,92,246,0.1)" }}
              >
                {exp.company}
              </span>
              <span className="text-[0.75rem] text-[var(--gray)]">{exp.period}</span>
            </div>
            <h3 className="text-[1.05rem] font-display font-semibold mb-2">{exp.title}</h3>
            <p className="text-[0.88rem] text-[var(--lg)] leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
