import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "10M+", label: "Overall Reach",      num: 10,  color: "#06b6d4" },
  { value: "3M+",  label: "Single Reel Reach",  num: 3,   color: "#8b5cf6" },
  { value: "12K+", label: "Max Followers Added", num: 12,  color: "#ec4899" },
];

// Monthly growth data (normalized 0–100)
const growthData = [
  { month: "Jan", reach: 12, reels: 8,  followers: 20 },
  { month: "Feb", reach: 22, reels: 18, followers: 30 },
  { month: "Mar", reach: 35, reels: 25, followers: 42 },
  { month: "Apr", reach: 48, reels: 40, followers: 55 },
  { month: "May", reach: 60, reels: 52, followers: 63 },
  { month: "Jun", reach: 70, reels: 65, followers: 70 },
  { month: "Jul", reach: 78, reels: 72, followers: 75 },
  { month: "Aug", reach: 83, reels: 80, followers: 80 },
  { month: "Sep", reach: 88, reels: 85, followers: 85 },
  { month: "Oct", reach: 92, reels: 90, followers: 90 },
  { month: "Nov", reach: 96, reels: 95, followers: 95 },
  { month: "Dec", reach: 100, reels: 100, followers: 100 },
];

const W = 700;
const H = 180;
const PAD = { top: 10, right: 20, bottom: 30, left: 35 };
const gW = W - PAD.left - PAD.right;
const gH = H - PAD.top - PAD.bottom;

