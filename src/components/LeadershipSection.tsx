const awards = [
  { icon: "fa-solid fa-medal", name: "Best Influencer Award", org: "FAST NUCES" },
  { icon: "fa-solid fa-star", name: "Star Performer", org: "Academic Excellence" },
  { icon: "fa-solid fa-trophy", name: "APEX Award", org: "Leadership Recognition" },
  { icon: "fa-solid fa-wand-magic-sparkles", name: "Special Mention", org: "Creative Excellence" },
  { icon: "fa-solid fa-award", name: "Bronze Medal", org: "Olympiad / Runner-Up" },
];

const leadershipRoles = [
  { num: "01", title: "Director — Media & Marketing", org: "PROCOM, FAST NUCES", desc: "Directed all marketing ops for Pakistan's largest CS competition. Led a multi-person team, managed brand identity, and oversaw campaign execution end-to-end." },
  { num: "02", title: "Media Manager", org: "ACM NUCES Chapter", desc: "Managed social presence, produced design assets, and built the chapter's digital community through consistent storytelling." },
  { num: "03", title: "Media Head", org: "Think & Create Society", desc: "Led the creative media division — mentored designers, directed visual output, and defined the aesthetic voice of the society." },
  { num: "04", title: "Content Lead", org: "Developers Day & TLC", desc: "Produced video coverage, motion graphics, and live digital content for major campus tech and cultural events." },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Achievements</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Trophies & Roles
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Recognition earned by showing up, taking ownership, and delivering.
      </p>

      {/* Awards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-14">
        {awards.map((a) => (
          <div
            key={a.name}
            className="award-card rounded-2xl p-6 text-center border border-[var(--dark-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(251,191,36,0.5)] hover:shadow-[0_10px_30px_rgba(251,191,36,0.1)] group"
            style={{ background: "var(--dark-card)" }}
          >
            <div className="text-3xl mb-4 text-[#fbbf24] transition-transform duration-300 group-hover:scale-110"><i className={a.icon}></i></div>
            <div className="text-[0.88rem] font-display font-semibold mb-1">{a.name}</div>
            <div className="text-[0.75rem] text-[var(--purple)]">{a.org}</div>
          </div>
        ))}
      </div>

      {/* Leadership roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipRoles.map((role) => (
          <div
            key={role.num}
            className="flex gap-5 items-start rounded-2xl p-8 border border-[var(--dark-border)] transition-all duration-300 hover:border-[rgba(139,92,246,0.5)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] hover:-translate-y-1"
            style={{ background: "var(--dark-card)" }}
          >
            <div
              className="text-4xl font-bold leading-none min-w-[3rem]"
              style={{ background: "var(--grad1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {role.num}
            </div>
            <div>
              <div className="text-[1.05rem] font-display font-semibold mb-1">{role.title}</div>
              <div className="text-[0.8rem] text-[var(--purple)] mb-3">{role.org}</div>
              <div className="text-[0.85rem] text-[var(--gray)] leading-relaxed">{role.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
