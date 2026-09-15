import { BarChart3, Bot, BriefcaseBusiness, FileSpreadsheet, Lightbulb, Users } from "lucide-react";

const capabilities = [
  { icon: BarChart3, title: "Financial thinking", text: "Budgeting, financial statements, market analysis and risk-aware decision making.", code: "01" },
  { icon: Lightbulb, title: "Market strategy", text: "Customer research, positioning, business models and practical go-to-market thinking.", code: "02" },
  { icon: FileSpreadsheet, title: "Business analysis", text: "Turning research and spreadsheet data into structured insights and recommendations.", code: "03" },
  { icon: Users, title: "Leadership", text: "Team coordination, financial responsibility and youth-community engagement.", code: "04" },
  { icon: BriefcaseBusiness, title: "Project execution", text: "Moving from an idea to a clear plan, prototype, presentation and public launch.", code: "05" },
  { icon: Bot, title: "AI-enabled work", text: "Using modern AI tools to research, communicate and build faster—with human judgment.", code: "06" },
];

const tools = ["Microsoft Excel", "PowerPoint", "Word", "Financial research", "Business canvases", "AI workflows", "Content strategy", "Web products"];

const Skills = () => (
  <section id="skills" className="section-space border-y border-border bg-[#eef0f7]">
    <div className="site-container">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><span className="eyebrow">Capability stack</span><h2 className="section-title mt-6 max-w-2xl">Practical skills for modern business problems.</h2></div>
        <p className="max-w-md text-sm leading-7 text-muted">A growing toolkit built through coursework, independent projects, leadership roles and continuous experimentation.</p>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, text, code }) => (
          <article key={title} className="group relative bg-background p-7 transition hover:bg-white md:p-8">
            <span className="absolute right-6 top-6 text-xs font-extrabold tracking-[.2em] text-border2">{code}</span>
            <Icon size={26} strokeWidth={1.7} className="text-primary transition group-hover:scale-110" />
            <h3 className="mt-10 font-display text-xl font-extrabold tracking-[-.035em]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-2"><span className="mr-3 text-[.65rem] font-extrabold uppercase tracking-[.18em] text-muted">Tools & methods</span>{tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-white px-3.5 py-2 text-xs font-semibold">{tool}</span>)}</div>
    </div>
  </section>
);

export default Skills;
