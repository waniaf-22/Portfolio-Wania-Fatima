import { useEffect, useRef } from "react";
import profileImg from "@/assets/wania-profile.jpg";

const stats = [
  { value: "9", label: "Repositories" },
  { value: "Python", label: "Top Language" },
  { value: "AI/ML", label: "Focus Area" },
  { value: "Active", label: "Status" },
];

const languages = [
  { name: "Python", pct: 60, gradient: "linear-gradient(90deg, var(--blue), var(--cyan))" },
  { name: "C++", pct: 20, gradient: "linear-gradient(90deg, var(--purple), var(--violet))" },
  { name: "JavaScript", pct: 12, gradient: "linear-gradient(90deg, var(--pink), #f97316)" },
  { name: "Assembly", pct: 8, gradient: "linear-gradient(90deg, #fbbf24, #f97316)" },
];

const GithubSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.innerHTML = "";
    for (let i = 0; i < 364; i++) {
      const cell = document.createElement("div");
      const v = Math.random();
      cell.className = `contrib-cell ${v < 0.6 ? "c0" : v < 0.75 ? "c1" : v < 0.88 ? "c2" : v < 0.96 ? "c3" : "c4"}`;
      grid.appendChild(cell);
    }
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Open Source</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-12">
        GitHub Activity
      </h2>

      <div
        className="rounded-2xl p-6 md:p-10 border border-[var(--dark-border)] relative overflow-hidden"
        style={{ background: "var(--dark-card)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-[rgba(255,255,255,0.1)] flex-shrink-0 bg-[var(--black)]">
            <img src={profileImg} alt="Wania Fatima" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xl font-display font-bold">Wania Fatima</div>
            <div className="text-[0.85rem] text-[var(--purple)]">@waniaf-22</div>
          </div>
          <a
            href="https://github.com/waniaf-22"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-5 py-2 rounded-lg text-[var(--white)] text-[0.82rem] no-underline transition-colors duration-200 hover:bg-[rgba(255,255,255,0.08)]"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--dark-border)" }}
          >
            View Profile ↗
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--dark-border)" }}
            >
              <div
                className="text-2xl font-bold"
                style={{ background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {s.value}
              </div>
              <div className="text-[0.72rem] text-[var(--gray)] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="mb-6">
          <div className="text-[0.8rem] text-[var(--gray)] mb-3 tracking-wider">CONTRIBUTION ACTIVITY</div>
          <div ref={gridRef} className="contrib-grid" />
        </div>

        {/* Language bars */}
        <div>
          <div className="text-[0.8rem] text-[var(--gray)] mb-3 tracking-wider">LANGUAGES</div>
          <div className="flex flex-col gap-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="text-[0.82rem] w-20 text-[var(--lg)]">{lang.name}</span>
                <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${lang.pct}%`, background: lang.gradient, transition: "width 1.5s ease-out" }}
                  />
                </div>
                <span className="text-[0.75rem] text-[var(--gray)] w-9 text-right">{lang.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
