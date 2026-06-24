const courses = [
  "Data Structures", "Algorithms", "AI / ML", "OOP",
  "Computer Architecture", "Database Systems", "Operating Systems",
  "Software Engineering", "Web Dev", "Assembly",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Education</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-12">
        Academic Foundation
      </h2>

      <div
        className="rounded-2xl p-6 md:p-10 border border-[var(--dark-border)] grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-10 items-stretch relative overflow-hidden group"
        style={{ background: "var(--dark-card)" }}
      >
        {/* Decorative corner glow */}
        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, var(--purple) 0%, transparent 70%)" }}
        />

        {/* Left Column: University Details & GPA */}
        <div className="flex flex-col justify-between relative z-10">
          <div>
            <span className="text-[0.7rem] px-3 py-1 rounded-full font-medium"
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "var(--purple)",
              }}
            >
              Aug 2023 – Jun 2027 (Expected)
            </span>

            <h3 className="text-2xl font-display font-bold text-white mt-5 mb-2 leading-tight">
              Bachelor of Science <br/>
              <span style={{ background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Computer Science
              </span>
            </h3>
            
            <div className="text-[0.95rem] font-semibold text-white mb-1">FAST NUCES, Karachi</div>
            <div className="text-[0.82rem] text-[var(--gray)] leading-relaxed mb-6">
              National University of Computer and Emerging Sciences
            </div>
          </div>

          {/* GPA Card */}
          <div 
            className="rounded-xl p-5 border border-[rgba(255,255,255,0.03)] flex items-center justify-between gap-4 mt-auto"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <div className="text-[0.72rem] text-[var(--gray)] uppercase tracking-wider font-mono">Academic Standing</div>
              <div className="text-sm font-semibold text-[var(--lg)] mt-1">Dean's List / Honours</div>
            </div>
            <div className="text-right">
              <div
                className="text-4xl font-bold leading-none font-display"
                style={{ background: "var(--grad1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 10px rgba(139,92,246,0.3))" }}
              >
                3.31
              </div>
              <div className="text-[0.7rem] text-[var(--gray)] mt-1">Current CGPA</div>
            </div>
          </div>
        </div>

        {/* Right Column: Coursework Grid */}
        <div className="rounded-xl p-6 border border-[rgba(255,255,255,0.03)] relative z-10 flex flex-col justify-between"
          style={{ background: "rgba(5,5,5,0.2)" }}
        >
          <div>
            <div className="text-[0.75rem] uppercase tracking-wider text-[var(--gray)] mb-4 font-semibold font-display">
              Core Coursework & Specialized Learning
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {courses.map((c) => (
                <div
                  key={c}
                  className="px-4 py-3 rounded-lg text-xs text-[var(--lg)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(139,92,246,0.3)] hover:text-white transition-all duration-300 hover:translate-x-1 cursor-default flex items-center"
                  style={{ background: "rgba(255,255,255,0.01)" }}
                >
                  <i className="fa-solid fa-square-check text-[var(--purple)] mr-2.5 opacity-80"></i>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
