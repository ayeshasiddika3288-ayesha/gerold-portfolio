import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { navLinks } from "../data/data";
import GradientButton from "./common/GradientButton";
import Logo from "../assets/logo.svg";
import { motion } from "motion/react";

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaDribbble, label: "Dribbble" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = navLinks[0].href.slice(1);
      let closestTop = -Infinity;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.slice(1));
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker && top > closestTop) {
          closestTop = top;
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Gerold home">
          <img src={Logo} alt="" className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                data-active={activeSection === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-xs text-white/60 transition hover:border-purple-400/60 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>

          <GradientButton href="#contact" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </GradientButton>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-lg text-white lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 top-[72px] z-40 border-t border-white/10 bg-ink/95 px-6 pb-8 pt-6 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition hover:bg-white/5 hover:text-white ${
                    activeSection === link.href.slice(1) ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                  <span className="text-purple-400">↗</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-sm text-white/60"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <GradientButton href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </GradientButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
