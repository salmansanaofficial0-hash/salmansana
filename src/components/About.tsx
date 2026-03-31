import { useEffect, useRef } from "react";
import aboutMain from "@/assets/about-main.jpg";
import aboutSm1 from "@/assets/about-sm1.jpg";
import aboutSm2 from "@/assets/about-sm2.jpg";

const tags = [
  { label: "Finance", cls: "text-primary border-primary/20 bg-blue-light" },
  { label: "Marketing", cls: "text-teal border-teal/20 bg-teal-light" },
  { label: "Strategy", cls: "text-violet border-violet/20 bg-violet-light" },
  { label: "Business Dev", cls: "text-amber border-amber/20 bg-amber-light" },
  { label: "Market Research", cls: "text-rose border-rose/20 bg-rose-light" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0'); });
    }, { threshold: 0.07 });
    ref.current?.querySelectorAll('.reveal-el').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-[5%] bg-background" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="grid grid-cols-2 gap-2.5 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]">
          <div className="row-span-2 rounded-[18px] overflow-hidden bg-card">
            <img src={aboutMain} alt="Studying" className="w-full h-full min-h-[400px] object-cover object-[top_center] hover:scale-[1.04] transition-transform duration-[450ms]" loading="lazy" />
          </div>
          <div className="rounded-[18px] overflow-hidden bg-card relative">
            <img src={aboutSm1} alt="Presenting" className="w-full h-[190px] object-cover object-[top_center] hover:scale-[1.04] transition-transform duration-[450ms]" loading="lazy" />
            <span className="absolute bottom-2 left-2 bg-foreground/70 backdrop-blur-sm text-primary-foreground text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">Presenting</span>
          </div>
          <div className="rounded-[18px] overflow-hidden bg-card relative">
            <img src={aboutSm2} alt="Working" className="w-full h-[190px] object-cover object-[top_center] hover:scale-[1.04] transition-transform duration-[450ms]" loading="lazy" />
            <span className="absolute bottom-2 left-2 bg-foreground/70 backdrop-blur-sm text-primary-foreground text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">Working</span>
          </div>
        </div>

        <div className="reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.08s' }}>
          <div className="text-[0.73rem] font-bold uppercase tracking-[0.16em] text-blue-mid mb-3">About Me</div>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground mb-6">
            Driven by Curiosity,<br /><em className="italic text-blue-mid">Fueled by Ambition</em>
          </h2>
          <div className="space-y-4">
            <p className="text-[0.97rem] text-muted leading-[1.85]">
              I'm <strong className="text-foreground">Salman Sana</strong>, a passionate BBA student at the <strong className="text-foreground">University of Turbat</strong> with dual specializations in <strong className="text-foreground">Finance</strong> and <strong className="text-foreground">Marketing</strong>. Currently in my 3rd semester, I'm building a strong foundation in business strategy, market dynamics, and financial analysis.
            </p>
            <p className="text-[0.97rem] text-muted leading-[1.85]">
              My academic journey has equipped me with analytical thinking and a strategic mindset. I'm eager to apply my knowledge through internships and collaborative projects that create meaningful impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-[7px] mt-6">
            {tags.map(t => (
              <span key={t.label} className={`text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all cursor-default ${t.cls}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
