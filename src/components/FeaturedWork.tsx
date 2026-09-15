import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/portfolio-data";

const FeaturedWork = () => (
  <section className="section-space bg-navy text-white">
    <div className="site-container">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div><p className="page-kicker">Selected work</p><h2 className="section-title max-w-2xl">Ideas moved beyond the notebook.</h2></div>
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-300 hover:text-white">View every project <ArrowUpRight size={17} /></Link>
      </div>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {projects.slice(0, 3).map((project, index) => (
          <article key={project.id} className={`group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[.07] ${index === 0 ? "lg:row-span-2 lg:p-10" : ""}`}>
            <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl transition group-hover:opacity-35`} />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-[.18em] text-white/30">{project.id}</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.15em] text-white/50">{project.category}</span></div>
              <h3 className={`mt-12 font-display font-extrabold tracking-[-.05em] ${index === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>{project.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">{project.description}</p>
              <p className="mt-6 border-l border-yellow-300/50 pl-4 text-sm font-semibold leading-6 text-white/75">{project.outcome}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[.07] px-3 py-1.5 text-[.65rem] font-semibold text-white/45">{tag}</span>)}</div>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-yellow-300 hover:text-white">{project.linkLabel} <ArrowUpRight size={16} /></a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
