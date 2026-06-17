const Footer = () => (
  <footer
    className="border-t border-[var(--dark-border)] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1400px] mx-auto"
  >
    <div className="text-[0.82rem] text-[var(--gray)]">© 2025 Wania Fatima · Built with intelligence.</div>
    <div className="flex gap-6">
      <a
        href="https://github.com/waniaf-22"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--gray)] text-[0.82rem] no-underline hover:text-[var(--white)] transition-colors duration-300"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/wania-fatima1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--gray)] text-[0.82rem] no-underline hover:text-[var(--white)] transition-colors duration-300"
      >
        LinkedIn
      </a>
      <a
        href="https://www.instagram.com/wfx.ania/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--gray)] text-[0.82rem] no-underline hover:text-[var(--white)] transition-colors duration-300"
      >
        Instagram
      </a>
      <a
        href="#hero"
        className="text-[var(--gray)] text-[0.82rem] no-underline hover:text-[var(--white)] transition-colors duration-300"
      >
        Back to Top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
