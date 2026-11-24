import { useState } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import { experienceTabs } from "../data/data";
import {
  FaBriefcase,
  FaChevronDown,
  FaGraduationCap,
  FaLayerGroup,
  FaVideo,
} from "react-icons/fa6";

const icons = {
  briefcase: FaBriefcase,
  cap: FaGraduationCap,
  video: FaVideo,
  layers: FaLayerGroup,
};

function Experience() {
  const [activeTab, setActiveTab] = useState(experienceTabs[0].id);
  const active = experienceTabs.find((tab) => tab.id === activeTab) ?? experienceTabs[0];

  return (
    <section id="resume" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora left-1/2 top-1/3 h-[420px] w-[520px] -translate-x-1/2 bg-indigo-700/10" />
      </div>

      <Container>
        <Reveal>
          <SectionHeading
            center
            label="My journey"
            title="My background and achievements"
            description="A timeline of the teams, studios and classrooms that shaped how I work."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
            {experienceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-[0_8px_24px_-10px_rgba(124,58,237,1)]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {active.items.map((item, index) => {
            const Icon = icons[item.icon] ?? FaBriefcase;

            return (
              <Reveal key={`${active.id}-${item.role}`} delay={index * 0.06}>
                <article className="glass-card group flex flex-col gap-4 p-5 transition hover:border-purple-400/35 sm:flex-row sm:items-center">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-purple-600/30 to-indigo-600/10 text-purple-300">
                    <Icon />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                      <span className="h-1 w-1 rounded-full bg-white/25" />
                      <p className="text-xs text-purple-300/90">{item.company}</p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] text-white/55">
                      {item.period}
                    </span>
                    <FaChevronDown className="text-[10px] text-white/25 transition group-hover:text-purple-300" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
