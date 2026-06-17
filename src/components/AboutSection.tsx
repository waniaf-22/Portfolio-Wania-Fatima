import { useEffect, useRef } from "react";

const timelineItems = [
  { year: "Early Days", title: "The Creative Spark", desc: "Started with design, photography, and storytelling. Discovered that ideas are only powerful when they're communicated beautifully." },
  { year: "The Pivot", title: "Discovering Computer Science", desc: "Enrolled at FAST NUCES and found the other half of my identity — algorithms, data structures, AI. Logic became my second creative language." },
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


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
