import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import heroPhoto from "@/assets/salman-portrait.jpg";
import { useSiteContent } from "@/lib/site-content";

const Hero = () => {
  const { hero } = useSiteContent();
  return (
    <section id="hero" className="hero-mesh noise relative min-h-[920px] overflow-hidden pt-32 md:min-h-screen md:pt-28">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="site-container relative grid min-h-[780px] items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:py-16">
        <div className="relative z-10">
          <div className="animate-rise mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-600/20 bg-emerald-50/80 px-4 py-2 text-[0.7rem] font-extrabold uppercase tracking-[.16em] text-emerald-800 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pdot" />{hero.availability}
          </div>
          <p className="animate-rise mb-5 text-sm font-bold uppercase tracking-[.24em] text-primary" style={{ animationDelay: ".05s" }}>{hero.title} · Finance × Marketing</p>
          <h1 className="display-title animate-rise max-w-[790px]" style={{ animationDelay: ".1s" }}>
            Building ideas where <span className="relative whitespace-nowrap text-primary">finance<span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-gold/70 -z-10" /></span> meets market reality.
          </h1>
          <p className="animate-rise mt-7 max-w-[640px] text-base leading-8 text-muted md:text-lg" style={{ animationDelay: ".16s" }}>{hero.description}</p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".22s" }}>
            <a href="/portfolio" className="primary-button">Explore my work <ArrowUpRight size={17} /></a>
            <a href="#contact" className="secondary-button">Start a conversation</a>
          </div>
          <div className="animate-rise mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-muted" style={{ animationDelay: ".28s" }}>
            <span className="flex items-center gap-2"><GraduationCap size={16} className="text-primary" /> BBA, University of Turbat</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Balochistan, Pakistan</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto">
          <div className="absolute -right-8 -top-10 hidden font-display text-[7rem] font-black leading-none text-primary/[.07] sm:block" aria-hidden="true">01</div>
          <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-primary" />
          <div className="absolute -inset-5 -rotate-3 rounded-[2.5rem] border-2 border-ink/20 bg-gold" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-navy">
              <img src={heroPhoto} alt="Portrait of Salman Sana" className="h-[480px] w-full object-cover object-[center_18%] saturate-[.9] transition duration-700 hover:scale-[1.025] hover:saturate-100 md:h-[570px]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="mb-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-yellow-300">Portrait · Turbat</p>
                <p className="font-display text-2xl font-extrabold tracking-[-.04em]">{hero.title}</p>
                <p className="mt-1 text-sm text-white/60">{hero.subtitle.split("\n")[0]}</p>
              </div>
            </div>
          </div>
          <div className="animate-float absolute -left-6 top-16 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur sm:-left-14">
            <BriefcaseBusiness className="mb-3 text-primary" size={22} />
            <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-muted">Current focus</p>
            <p className="mt-1 text-sm font-extrabold">Karbaar.app</p>
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-2xl bg-ink p-5 text-white shadow-2xl sm:-right-8">
            <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-yellow-300">Working at the intersection</p>
            <p className="mt-2 max-w-[180px] text-sm font-bold leading-5">Strategy, technology and community impact.</p>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[.65rem] font-bold uppercase tracking-[.2em] text-muted lg:flex">Discover more <ArrowDown size={15} /></a>
    </section>
  );
};

export default Hero;
