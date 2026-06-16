const metrics = [
  { icon: "fa-solid fa-chart-line", value: "10M+", label: "Overall Reach" },
  { icon: "fa-solid fa-fire", value: "3M+", label: "Single Reel Reach" },
  { icon: "fa-solid fa-users", value: "12K+", label: "Max Followers Added" },
];

const MetricsSection = () => {
  return (
    <section id="impact" className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Impact</div>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-12">
          Campaign Milestones
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-8 text-center border border-[var(--dark-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:border-[rgba(6,182,212,0.5)] group"
              style={{ background: "var(--dark-card)" }}
            >
              <i className={`${m.icon} text-3xl text-[var(--cyan)] mb-5 block transition-transform duration-300 group-hover:scale-110`} />
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-2 text-[var(--white)]">{m.value}</h3>
              <p className="text-[var(--gray)] text-[0.75rem] uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
