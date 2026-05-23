import { Linkedin } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const Hero = () => (
  <section id="hero" className="min-h-screen pt-[90px] pb-16 md:pb-20 px-[5%] grid grid-cols-1 md:grid-cols-[1fr_440px] items-center gap-8 md:gap-20 bg-background relative overflow-hidden">
    <div className="hero-grid-bg absolute inset-0 pointer-events-none" />
    <div className="hero-vignette absolute inset-0 pointer-events-none" />

    <div className="relative z-[2] order-2 md:order-1">
      <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 text-teal text-[0.76rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-8 animate-slide-up">
        <div className="w-[7px] h-[7px] rounded-full bg-teal animate-pdot" />
        Open to Internships
      </div>
      <h1 className="font-display text-[clamp(4rem,6.5vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-foreground mb-5 animate-slide-up" style={{ animationDelay: '0.07s' }}>
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

    <div className="relative z-[2] animate-slide-up order-1 md:order-2 flex justify-center" style={{ animationDelay: '0.1s' }}>
      <div className="relative">
        <div className="relative bg-background rounded-[28px] border border-border overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.08),0_40px_80px_rgba(0,0,0,0.06)]">
          <img src={heroPhoto} alt="Salman Sana - BBA Student Finance and Marketing University of Turbat" className="w-full h-[320px] sm:h-[400px] md:h-[460px] object-cover object-[center_top] block brightness-[1.04] contrast-[1.06] saturate-[1.1]" />
          <div className="py-4 px-5 flex items-center justify-between border-t border-border bg-background">
            <div>
              <div className="text-[0.92rem] font-bold text-foreground tracking-tight">Salman Sana</div>
              <div className="text-[0.76rem] text-muted mt-px">Finance &amp; Marketing · UOT</div>
            </div>
            <div className="text-[0.72rem] font-bold tracking-wide bg-blue-light text-primary px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">
              4th Semester · BBA
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute -top-4 -left-10 bg-background border border-border rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.09)] animate-float">
          <div className="text-[0.64rem] text-muted uppercase tracking-[0.1em] mb-0.5 font-medium">University</div>
          <div className="text-[0.88rem] font-extrabold text-foreground tracking-tight">UOT Turbat</div>
        </div>
        <div className="hidden md:block absolute bottom-[76px] -right-11 bg-background border border-border rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.09)] animate-float-delayed">
          <div className="text-[0.64rem] text-muted uppercase tracking-[0.1em] mb-0.5 font-medium">Specialization</div>
          <div className="text-[0.82rem] font-extrabold text-primary tracking-tight">Finance &amp; Mktg</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
