import { useEffect, useRef } from "react";

interface Project {
  name: string;
  desc: string;
  tags: string[];
  badge?: string;
  topColor: string;
  vizType: "neural" | "bus" | "ml" | "asm" | "compiler" | "tetris" | "emergency";
  githubUrl?: string;
  liveDemoUrl?: string;
}

const projects: Project[] = [
  {
    name: "Neon Tetris",
    desc: "A premium, high-performance Tetris game built from scratch in C++ using Raylib. Implements Object-Oriented Design (OOP) and features vibrant neon aesthetics, screen shake effects, particle systems, procedural sound synthesis, and responsive DAS/ARR key-repeat controls.",
    tags: ["C++", "Raylib", "Object-Oriented Programming (OOP)", "Game Physics", "Audio Synthesis"],
    topColor: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    vizType: "tetris",
    githubUrl: "https://github.com/waniaf-22/cpp-neon-tetris-raylib",
  },
  {
    name: "PixelForge Compiler",
    desc: "A browser-based IDE and 6-phase compiler for a custom retro pixel-art DSL. Lexes, parses (recursive-descent AST), validates semantics, generates IR, runs dead-code optimization, and target-executes on an HTML5 Canvas VM.",
    tags: ["Compiler Design", "Domain-Specific Languages (DSLs)", "Python / Flask", "HTML5 Canvas VM", "JavaScript"],
    topColor: "linear-gradient(135deg, #a78bfa, #ec4899)",
    vizType: "compiler",
    githubUrl: "https://github.com/waniaf-22/PixelForge-Compiler",
  },
  {
    name: "Waasta AI",
    desc: "An LLM-powered emergency medical routing system that dynamically connects patients to available hospitals in real time. Uses prompt engineering, live hospital APIs, and intelligent triage logic to cut emergency response time.",
    tags: ["LLMs", "Prompt Engineering", "Hospital APIs", "Emergency Routing", "Python"],
    topColor: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    vizType: "emergency",
    githubUrl: "https://github.com/waniaf-22/Waasta-AI",
    liveDemoUrl: "https://waasta.vercel.app/",
  },
  {
    name: "SwiftBus",
    desc: "A full-featured bus booking platform with real-time seat availability, database-backed reservations, and a clean REST API layer. Engineered for reliability and scale from the ground up.",
    tags: ["Booking System", "REST APIs", "Database Design", "Full Stack"],
    topColor: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    vizType: "bus",
    githubUrl: "https://github.com/waniaf-22/SwiftBus-SE-Project",
  },
  {
    name: "Movie Recommendation System",
    desc: "A collaborative filtering recommendation engine built with PyTorch. Learns latent user-item embeddings to surface personalized suggestions with measurable accuracy gains over baseline heuristics.",
    tags: ["PyTorch", "Collaborative Filtering", "Machine Learning", "Embeddings"],
    topColor: "linear-gradient(90deg, #ec4899, #f97316)",
    vizType: "ml",
    githubUrl: "https://github.com/waniaf-22/Movie-Recommendation-system",
  },
  {
    name: "Parking Management System",
    desc: "A low-level parking management system written entirely in x86 Assembly. Interfaces directly with hardware interrupts and memory addresses — demonstrating mastery of the most fundamental layer of computing.",
    tags: ["x86 Assembly", "Low-Level Programming", "Hardware Interrupts"],
    topColor: "linear-gradient(90deg, #10b981, #06b6d4)",
    vizType: "asm",
    githubUrl: "https://github.com/waniaf-22/Parking-Management-System",
  },
];

