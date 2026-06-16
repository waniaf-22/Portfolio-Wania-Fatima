const creativeItems = [
  { icon: "fa-solid fa-bullhorn", name: "FoodPapa", role: "Social Media Manager", desc: "Led social strategy, content calendar, and Meta ad campaigns for a food delivery brand. Grew engagement and built a consistent visual identity.", tags: ["Meta Ads", "Content", "Analytics"] },
  { icon: "fa-solid fa-bolt", name: "PROCOM", role: "Director of Media & Marketing", desc: "Directed the full marketing operation for Pakistan's largest CS competition. Managed a team, designed campaign materials, and drove record reach.", tags: ["Leadership", "Branding", "Event"] },
  { icon: "fa-solid fa-laptop-code", name: "ACM NUCES", role: "Media Manager", desc: "Managed social presence for the ACM student chapter. Produced design assets, event coverage, and grew community engagement significantly.", tags: ["Design", "Photography", "Community"] },
  { icon: "fa-solid fa-rocket", name: "Developers Day", role: "Media & Content Lead", desc: "Led digital presence for the flagship tech event. Managed video production, motion graphics, and live social coverage during the event.", tags: ["Video", "Motion", "Live Coverage"] },
  { icon: "fa-solid fa-lightbulb", name: "Think & Create", role: "Media Head", desc: "Headed the media division of a creative society. Directed photoshoots, mentored a team of designers, and defined the visual voice of the society.", tags: ["Direction", "Team Lead", "Mentorship"] },
  { icon: "fa-solid fa-book", name: "Literary Club", role: "Media & Creative", desc: "Produced visual content for literary events — cover art, event posters, and social assets that matched the intellectual aesthetic of the society.", tags: ["Visual Design", "Illustration", "Copy"] },
];

const CreativeSection = () => {
  return (
    <section id="creative" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Creative Direction</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Campaigns That Moved People
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Technology without aesthetics is invisible. These campaigns prove that strategy, story, and design are a single discipline.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {creativeItems.map((item) => (
          <div
            key={item.name}
            className="creative-card relative rounded-xl p-6 border border-[var(--dark-border)] overflow-hidden transition-all duration-300 hover:border-[rgba(236,72,153,0.5)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] group"
            style={{ background: "var(--dark-card)" }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "var(--grad3)" }} />
            <div className="text-2xl mb-4 text-[#f472b6]"><i className={item.icon}></i></div>
            <h3 className="text-[0.95rem] font-display font-semibold mb-1">{item.name}</h3>
            <div className="text-[0.78rem] text-[var(--purple)] mb-2">{item.role}</div>
            <p className="text-[0.8rem] text-[var(--gray)] leading-relaxed mb-4">{item.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] px-2 py-0.5 rounded text-[#f472b6]"
                  style={{ background: "rgba(236,72,153,0.07)", border: "1px solid rgba(236,72,153,0.15)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeSection;
