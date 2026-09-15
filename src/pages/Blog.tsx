import { Helmet } from "react-helmet";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { articles } from "@/lib/portfolio-data";

const Blog = () => (
  <>
    <Helmet><title>Insights | Salman Sana</title><meta name="description" content="Clear notes on finance, marketing, entrepreneurship and the lessons Salman Sana is learning through business school and practical projects." /><link rel="canonical" href="https://www.salmansana.me/blog" /></Helmet>
    <Navbar />
    <main>
      <section className="page-hero noise"><div className="grid-lines absolute inset-0 opacity-10" /><div className="site-container relative"><p className="page-kicker">Notes & insights</p><h1 className="page-title">Learning in public,<br /><span className="text-yellow-300">one clear idea at a time.</span></h1><p className="page-lead">Accessible thinking about finance, marketing and entrepreneurship—written to make useful concepts easier to understand.</p></div></section>
      <section className="section-space"><div className="site-container">
        <article className="grid overflow-hidden rounded-[1.8rem] bg-gold text-ink lg:grid-cols-[1.05fr_.95fr]"><div className="p-8 md:p-12"><p className="text-[.68rem] font-extrabold uppercase tracking-[.18em]">Featured · {articles[0].category}</p><h2 className="mt-8 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-.055em] md:text-5xl">{articles[0].title}</h2><p className="mt-5 max-w-xl text-base leading-8 text-ink/65">{articles[0].excerpt}</p><Link to={`/blog/${articles[0].slug}`} className="primary-button mt-8">Read the article <ArrowUpRight size={17} /></Link></div><div className="grid-lines relative min-h-[300px] bg-ink p-8 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(250,204,21,.25),transparent_35%)]" /><div className="relative mt-auto self-end"><p className="font-display text-8xl font-extrabold tracking-[-.08em] text-white/10">01</p><p className="mt-4 flex items-center gap-2 text-xs font-bold text-white/50"><Clock size={14} />{articles[0].readTime}</p></div></div></article>
        <div className="mt-14 flex items-end justify-between border-b border-border pb-6"><div><span className="eyebrow">Latest writing</span><h2 className="section-title mt-5">The notebook</h2></div><p className="hidden text-sm text-muted sm:block">{articles.length} published notes</p></div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">{articles.map((article, index) => <article key={article.slug} className="outline-card flex min-h-[390px] flex-col rounded-[1.5rem] p-7"><div className="flex items-center justify-between"><span className="rounded-full bg-blue-light px-3 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.14em] text-primary">{article.category}</span><span className="text-xs font-bold text-border2">0{index + 1}</span></div><h3 className="mt-9 font-display text-2xl font-extrabold leading-tight tracking-[-.045em]">{article.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{article.excerpt}</p><div className="mt-auto flex items-center justify-between border-t border-border pt-6"><span className="text-xs text-muted">{article.date}</span><Link to={`/blog/${article.slug}`} className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:rotate-6 hover:bg-primary" aria-label={`Read ${article.title}`}><ArrowUpRight size={16} /></Link></div></article>)}</div>
      </div></section>
      <Contact />
    </main>
    <Footer />
  </>
);

export default Blog;
