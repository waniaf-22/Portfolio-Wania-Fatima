import canvaLogo    from "@/assets/logos/canva.jpg";
import capcutLogo   from "@/assets/logos/capcut.jpg";
import filmoraLogo  from "@/assets/logos/filmora.png";
import analyticsSvg from "@/assets/logos/analytics.svg";
import bufferSvg    from "@/assets/logos/buffer.svg";
import chatgptSvg   from "@/assets/logos/chatgpt.svg";
import facebookSvg  from "@/assets/logos/facebook.svg";
import instagramSvg from "@/assets/logos/instagram.svg";
import tiktokSvg    from "@/assets/logos/tiktok.svg";
import trelloSvg    from "@/assets/logos/trello.svg";
import linkedinSvg  from "@/assets/logos/linkedin.svg";
import premiereSvg  from "@/assets/logos/premiere.svg";

const socialTools = [
  { name: "CapCut",       logo: capcutLogo  },
  { name: "Premiere Pro", logo: premiereSvg },
  { name: "Canva",        logo: canvaLogo   },
  { name: "Filmora",      logo: filmoraLogo },
  { name: "Buffer",       logo: bufferSvg   },
  { name: "ChatGPT",      logo: chatgptSvg  },
  { name: "Analytics",    logo: analyticsSvg},
  { name: "Trello",       logo: trelloSvg   },
];

const socialPlatforms = [
  { name: "LinkedIn",  logo: linkedinSvg  },
  { name: "Instagram", logo: instagramSvg },
  { name: "Facebook",  logo: facebookSvg  },
  { name: "TikTok",    logo: tiktokSvg    },
];

// ── Coding tech-stack chips ────────────────────────────────────────────────
// color = badge background color matching the official brand color
const techStack = [
  // Languages
  { name: "Python",        icon: "fa-brands fa-python",       color: "#3572A5", group: "Languages" },
  { name: "C++",           icon: "fa-solid fa-code",          color: "#00599C", group: "Languages" },
  { name: "C",             icon: "fa-solid fa-c",             color: "#A8B9CC", group: "Languages" },
  { name: "JavaScript",    icon: "fa-brands fa-js",           color: "#F7DF1E", textDark: true, group: "Languages" },
  { name: "TypeScript",    icon: "fa-brands fa-js",           color: "#3178C6", group: "Languages" },
  { name: "HTML5",         icon: "fa-brands fa-html5",        color: "#E34F26", group: "Languages" },
  { name: "CSS3",          icon: "fa-brands fa-css3-alt",     color: "#1572B6", group: "Languages" },
  { name: "SQL",           icon: "fa-solid fa-database",      color: "#336791", group: "Languages" },
  { name: "Java",          icon: "fa-brands fa-java",         color: "#ED8B00", group: "Languages" },
  { name: "Assembly",      icon: "fa-solid fa-microchip",     color: "#525252", group: "Languages" },
  { name: "Markdown",      icon: "fa-brands fa-markdown",     color: "#333333", group: "Languages" },
  { name: "Bash",          icon: "fa-solid fa-terminal",      color: "#2e2e2e", group: "Languages" },

  // Frontend / UI
  { name: "React",         icon: "fa-brands fa-react",        color: "#20232a", group: "Frontend" },
  { name: "Next.js",       icon: "fa-solid fa-n",             color: "#000000", group: "Frontend" },
  { name: "TailwindCSS",   icon: "fa-solid fa-wind",          color: "#06B6D4", group: "Frontend" },
  { name: "Vite",          icon: "fa-solid fa-bolt",          color: "#646cff", group: "Frontend" },
  { name: "Framer Motion", icon: "fa-solid fa-film",          color: "#0055ff", group: "Frontend" },

  // Backend
  { name: "Node.js",       icon: "fa-brands fa-node-js",      color: "#339933", group: "Backend" },
  { name: "Express.js",    icon: "fa-solid fa-server",        color: "#303030", group: "Backend" },
  { name: "FastAPI",       icon: "fa-solid fa-bolt",          color: "#009688", group: "Backend" },
  { name: "REST APIs",     icon: "fa-solid fa-plug",          color: "#5a5a5a", group: "Backend" },
  { name: "JWT",           icon: "fa-solid fa-key",           color: "#d63aff", group: "Backend" },

  // AI / ML
  { name: "PyTorch",       icon: "fa-solid fa-fire",          color: "#EE4C2C", group: "AI / ML" },
  { name: "TensorFlow",    icon: "fa-solid fa-brain",         color: "#FF6F00", group: "AI / ML" },
  { name: "NumPy",         icon: "fa-solid fa-chart-bar",     color: "#013243", group: "AI / ML" },
  { name: "Pandas",        icon: "fa-solid fa-table",         color: "#150458", group: "AI / ML" },
  { name: "Matplotlib",    icon: "fa-solid fa-chart-line",    color: "#11557c", group: "AI / ML" },
  { name: "scikit-learn",  icon: "fa-solid fa-robot",         color: "#F7931E", group: "AI / ML" },
  { name: "Anaconda",      icon: "fa-solid fa-leaf",          color: "#44A833", group: "AI / ML" },
  { name: "Jupyter",       icon: "fa-solid fa-book-open",     color: "#F37626", group: "AI / ML" },
  { name: "LangChain",     icon: "fa-solid fa-link",          color: "#1C3C3C", group: "AI / ML" },
  { name: "OpenAI API",    icon: "fa-solid fa-wand-magic-sparkles", color: "#412991", group: "AI / ML" },

  // Databases
  { name: "MySQL",         icon: "fa-solid fa-database",      color: "#00758F", group: "Databases" },
  { name: "MongoDB",       icon: "fa-solid fa-leaf",          color: "#47A248", group: "Databases" },
  { name: "Firebase",      icon: "fa-solid fa-fire-flame-curved", color: "#FFCA28", textDark: true, group: "Databases" },
  { name: "PostgreSQL",    icon: "fa-solid fa-database",      color: "#336791", group: "Databases" },

  // DevOps / Tools
  { name: "Git",           icon: "fa-brands fa-git-alt",      color: "#F05032", group: "DevOps" },
  { name: "GitHub",        icon: "fa-brands fa-github",       color: "#161b22", group: "DevOps" },
  { name: "Docker",        icon: "fa-brands fa-docker",       color: "#0db7ed", group: "DevOps" },
  { name: "Linux",         icon: "fa-brands fa-linux",        color: "#2c2c2c", group: "DevOps" },
  { name: "NPM",           icon: "fa-brands fa-npm",          color: "#CB3837", group: "DevOps" },
  { name: "Bun",           icon: "fa-solid fa-bolt",          color: "#FBF0DF", textDark: true, group: "DevOps" },
  { name: "Vercel",        icon: "fa-solid fa-triangle",      color: "#000000", group: "DevOps" },
  { name: "Postman",       icon: "fa-solid fa-paper-plane",   color: "#FF6C37", group: "DevOps" },
  { name: "VS Code",       icon: "fa-solid fa-code",          color: "#007ACC", group: "DevOps" },

  // Design
  { name: "Figma",         icon: "fa-brands fa-figma",        color: "#F24E1E", group: "Design" },
  { name: "Adobe XD",      icon: "fa-solid fa-pen-ruler",     color: "#FF61F6", group: "Design" },
  { name: "Lightroom",     icon: "fa-solid fa-camera",        color: "#001e36", group: "Design" },
];