// ─── Mini canvas visualizations ───
function useNeuralViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 12; i++) {
      pts.push({ x: 20 + Math.random() * (canvas.width - 40), y: 10 + Math.random() * 60, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, 80);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 5 || p.x > canvas.width - 5) p.vx *= -1;
        if (p.y < 5 || p.y > 75) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#06b6d4";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 80) {
            ctx.strokeStyle = `rgba(6,182,212,${0.3 * (1 - d / 80)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

function useEmergencyViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const patient = { x: 50, y: 40 };
    const hospitals = [
      { x: 210, y: 25, active: true },
      { x: 330, y: 55, active: false }
    ];

    const animate = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, 80);
      ctx.fillStyle = "rgba(10, 10, 20, 0.15)";
      ctx.fillRect(0, 0, canvas.width, 80);

      // Draw map routes (thin dashed lines)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      hospitals.forEach(h => {
        ctx.beginPath();
        ctx.moveTo(patient.x, patient.y);
        ctx.lineTo(h.x, h.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Draw SOS pulsing rings around Patient
      const pulseRadius = (t % 60) * 0.8;
      const opacity = 1 - (t % 60) / 60;
      ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(patient.x, patient.y, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Patient node (red dot)
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(patient.x, patient.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "7px sans-serif";
      ctx.fillText("SOS", patient.x - 6, patient.y - 8);

      // Draw Hospitals
      hospitals.forEach((h, idx) => {
        const size = 12;
        ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
        ctx.strokeStyle = h.active && Math.sin(t * 0.1) > 0 ? "#06b6d4" : "rgba(6, 182, 212, 0.4)";
        ctx.lineWidth = 1;
        ctx.fillRect(h.x - size/2, h.y - size/2, size, size);
        ctx.strokeRect(h.x - size/2, h.y - size/2, size, size);

        ctx.strokeStyle = "#06b6d4";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(h.x - 3, h.y); ctx.lineTo(h.x + 3, h.y);
        ctx.moveTo(h.x, h.y - 3); ctx.lineTo(h.x, h.y + 3);
        ctx.stroke();

        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.font = "7px sans-serif";
        ctx.fillText(`HOSPITAL ${idx + 1}`, h.x - 22, h.y - 8);
      });

      // Draw Ambulance moving along active route
      const activeHosp = hospitals[0];
      const duration = 180;
      const progress = (t % duration) / duration;
      const ambX = patient.x + (activeHosp.x - patient.x) * progress;
      const ambY = patient.y + (activeHosp.y - patient.y) * progress;

      // Glow effect for ambulance
      ctx.shadowColor = "#06b6d4";
      ctx.shadowBlur = 8;
      ctx.fillStyle = "#06b6d4";
      ctx.beginPath();
      ctx.arc(ambX, ambY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Tail
      ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
      ctx.beginPath();
      const tailX = patient.x + (activeHosp.x - patient.x) * Math.max(0, progress - 0.05);
      const tailY = patient.y + (activeHosp.y - patient.y) * Math.max(0, progress - 0.05);
      ctx.arc(tailX, tailY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

function useBusViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let bx = -30;
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, 80);
      bx += 0.8;
      if (bx > canvas.width + 40) bx = -40;
      ctx.fillStyle = "rgba(139,92,246,0.15)";
      ctx.fillRect(0, 30, canvas.width, 20);
      [0, 0.25, 0.5, 0.75, 1].forEach((f) => {
        const sx = f * canvas.width;
        ctx.fillStyle = f < bx / canvas.width ? "rgba(139,92,246,0.6)" : "rgba(139,92,246,0.15)";
        ctx.fillRect(sx - 8, 26, 16, 28);
      });
      ctx.fillStyle = "#8b5cf6";
      ctx.fillRect(bx - 30, 22, 60, 36);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(bx - 20, 27, 12, 14);
      ctx.fillRect(bx - 4, 27, 12, 14);
      ctx.fillRect(bx + 12, 27, 12, 14);
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

function useMLViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, 80);
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= 50; i++) {
        const x = (canvas.width * i) / 50;
        const y = 40 + 20 * Math.sin(i * 0.3 + t * 0.02) * Math.exp(-i * 0.01);
        pts.push({ x, y });
      }
      ctx.strokeStyle = "#ec4899";
      ctx.lineWidth = 2;
      ctx.beginPath();
      pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.stroke();
      const grad = ctx.createLinearGradient(0, 0, 0, 80);
      grad.addColorStop(0, "rgba(236,72,153,0.3)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.lineTo(canvas.width, 80);
      ctx.lineTo(0, 80);
      ctx.fill();
      t++;
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

function useCompilerViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // A space invader alien pixel art drawing template
    const pixels = [
      {x: 2, y: 0}, {x: 8, y: 0},
      {x: 3, y: 1}, {x: 7, y: 1},
      {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2},
      {x: 1, y: 3}, {x: 2, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 8, y: 3}, {x: 9, y: 3},
      {x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4}, {x: 9, y: 4}, {x: 10, y: 4},
      {x: 0, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 8, y: 5}, {x: 10, y: 5},
      {x: 0, y: 6}, {x: 2, y: 6}, {x: 8, y: 6}, {x: 10, y: 6},
      {x: 3, y: 7}, {x: 4, y: 7}, {x: 6, y: 7}, {x: 7, y: 7}
    ];

    let currentPixel = 0;
    let t = 0;
    let animId: number;

    const animate = () => {
      t++;
      if (t % 5 === 0) {
        ctx.fillStyle = "rgba(10, 10, 20, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const scale = 5;
        const offsetX = (canvas.width - 11 * scale) / 2;
        const offsetY = (canvas.height - 8 * scale) / 2;

        for (let i = 0; i < currentPixel; i++) {
          const p = pixels[i];
          ctx.fillStyle = `hsl(${(280 + i * 3) % 360}, 85%, 65%)`;
          ctx.fillRect(offsetX + p.x * scale, offsetY + p.y * scale, scale - 1, scale - 1);
        }

        currentPixel = (currentPixel + 1) % (pixels.length + 15);
      }
      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

function useTetrisViz(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth || 400;
    canvas.height = 80;
    container.innerHTML = "";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#fbbf24", "#10b981"];
    let blockY = -2;
    let blockX = 4;
    let colorIdx = 0;

    const grid = Array(4).fill(0).map(() => Array(10).fill(0));
    grid[3] = [1, 1, 2, 2, 0, 0, 3, 3, 4, 4];
    grid[2] = [0, 1, 0, 2, 0, 0, 3, 0, 4, 0];

    const animate = () => {
      frame++;
      if (frame % 15 === 0) {
        blockY++;
        if (blockY > 3) {
          blockY = -2;
          colorIdx = (colorIdx + 1) % colors.length;
          if (Math.random() < 0.5) {
            grid[3] = [1, 1, 2, 2, 0, 0, 3, 3, 4, 4];
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(10, 10, 20, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cellSize = 12;
      const offsetX = (canvas.width - 10 * cellSize) / 2;
      const offsetY = (canvas.height - 4 * cellSize) / 2;

      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 10; c++) {
          if (grid[r][c] > 0) {
            ctx.fillStyle = colors[grid[r][c] - 1];
            ctx.fillRect(offsetX + c * cellSize, offsetY + r * cellSize, cellSize - 1, cellSize - 1);
          }
        }
      }

      const tShape = [
        {x: 0, y: 0}, {x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}
      ];

      tShape.forEach(p => {
        const px = blockX + p.x;
        const py = blockY + p.y;
        if (px >= 0 && px < 10 && py >= 0 && py < 4) {
          ctx.fillStyle = colors[colorIdx];
          ctx.fillRect(offsetX + px * cellSize, offsetY + py * cellSize, cellSize - 1, cellSize - 1);
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [ref]);
}

// ─── Project card component ───
const ProjectCard = ({ project }: { project: Project }) => {
  const vizRef = useRef<HTMLDivElement>(null);

  if (project.vizType === "neural") useNeuralViz(vizRef);
  if (project.vizType === "bus") useBusViz(vizRef);
  if (project.vizType === "ml") useMLViz(vizRef);
  if (project.vizType === "compiler") useCompilerViz(vizRef);
  if (project.vizType === "tetris") useTetrisViz(vizRef);
  if (project.vizType === "emergency") useEmergencyViz(vizRef);

  const vizBg: Record<string, string> = {
    neural: "rgba(6,182,212,0.04)",
    bus: "rgba(139,92,246,0.04)",
    ml: "rgba(236,72,153,0.04)",
    asm: "rgba(251,191,36,0.04)",
    compiler: "rgba(167,139,250,0.04)",
    tetris: "rgba(236,72,153,0.04)",
    emergency: "rgba(6,182,212,0.04)",
  };

  const vizBorder: Record<string, string> = {
    neural: "rgba(6,182,212,0.1)",
    bus: "rgba(139,92,246,0.1)",
    ml: "rgba(236,72,153,0.1)",
    asm: "rgba(251,191,36,0.1)",
    compiler: "rgba(167,139,250,0.1)",
    tetris: "rgba(236,72,153,0.1)",
    emergency: "rgba(6,182,212,0.1)",
  };

  return (
    <div
      className="project-card relative rounded-2xl p-8 border border-[var(--dark-border)] overflow-hidden cursor-default transition-all duration-300 hover:border-[rgba(139,92,246,0.4)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
      style={{ background: "var(--dark-card)" }}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: project.topColor }} />



      {/* Visualization */}
      <div
        ref={vizRef}
        className="h-20 rounded-lg mb-6 overflow-hidden flex items-center justify-center"
        style={{ background: vizBg[project.vizType], border: `1px solid ${vizBorder[project.vizType]}` }}
      >
        {project.vizType === "asm" && (
          <div className="font-mono text-[0.7rem] text-[rgba(251,191,36,0.6)] text-center px-2 leading-relaxed">
            MOV AX, 01h<br />CMP BX, [SLOT]<br />JE PARK_CAR<br />INT 21h<br />HLT
          </div>
        )}
      </div>

      <h3 className="text-xl font-display font-bold mb-2">{project.name}</h3>
      <p className="text-[0.88rem] text-[var(--lg)] leading-relaxed mb-6">{project.desc}</p>
      
      {/* Links */}
      <div className="flex gap-4 mb-6">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-[var(--lg)] hover:text-white transition-colors flex items-center gap-2">
            <i className="fa-brands fa-github text-[1.05rem]"></i> Code
          </a>
        )}
        {project.liveDemoUrl && (
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-[var(--cyan)] hover:text-[#22d3ee] transition-colors flex items-center gap-2">
            <i className="fa-solid fa-arrow-up-right-from-square text-[0.9rem]"></i> Live Demo
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md text-[0.72rem] text-[var(--lg)]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--dark-border)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Technical Work</div>
      <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1] mb-4">
        Built with Intelligence
      </h2>
      <p className="text-[var(--lg)] text-base leading-relaxed max-w-[520px] mb-12">
        Each project is an experiment in combining systems thinking with purposeful engineering.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
