import { useState, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  org: string;
  accent: string;
  accentRaw: string; // raw hex for computed styles
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Wania brought an extraordinary level of strategic thinking to PROCOM's media operations. She didn't just manage — she transformed our entire digital presence, driving record engagement across 20+ universities. Her ability to lead cross-functional teams while maintaining creative excellence is rare at any level.",
    name: "PROCOM Executive Board",
    title: "Student Tech Competition",
    org: "FAST NUCES",
    accent: "var(--purple)",
    accentRaw: "#8b5cf6",
    initials: "PB",
  },
  {
    quote:
      "Working with Wania at FoodPapa was a game-changer for our brand. She developed content strategies that measurably grew our audience and optimized our ad spend with a data-driven approach. Her unique blend of technical understanding and creative instinct sets her apart from any social media professional I've worked with.",
    name: "FoodPapa Leadership",
    title: "Food-Tech Startup",
    org: "FoodPapa",
    accent: "var(--cyan)",
    accentRaw: "#06b6d4",
    initials: "FL",
  },
  {
    quote:
      "As Media Manager for ACM, Wania led five creative sub-teams with remarkable composure and vision. She streamlined our entire workflow, elevated the quality of every deliverable, and earned the Star Performer award — a distinction that speaks for itself. She's a natural leader who inspires everyone around her.",
    name: "ACM Chapter Faculty",
    title: "Student Chapter",
    org: "ACM FAST NUCES",
    accent: "var(--pink)",
    accentRaw: "#ec4899",
    initials: "AF",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // start centered on middle card

  const goTo = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= testimonials.length) return prev;
        return next;
      });
    },
    []
  );

  return (
    <section id="testimonials" className="section-padding" style={{ overflow: "hidden" }}>
      {/* Section header */}
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">
        Social Proof
      </div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        What People Say
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-14">
        Trusted by teams, recognized by peers — here's what collaborators and
        mentors have to say.
      </p>

      {/* ── Carousel viewport ── */}
      <div className="relative">
        {/* Fade masks on left & right edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20"
          style={{
            width: "8%",
            background:
              "linear-gradient(to right, var(--black), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20"
          style={{
            width: "8%",
            background:
              "linear-gradient(to left, var(--black), transparent)",
          }}
        />

        {/* Cards track */}
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            transform: `translateX(calc(50% - ${activeIndex * 540 + 270}px))`,
          }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            const distance = Math.abs(i - activeIndex);

            return (
              <div
                key={i}
                className="flex-shrink-0 px-5"
                style={{ width: 540 }}
              >
                <div
                  className="relative rounded-2xl p-8 border overflow-hidden cursor-pointer transition-all duration-700"
                  style={{
                    background: "var(--dark-card)",
                    borderColor: isActive
                      ? `${t.accentRaw}66`
                      : "var(--dark-border)",
                    transform: isActive
                      ? "scale(1)"
                      : `scale(${1 - distance * 0.06})`,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? "none" : `blur(${distance * 1.5}px)`,
                    boxShadow: isActive
                      ? `0 16px 60px ${t.accentRaw}20, 0 0 0 1px ${t.accentRaw}15`
                      : "none",
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(to right, transparent, ${t.accentRaw}, transparent)`,
                      opacity: isActive ? 1 : 0.2,
                    }}
                  />

                  {/* Decorative quote mark */}
                  <div
                    className="absolute top-4 right-6 text-[5rem] font-display font-black leading-none select-none pointer-events-none transition-all duration-700"
                    style={{
                      color: t.accent,
                      opacity: isActive ? 0.15 : 0.04,
                      transform: isActive
                        ? "scale(1.1) rotate(-3deg)"
                        : "scale(1) rotate(0deg)",
                    }}
                  >
                    "
                  </div>

                  {/* Quote text */}
                  <p className="text-[0.9rem] text-[var(--lg)] leading-[1.75] mb-8 relative z-10 italic">
                    "{t.quote}"
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-[0.75rem] font-bold tracking-wider flex-shrink-0 transition-all duration-500"
                      style={{
                        background: `${t.accentRaw}18`,
                        border: `1.5px solid ${t.accentRaw}50`,
                        color: t.accent,
                        boxShadow: isActive
                          ? `0 0 20px ${t.accentRaw}25`
                          : "none",
                      }}
                    >
                      {t.initials}
                    </div>

                    <div className="min-w-0">
                      <div className="text-[0.88rem] font-display font-semibold text-white truncate">
                        {t.name}
                      </div>
                      <div className="text-[0.75rem] text-[var(--lg)] truncate">
                        {t.title}
                        <span
                          className="mx-1.5 opacity-30"
                          style={{ color: t.accent }}
                        >
                          ·
                        </span>
                        <span
                          className="text-[0.72rem] font-medium"
                          style={{ color: t.accent, opacity: 0.8 }}
                        >
                          {t.org}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner glow */}
                  <div
                    className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, ${t.accentRaw}15, transparent 70%)`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Navigation: arrows + dots ── */}
      <div className="flex items-center justify-center mt-12 gap-8">
        {/* Left arrow */}
        <button
          onClick={() => goTo(-1)}
          disabled={activeIndex === 0}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            borderColor:
              activeIndex === 0
                ? "var(--dark-border)"
                : "rgba(139,92,246,0.4)",
            color: activeIndex === 0 ? "var(--gray)" : "var(--white)",
            opacity: activeIndex === 0 ? 0.35 : 1,
            cursor: activeIndex === 0 ? "not-allowed" : "pointer",
            background: "var(--dark-card)",
          }}
          onMouseEnter={(e) => {
            if (activeIndex !== 0)
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(139,92,246,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--dark-card)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                background:
                  i === activeIndex ? t.accentRaw : "rgba(255,255,255,0.15)",
                boxShadow:
                  i === activeIndex ? `0 0 12px ${t.accentRaw}50` : "none",
                cursor: "pointer",
                border: "none",
              }}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => goTo(1)}
          disabled={activeIndex === testimonials.length - 1}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            borderColor:
              activeIndex === testimonials.length - 1
                ? "var(--dark-border)"
                : "rgba(139,92,246,0.4)",
            color:
              activeIndex === testimonials.length - 1
                ? "var(--gray)"
                : "var(--white)",
            opacity: activeIndex === testimonials.length - 1 ? 0.35 : 1,
            cursor:
              activeIndex === testimonials.length - 1
                ? "not-allowed"
                : "pointer",
            background: "var(--dark-card)",
          }}
          onMouseEnter={(e) => {
            if (activeIndex !== testimonials.length - 1)
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(139,92,246,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--dark-card)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
