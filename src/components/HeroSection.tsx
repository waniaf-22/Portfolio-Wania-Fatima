import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/wania-profile.jpg";

const phrases = [
  "Computer Science Student",
  "AI Builder",
  "Creative Technologist",
  "Media Strategist",
];

const marqueeChips = [
  { icon: "✦", label: "AI Builder" },
  { icon: "◎", label: "LLM Engineer" },
  { icon: "⬡", label: "Full Stack" },
  { icon: "⚡", label: "Prompt Expert" },
  { icon: "◈", label: "ML Research" },
  { icon: "⊹", label: "Brand Strategy" },
  { icon: "△", label: "Leadership" },
  { icon: "◌", label: "Creative Tech" },
  { icon: "✦", label: "10M+ Reach" },
  { icon: "◎", label: "Media Director" },
  { icon: "⬡", label: "PyTorch" },
  { icon: "⚡", label: "React / Next.js" },
];

const HeroSection = () => {
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);

  // ─── Typing animation ───
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false;
    let timeout: number;

    const type = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        setTypedText(phrase.slice(0, ci + 1));
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          timeout = window.setTimeout(type, 2000);
        } else {
          timeout = window.setTimeout(type, 80);
        }
      } else {
        setTypedText(phrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          timeout = window.setTimeout(type, 300);
        } else {
          timeout = window.setTimeout(type, 40);
        }
      }
    };

    timeout = window.setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  // ─── Particle canvas ───
  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number, animId: number;
    const mouse = { x: 0, y: 0 };

    class Particle {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.3;
        this.alpha = Math.random() * 0.6 + 0.1;
        const rnd = Math.random();
        this.color = rnd < 0.33 ? "#06b6d4" : rnd < 0.66 ? "#8b5cf6" : "#ec4899";
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.x += (dx / dist) * 0.5;
          this.y += (dy / dist) * 0.5;
        }
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = this.alpha;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    const particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();
    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onResize = () => resize();

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb2" />
        <div className="aurora-orb orb3" />
      </div>

      {/* Particle canvas */}
      <canvas ref={heroCanvasRef} className="absolute inset-0 z-0" />

      {/* Main content - Centered layout */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] w-full px-6 md:px-12">

        {/* Profile Picture with animated glow */}
        <div className="mb-6 fade-in d1 relative group">
          <div className="absolute inset-0 rounded-full blur-2xl bg-[var(--purple)] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)] shadow-[0_0_50px_rgba(139,92,246,0.3)] relative z-10 bg-[var(--black)]">
            <img src={profileImg} alt="Wania Fatima" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>

        {/* Eyebrow */}
        <p className="text-[0.75rem] md:text-[0.85rem] tracking-[0.4em] uppercase text-[var(--cyan)] mb-4 opacity-90 fade-in d2">
          Portfolio

        </p>

        {/* Name */}
        <div className="fade-in d3 mb-6">
          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-display font-bold leading-[0.95] tracking-tighter">
            <span className="text-[var(--white)] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Wania </span>
            <span
              style={{
                background: "var(--grad1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 40px rgba(139,92,246,0.4))"
              }}
            >
              Fatima
            </span>
          </h1>
        </div>

        {/* Typing text */}
        <div className="h-[2.5rem] fade-in d4 mb-10">
          <p className="text-[1.1rem] md:text-[1.4rem] font-medium text-[var(--lg)] tracking-wide">
            {typedText}
            <span className="typing-cursor" />
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-5 fade-in d5 relative">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full text-white text-[0.95rem] font-medium no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,92,246,0.4)]"
            style={{ background: "var(--grad1)" }}
          >
            Explore Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-[var(--white)] text-[0.95rem] font-medium border border-[var(--dark-border)] no-underline transition-all duration-300 hover:border-[var(--cyan)] hover:bg-[rgba(6,182,212,0.05)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] bg-[rgba(5,5,5,0.4)] backdrop-blur-md"
          >
            Let's Talk
          </a>

          {/* Resume Dropdown */}
          <div className="relative">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="px-8 py-3.5 rounded-full text-[var(--white)] text-[0.95rem] font-medium border border-[var(--dark-border)] transition-all duration-300 hover:border-[var(--purple)] hover:bg-[rgba(139,92,246,0.05)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] bg-[rgba(5,5,5,0.4)] backdrop-blur-md flex items-center gap-2 cursor-pointer"
            >
              Resume <i className={`fa-solid fa-chevron-down text-[0.75rem] transition-transform duration-300 ${resumeOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {resumeOpen && (
              <>
                {/* Click outside backdrop */}
                <div className="fixed inset-0 z-40" onClick={() => setResumeOpen(false)} />

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-2xl border border-[var(--dark-border)] bg-[rgba(10,10,20,0.95)] backdrop-blur-xl p-2 shadow-2xl z-50">
                  <a
                    href="https://drive.google.com/file/d/1EDTXrWOniJ-aob4JU4o_SmXcXg_u6ufz/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-[0.85rem] text-[var(--lg)] hover:text-white hover:bg-[rgba(139,92,246,0.15)] rounded-xl no-underline transition-colors duration-200"
                  >
                    <i className="fa-solid fa-code text-[var(--cyan)] text-base"></i> Tech Resume
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1D4qV5cyxbEt3fi-V-ywjcWauZrxF0Ewo/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-[0.85rem] text-[var(--lg)] hover:text-white hover:bg-[rgba(236,72,153,0.15)] rounded-xl no-underline transition-colors duration-200"
                  >
                    <i className="fa-solid fa-bullhorn text-[var(--pink)] text-base"></i> Media Resume
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Pill-chip Marquee at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden"
        style={{
          background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(8,8,18,0.75) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "10px 0",
        }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(5,5,5,0.95), transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(5,5,5,0.95), transparent)" }} />

        <div className="marquee-track flex items-center gap-3" style={{ width: "max-content" }}>
          {[...marqueeChips, ...marqueeChips, ...marqueeChips].map((chip, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem" }}>{chip.icon}</span>
              <span style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.75rem",
                fontWeight: 500,
                fontFamily: "var(--font-display)",
                letterSpacing: "0.04em",
              }}>
                {chip.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
