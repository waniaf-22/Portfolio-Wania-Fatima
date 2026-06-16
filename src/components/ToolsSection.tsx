import canvaLogo from "@/assets/logos/canva.jpg";
import capcutLogo from "@/assets/logos/capcut.jpg";
import filmoraLogo from "@/assets/logos/filmora.png";
import analyticsSvg from "@/assets/logos/analytics.svg";
import bufferSvg from "@/assets/logos/buffer.svg";
import chatgptSvg from "@/assets/logos/chatgpt.svg";
import facebookSvg from "@/assets/logos/facebook.svg";
import instagramSvg from "@/assets/logos/instagram.svg";
import tiktokSvg from "@/assets/logos/tiktok.svg";
import trelloSvg from "@/assets/logos/trello.svg";

const tools = [
  { name: "CapCut", logo: capcutLogo },
  { name: "Premiere Pro", logo: null, faIcon: "fa-solid fa-film", gradient: "linear-gradient(135deg, #4f46e5, #9333ea)" },
  { name: "Canva", logo: canvaLogo },
  { name: "Filmora", logo: filmoraLogo },
  { name: "Buffer", logo: bufferSvg },
  { name: "ChatGPT", logo: chatgptSvg },
  { name: "Analytics", logo: analyticsSvg },
  { name: "Trello", logo: trelloSvg },
];

const platforms = [
  { name: "LinkedIn", logo: null, faIcon: "fa-brands fa-linkedin-in", gradient: "linear-gradient(135deg, #0284c7, #38bdf8)" },
  { name: "Instagram", logo: instagramSvg },
  { name: "Facebook", logo: facebookSvg },
  { name: "TikTok", logo: tiktokSvg },
];

const IconBox = ({ entry }: { entry: { name: string; logo: string | null; faIcon?: string; gradient?: string } }) =>
  entry.logo ? (
    <img src={entry.logo} alt={entry.name} className="w-12 h-12 object-contain rounded-lg" loading="lazy" />
  ) : (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
      style={{ background: entry.gradient }}
    >
      <i className={`${entry.faIcon} text-xl`} />
    </div>
  );

const ToolsSection = () => (
  <section id="tools" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">My Arsenal</p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1]">
          Tools & Platforms
        </h2>
      </div>

      <div className="mb-14">
        <h3 className="text-[1.05rem] font-display font-semibold mb-6 flex items-center gap-3">
          <i className="fa-solid fa-wand-magic-sparkles text-[var(--cyan)]" />
          Creative & Analytics Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl p-5 border border-[var(--dark-border)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(6,182,212,0.4)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
              style={{ background: "var(--dark-card)" }}
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                <IconBox entry={t} />
              </div>
              <span className="font-display font-medium text-[0.8rem] text-[var(--white)]">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[1.05rem] font-display font-semibold mb-6 flex items-center gap-3">
          <i className="fa-solid fa-globe text-[var(--pink)]" />
          Platforms I Manage
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl p-5 border border-[var(--dark-border)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(236,72,153,0.4)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)]"
              style={{ background: "var(--dark-card)" }}
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                <IconBox entry={p} />
              </div>
              <span className="font-display font-medium text-[0.8rem] text-[var(--white)]">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ToolsSection;
