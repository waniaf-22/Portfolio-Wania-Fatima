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
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 list-none m-0 p-0">
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

        {/* Resume Dropdown */}
        <div className="relative group">
          <button className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-[var(--dark-border)] hover:border-[var(--purple)] bg-[rgba(255,255,255,0.02)] text-[var(--white)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer">
            Resume <i className="fa-solid fa-chevron-down text-[0.65rem] transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          
          <div className="absolute right-0 mt-2 w-44 rounded-xl border border-[var(--dark-border)] bg-[rgba(10,10,20,0.95)] backdrop-blur-xl p-1.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
            <a 
              href="https://drive.google.com/file/d/1EDTXrWOniJ-aob4JU4o_SmXcXg_u6ufz/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs text-[var(--lg)] hover:text-white hover:bg-[rgba(139,92,246,0.15)] rounded-lg no-underline transition-colors duration-200"
            >
              <i className="fa-solid fa-code text-[var(--cyan)]"></i> Tech Resume
            </a>
            <a 
              href="https://drive.google.com/file/d/1D4qV5cyxbEt3fi-V-ywjcWauZrxF0Ewo/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs text-[var(--lg)] hover:text-white hover:bg-[rgba(236,72,153,0.15)] rounded-lg no-underline transition-colors duration-200"
            >
              <i className="fa-solid fa-bullhorn text-[var(--pink)]"></i> Media Resume
            </a>
          </div>
        </div>
      </div>

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
          <ul className="flex flex-col py-4 list-none m-0 p-0">
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
            <li className="border-t border-[var(--dark-border)] mt-2 pt-3 px-6 pb-2">
              <span className="block text-[0.7rem] uppercase tracking-wider text-[var(--gray)] mb-2">Resumes</span>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://drive.google.com/file/d/1EDTXrWOniJ-aob4JU4o_SmXcXg_u6ufz/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--lg)] hover:text-white text-sm no-underline flex items-center gap-2 py-1"
                >
                  <i className="fa-solid fa-code text-[var(--cyan)]"></i> Tech Resume
                </a>
                <a 
                  href="https://drive.google.com/file/d/1D4qV5cyxbEt3fi-V-ywjcWauZrxF0Ewo/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--lg)] hover:text-white text-sm no-underline flex items-center gap-2 py-1"
                >
                  <i className="fa-solid fa-bullhorn text-[var(--pink)]"></i> Media Resume
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
