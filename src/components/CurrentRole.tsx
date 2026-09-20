import { ArrowUpRight, BrainCircuit, CalendarDays, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "AI & digital-skills programs",
    text: "Coordinating practical workshops that introduce learners to modern AI tools and digital capabilities.",
  },
  {
    icon: GraduationCap,
    title: "Training & student development",
    text: "Supporting technical training, bootcamps and guided learning experiences for future-ready skills.",
  },
  {
    icon: Users,
    title: "Program coordination",
    text: "Working across BELI departments to strengthen planning, delivery, learning-tool integration and outreach.",
  },
];

const CurrentRole = () => (
  <section id="experience" className="section-space relative overflow-hidden bg-navy text-white">
    <div className="grid-lines absolute inset-0 opacity-[.08]" />
    <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
    <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

    <div className="site-container relative">
      <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3.5 py-2 text-[.65rem] font-extrabold uppercase tracking-[.18em] text-emerald-300">
            <span className="h-2 w-2 animate-pdot rounded-full bg-emerald-300" />
            Current leadership role
          </span>

          <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-yellow-300">
            Balochistan Emerging Leaders Initiative
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.35rem,5vw,4.4rem)] font-extrabold leading-[.98] tracking-[-.055em]">
            Assistant Director,
            <span className="mt-2 block text-white/55">Centre for AI & Digital Skills</span>
          </h2>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.05] px-4 py-2.5 text-sm font-semibold text-white/65">
            <CalendarDays size={17} className="text-yellow-300" />
            September 2026 — September 2027
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
            Helping BELI expand digital literacy, practical AI learning and technology-driven skill development for students and young people in Balochistan.
          </p>

          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-yellow-300 transition hover:text-white">
            See my leadership journey <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4 self-end">
          {focusAreas.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="group grid grid-cols-[54px_1fr] gap-5 rounded-[1.4rem] border border-white/10 bg-white/[.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.075] md:p-6"
            >
              <div className={`grid h-[54px] w-[54px] place-items-center rounded-2xl ${
                index === 0
                  ? "bg-indigo-400/15 text-indigo-300"
                  : index === 1
                    ? "bg-yellow-300/15 text-yellow-300"
                    : "bg-emerald-300/15 text-emerald-300"
              }`}>
                <Icon size={22} />
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-extrabold tracking-[-.03em]">{title}</h3>
                  <span className="text-[.65rem] font-extrabold tracking-[.18em] text-white/20">0{index + 1}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-white/50">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CurrentRole;
