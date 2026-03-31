import { useEffect, useRef } from "react";

const skills = [
  { icon: "📊", title: "Financial Analysis", desc: "Understanding financial statements, budgeting, and investment concepts for strategic decision-making.", pct: 75, c1: "#1e40af", c2: "#0f766e", icoBg: "bg-blue-light", delay: 0 },
  { icon: "📈", title: "Marketing Strategy", desc: "Market research, consumer behavior analysis, and brand development fundamentals.", pct: 80, c1: "#0f766e", c2: "#6d28d9", icoBg: "bg-teal-light", delay: 0.07 },
  { icon: "🧮", title: "Business Analytics", desc: "Data-driven analysis using spreadsheets and business intelligence tools for actionable insights.", pct: 70, c1: "#6d28d9", c2: "#1e40af", icoBg: "bg-violet-light", delay: 0.14 },
  { icon: "📋", title: "Project Management", desc: "Organized, detail-oriented approach to planning and executing academic and team projects.", pct: 65, c1: "#b45309", c2: "#be123c", icoBg: "bg-amber-light", delay: 0.07 },
  { icon: "🤝", title: "Communication", desc: "Strong verbal and written skills for collaboration and stakeholder engagement.", pct: 90, c1: "#0f766e", c2: "#1e40af", icoBg: "bg-teal-light", delay: 0.14 },
  { icon: "💡", title: "Problem Solving", desc: "Analytical thinking and creative approaches to tackle challenges and spot opportunities.", pct: 85, c1: "#6d28d9", c2: "#be123c", icoBg: "bg-violet-light", delay: 0.21 },
];

const tools = [
  { name: "Microsoft Word", color: "#185EA5" },
  { name: "Microsoft Excel", color: "#1D6F42" },
  { name: "PowerPoint", color: "#C43E1C" },
  { name: "Outlook", color: "#0078D4" },
  { name: "Google Drive", color: "#34A853" },
  { name: "Blog Writing", color: "#EA4335" },
  { name: "Analytics", color: "#6366f1" },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0'); });
    }, { threshold: 0.07 });
    ref.current?.querySelectorAll('.reveal-el').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-[5%] bg-card" ref={ref}>
      <div className="text-center max-w-[560px] mx-auto mb-14">
        <div className="text-[0.73rem] font-bold uppercase tracking-[0.16em] text-blue-mid mb-3">Expertise</div>
        <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground mb-4">
          Skills &amp; <em className="italic text-blue-mid">Competencies</em>
        </h2>
        <p className="text-[0.97rem] text-muted leading-relaxed">Core capabilities developed through academic coursework, self-study, and practical projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((sk, i) => (
          <div key={i} className="group bg-background border border-border rounded-[20px] p-7 transition-all duration-300 relative overflow-hidden cursor-default hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:border-transparent reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]"
               style={{ transitionDelay: `${sk.delay}s` }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] sk-bar-gradient" style={{ background: `linear-gradient(90deg, ${sk.c1}, ${sk.c2})` }} />
            <div className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-4 text-xl ${sk.icoBg}`}>{sk.icon}</div>
            <div className="text-[0.97rem] font-bold text-foreground mb-2">{sk.title}</div>
            <div className="text-[0.83rem] text-muted leading-relaxed">{sk.desc}</div>
            <div className="mt-4 h-[3px] bg-border rounded overflow-hidden">
              <div className="h-full rounded transition-[width] duration-[1.2s]" style={{ width: `${sk.pct}%`, background: `linear-gradient(90deg, ${sk.c1}, ${sk.c2})` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-[20px] p-8 mt-4 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.12s' }}>
        <div className="text-[0.72rem] font-bold uppercase tracking-[0.13em] text-muted mb-5">Digital Tools &amp; Software</div>
        <div className="flex flex-wrap gap-2">
          {tools.map((t, i) => (
            <div key={i} className="inline-flex items-center gap-[7px] bg-card border border-border text-foreground text-[0.81rem] font-medium px-4 py-1.5 rounded-[10px] transition-all cursor-default hover:border-blue-mid hover:text-blue-mid hover:bg-blue-light">
              <div className="w-[7px] h-[7px] rounded-full" style={{ background: t.color }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
