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
        className="rounded-2xl p-6 md:p-8 border border-[var(--dark-border)] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start"
        style={{ background: "var(--dark-card)" }}
      >
        <div>
          <h3 className="text-xl font-display font-bold mb-1">Bachelor of Science — Computer Science</h3>
          <div className="text-[0.9rem] text-[var(--purple)] mb-3">FAST NUCES, Karachi · In Progress</div>
          <div className="text-[0.82rem] text-[var(--gray)] mb-4">National University of Computer and Emerging Sciences</div>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span
                key={c}
                className="text-[0.72rem] px-3 py-1 rounded-md text-[var(--lg)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--dark-border)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="text-right">
          <div
            className="text-5xl font-bold leading-none"
            style={{ background: "var(--grad1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            3.4+
          </div>
          <div className="text-[0.72rem] text-[var(--gray)] mt-1">Current GPA</div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
