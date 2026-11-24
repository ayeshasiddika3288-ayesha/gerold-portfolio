import { FiArrowUpRight } from "react-icons/fi";

function GradientButton({
  children,
  href,
  className = "",
  variant = "solid",
  showArrow = true,
  ...props
}) {
  const base = variant === "ghost" ? "btn-ghost" : "btn-solid";
  const classes = `${base} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <FiArrowUpRight className="text-base" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export default GradientButton;
