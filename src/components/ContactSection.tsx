import { useRef, useState } from "react";

// ─── Formspree setup ──────────────────────────────────────────────────────
// 1. Go to https://formspree.io → Sign up free
// 2. Click "New Form" → enter waniaf59@gmail.com
// 3. Copy the form ID from the URL (e.g. "xabc1234") and paste below
const FORM_ID = "YOUR_FORM_ID"; // ← replace this

const socialLinks = [
  { icon: "⌥", label: "github.com/waniaf-22",           url: "https://github.com/waniaf-22" },
  { icon: "in", label: "linkedin.com/in/wania-fatima1",  url: "https://www.linkedin.com/in/wania-fatima1" },
  { icon: "@",  label: "waniaf59@gmail.com",              url: "mailto:waniaf59@gmail.com" },
];

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const [error, setError]     = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim())                      { setError("Please enter your name.");         return; }
    if (!email.trim())                     { setError("Please enter your email.");        return; }
    if (!/\S+@\S+\.\S+/.test(email))      { setError("Please enter a valid email.");     return; }
    if (!message.trim())                   { setError("Please write a message.");         return; }
    if (FORM_ID === "YOUR_FORM_ID")        { setError("Contact form not configured yet — email me directly at waniaf59@gmail.com."); return; }

    setError("");
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  };


  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#f8f8ff",
    width: "100%",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

        {/* Left */}
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
                className="flex items-center gap-4 no-underline py-3 border-b border-[var(--dark-border)] transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {link.icon}
                </div>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ background: "rgba(12,12,22,0.85)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(20px)" }}
        >
          {/* Success state */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "rgba(6,182,212,0.15)",
                border: "1px solid rgba(6,182,212,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
              }}>✓</div>
              <h3 className="font-display font-semibold text-lg text-white">Message Sent!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
                Thanks! I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 px-5 py-2 rounded-full text-[0.8rem] font-medium transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="mb-5">
                <label className="block text-[0.75rem] tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What should I call you?"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(139,92,246,0.5)"; }}
                  onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-[0.75rem] tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(139,92,246,0.5)"; }}
                  onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-[0.75rem] tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the opportunity, project, or collaboration you have in mind..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(139,92,246,0.5)"; }}
                  onBlur={(e)  => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>

              {/* Validation / API error */}
              {(error || status === "error") && (
                <p className="mb-4 text-[0.8rem] px-3 py-2 rounded-lg"
                  style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}>
                  {error || "Something went wrong. Please try again or email me directly."}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-lg text-white text-[0.95rem] font-semibold border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                style={{
                  background: status === "sending" ? "rgba(139,92,246,0.4)" : "var(--grad1)",
                  boxShadow: status !== "sending" ? "0 4px 24px rgba(139,92,246,0.3)" : "none",
                  fontFamily: "var(--font-display)",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message ✦"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
