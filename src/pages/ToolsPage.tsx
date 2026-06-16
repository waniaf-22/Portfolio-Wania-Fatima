import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tools = [
  { name: "CapCut", icon: "fa-scissors", color: "from-[hsl(180,60%,40%)] to-[hsl(200,70%,50%)]" },
  { name: "Adobe Premiere Pro", icon: "fa-film", color: "from-[hsl(270,80%,50%)] to-[hsl(290,70%,60%)]" },
  { name: "Canva", icon: "fa-palette", color: "from-[hsl(200,80%,55%)] to-[hsl(170,70%,50%)]" },
  { name: "Wondershare Filmora", icon: "fa-video", color: "from-[hsl(210,80%,50%)] to-[hsl(230,70%,60%)]" },
  { name: "Buffer", icon: "fa-layer-group", color: "from-[hsl(220,70%,50%)] to-[hsl(240,60%,55%)]" },
  { name: "ChatGPT", icon: "fa-robot", color: "from-[hsl(160,60%,40%)] to-[hsl(180,50%,50%)]" },
  { name: "Google Analytics", icon: "fa-chart-bar", color: "from-[hsl(40,90%,55%)] to-[hsl(20,80%,50%)]" },
  { name: "Trello", icon: "fa-columns", color: "from-[hsl(210,80%,55%)] to-[hsl(200,70%,45%)]" },
];

const platforms = [
  { name: "LinkedIn", icon: "fa-linkedin", color: "from-[hsl(210,80%,45%)] to-[hsl(210,70%,55%)]" },
  { name: "Instagram", icon: "fa-instagram", color: "from-[hsl(330,80%,55%)] to-[hsl(40,90%,55%)]" },
  { name: "Facebook", icon: "fa-facebook", color: "from-[hsl(220,70%,50%)] to-[hsl(220,60%,60%)]" },
  { name: "TikTok", icon: "fa-tiktok", color: "from-[hsl(340,80%,55%)] to-[hsl(180,80%,55%)]" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
};

const ToolsPage = () => (
  <>
    <Navbar />
    <main className="pt-[72px] min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-body text-sm uppercase tracking-[4px] mb-3"
        >
          My Arsenal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-black text-foreground mb-4"
        >
          Tools & <span className="text-gradient">Platforms</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-body max-w-xl mx-auto text-base md:text-lg"
        >
          The creative and analytical tools I use to craft viral campaigns and manage multi-platform growth.
        </motion.p>
      </section>

      {/* Tools Grid */}
      <section className="px-6 md:px-12 pb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8">
          <i className="fa-solid fa-wand-magic-sparkles text-primary mr-3" />
          Creative & Analytics Tools
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {tools.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center cursor-default overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <i className={`fa-solid ${t.icon} text-white text-xl`} />
              </div>
              <span className="font-display font-semibold text-card-foreground text-sm">{t.name}</span>
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Platforms Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8">
          <i className="fa-solid fa-globe text-primary mr-3" />
          Platforms I Manage
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {platforms.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <i className={`fa-brands ${p.icon} text-white text-2xl`} />
              </div>
              <span className="font-display font-bold text-card-foreground text-base">{p.name}</span>
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
    <Footer />
  </>
);

export default ToolsPage;
