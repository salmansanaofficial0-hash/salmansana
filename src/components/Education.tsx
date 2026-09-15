import { Award, BookOpen, Building2 } from "lucide-react";

const journey = [
  { period: "2024 — Present", title: "Bachelor of Business Administration", place: "University of Turbat", detail: "Finance and Marketing focus · 4th Semester", icon: Building2 },
  { period: "2021 — 2023", title: "Higher Secondary Education", place: "Bahria College Ormara", detail: "Science foundation and quantitative reasoning", icon: BookOpen },
  { period: "2019 — 2021", title: "Secondary School Certificate", place: "Balochistan", detail: "Science group", icon: Award },
];

const Education = () => (
  <section id="education" className="section-space bg-background">
    <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
      <div>
        <span className="eyebrow">Learning journey</span>
        <h2 className="section-title mt-6">Learning in class. Testing it in the real world.</h2>
        <p className="body-copy mt-6">My education gives me the frameworks; projects and leadership roles teach me how those frameworks behave around real people and constraints.</p>
        <div className="mt-8 rounded-2xl bg-gold p-6 text-ink"><p className="text-xs font-extrabold uppercase tracking-[.18em]">Languages</p><p className="mt-3 font-display text-xl font-extrabold">Balochi · Urdu · English</p></div>
      </div>
      <div className="relative">
        <div className="absolute bottom-7 left-[23px] top-7 w-px bg-border" />
        {journey.map(({ period, title, place, detail, icon: Icon }, index) => (
          <article key={title} className="relative grid grid-cols-[48px_1fr] gap-5 pb-10 last:pb-0">
            <div className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border ${index === 0 ? "border-primary bg-primary text-white" : "border-border bg-background text-muted"}`}><Icon size={19} /></div>
            <div className="outline-card rounded-2xl p-6">
              <p className="text-[.68rem] font-extrabold uppercase tracking-[.17em] text-primary">{period}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold tracking-[-.03em]">{title}</h3>
              <p className="mt-2 text-sm font-bold">{place}</p>
              <p className="mt-1 text-sm text-muted">{detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
