import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import original from "@/assets/salman-cutout.webp";
import "@/styles/hero-portraits.css";

const slides = [
  { src: original, alt: "Salman Sana" },
  { src: "/portraits/salman-01.webp", alt: "Salman Sana, seated portrait" },
  { src: "/portraits/salman-02.webp", alt: "Salman Sana, seated with crossed legs" },
  { src: "/portraits/salman-03.webp", alt: "Salman Sana, close-up portrait" },
  { src: "/portraits/salman-04.webp", alt: "Salman Sana wearing his BELI lanyard" },
  { src: "/portraits/salman-05.webp", alt: "Salman Sana, standing portrait" },
];

export default function HeroPortraitSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [reduced, setReduced] = useState(false);
  const loaded = useRef(new Set<number>([0]));
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preference = () => setReduced(media.matches);
    preference();
    media.addEventListener("change", preference);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    const observer = new IntersectionObserver(entries => setInView(entries.some(entry => entry.isIntersecting)), { threshold: .15 });
    if (root.current) observer.observe(root.current);
    return () => {
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", visibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (paused || interacting || reduced || !inView || !pageVisible) return;
    const timer = window.setInterval(() => setActive(current => {
      // Never fade to an unloaded or failed image.
      for (let step = 1; step < slides.length; step++) {
        const next = (current + step) % slides.length;
        if (loaded.current.has(next)) return next;
      }
      return current;
    }), 5000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reduced, inView, pageVisible]);

  return <div className="ref-portrait hero-portrait-slideshow" ref={root} role="region" aria-roledescription="carousel" aria-label="Salman Sana portrait slideshow"
    onPointerEnter={event => { if (event.pointerType !== "touch") setInteracting(true); }} onPointerLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    {slides.map((slide, index) => <img key={slide.src} src={slide.src} alt={index === active ? slide.alt : ""} aria-hidden={index !== active} className={`hero-portrait-slide ${index === active ? "is-active" : ""}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" onLoad={() => loaded.current.add(index)} onError={() => loaded.current.delete(index)}/>) }
    <div className="hero-portrait-controls" aria-label="Portrait controls">
      {slides.map((slide, index) => <button key={slide.src} type="button" className="hero-portrait-dot" aria-label={`Show portrait ${index + 1}`} aria-pressed={active === index} onClick={() => { if (loaded.current.has(index)) { setActive(index); setPaused(true); } }}><span/></button>)}
      <button className="hero-portrait-pause" type="button" aria-label={paused || reduced ? "Play portrait slideshow" : "Pause portrait slideshow"} disabled={reduced} onClick={() => setPaused(value => !value)}>{paused || reduced ? <Play size={12}/> : <Pause size={12}/>}</button>
    </div>
  </div>;
}