function buildPath(data: number[]) {
  const pts = data.map((v, i) => ({
    x: PAD.left + (i / (data.length - 1)) * gW,
    y: PAD.top + gH - (v / 100) * gH,
  }));

  // Smooth cubic bezier through points
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cpx = (pts[i - 1].x + pts[i].x) / 2;
    d += ` C ${cpx},${pts[i - 1].y} ${cpx},${pts[i].y} ${pts[i].x},${pts[i].y}`;
  }
  return { d, pts };
}

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const numStr = target.replace(/[^0-9]/g, "");
    const suffix = target.replace(/[0-9]/g, "");
    const end = parseInt(numStr, 10);
    let start = 0;
    let frame: number;

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const startTime = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const cur = Math.round(start + (end - start) * eased);
          setDisplay(`${cur}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });

    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

const MetricsSection = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animating, setAnimating] = useState(false);
  const [hoveredPt, setHoveredPt] = useState<{ x: number; y: number; values: number[]; month: string } | null>(null);
  const [activeLines, setActiveLines] = useState([true, true, true]);

  // Trigger line draw animation on scroll-in
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimating(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (svgRef.current) obs.observe(svgRef.current);
    return () => obs.disconnect();
  }, []);

  const datasets = [
    { key: "reach",     values: growthData.map(d => d.reach),     color: "#06b6d4" },
    { key: "reels",     values: growthData.map(d => d.reels),     color: "#8b5cf6" },
    { key: "followers", values: growthData.map(d => d.followers), color: "#ec4899" },
  ];

  const gridLines = [0, 25, 50, 75, 100];

  const onSvgMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = W / rect.width;
    const mx = (e.clientX - rect.left) * scaleX - PAD.left;
    const idx = Math.round((mx / gW) * (growthData.length - 1));
    const clamped = Math.max(0, Math.min(growthData.length - 1, idx));
    const d = growthData[clamped];
    const x = PAD.left + (clamped / (growthData.length - 1)) * gW;
    setHoveredPt({ x, y: 0, values: [d.reach, d.reels, d.followers], month: d.month });
  };

  return (
    <section id="impact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Impact</div>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-[1.1]">
            Campaign Milestones
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-7 text-center border transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "rgba(12,12,22,0.8)",
                border: `1px solid rgba(255,255,255,0.07)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = m.color + "66";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${m.color}22`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Color accent line */}
              <div style={{
                width: "32px", height: "3px", borderRadius: "2px",
                background: m.color, margin: "0 auto 16px",
                boxShadow: `0 0 12px ${m.color}`,
              }} />
              <h3 className="text-[clamp(2.2rem,5vw,3rem)] font-display font-bold mb-1"
                style={{ color: "#f8f8ff" }}>
                <AnimatedCounter target={m.value} />
              </h3>
              <p className="text-[0.72rem] uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Graph card */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "rgba(10,10,20,0.9)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Graph header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-[0.72rem] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] mb-1">Growth Over Time</p>
              <p className="text-base font-display font-semibold text-white">Monthly Performance</p>
            </div>
            {/* Legend toggles */}
            <div className="flex gap-4">
              {datasets.map((ds, i) => (
                <button
                  key={ds.key}
                  onClick={() => setActiveLines(prev => prev.map((v, j) => j === i ? !v : v))}
                  className="flex items-center gap-2 transition-opacity duration-200"
                  style={{ opacity: activeLines[i] ? 1 : 0.3 }}
                >
                  <div style={{ width: "24px", height: "2px", background: ds.color, borderRadius: "1px",
                    boxShadow: activeLines[i] ? `0 0 8px ${ds.color}` : "none" }} />
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {["Reach", "Reels", "Followers"][i]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SVG Graph */}
          <div className="overflow-x-auto">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              style={{ width: "100%", minWidth: "320px", overflow: "visible" }}
              onMouseMove={onSvgMouseMove}
              onMouseLeave={() => setHoveredPt(null)}
            >
              <defs>
                {datasets.map((ds) => (
                  <linearGradient key={ds.key} id={`grad-${ds.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ds.color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={ds.color} stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>

              {/* Grid lines */}
              {gridLines.map((v) => {
                const y = PAD.top + gH - (v / 100) * gH;
                return (
                  <g key={v}>
                    <line
                      x1={PAD.left} y1={y} x2={PAD.left + gW} y2={y}
                      stroke="rgba(255,255,255,0.05)" strokeWidth="1"
                      strokeDasharray={v === 0 ? "none" : "4,6"}
                    />
                    <text x={PAD.left - 6} y={y + 4}
                      textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.25)"
                      fontFamily="var(--font-body)">
                      {v}%
                    </text>
                  </g>
                );
              })}

              {/* Month labels */}
              {growthData.map((d, i) => {
                const x = PAD.left + (i / (growthData.length - 1)) * gW;
                return (
                  <text key={d.month} x={x} y={H - 4}
                    textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.3)"
                    fontFamily="var(--font-body)">
                    {d.month}
                  </text>
                );
              })}

              {/* Area fills + Lines */}
              {datasets.map((ds, i) => {
                if (!activeLines[i]) return null;
                const { d: pathD, pts } = buildPath(ds.values);

                // Area path (close to bottom)
                const lastPt = pts[pts.length - 1];
                const firstPt = pts[0];
                const areaD = `${pathD} L ${lastPt.x},${PAD.top + gH} L ${firstPt.x},${PAD.top + gH} Z`;

                return (
                  <g key={ds.key}>
                    {/* Area */}
                    <path d={areaD} fill={`url(#grad-${ds.key})`} />
                    {/* Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={ds.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: animating ? "none" : "2000",
                        strokeDashoffset: animating ? "0" : "2000",
                        transition: `stroke-dashoffset ${1.2 + i * 0.3}s cubic-bezier(0.4,0,0.2,1)`,
                        filter: `drop-shadow(0 0 4px ${ds.color}99)`,
                      }}
                    />
                  </g>
                );
              })}

              {/* Hover crosshair */}
              {hoveredPt && (
                <g>
                  <line
                    x1={hoveredPt.x} y1={PAD.top}
                    x2={hoveredPt.x} y2={PAD.top + gH}
                    stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4"
                  />
                  {datasets.map((ds, i) => {
                    if (!activeLines[i]) return null;
                    const idx = growthData.findIndex(d => d.month === hoveredPt.month);
                    const y = PAD.top + gH - (hoveredPt.values[i] / 100) * gH;
                    return (
                      <circle key={ds.key}
                        cx={hoveredPt.x} cy={y} r={4}
                        fill={ds.color}
                        stroke="rgba(5,5,5,0.9)" strokeWidth="2"
                        style={{ filter: `drop-shadow(0 0 6px ${ds.color})` }}
                      />
                    );
                  })}

                  {/* Tooltip */}
                  {(() => {
                    const tooltipX = hoveredPt.x > W * 0.7 ? hoveredPt.x - 100 : hoveredPt.x + 12;
                    return (
                      <g>
                        <rect x={tooltipX} y={PAD.top + 4} width={90} height={activeLines.filter(Boolean).length * 18 + 20}
                          rx="6" fill="rgba(10,10,20,0.95)"
                          stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <text x={tooltipX + 8} y={PAD.top + 18}
                          fontSize="9" fill="rgba(255,255,255,0.5)"
                          fontFamily="var(--font-display)" fontWeight="600"
                          letterSpacing="0.1em" textTransform="uppercase">
                          {hoveredPt.month}
                        </text>
                        {datasets.map((ds, i) => {
                          if (!activeLines[i]) return null;
                          const activeCount = datasets.slice(0, i).filter((_, j) => activeLines[j]).length;
                          return (
                            <g key={ds.key}>
                              <circle cx={tooltipX + 10} cy={PAD.top + 30 + activeCount * 18}
                                r={3} fill={ds.color} />
                              <text x={tooltipX + 18} y={PAD.top + 34 + activeCount * 18}
                                fontSize="9" fill="rgba(255,255,255,0.7)"
                                fontFamily="var(--font-body)">
                                {["Reach", "Reels", "Followers"][i]}: {hoveredPt.values[i]}%
                              </text>
                            </g>
                          );
                        })}
                      </g>
                    );
                  })()}
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
