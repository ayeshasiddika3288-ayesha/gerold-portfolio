import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GradientButton from "../components/common/GradientButton";
import Reveal from "../components/common/Reveal";
import { skills } from "../data/data";
import {
  FaClapperboard,
  FaFilm,
  FaWandMagicSparkles,
  FaPlay,
} from "react-icons/fa6";

const icons = {
  afterEffects: FaWandMagicSparkles,
  finalCut: FaFilm,
  davinci: FaClapperboard,
  premiere: FaPlay,
};

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora left-[-10%] top-1/4 h-[320px] w-[320px] bg-purple-700/15" />
      </div>

      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              label="My recent work"
              title="My mastering video editing skills"
              description="A decade of editing, grading and motion design — the tools I reach for every single day."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <GradientButton href="#works" variant="ghost">
              Learn More
            </GradientButton>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon] ?? FaFilm;

            return (
              <Reveal key={skill.name} delay={index * 0.07}>
                <article className="group glass-card h-full p-5 transition duration-500 hover:-translate-y-1.5 hover:border-purple-400/40 hover:bg-white/[0.05]">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${skill.tint} text-xl text-white shadow-[0_12px_30px_-12px_rgba(124,58,237,0.9)]`}
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-white">{skill.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{skill.desc}</p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-[11px] text-white/50">
                      <span>Proficiency</span>
                      <span className="font-semibold text-white">{skill.percent}%</span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 transition-[width] duration-1000 ease-out"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
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

export default Skills;
