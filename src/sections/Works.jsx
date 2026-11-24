import { useRef } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GradientButton from "../components/common/GradientButton";
import Reveal from "../components/common/Reveal";
import { works } from "../data/data";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function BakeryArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] p-6">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
      </div>

      <div className="mt-6 max-w-[78%]">
        <p className="font-display text-2xl font-semibold leading-tight text-white">
          Delightful flavors, baked fresh daily.
        </p>
        <p className="mt-3 text-[10px] leading-relaxed text-white/45">
          Artisan sourdough, seasonal pastries and small-batch coffee — delivered
          to your door.
        </p>
        <span className="mt-4 inline-flex rounded-full bg-amber-300 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-amber-950">
          Order now
        </span>
      </div>

      <div className="absolute -bottom-6 right-6 h-28 w-28 rounded-full bg-gradient-to-br from-amber-200 to-orange-500 opacity-90 blur-[1px]" />
      <div className="absolute bottom-4 right-3 grid h-24 w-24 place-items-center rounded-full border border-white/20 text-center text-[9px] uppercase tracking-[0.2em] text-white/80">
        Baked
        <br />
        with love
      </div>
    </div>
  );
}

function SneakerArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#4c1d95] to-[#1e1b4b] p-6">
      <div className="absolute -left-10 top-4 h-40 w-40 rounded-full bg-fuchsia-400/30 blur-2xl" />
      <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">Limited drop</p>

      <div className="absolute left-1/2 top-1/2 w-[132px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[1.4rem] border border-white/25 bg-black/40 p-2.5 shadow-2xl backdrop-blur">
        <div className="overflow-hidden rounded-[1rem] bg-gradient-to-b from-[#f8fafc] to-[#c7d2fe] p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-black/20" />
          <div className="mt-6 flex h-20 items-center justify-center">
            <div className="relative h-10 w-20 rotate-[-12deg] rounded-[999px_60px_30px_40px] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900">
              <span className="absolute bottom-1 left-2 right-2 h-1.5 rounded-full bg-white/25" />
            </div>
          </div>
          <p className="mt-2 text-center text-[8px] font-bold uppercase tracking-[0.16em] text-slate-900">
            Sneakers
          </p>
          <p className="text-center text-[7px] text-slate-500">Collection 2025</p>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/80">
          Motion
          <br />
          Campaign
        </span>
        <span className="rounded-full border border-white/25 px-3 py-1 text-[9px] uppercase tracking-widest text-white/70">
          02:14
        </span>
      </div>
    </div>
  );
}

function BrandArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0b0d] p-6">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0px,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_9px)]" />

      <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">Editorial motion</p>
      <p className="mt-10 font-serif text-[2.6rem] leading-[0.95] text-white">
        Brand
        <br />
        Better
        <span className="text-purple-400">.</span>
      </p>

      <div className="mt-6 h-px w-24 bg-white/20" />
      <p className="mt-4 max-w-[70%] text-[10px] leading-relaxed text-white/45">
        A monochrome identity system built for a new generation of creators.
      </p>

      <div className="absolute right-6 top-20 h-24 w-16 rotate-6 rounded-sm bg-gradient-to-b from-white/25 to-white/5" />
      <span className="absolute bottom-6 right-6 rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60">
        Identity · 2024
      </span>
    </div>
  );
}

const artComponents = {
  bakery: BakeryArt,
  sneakers: SneakerArt,
  brand: BrandArt,
};

function Works() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="works" className="section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora right-[-10%] top-1/4 h-[380px] w-[380px] bg-purple-700/15" />
      </div>

      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              label="My portfolio"
              title="Recent work for my clients"
              description="Selected projects across branding, campaigns and product launches."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous project"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FaArrowLeft className="text-sm" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next project"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {works.map((work, index) => {
            const Art = artComponents[work.art] ?? BakeryArt;

            return (
              <Reveal
                key={work.title}
                delay={index * 0.08}
                className="min-w-[86%] snap-start sm:min-w-[60%] lg:min-w-0"
              >
                <article className="group glass-card h-full p-3 transition duration-500 hover:-translate-y-1.5 hover:border-purple-400/40">
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <Art />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white text-xs text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <FaArrowUpRightFromSquare />
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-purple-300/80">
                        {work.tag} · {work.year}
                      </p>
                      <h3 className="mt-1.5 text-base font-semibold text-white">{work.title}</h3>
                      <p className="mt-1 text-xs text-muted">{work.subtitle}</p>
                    </div>
                    <span className="text-white/30 transition group-hover:text-purple-300">↗</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <GradientButton href="#contact" variant="ghost">
              Start a project together
            </GradientButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Works;
