import { Helmet } from "react-helmet";
import { ArrowLeft, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { articles } from "@/lib/portfolio-data";

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;
  return (
    <>
      <Helmet><title>{article.title} | Salman Sana</title><meta name="description" content={article.excerpt} /><link rel="canonical" href={`https://www.salmansana.me/blog/${article.slug}`} /></Helmet>
      <Navbar />
      <main>
        <section className="page-hero noise"><div className="grid-lines absolute inset-0 opacity-10" /><div className="site-container relative"><Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white"><ArrowLeft size={16} />Back to insights</Link><p className="page-kicker">{article.category}</p><h1 className="max-w-5xl font-display text-[clamp(2.7rem,6vw,5.7rem)] font-extrabold leading-[.96] tracking-[-.06em]">{article.title}</h1><div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold text-white/45"><span>{article.date}</span><span className="flex items-center gap-2"><Clock size={14} />{article.readTime}</span><span>By Salman Sana</span></div></div></section>
        <article className="section-space"><div className="site-container"><div className="mx-auto max-w-[760px]"><p className="border-l-4 border-gold pl-6 text-xl font-medium leading-9 text-foreground md:text-2xl md:leading-10">{article.intro}</p>{article.sections.map((section) => <section key={section.heading} className="mt-14"><h2 className="font-display text-3xl font-extrabold tracking-[-.045em]">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-muted">{paragraph}</p>)}{section.points && <ul className="mt-6 space-y-3">{section.points.map((point) => <li key={point} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm font-semibold"><span className="text-primary">→</span>{point}</li>)}</ul>}</section>)}</div></div></article>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