const groups = [...new Set(techStack.map(t => t.group))];

// ── Social Media ToolCard ──────────────────────────────────────────────────
type SocialEntry = { name: string; logo: string; faIcon?: string; gradient?: string };

const SocialCard = ({ entry }: { entry: SocialEntry }) => (
  <div
    className="group rounded-xl p-3 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
    style={{ background: "rgba(12,12,22,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = "#ec489955";
      el.style.boxShadow = "0 12px 32px #ec489918";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = "rgba(255,255,255,0.07)";
      el.style.boxShadow = "none";
    }}
  >
    <div className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{ width: 40, height: 40 }}>
      <img src={entry.logo} alt={entry.name} className="w-10 h-10 object-contain rounded-lg" loading="lazy" />
    </div>
    <span className="font-display font-medium text-[0.7rem] text-[rgba(255,255,255,0.6)] group-hover:text-white transition-colors duration-200 leading-tight">
      {entry.name}
    </span>
  </div>
);

// ── Tech badge chip ────────────────────────────────────────────────────────
const TechBadge = ({ tool }: { tool: typeof techStack[0] }) => (
  <div
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 cursor-default"
    style={{
      background: tool.color,
      boxShadow: `0 2px 8px ${tool.color}55`,
    }}
  >
    <i className={`${tool.icon} text-[0.75rem]`} style={{ color: tool.textDark ? "#111" : "#fff", opacity: 0.9 }} />
    <span style={{
      fontSize: "0.72rem",
      fontWeight: 700,
      fontFamily: "var(--font-display)",
      letterSpacing: "0.05em",
      color: tool.textDark ? "#111" : "#fff",
      whiteSpace: "nowrap",
    }}>
      {tool.name.toUpperCase()}
    </span>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────
const ToolsSection = () => (
  <section id="tools" className="section-padding">
    <div className="max-w-6xl mx-auto">

      {/* Section header */}
      <div className="mb-12">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">My Arsenal</p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1]">
          Tools & Platforms
        </h2>
      </div>

      {/* Left / Right split */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

        {/* ── LEFT: Social Media ── */}
        <div className="lg:w-[340px] flex-shrink-0">
          {/* Column header */}
          <div className="mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-1" style={{ color: "#ec489999" }}>Social Media</p>
            <h3 className="text-[1.05rem] font-display font-bold flex items-center gap-2 text-white">
              <i className="fa-solid fa-wand-magic-sparkles text-sm text-[#ec4899]" />
              Creative & Social Tools
            </h3>
          </div>

          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.3)] mb-3">Creative Tools</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {socialTools.map((t) => <SocialCard key={t.name} entry={t} />)}
          </div>

          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.3)] mb-3">Platforms I Manage</p>
          <div className="grid grid-cols-4 gap-3">
            {socialPlatforms.map((p) => <SocialCard key={p.name} entry={p} />)}
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden lg:block w-px flex-shrink-0 self-stretch"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)" }}
        />

        {/* ── RIGHT: Tech Stack ── */}
        <div className="flex-1 min-w-0">
          {/* Column header */}
          <div className="mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-1" style={{ color: "#8b5cf699" }}>Development</p>
            <h3 className="text-[1.05rem] font-display font-bold flex items-center gap-2 text-white">
              <i className="fa-solid fa-code text-sm text-[#8b5cf6]" />
              Tech Stack
            </h3>
          </div>

          {/* Groups */}
          <div className="flex flex-col gap-6">
            {groups.map((group) => (
              <div key={group}>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.28)] mb-3">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.filter(t => t.group === group).map((tool) => (
                    <TechBadge key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ToolsSection;
