const words = [
  "Graphic",
  "Design",
  "Motion",
  "Development",
  "Branding",
  "Editing",
  "Strategy",
  "Motion",
];

function Row({ reverse = false }) {
  return (
    <div className="marquee">
      <div
        className={`marquee-track items-center gap-8 py-3 ${reverse ? "marquee-track--reverse" : ""}`}
      >
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="flex shrink-0 items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              {word}
            </span>
            <span className="text-[9px] text-white/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function MarqueeBand() {
  return (
    <section aria-hidden="true" className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-white/5" />

      <div className="-mx-6 rotate-[-2.5deg] scale-[1.04] overflow-hidden border-y border-white/20 bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#4c1d95] shadow-[0_20px_70px_-30px_rgba(124,58,237,0.9)] sm:-mx-3">
        <Row />
        <div className="h-px bg-white/20" />
        <Row reverse />
      </div>
    </section>
  );
}

export default MarqueeBand;
