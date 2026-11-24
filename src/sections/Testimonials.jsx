import { useState } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GradientButton from "../components/common/GradientButton";
import Reveal from "../components/common/Reveal";
import { testimonials } from "../data/data";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (direction) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section overflow-hidden">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              label="Testimonials"
              title="Let's hear from dear clients"
              description="The best part of the work is the people — here's what a few of them have to say."
            />
            <div className="mt-7 flex items-center gap-3">
              <GradientButton href="#contact">Contact Me</GradientButton>
              <div className="flex items-center gap-1">
                {testimonials.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Show testimonial ${dotIndex + 1}`}
                    aria-current={index === dotIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      index === dotIndex ? "w-6 bg-purple-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-r from-purple-700/25 to-indigo-700/10 blur-2xl" />

              <article className="glass-card p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-800 text-sm font-semibold text-white ring-2 ring-white/15">
                      {active.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{active.name}</p>
                      <p className="text-[11px] text-muted">{active.role}</p>
                    </div>
                  </div>

                  <FaQuoteLeft className="text-2xl text-purple-400/40" />
                </div>

                <div className="mt-5 flex gap-1 text-[11px] text-amber-300">
                  {Array.from({ length: active.rating }).map((_, star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-white/75">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Verified client
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous testimonial"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs text-white/70 transition hover:border-purple-400 hover:text-white"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next testimonial"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs text-white/70 transition hover:border-purple-400 hover:text-white"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
