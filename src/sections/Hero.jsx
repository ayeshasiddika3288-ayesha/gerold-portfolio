import CircularText from "./CircularText";
import heroImg from "../assets/hero.png";
import circleImg from "../assets/herocircle.png";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { clients } from "../data/data";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-10">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora left-1/2 top-[-18%] h-[520px] w-[520px] -translate-x-1/2 bg-purple-700/30" />
        <div className="aurora right-[-10%] top-1/3 h-[420px] w-[420px] bg-indigo-700/20" />
        <div className="aurora bottom-0 left-[-12%] h-[380px] w-[380px] bg-fuchsia-700/15" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(ellipse at 50% 20%, #000 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 20%, #000 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-6 lg:gap-x-6 lg:pt-10">
          <h1 className="whitespace-nowrap font-display text-[clamp(2rem,8.2vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            HELLO
          </h1>

          <CircularText
            text="EXPERT*VIDEO*EDITOR*"
            spinDuration={18}
            onHover="speedUp"
            size={120}
            fontSize={10}
            fontWeight={700}
            className="hidden shrink-0 text-white/80 lg:block"
          >
            <div className="relative h-14 w-14">
              <img src={circleImg} alt="" className="h-full w-full object-contain" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <FaPlay className="ml-0.5 text-xs" />
              </div>
            </div>
          </CircularText>

          <span className="relative grid h-11 w-11 shrink-0 place-items-center lg:hidden">
            <img src={circleImg} alt="" className="h-full w-full object-contain" />
            <FaPlay className="absolute ml-0.5 text-[10px] text-white" />
          </span>

          <h1 className="whitespace-nowrap font-display text-[clamp(2rem,8.2vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            MOTION
          </h1>

          <FaPlus className="absolute left-[3%] top-10 hidden text-lg text-purple-400/70 animate-float lg:block" />
          <FaPlus className="absolute right-[4%] top-24 hidden text-sm text-indigo-400/60 lg:block" />
        </div>

        <div className="mt-8 grid items-center gap-10 lg:mt-2 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[80px]" />
            <img
              src={heroImg}
              alt="Gerold, creative video editor"
              className="w-full rounded-[2rem] object-contain"
            />
          </div>

          <div className="mx-auto flex max-w-sm flex-col items-center text-center lg:items-start lg:justify-center lg:self-center lg:text-left">
            <span className="eyebrow">Creative Video Editor</span>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              I amplify stories through careful footage selection, pacing and
              visual style. My keen attention to detail lets me shape the mood of
              every frame and keep audiences watching.
            </p>

            <div className="mt-8 flex items-end gap-3">
              <span className="font-display text-6xl font-bold leading-none text-white">12+</span>
              <span className="mb-1.5 max-w-[110px] text-left text-xs leading-snug text-muted">
                Years of Experience
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#about"
                aria-label="Scroll to about section"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-purple-400 hover:bg-purple-600"
              >
                <FiArrowUpRight className="text-lg" />
              </a>
              <a
                href="#works"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:text-white"
              >
                View selected work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* trusted clients */}
      <div className="mx-auto mt-16 w-full max-w-7xl px-6 lg:mt-20 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
            Trusted clients around the world
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>

        <div className="marquee mt-8 pb-2">
          <div className="marquee-track items-center gap-14 pr-14">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="shrink-0 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-[0.12em] text-white/35 transition hover:text-white/80"
                style={{
                  fontWeight: index % 3 === 0 ? 800 : 500,
                  letterSpacing: index % 4 === 0 ? "0.3em" : "0.08em",
                }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
