import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GradientButton from "../components/common/GradientButton";
import Reveal from "../components/common/Reveal";
import { blogs } from "../data/data";
import { FaPenNib, FaLayerGroup, FaChartLine } from "react-icons/fa6";

const icons = {
  pen: FaPenNib,
  layers: FaLayerGroup,
  chart: FaChartLine,
};

function Blog() {
  return (
    <section id="blog" className="section">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              label="My blog"
              title="Read my recent blog"
              description="Notes on editing craft, motion and building a creative business."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <GradientButton href="#blog" variant="ghost">
              View All Posts
            </GradientButton>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogs.map((post, index) => {
            const Icon = icons[post.icon] ?? FaPenNib;

            return (
              <Reveal key={post.title} delay={index * 0.08}>
                <article className="group glass-card h-full p-3 transition duration-500 hover:-translate-y-1.5 hover:border-purple-400/40">
                  <div
                    className={`relative grid h-48 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${post.tint}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]" />
                    <div className="absolute inset-y-0 right-8 w-px bg-white/10" />
                    <div className="absolute inset-y-0 right-16 w-px bg-white/10" />

                    <Icon className="relative text-4xl text-white/85 transition duration-500 group-hover:scale-110" />

                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium text-white/85 backdrop-blur">
                      {post.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 text-[10px] text-white/60">
                      {post.date}
                    </span>
                  </div>

                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-purple-200">
                      {post.title}
                    </h3>
                    <a
                      href="#blog"
                      className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 transition group-hover:text-white"
                    >
                      Read article
                      <span className="transition group-hover:translate-x-1">→</span>
                    </a>
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

export default Blog;
