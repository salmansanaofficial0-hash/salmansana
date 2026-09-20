import { Helmet } from "react-helmet";
import { ArrowUpRight, BadgeCheck, Building2, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import aboutPhoto from "@/assets/about-main.jpg";

const roles = [
  {
    title: "Assistant Director",
    organization: "BELI Centre for AI & Digital Skills",
    period: "Sep 2026 — Sep 2027",
    note: "Coordinating AI workshops, digital-literacy programs, technical training and student skill-development initiatives.",
    current: true,
  },
  {
    title: "Finance Secretary",
    organization: "Let’s Uplift Balochistan",
    note: "Supporting responsible coordination and youth-centered community work.",
  },
  {
    title: "Director of Finance",
    organization: "Youth International Council",
    note: "Contributing financial thinking to an international youth platform.",
  },
  {
    title: "Founder / Product Lead",
    organization: "Karbaar",
    note: "Developing an online-to-offline discovery model for local commerce.",
  },
];

const values = [
  { icon: Target, title: "Useful over impressive", text: "The strongest idea is the one that solves a real problem clearly." },
  { icon: Users, title: "People before process", text: "Good business decisions begin with listening to the people affected by them." },
  { icon: BadgeCheck, title: "Credibility through action", text: "Consistency, responsibility and honest work build a reputation over time." },
];

const AboutPage = () => (
  <>
    <Helmet><title>About Salman Sana | Finance, Marketing & Youth Leadership</title><meta name="description" content="Meet Salman Sana, a BBA student at the University of Turbat and Assistant Director at the BELI Centre for AI and Digital Skills." /><link rel="canonical" href="https://www.salmansana.me/about" /></Helmet>
    <Navbar />
    <main>
      <section className="page-hero noise"><div className="grid-lines absolute inset-0 opacity-10" /><div className="site-container relative"><p className="page-kicker">About Salman</p><h1 className="page-title">Curious by nature.<br /><span className="text-yellow-300">Grounded in purpose.</span></h1><p className="page-lead">I&apos;m learning how finance, marketing and technology can work together to solve practical problems and create opportunities in Balochistan and beyond.</p></div></section>

      <section className="section-space"><div className="site-container grid items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
        <div className="relative"><div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-gold" /><img src={aboutPhoto} alt="Salman Sana at a professional event" className="relative h-[520px] w-full rounded-[1.6rem] object-cover" /></div>
        <div><span className="eyebrow">My story</span><h2 className="section-title mt-6">A business student who learns by building.</h2><div className="mt-7 space-y-5 body-copy"><p>I study Business Administration at the University of Turbat, with a focus on Finance and Marketing. I&apos;m interested in the point where careful analysis becomes a useful decision—and where a good idea becomes something people can actually use.</p><p>As Assistant Director at the BELI Centre for AI and Digital Skills, I help coordinate practical learning initiatives that strengthen digital literacy, AI awareness and future-ready skills for young people.</p><p>Outside the classroom, I contribute to youth organizations, build digital projects, explore financial markets and turn academic concepts into presentations, products and practical experiments.</p><p>My goal is not to claim expertise too early. It is to keep earning it: through disciplined learning, thoughtful collaboration and work that creates measurable value.</p></div><a href="/#contact" className="primary-button mt-9">Start a conversation <ArrowUpRight size={17} /></a></div>
      </div></section>

      <section className="section-space border-y border-border bg-[#eef0f7]"><div className="site-container"><span className="eyebrow">Leadership & initiatives</span><h2 className="section-title mt-6 max-w-3xl">Responsibility is where learning becomes real.</h2><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{roles.map((role, index) => <article key={role.organization} className={`outline-card relative rounded-[1.5rem] p-7 ${role.current ? "border-primary/30 bg-blue-light" : ""}`}>{role.current && <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.14em] text-white">Current</span>}<div className="flex items-center justify-between"><Building2 className="text-primary" size={23} /><span className="text-xs font-extrabold text-border2">0{index + 1}</span></div><h3 className="mt-10 font-display text-xl font-extrabold">{role.title}</h3><p className="mt-1 text-sm font-bold text-primary">{role.organization}</p>{role.period && <p className="mt-3 text-[.65rem] font-extrabold uppercase tracking-[.13em] text-muted">{role.period}</p>}<p className="mt-4 text-sm leading-7 text-muted">{role.note}</p></article>)}</div></div></section>

      <section className="section-space"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><span className="eyebrow">Working principles</span><h2 className="section-title mt-6">How I approach the work.</h2></div><div className="space-y-3">{values.map(({ icon: Icon, title, text }, index) => <article key={title} className="grid grid-cols-[54px_1fr] items-start gap-5 rounded-2xl border border-border bg-card p-5"><div className={`grid h-[54px] w-[54px] place-items-center rounded-xl ${index === 0 ? "bg-amber-light text-amber" : index === 1 ? "bg-teal-light text-teal" : "bg-blue-light text-primary"}`}><Icon size={21} /></div><div><h3 className="font-display text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></div></article>)}</div></div></div></section>
      <Contact />
    </main>
    <Footer />
  </>
);

export default AboutPage;
