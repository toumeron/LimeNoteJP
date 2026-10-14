import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function useSectionSelection(
  ids: readonly string[],
  fallback: string,
  path: string,
) {
  const hash = useLocation({ select: (location) => location.hash });
  const navigate = useNavigate();
  const selected = ids.includes(hash) ? hash : fallback;
  const select = (id: string) => {
    if (ids.includes(id))
      void navigate({
        to: path,
        hash: id,
        resetScroll: false,
        hashScrollIntoView: {
          block: "start",
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        },
      });
  };
  return [selected, select] as const;
}

export function ExperienceTabs({
  items,
  selected,
  onSelect,
  label,
  vertical = false,
}: {
  items: readonly { id: string; label: string }[];
  selected: string;
  onSelect: (id: string) => void;
  label: string;
  vertical?: boolean;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [isVertical, setIsVertical] = useState(vertical);
  useEffect(() => {
    if (!vertical) return;
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsVertical(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [vertical]);
  useEffect(() => {
    if (!vertical || isVertical) return;
    const index = items.findIndex((item) => item.id === selected);
    const button = refs.current[index];
    const strip = button?.parentElement;
    if (button && strip)
      strip.scrollTo({
        left: button.offsetLeft - (strip.clientWidth - button.offsetWidth) / 2,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
  }, [selected, isVertical, vertical, items]);
  return (
    <div
      className="experience-tabs"
      role="tablist"
      aria-label={label}
      aria-orientation={isVertical ? "vertical" : "horizontal"}
    >
      {items.map((item, index) => (
        <button
          key={item.id}
          ref={(el) => {
            refs.current[index] = el;
          }}
          type="button"
          role="tab"
          id={`experience-tab-${item.id}`}
          aria-controls={`experience-panel-${item.id}`}
          aria-selected={selected === item.id}
          tabIndex={selected === item.id ? 0 : -1}
          onClick={() => onSelect(item.id)}
          onKeyDown={(event) => {
            const direction = ["ArrowRight", "ArrowDown"].includes(event.key)
              ? 1
              : ["ArrowLeft", "ArrowUp"].includes(event.key)
                ? -1
                : 0;
            if (!direction && event.key !== "Home" && event.key !== "End")
              return;
            event.preventDefault();
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? items.length - 1
                  : (index + direction + items.length) % items.length;
            onSelect(items[next].id);
            refs.current[next]?.focus();
          }}
        >
          {item.label}
          <span aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  );
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (
      !root ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.06 },
    );
    const observe = () =>
      root
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    root.dataset.motionReady = "true";
    observe();
    const mutations = new MutationObserver((records) => {
      for (const record of records)
        for (const node of record.removedNodes) {
          if (node instanceof Element) {
            observer.unobserve(node);
            node
              .querySelectorAll("[data-reveal]")
              .forEach((el) => observer.unobserve(el));
          }
        }
      observe();
    });
    mutations.observe(root, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);
  return ref;
}
