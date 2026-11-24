import { useState } from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";
import { FiArrowUpRight, FiCheck, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "../assets/logo.svg";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Licensing", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaDribbble, label: "Dribbble" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="relative px-4 pb-6 pt-6 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#3b1580] via-[#2a0f5c] to-[#140a26] px-6 pb-8 pt-12 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-[90px]" />
          <div className="absolute bottom-[-30%] right-[-5%] h-96 w-96 rounded-full bg-indigo-400/30 blur-[100px]" />
          <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-purple-400/20 blur-[80px]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
              backgroundSize: "38px 38px",
              maskImage: "linear-gradient(to bottom, #000, transparent 75%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 75%)",
            }}
          />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <img src={Logo} alt="Gerold" className="h-9 w-auto" />
            </a>
            <p className="mt-5 max-w-[260px] text-xs leading-relaxed text-white/60">
              Creative video editor and digital marketer helping brands tell
              stories that move people — and metrics.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-xs text-white/75 transition hover:border-white/50 hover:bg-white hover:text-purple-800"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Legal Details
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-xs text-white/60">
              <li>
                <a
                  href="mailto:hello@gerold.studio"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <FiMail className="mt-0.5 shrink-0 text-purple-300" />
                  hello@gerold.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+493012345678"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <FiPhone className="mt-0.5 shrink-0 text-purple-300" />
                  +49 30 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 shrink-0 text-purple-300" />
                Berlin, Germany — Available worldwide
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Subscribe to my newsletter
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-white/55">
              Editing tips, behind-the-scenes and new work — once a month, no
              spam.
            </p>

            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-3 text-xs text-emerald-200">
                <FiCheck className="shrink-0" />
                You&apos;re on the list — talk soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 p-1.5 backdrop-blur focus-within:border-white/60">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-white outline-none placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-purple-800 transition hover:bg-purple-200"
                  >
                    <FiArrowUpRight />
                  </button>
                </div>
              </form>
            )}

            <a
              href="#home"
              className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              Back to top
              <FaArrowUp className="text-[9px]" />
            </a>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-[11px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Gerold. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-purple-300">♥</span> in Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
