import { useEffect, useRef, useState } from "react";

/** Decorative light stays separate from text and pauses outside the viewport. */
export function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!el || !("IntersectionObserver" in window)) return;
    let visible = false;
    const update = () => setActive(visible && !media.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(el);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="ambient-field"
      data-active={active}
      aria-hidden="true"
    >
      <i className="ambient-light ambient-light-blue" />
      <i className="ambient-light ambient-light-teal" />
      <i className="ambient-light ambient-light-warm" />
      <div className="ambient-glass" />
      <div className="ambient-grain" />
    </div>
  );
}
