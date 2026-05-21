import { useEffect, useRef } from "react";

const timeline = [
  { year: "August 2024 — Present", degree: "Bachelor of Business Administration", school: "University of Turbat (UOT) · Balochistan, Pakistan", desc: "Specializing in Finance & Marketing. Currently in 4th Semester — developing expertise in business strategy, market analysis, and financial management.", dotColor: "border-blue-mid", dotShadow: "shadow-[0_0_0_4px_hsl(var(--blue-light))]", yrColor: "text-blue-mid" },
  { year: "2021 — 2023", degree: "FSc — Pre-Science", school: "Bahria College Ormara · Pakistan", desc: "Completed Higher Secondary Certificate in Science, building a strong foundation in analytical and quantitative reasoning.", dotColor: "border-teal", dotShadow: "shadow-[0_0_0_4px_hsl(var(--teal-light))]", yrColor: "text-teal" },
  { year: "2019 — 2021", degree: "Secondary School Certificate (Matric)", school: "BISIE · Quetta, Balochistan", desc: "Completed Class 10th with a Science focus, establishing a strong foundation across core academic disciplines.", dotColor: "border-violet", dotShadow: "shadow-[0_0_0_4px_hsl(var(--violet-light))]", yrColor: "text-violet" },
];

const languages = [
  { name: "Balochi", badge: "Mother Tongue", cls: "bg-teal-light text-teal border-teal/20" },
  { name: "Urdu", badge: "Proficient", cls: "bg-blue-light text-primary border-primary/20" },
  { name: "English", badge: "B1 Level", cls: "bg-violet-light text-violet border-violet/20" },
];

const softSkills = ["Communication", "Teamwork", "Adaptability", "Leadership", "Trustworthy", "Tech-Savvy", "Documentation", "Problem Solving"];

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0'); });
    }, { threshold: 0.07 });
    ref.current?.querySelectorAll('.reveal-el').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" className="py-28 px-[5%] bg-background" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-start">
        <div className="reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]">
          <div className="text-[0.73rem] font-bold uppercase tracking-[0.16em] text-blue-mid mb-3">Education</div>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground mb-6">
            Academic<br /><em className="italic text-blue-mid">Journey</em>
          </h2>
          <div className="pl-7 border-l-2 border-border mt-8 space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="relative pb-11 last:pb-0">
                <div className={`absolute -left-[2.15rem] top-1 w-[13px] h-[13px] rounded-full bg-background border-[2.5px] ${t.dotColor} ${t.dotShadow}`} />
                <div className={`text-[0.71rem] font-bold uppercase tracking-[0.13em] ${t.yrColor} mb-2`}>{t.year}</div>
                <div className="font-display text-xl font-bold text-foreground tracking-tight mb-1">{t.degree}</div>
                <div className="text-[0.85rem] text-muted font-medium mb-2">{t.school}</div>
                <div className="text-[0.83rem] text-muted leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-blue-light to-[#e0e7ff] border border-primary/15 rounded-[18px] p-6">
            <div className="text-[0.71rem] font-bold uppercase tracking-[0.13em] text-primary mb-2">Currently Pursuing</div>
            <div className="font-display text-3xl font-bold text-foreground tracking-[-0.03em] leading-none mb-1">BBA · 4th Sem</div>
            <div className="text-[0.85rem] text-muted">Finance &amp; Marketing<br />University of Turbat</div>
          </div>

          <div className="bg-card border border-border rounded-[18px] p-6">
            <div className="text-[0.71rem] font-bold uppercase tracking-[0.13em] text-muted mb-4">Languages</div>
            <div className="flex flex-col gap-3">
              {languages.map(l => (
                <div key={l.name} className="flex items-center justify-between">
                  <span className="text-[0.88rem] font-semibold text-foreground">{l.name}</span>
                  <span className={`text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full border ${l.cls}`}>{l.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-[18px] p-6">
            <div className="text-[0.71rem] font-bold uppercase tracking-[0.13em] text-muted mb-4">Soft Skills</div>
            <div className="flex flex-wrap gap-1.5">
              {softSkills.map(s => (
                <span key={s} className="text-[0.77rem] font-semibold bg-background border border-border text-foreground px-3 py-1 rounded-lg transition-all cursor-default hover:bg-ink hover:text-primary-foreground hover:border-ink">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
