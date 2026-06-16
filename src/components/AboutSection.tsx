import { useEffect, useRef } from "react";

const timelineItems = [
  { year: "Early Days", title: "The Creative Spark", desc: "Started with design, photography, and storytelling. Discovered that ideas are only powerful when they're communicated beautifully." },
  { year: "Media Era", title: "Leading Campaigns & Communities", desc: "Became Media Head of Think & Create, managed social strategy for ACM NUCES, and directed Pakistan's largest CS event — PROCOM." },
  { year: "The Pivot", title: "Discovering Computer Science", desc: "Enrolled at FAST NUCES and found the other half of my identity — algorithms, data structures, AI. Logic became my second creative language." },
  { year: "Builder Phase", title: "Building AI Products", desc: "Won a hackathon with Waasta AI — an LLM-powered emergency routing system. Built recommendation systems, booking platforms, and more." },
  { year: "Right Now", title: "AI × Creativity — One Identity", desc: "I design systems and campaigns. I write code and copy. I'm a technologist and a creative director. Both, fully, simultaneously.", active: true },
];

const identityTags = ["LLM Engineering", "Brand Strategy", "Social Media", "Machine Learning", "Creative Direction", "Full Stack"];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll(".reveal-item").forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(24px)";
        (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">The Story</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4 glow-text">
        Where Two Worlds Merge
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        I don't live in one domain. I inhabit both — and that's exactly the point.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Timeline */}
        <div className="relative pl-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--cyan), var(--purple), var(--pink))" }}
          />
          {timelineItems.map((item, i) => (
            <div key={i} className="relative mb-10 reveal-item">
              <div
                className={`absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[var(--cyan)]  ${
                  item.active ? "bg-[var(--cyan)] shadow-[0_0_12px_var(--cyan)]" : "bg-[var(--black)]"
                }`}
              />
              <div className="text-[0.72rem] tracking-[0.15em] text-[var(--purple)] mb-1">{item.year}</div>
              <div className="text-base font-display font-semibold mb-1">{item.title}</div>
              <div className="text-[0.88rem] text-[var(--lg)] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div>
          {/* Identity card */}
          <div
            className="relative rounded-2xl p-8 border border-[var(--dark-border)] overflow-hidden reveal-item"
            style={{ background: "var(--dark-card)" }}
          >
            <div
              className="absolute -top-1/2 -right-[30%] w-[200px] h-[200px]"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }}
            />
            <h3 className="text-xl font-display font-bold mb-4">The Intersection</h3>
            <p className="text-[var(--lg)] text-[0.92rem] leading-[1.8]">
              Most people pick a lane. I refused to. My Computer Science training makes me a better strategist — I think in systems. My creative background makes me a better engineer — I think in experiences.
              <br /><br />
              The result is a profile that's rare: someone who can architect an LLM pipeline in the morning and write a brand strategy in the afternoon. Who understands both the model and the market.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-[0.78rem] text-[#a78bfa]"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Worlds diagram */}
          <div className="flex items-center justify-center gap-0 mt-10 reveal-item">
            <div className="text-center">
              <div
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center gap-1 text-[0.75rem] font-medium shadow-[0_0_30px_rgba(236,72,153,0.1)] transition-transform duration-300 hover:scale-105"
                style={{
                  background: "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.2), rgba(139,92,246,0.1))",
                  border: "1px solid rgba(236,72,153,0.2)",
                }}
              >
                <i className="fa-solid fa-palette text-2xl text-[#f472b6]"></i>
              </div>
              <div className="text-[0.65rem] text-[rgba(255,255,255,0.5)] leading-relaxed mt-4">Design<br />Branding<br />Marketing<br />Video<br />Content</div>
              <div className="text-[0.65rem] text-[#f472b6] mt-2 font-semibold tracking-wider uppercase">Creative</div>
            </div>

            <div
              className="w-20 h-36 -mx-5 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              style={{ background: "linear-gradient(90deg, rgba(236,72,153,0.15), rgba(139,92,246,0.25), rgba(6,182,212,0.15))" }}
            >
              <span className="text-[0.65rem] text-white text-center font-bold tracking-widest leading-relaxed">AI<br />+<br /><i className="fa-solid fa-plus text-xs mt-1"></i></span>
            </div>

            <div className="text-center">
              <div
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center gap-1 text-[0.75rem] font-medium shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-transform duration-300 hover:scale-105"
                style={{
                  background: "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.2), rgba(59,130,246,0.1))",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                <i className="fa-solid fa-microchip text-2xl text-[var(--cyan)]"></i>
              </div>
              <div className="text-[0.65rem] text-[rgba(255,255,255,0.5)] leading-relaxed mt-4">ML<br />LLMs<br />Python<br />APIs<br />Research</div>
              <div className="text-[0.65rem] text-[var(--cyan)] mt-2 font-semibold tracking-wider uppercase">Technology</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
