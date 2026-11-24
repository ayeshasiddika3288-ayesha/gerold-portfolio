import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

function Counter({ value, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frameId;
    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (reduceMotion) {
          setCount(value);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);

        // safety net for background tabs where rAF can be throttled
        timeoutId = setTimeout(() => setCount(value), duration + 500);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [value, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {reduceMotion ? value : count}
      {suffix}
    </span>
  );
}

export default Counter;
