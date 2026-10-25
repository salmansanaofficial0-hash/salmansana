import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "@/styles/site-motion.css";

const revealSelector = [
  ".ref-heading h2", ".ref-work-bar", ".ref-project", ".ref-services > h2",
  ".ref-service", ".ref-experience-row", ".ref-gallery figure",
  ".ref-contact > h2", ".ref-contact > p", ".ref-contact > a", ".ref-contact footer > a",
  ".ref-secondary main h1", ".ref-secondary main h2", ".ref-secondary main article",
  ".ref-secondary main figure", ".ref-secondary main .outline-card",
].join(",");

/** One motion lifecycle for every public route, including lazy and CMS content. */
export default function SiteMotion() {
  const { pathname } = useLocation();
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const seen = new WeakSet<Element>();
    const running = new Set<Animation>();
    let frame = 0;
    let pointerFrame = 0;
    let activeCard: HTMLElement | null = null;
    let activeButton: HTMLElement | null = null;
    let portrait: HTMLElement | null = null;
    let clouds: HTMLElement | null = null;
    let hero: HTMLElement | null = null;

    const animate = (element: Element, index: number) => {
      if (reduced.matches || typeof element.animate !== "function") return;
      const animation = element.animate(
        [{ opacity: 0, translate: "0 26px" }, { opacity: 1, translate: "0 0" }],
        { duration: 650, delay: Math.min(index, 3) * 65, easing: "cubic-bezier(.2,.75,.25,1)", fill: "backwards" },
      );
      running.add(animation);
      animation.onfinish = () => running.delete(animation);
    };
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
        observer.unobserve(entry.target);
        animate(entry.target, index);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    const scan = () => {
      document.querySelectorAll(revealSelector).forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        // Descendant titles should not animate twice inside a moving card.
        if (!element.matches("article,figure,.ref-project,.ref-service,.outline-card") && element.closest("article,figure,.ref-project,.ref-service,.outline-card")) return;
        observer.observe(element);
      });
      portrait = document.querySelector(".ref-portrait");
      clouds = document.querySelector(".ref-clouds");
      hero = document.querySelector(".ref-hero");
      scheduleScroll();
    };
    const updateScroll = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("--reading-progress", String(max > 0 ? window.scrollY / max : 0));
      if (reduced.matches) return;
      // Only move the portrait while its hero is visible; no continuous render loop.
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const shift = Math.max(-40, Math.min(40, -rect.top * 0.065));
        portrait?.style.setProperty("--portrait-scroll", `${shift}px`);
      }
      clouds?.style.setProperty("--cloud-scroll", `${Math.min(window.scrollY * 0.012, 65)}px`);
    };
    function scheduleScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    }
    const resetPointer = () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      activeCard?.style.removeProperty("--tilt-x");
      activeCard?.style.removeProperty("--tilt-y");
      activeButton?.style.removeProperty("--magnet-x");
      activeButton?.style.removeProperty("--magnet-y");
      activeCard = null;
      activeButton = null;
    };
    const onPointer = (event: PointerEvent) => {
      if (reduced.matches || !finePointer.matches || event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>(".ref-project") ?? null;
      const button = target?.closest<HTMLElement>(".ref-pill.ref-dark") ?? null;
      if (activeCard !== card || activeButton !== button) resetPointer();
      activeCard = card;
      activeButton = button;
      if (pointerFrame || (!card && !button)) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = 0;
        if (card?.isConnected) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--tilt-x", `${((event.clientY - rect.top) / rect.height - .5) * -3}deg`);
          card.style.setProperty("--tilt-y", `${((event.clientX - rect.left) / rect.width - .5) * 3}deg`);
        }
        if (button?.isConnected) {
          const rect = button.getBoundingClientRect();
          button.style.setProperty("--magnet-x", `${Math.max(-4, Math.min(4, (event.clientX - rect.left - rect.width / 2) * .07))}px`);
          button.style.setProperty("--magnet-y", `${Math.max(-3, Math.min(3, (event.clientY - rect.top - rect.height / 2) * .07))}px`);
        }
      });
    };
    const preferenceChanged = () => {
      running.forEach(animation => animation.cancel());
      running.clear();
      resetPointer();
      portrait?.style.removeProperty("--portrait-scroll");
      clouds?.style.removeProperty("--cloud-scroll");
    };
    const mutations = new MutationObserver(scan);
    mutations.observe(document.getElementById("root")!, { childList: true, subtree: true });
    const size = new ResizeObserver(scheduleScroll);
    size.observe(document.body);
    scan();
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll, { passive: true });
    document.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", resetPointer);
    reduced.addEventListener("change", preferenceChanged);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      size.disconnect();
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
      document.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", resetPointer);
      reduced.removeEventListener("change", preferenceChanged);
      window.cancelAnimationFrame(frame);
      preferenceChanged();
    };
  }, [pathname]);

  return pathname.startsWith("/admin") ? null : <div className="site-reading-progress" ref={progress} aria-hidden="true" />;
}
