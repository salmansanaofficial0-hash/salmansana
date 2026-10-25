import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/salman-portrait.jpg";
import { useSiteContent } from "@/lib/site-content";
import HeroScene from "@/components/HeroScene";

const Hero = () => {
  const { hero } = useSiteContent();
  return (
    <section id="hero" className="hero-stage noise relative isolate min-h-[820px] overflow-hidden pt-28 text-white md:min-h-screen md:pt-24">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-sun absolute" aria-hidden="true" />
      <div className="site-container relative z-10 grid min-h-[780px] items-center gap-2 pb-24 pt-8 lg:grid-cols-[.92fr_1.08fr] lg:pb-16 lg:pt-12">
        <div className="relative z-20 max-w-[660px] py-12 lg:py-0">
          <div className="animate-rise mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[.65rem] font-bold uppercase tracking-[.17em] text-white/80 backdrop-blur" style={{ animationDelay: ".04s" }}>
            <span className="h-2 w-2 rounded-full bg-[#a8f078] animate-pdot" />{hero.availability}
          </div>
          <p className="animate-rise mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#e9ad66]" style={{ animationDelay: ".08s" }}><Sparkles size={14} /> Finance <span className="text-white/35">×</span> Marketing <span className="text-white/35">×</span> Product</p>
          <h1 className="hero-title animate-rise" style={{ animationDelay: ".12s" }}>
            Ideas in <span className="hero-title-accent">motion.</span>
            <span className="hero-name">I&apos;m {hero.title}.</span>
          </h1>
          <p className="animate-rise mt-7 max-w-[510px] text-base leading-8 text-white/65 md:text-lg" style={{ animationDelay: ".18s" }}>{hero.description}</p>
          <a href="https://www.learnoa.app" target="_blank" rel="noreferrer" className="animate-rise mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-[#f3c47c]" style={{ animationDelay: ".21s" }}><BriefcaseBusiness size={16} className="text-[#e9ad66]" /> Founder &amp; CEO of Learnoa <ArrowUpRight size={15} /></a>
          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".25s" }}>
            <a href="/portfolio" className="hero-primary">Explore my work <ArrowUpRight size={17} /></a>
            <a href="#contact" className="hero-secondary">Let&apos;s talk</a>
          </div>
          <div className="animate-rise mt-11 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-white/55" style={{ animationDelay: ".31s" }}>
            <span className="flex items-center gap-2"><GraduationCap size={16} className="text-[#e9ad66]" /> BBA, University of Turbat</span>
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#e9ad66]" /> Balochistan, Pakistan</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto h-[460px] w-full max-w-[620px] sm:h-[570px] lg:-mr-8 lg:h-[700px] lg:max-w-none">
          <HeroScene />
          <div className="hero-orbit-label hero-orbit-label-top"><span /> STRATEGY / 01</div>
          <div className="hero-orbit-label hero-orbit-label-bottom">BUILDING WHAT&apos;S NEXT <ArrowUpRight size={14} /></div>
          <div className="hero-portrait-wrap" aria-hidden="true">
            <img src={heroPhoto} alt="" className="hero-portrait" />
          </div>
          <div className="hero-project-note">
            <span className="hero-project-index">CURRENTLY BUILDING</span>
            <span className="hero-project-title">Products with purpose <ArrowUpRight size={14} /></span>
          </div>
          <div className="hero-coordinate">26°00&apos;N&nbsp; 63°03&apos;E</div>
        </div>
      </div>
      <a href="#about" className="hero-scroll absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.18em] text-white/45 lg:flex">Scroll to explore <ArrowDown size={14} /></a>
    </section>
  );
};

export default Hero;
