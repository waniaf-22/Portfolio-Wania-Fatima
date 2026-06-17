const creativeItems = [
  { 
    icon: "fa-solid fa-bullhorn", 
    name: "FoodPapa", 
    role: "Social Media Manager", 
    desc: "Led social strategy, content calendar, and Meta ad campaigns for a food delivery brand. Grew engagement and built a consistent visual identity.", 
    tags: ["Meta Ads", "Content", "Analytics"],
    links: [
      { name: "Insta", url: "https://www.instagram.com/foodpapa.pk/", icon: "fa-brands fa-instagram" },
      { name: "FB", url: "https://www.facebook.com/Foodpapa.pk", icon: "fa-brands fa-facebook" },
      { name: "X", url: "https://x.com/home", icon: "fa-brands fa-x-twitter" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/foodpapa-pakistan/", icon: "fa-brands fa-linkedin" },
      { name: "YouTube", url: "https://www.youtube.com/@FoodPapapk", icon: "fa-brands fa-youtube" }
    ]
  },
  { 
    icon: "fa-solid fa-bolt", 
    name: "PROCOM", 
    role: "Director Media & Promotions", 
    desc: "Directed the full marketing operation for Pakistan's largest CS competition. Managed a team, designed campaign materials, and drove record reach.", 
    tags: ["Leadership", "Branding", "Event"],
    links: [
      { name: "FB", url: "https://www.facebook.com/procom.fast/", icon: "fa-brands fa-facebook" },
      { name: "Insta", url: "https://www.instagram.com/procom_fast/", icon: "fa-brands fa-instagram" },
      { name: "Insta 2", url: "https://www.instagram.com/procomdaily/", icon: "fa-brands fa-instagram" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/procom-fast/", icon: "fa-brands fa-linkedin" }
    ]
  },
  { 
    icon: "fa-solid fa-laptop-code", 
    name: "ACM NUCES", 
    role: "Media Manager", 
    desc: "Managed social presence for the ACM student chapter. Produced design assets, event coverage, and grew community engagement significantly.", 
    tags: ["Design", "Photography", "Community"],
    links: [
      { name: "Insta", url: "https://www.instagram.com/acmnuceskhi/", icon: "fa-brands fa-instagram" },
      { name: "FB", url: "https://www.facebook.com/acmnuceskhi", icon: "fa-brands fa-facebook" }
    ]
  },
  { 
    icon: "fa-solid fa-rocket", 
    name: "Developers Day", 
    role: "Media & Content Lead", 
    desc: "Led digital presence for the flagship tech event. Managed video production, motion graphics, and live social coverage during the event.", 
    tags: ["Video", "Motion", "Live Coverage"],
    links: [
      { name: "Insta", url: "https://www.instagram.com/developersday/", icon: "fa-brands fa-instagram" },
      { name: "FB", url: "https://www.facebook.com/DevelopersDay", icon: "fa-brands fa-facebook" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/developersday/", icon: "fa-brands fa-linkedin" }
    ]
  }
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
            {item.links && (
              <div className="flex flex-wrap gap-3 mb-4">
                {item.links.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--gray)] hover:text-[#f472b6] transition-colors text-[1.1rem]">
                    <i className={link.icon} title={link.name}></i>
                  </a>
                ))}
              </div>
            )}
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
