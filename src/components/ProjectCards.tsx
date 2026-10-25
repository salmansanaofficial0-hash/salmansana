import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

const roles = ["All", "Founder", "Developer"] as const;
export default function ProjectCards() {
  const [selected, setSelected] = useState<(typeof roles)[number]>("All");
  return <div className="ref-project-collection">
    <div className="ref-work-bar"><div className="ref-filters" role="group" aria-label="Filter projects by role">{roles.map(role => <button key={role} aria-pressed={selected === role} className={selected === role ? "active" : ""} onClick={() => setSelected(role)}>{role}</button>)}</div><span className="ref-project-count">{projects.filter(p => selected === "All" || p.role === selected).length} projects</span></div>
    {(["Founder", "Developer"] as const).filter(role => selected === "All" || selected === role).map(role => <section className="ref-role-group" key={role} aria-label={`${role} projects`}>
      <div className="ref-role-heading"><h3>{role} projects</h3><p>{role === "Founder" ? "Ventures I’m building." : "Websites I develop and manage."}</p></div>
      <div className="ref-project-grid">{projects.filter(p => p.role === role).map(p => <article className="ref-project ref-real-project" key={p.id}>
        <a className="ref-project-preview" href={p.link} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}><div className="ref-project-url"><span aria-hidden="true">● ● ●</span><span>{p.link ? new URL(p.link).hostname : p.title}</span><ArrowUpRight size={14}/></div><img src={p.preview} alt={`${p.title} homepage preview`} loading="lazy" width="1348" height="926"/><span className="ref-art-arrow"><ArrowUpRight/></span></a>
        <div className="ref-project-info"><span className="ref-project-role">{p.role === "Founder" ? "Founder · Product & Development" : "Developer · Website Management"}</span><h3>{p.title}</h3><p className="ref-project-description">{p.description}</p><div className="ref-project-tags">{p.tags.slice(0, 3).map(tag => <span className="ref-pill" key={tag}>{tag}</span>)}</div><a className="ref-pill ref-dark ref-project-visit" href={p.link} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={16}/></a></div>
      </article>)}</div>
    </section>)}
  </div>;
}
