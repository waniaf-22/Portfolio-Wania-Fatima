import { useEffect, useRef } from "react";

const socialJourney = [
  { year: "Strategy & Growth", title: "Social Media Management", desc: "Driving brand awareness, planning Meta Ads, and analyzing audience insights to maximize ROI.", active: true },
  { year: "Leadership", title: "Media Direction", desc: "Leading creative teams, managing content pipelines, and directing digital presence for large-scale tech events." },
  { year: "The Foundation", title: "Creative Storytelling", desc: "Started with design, video editing, and photography. Building the core skills of visual communication." },
];

const codingJourney = [
  { year: "AI & ML", title: "Intelligent Systems", desc: "Building LLM-powered applications, dynamic routing systems, and exploring PyTorch & collaborative filtering.", active: true },
  { year: "Full-Stack", title: "Web Engineering", desc: "Architecting reliable, database-backed web platforms using React, Next.js, REST APIs, and modern tooling." },
  { year: "The Core", title: "Computer Science", desc: "Deep diving into algorithms, data structures, and low-level programming at FAST NUCES." },
];

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
        Two Journeys, One Identity
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Most people pick a lane. I refused to. Here is how my dual path unfolded, side-by-side.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side: Social Media Journey */}
        <div className="relative rounded-2xl p-8 border border-[var(--dark-border)] overflow-hidden reveal-item group transition-all duration-300 hover:border-[rgba(236,72,153,0.4)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] flex flex-col h-full" style={{ background: "var(--dark-card)" }}>
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #ec4899, #8b5cf6)" }} />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-[#ec4899]" style={{ background: "rgba(236,72,153,0.1)" }}>
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <h3 className="text-2xl font-display font-bold">Media Strategy</h3>
          </div>
          
          <div className="relative pl-8 mb-10 flex-grow">
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #ec4899, rgba(236,72,153,0.1))" }}
            />
            {socialJourney.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div
                  className={`absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#ec4899] ${
                    item.active ? "bg-[#ec4899] shadow-[0_0_12px_#ec4899]" : "bg-[var(--black)]"
                  }`}
                />
                <div className="text-[0.72rem] tracking-[0.15em] text-[#f472b6] mb-1">{item.year}</div>
                <div className="text-base font-display font-semibold mb-1">{item.title}</div>
                <div className="text-[0.88rem] text-[var(--lg)] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-4">
            <a 
              href="https://drive.google.com/file/d/1D4qV5cyxbEt3fi-V-ywjcWauZrxF0Ewo/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 rounded-lg text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-1" 
              style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.3)", color: "#f472b6" }}
            >
              <i className="fa-solid fa-download"></i>
              Download Media Resume
            </a>
          </div>
        </div>

        {/* Right Side: Coding Journey */}
        <div className="relative rounded-2xl p-8 border border-[var(--dark-border)] overflow-hidden reveal-item group transition-all duration-300 hover:border-[rgba(6,182,212,0.4)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] flex flex-col h-full" style={{ background: "var(--dark-card)" }}>
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #06b6d4, #3b82f6)" }} />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-[#06b6d4]" style={{ background: "rgba(6,182,212,0.1)" }}>
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="text-2xl font-display font-bold">Engineering & AI</h3>
          </div>
          
          <div className="relative pl-8 mb-10 flex-grow">
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #06b6d4, rgba(6,182,212,0.1))" }}
            />
            {codingJourney.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div
                  className={`absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#06b6d4] ${
                    item.active ? "bg-[#06b6d4] shadow-[0_0_12px_#06b6d4]" : "bg-[var(--black)]"
                  }`}
                />
                <div className="text-[0.72rem] tracking-[0.15em] text-[#22d3ee] mb-1">{item.year}</div>
                <div className="text-base font-display font-semibold mb-1">{item.title}</div>
                <div className="text-[0.88rem] text-[var(--lg)] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-4">
            <a 
              href="https://drive.google.com/file/d/1EDTXrWOniJ-aob4JU4o_SmXcXg_u6ufz/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 rounded-lg text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-1" 
              style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#22d3ee" }}
            >
              <i className="fa-solid fa-download"></i>
              Download Tech Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
