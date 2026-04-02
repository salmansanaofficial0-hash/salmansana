import { Linkedin } from "lucide-react";

const Hero = () => (
  <section id="hero" className="min-h-screen pt-[90px] pb-16 md:pb-20 px-[5%] flex items-center bg-background relative overflow-hidden">
    <div className="hero-grid-bg absolute inset-0 pointer-events-none" />
    <div className="hero-vignette absolute inset-0 pointer-events-none" />

    <div className="relative z-[2] max-w-2xl">
      <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 text-teal text-[0.76rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-8 animate-slide-up">
        <div className="w-[7px] h-[7px] rounded-full bg-teal animate-pdot" />
        Open to Internships
      </div>
      <h1 className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-foreground mb-5 animate-slide-up" style={{ animationDelay: '0.07s' }}>
        Salman<br /><em className="italic text-blue-mid">Sana</em>
      </h1>
      <p className="text-[1.05rem] font-medium text-muted mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.14s' }}>
        <strong className="text-foreground font-bold">BBA Student</strong> — Finance &amp; Marketing<br />
        University of Turbat, Balochistan
      </p>
      <p className="text-[0.97rem] text-muted leading-[1.85] max-w-[500px] mb-10 animate-slide-up" style={{ animationDelay: '0.21s' }}>
        Combining academic knowledge with strategic thinking to create business impact and growth opportunities. Passionate about market analysis, financial concepts, and building meaningful brands.
      </p>
      <div className="flex gap-3 flex-wrap animate-slide-up" style={{ animationDelay: '0.28s' }}>
        <a href="https://www.linkedin.com/in/salman-sana-/" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 bg-ink text-primary-foreground py-3.5 px-8 rounded-full no-underline text-[0.88rem] font-bold tracking-wide transition-all border-[1.5px] border-ink hover:bg-blue-mid hover:border-blue-mid hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
          <Linkedin size={15} />
          LinkedIn Profile
        </a>
        <a href="#contact"
           className="inline-flex items-center gap-2 bg-transparent text-foreground py-3.5 px-8 rounded-full border-[1.5px] border-border2 no-underline text-[0.88rem] font-bold tracking-wide transition-all hover:border-foreground hover:-translate-y-0.5">
          Get in Touch →
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
