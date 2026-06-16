const socialLinks = [
  { icon: "⌥", label: "github.com/waniaf-22", url: "https://github.com/waniaf-22" },
  { icon: "in", label: "linkedin.com/in/wania-fatima1", url: "https://www.linkedin.com/in/wania-fatima1" },
  { icon: "@", label: "waniaf59@gmail.com", url: "mailto:waniaf59@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left side */}
        <div>
          <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--purple)] mb-4">Get In Touch</div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-display font-bold tracking-tight mb-4">
            Let's build something remarkable.
          </h2>
          <p className="text-[var(--lg)] text-[0.95rem] leading-[1.8] mb-8">
            Whether you're hiring an AI engineer, a creative strategist, or someone who operates at the intersection of both — I'd love to talk.
          </p>

          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--lg)] no-underline text-[0.9rem] py-3 border-b border-[var(--dark-border)] transition-colors duration-300 hover:text-[var(--white)]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--dark-border)" }}
                >
                  {link.icon}
                </div>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right side — form */}
        <div
          className="rounded-2xl p-6 md:p-8 border border-[var(--dark-border)]"
          style={{ background: "var(--dark-card)", backdropFilter: "blur(20px)" }}
        >
          <div className="mb-5">
            <label className="block text-[0.78rem] text-[var(--lg)] mb-2 tracking-wider">Your Name</label>
            <input
              type="text"
              placeholder="What should I call you?"
              className="w-full rounded-lg px-4 py-3 text-[var(--white)] text-[0.9rem] font-[inherit] outline-none transition-colors duration-300 placeholder:text-[var(--gray)] focus:border-[var(--purple)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--dark-border)" }}
            />
          </div>
          <div className="mb-5">
            <label className="block text-[0.78rem] text-[var(--lg)] mb-2 tracking-wider">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg px-4 py-3 text-[var(--white)] text-[0.9rem] font-[inherit] outline-none transition-colors duration-300 placeholder:text-[var(--gray)] focus:border-[var(--purple)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--dark-border)" }}
            />
          </div>
          <div className="mb-5">
            <label className="block text-[0.78rem] text-[var(--lg)] mb-2 tracking-wider">Message</label>
            <textarea
              placeholder="Tell me about the opportunity, project, or collaboration you have in mind..."
              rows={5}
              className="w-full rounded-lg px-4 py-3 text-[var(--white)] text-[0.9rem] font-[inherit] outline-none transition-colors duration-300 resize-y min-h-[120px] placeholder:text-[var(--gray)] focus:border-[var(--purple)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--dark-border)" }}
            />
          </div>
          <button
            className="w-full py-3.5 rounded-lg text-white text-[0.95rem] font-medium border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
            style={{ background: "var(--grad1)" }}
          >
            Send Message ✦
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
