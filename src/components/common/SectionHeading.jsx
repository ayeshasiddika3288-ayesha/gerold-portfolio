function SectionHeading({ label, title, description, center = false, className = "" }) {
  const alignment = center ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {label && <span className="eyebrow">{label}</span>}
      <h2 className="mt-5 max-w-2xl text-2xl font-bold uppercase leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
