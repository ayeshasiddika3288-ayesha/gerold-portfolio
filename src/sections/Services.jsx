import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GradientButton from "../components/common/GradientButton";
import Reveal from "../components/common/Reveal";
import { services } from "../data/data";
import { FaCode, FaPenNib, FaPenRuler, FaCircleCheck } from "react-icons/fa6";

const icons = {
  code: FaCode,
  design: FaPenRuler,
  writing: FaPenNib,
};

function Services() {
  return (
    <section id="services" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora left-1/2 top-0 h-[300px] w-[560px] -translate-x-1/2 bg-purple-700/10" />
      </div>

      <Container>
        <Reveal>
          <SectionHeading
            center
            label="My services"
            title="Here's how I can help!"
            description="Strategy, design and motion under one roof — so your brand feels consistent everywhere it shows up."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? FaCode;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="group glass-card h-full p-6 transition duration-500 hover:-translate-y-1.5 hover:border-purple-400/40">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-lg text-white shadow-[0_10px_25px_-10px_rgba(124,58,237,1)]">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{service.desc}</p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-white/65">
                        <FaCircleCheck className="text-[10px] text-purple-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-300 transition group-hover:text-white"
                  >
                    Start a project
                    <span className="transition group-hover:translate-x-1">→</span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <GradientButton
            href="#contact"
            className="mt-5 w-full rounded-2xl py-4 text-sm lg:rounded-full"
          >
            Let&apos;s Contact With Me
          </GradientButton>
        </Reveal>
      </Container>
    </section>
  );
}

export default Services;
