import { useEffect, useRef, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  // ── Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 60;
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 1 + Math.random() * 2,
      hue: 260 + Math.random() * 60, // purple → pink range
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, 0.6)`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.strokeStyle = `hsla(${pts[i].hue}, 70%, 60%, ${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Fast progress counter (0 → 100) — total ~1.8s
  useEffect(() => {
    let val = 0;
    const steps = [
      { target: 30, delay: 18 },  // 30 × 18ms = 540ms
      { target: 60, delay: 12 },  // 30 × 12ms = 360ms
      { target: 85, delay: 16 },  // 25 × 16ms = 400ms
      { target: 100, delay: 10 }, // 15 × 10ms = 150ms
    ];

    let stepIdx = 0;
    let tid: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (stepIdx >= steps.length) return;
      const { target, delay } = steps[stepIdx];
      if (val < target) {
        val++;
        setProgress(val);
        tid = setTimeout(tick, delay);
      } else {
        stepIdx++;
        if (stepIdx < steps.length) {
          tid = setTimeout(tick, 30); // short pause between bursts
        } else {
          // 100% reached → quick exit
          setTimeout(() => setPhase("done"), 150);
          setTimeout(() => onComplete(), 600);
        }
      }
    };
    tid = setTimeout(tick, 80);
    return () => clearTimeout(tid);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: phase === "done" ? 0 : 1,
        transform: phase === "done" ? "translateY(-8px)" : "translateY(0)",
        pointerEvents: phase === "done" ? "none" : "all",
      }}
    >
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Monogram / Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: "0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(236,72,153,0.15)",
            animation: "preloader-pulse 2s ease-in-out infinite",
          }}
        >
          WF
        </div>

        {/* Name */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f8f8ff 30%, #8b5cf6 70%, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Wania Fatima
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginTop: "0.4rem",
            }}
          >
            Portfolio · Loading
          </div>
        </div>

        {/* Progress bar container */}
        <div
          style={{
            width: "min(320px, 80vw)",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {/* Bar track */}
          <div
            style={{
              height: 3,
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: 999,
                background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                transition: "width 0.15s ease",
                boxShadow: "0 0 10px rgba(139,92,246,0.6)",
              }}
            />
          </div>

          {/* Percentage */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "#4b5563",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ color: "#8b5cf6" }}>
              {progress < 40
                ? "Initializing..."
                : progress < 70
                ? "Loading assets..."
                : progress < 95
                ? "Almost ready..."
                : "Welcome!"}
            </span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Decorative dots */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#8b5cf6",
                animation: `preloader-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 40,
          height: 40,
          borderTop: "1.5px solid rgba(139,92,246,0.3)",
          borderLeft: "1.5px solid rgba(139,92,246,0.3)",
          borderRadius: "4px 0 0 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          width: 40,
          height: 40,
          borderBottom: "1.5px solid rgba(236,72,153,0.3)",
          borderRight: "1.5px solid rgba(236,72,153,0.3)",
          borderRadius: "0 0 4px 0",
        }}
      />

      {/* Keyframe styles injected */}
      <style>{`
        @keyframes preloader-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(236,72,153,0.15); }
          50% { transform: scale(1.05); box-shadow: 0 0 60px rgba(139,92,246,0.6), 0 0 100px rgba(236,72,153,0.25); }
        }
        @keyframes preloader-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
