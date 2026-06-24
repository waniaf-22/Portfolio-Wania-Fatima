const awards = [
  {
    icon: "fa-solid fa-bullhorn",
    name: "Best Influencer Award",
    org: "PROCOM 2025",
    year: "2025",
    desc: "Awarded for exceptional digital promotion and driving record engagement for the event via my public media page.",
    accent: "#06b6d4",
  },
  {
    icon: "fa-solid fa-star",
    name: "Star Performer Award",
    org: "DevDay '24 · Olympiad '24 · ACM NUCES '25",
    year: "2024 – 2025",
    desc: "Recognized for creative execution, video editing, scripting, and media coverage that boosted community presence and event visibility.",
    accent: "#8b5cf6",
  },
  {
    icon: "fa-solid fa-crown",
    name: "Apex Award",
    org: "TnC Society",
    year: "2025",
    desc: "Presented for outstanding dedication and management effort in planning and executing TnC's premier events.",
    accent: "#fbbf24",
  },
  {
    icon: "fa-solid fa-clapperboard",
    name: "Special Mention",
    org: "DevDay 2025",
    year: "2025",
    desc: "Honored for media contributions, including high-volume video editing, scriptwriting, and directing on-site shoots.",
    accent: "#ec4899",
  },
  {
    icon: "fa-solid fa-fire",
    name: "Highlight of TLC",
    org: "The Literary Club, FAST NUCES",
    year: "2025",
    desc: "Celebrated for leading end-to-end media coverage, editing major campaigns, and substantially expanding the club's digital footprint and reach.",
    accent: "#10b981",
  },
];

const certifications = [
  {
    name: "Professional Freelancing",
    issuer: "DigiSkills Training Program",
    date: "Sep 2021",
    id: "ZNFJ222PQ",
    url: "https://digiskills.pk/verify",
    driveUrl: "https://drive.google.com/file/d/1Y-S6Pu19OtWmVfv6vI2UCC7mMBNmdaCi/view?usp=drive_link",
    icon: "fa-solid fa-laptop-code",
    accent: "#06b6d4",
  },
  {
    name: "Graphic Design Program",
    issuer: "DigiSkills Training Program",
    date: "Sep 2021",
    id: "FHUMTGTPQ",
    url: "https://digiskills.pk/verify",
    driveUrl: "https://drive.google.com/file/d/1lzQQSMaqXIH2EwBuksj9uoTa-se3i_Mw/view?usp=drive_link",
    icon: "fa-solid fa-palette",
    accent: "#ec4899",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding">
      {/* Page Header */}
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Achievements</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Trophies & Certifications
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Recognition and professional credentials earned across engineering, AI, and creative marketing.
      </p>

      {/* Section: Trophies */}
      <div className="mb-8">
        <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-6 h-1 rounded-full bg-[var(--purple)] inline-block"></span>
          Trophies & Recognition
        </h3>
        <p className="text-[var(--lg)] text-sm max-w-[500px] mb-8">
          Honors received for outstanding execution, community support, and leadership.
        </p>
      </div>

      {/* Awards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {awards.map((a) => (
          <div
            key={a.name}
            className="award-card rounded-2xl p-6 md:p-8 border border-[var(--dark-border)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full relative overflow-hidden group"
            style={{
              background: "var(--dark-card)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${a.accent}44`;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${a.accent}12`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dark-border)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Top gradient glow overlay */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-20 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }}
            />

            {/* Icon & Year badge row */}
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${a.accent}15`,
                  border: `1.5px solid ${a.accent}30`,
                  color: a.accent,
                  boxShadow: `0 0 15px ${a.accent}10`,
                }}
              >
                <i className={a.icon}></i>
              </div>
              <span
                className="text-[0.72rem] px-3 py-1 rounded-full font-medium"
                style={{
                  background: `${a.accent}12`,
                  border: `1px solid ${a.accent}20`,
                  color: a.accent,
                }}
              >
                {a.year}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-white transition-colors duration-200">
              {a.name}
            </h3>
            <div
              className="text-[0.78rem] font-semibold mb-4"
              style={{ color: `${a.accent}dd` }}
            >
              {a.org}
            </div>
            <p className="text-[0.85rem] text-[var(--lg)] leading-relaxed flex-grow">
              {a.desc}
            </p>

            {/* Radial glow background on hover */}
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle, ${a.accent}08, transparent 70%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Section: Certifications */}
      <div className="mb-8">
        <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-6 h-1 rounded-full bg-[var(--cyan)] inline-block"></span>
          Professional Certifications
        </h3>
        <p className="text-[var(--lg)] text-sm max-w-[500px] mb-8">
          Credentials validating specialized skill sets in digital freelancing and creative design.
        </p>
      </div>

      {/* Certifications grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mb-14">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="cert-card rounded-2xl p-6 border border-[var(--dark-border)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden group"
            style={{
              background: "var(--dark-card)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${c.accent}44`;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 30px ${c.accent}08`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dark-border)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Top border indicator */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-30 group-hover:opacity-100"
              style={{ background: c.accent }}
            />

            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{
                  background: `${c.accent}12`,
                  border: `1px solid ${c.accent}20`,
                  color: c.accent,
                }}
              >
                <i className={c.icon}></i>
              </div>
              <span className="text-[0.7rem] text-[var(--gray)] font-medium">{c.date}</span>
            </div>

            <h4 className="text-[0.95rem] font-display font-bold text-white mb-1 leading-snug flex-grow">
              {c.name}
            </h4>
            
            <div className="text-[0.75rem] text-[var(--lg)] font-medium mt-2 mb-4 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--gray)]"></span>
              {c.issuer}
            </div>

            {/* Credential details & Links */}
            <div className="mt-auto pt-3 border-t border-[rgba(255,255,255,0.04)] flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <a
                  href={c.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.72rem] font-medium no-underline hover:underline flex items-center gap-1.5 transition-colors"
                  style={{ color: c.accent }}
                >
                  See Certificate <i className="fa-solid fa-eye text-[0.65rem] opacity-80"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
