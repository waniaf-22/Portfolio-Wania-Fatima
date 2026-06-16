import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Creative", href: "#creative" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[rgba(5,5,5,0.9)] backdrop-blur-xl shadow-lg border-b border-[var(--dark-border)]"
          : "py-5 bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="text-sm font-display font-semibold tracking-[0.15em] uppercase"
        style={{
          background: "var(--grad1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WF
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-[var(--lg)] text-[0.85rem] tracking-wider hover:text-[var(--white)] transition-colors duration-300 no-underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[var(--white)] text-xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border-b border-[var(--dark-border)] md:hidden">
          <ul className="flex flex-col py-4 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-[var(--lg)] text-sm hover:text-[var(--white)] transition-colors duration-300 no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
