import { useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { projects } from "@/lib/portfolio-data";

const categories = ["All", "Product", "Platform", "Community", "Digital"] as const;

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");
  const filtered = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);
  return (
    <>
      <Helmet><title>Projects | Salman Sana</title><meta name="description" content="Explore Salman Sana's real projects across product strategy, student opportunities, digital products and youth-community work." /><link rel="canonical" href="https://www.salmansana.me/portfolio" /></Helmet>
      <Navbar />
      <main>
        <section className="page-hero noise"><div className="grid-lines absolute inset-0 opacity-10" /><div className="site-container relative"><p className="page-kicker">Selected projects</p><h1 className="page-title">Work that turns<br /><span className="text-yellow-300">thinking into action.</span></h1><p className="page-lead">A collection of products, platforms and initiatives shaped through research, business thinking, collaboration and steady iteration.</p></div></section>
        <section className="section-space"><div className="site-container">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end"><div><span className="eyebrow">Project index</span><h2 className="section-title mt-5">Real work. Honest outcomes.</h2></div><div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${selectedCategory === category ? "bg-ink text-white" : "border border-border bg-white hover:border-foreground"}`} aria-pressed={selectedCategory === category}>{category}</button>)}</div></div>
          <div className="mt-10 space-y-5">{filtered.map((project, index) => <article key={project.id} className="group grid overflow-hidden rounded-[1.6rem] border border-border bg-card transition hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(15,23,42,.08)] lg:grid-cols-[.4fr_1fr]">
            <div className={`relative min-h-[230px] overflow-hidden bg-gradient-to-br ${project.accent} p-7 text-ink`}><div className="grid-lines absolute inset-0 opacity-20" /><span className="relative text-xs font-extrabold tracking-[.18em]">{project.id} / {String(filtered.length).padStart(2, "0")}</span><p className="absolute bottom-7 left-7 font-display text-5xl font-extrabold tracking-[-.07em] opacity-25">{project.category}</p></div>
            <div className="p-7 md:p-10"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start"><div><p className="text-[.65rem] font-extrabold uppercase tracking-[.18em] text-primary">{project.category}</p><h3 className="mt-2 font-display text-3xl font-extrabold tracking-[-.05em] md:text-4xl">{project.title}</h3></div>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="secondary-button shrink-0">{project.linkLabel} <ArrowUpRight size={16} /></a>}</div><p className="mt-6 max-w-3xl text-base leading-8 text-muted">{project.description}</p><div className="mt-6 flex gap-3 rounded-xl bg-background p-4 text-sm font-semibold leading-6"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-teal" /><span>{project.outcome}</span></div><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted">{tag}</span>)}</div></div>
          </article>)}</div>
        </div></section>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
