import Container from "../components/common/Container";
import GradientButton from "../components/common/GradientButton";
import Counter from "../components/common/Counter";
import Reveal from "../components/common/Reveal";
import { stats } from "../data/data";
import heroImg from "../assets/hero.png";
import { FaPlay } from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora right-[-8%] top-10 h-[360px] w-[360px] bg-indigo-600/20" />
        <div className="aurora bottom-0 left-[-10%] h-[300px] w-[300px] bg-purple-700/15" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute -inset-3 -z-10 rounded-[2.8rem] bg-gradient-to-br from-indigo-500/30 via-purple-600/20 to-transparent blur-xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-600/70 via-blue-700/50 to-purple-800/60">
                <img
                  src={heroImg}
                  alt="Gerold editing in the studio"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-600 text-[10px] text-white ring-1 ring-white/30">
                      <FaPlay className="ml-0.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">Studio Showreel</p>
                      <p className="text-[10px] text-white/60">2025 · 2 min 14 sec</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/25 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                    Play
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-6 hidden rounded-2xl border border-white/15 bg-panel/90 px-4 py-3 text-center backdrop-blur-md sm:block">
                <p className="font-display text-2xl font-bold text-white">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Years</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">About me</span>
            <h2 className="mt-5 font-display text-2xl font-bold uppercase leading-[1.18] tracking-tight text-white sm:text-3xl lg:text-4xl">
              Passionate on digital marketing, focused on{" "}
              <span className="text-gradient">driving results.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              I partner with founders, studios and marketing teams to turn ideas
              into moving stories. From the first rough cut to the final grade, I
              obsess over rhythm, emotion and clarity — because a great edit is
              felt before it is noticed.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-white lg:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <GradientButton href="#contact">Hire Me</GradientButton>
              <a
                href="#works"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
              >
                See my portfolio
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
