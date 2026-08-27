import { useEffect, useRef } from "react";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

const Contact = () => {
  const { contact } = useSiteContent();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0'); });
    }, { threshold: 0.07 });
    ref.current?.querySelectorAll('.reveal-el').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="py-28 px-[5%] bg-navy relative overflow-hidden" ref={ref}>
      <div className="contact-dots absolute inset-0 pointer-events-none" />
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-[1] max-w-[720px] mx-auto text-center">
        <div className="text-[0.73rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/35 mb-3 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]">Get in Touch</div>
        <h2 className="font-display text-[clamp(3rem,5vw,5rem)] font-bold text-primary-foreground tracking-[-0.04em] leading-none mb-5 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.06s' }}>
          Let's <em className="italic text-blue-300">Connect</em><br />&amp; Build Together
        </h2>
        <p className="text-primary-foreground/45 text-base leading-[1.8] mb-12 reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.12s' }}>
          Open to internships, collaborative projects, and professional connections. I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10 text-left reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]" style={{ transitionDelay: '0.18s' }}>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
             className="bg-primary-foreground/5 border border-primary-foreground/[0.09] rounded-[18px] p-5 flex items-center gap-4 no-underline text-primary-foreground transition-all hover:bg-primary-foreground/[0.09] hover:border-primary-foreground/[0.18] hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(0,119,181,0.2)]">
              <Linkedin size={20} className="text-blue-400" />
            </div>
            <div>
              <div className="text-[0.68rem] text-primary-foreground/[0.38] uppercase tracking-[0.1em] mb-0.5 font-medium">LinkedIn</div>
              <div className="text-[0.88rem] font-semibold tracking-tight">{contact.linkedin.replace(/^https?:\/\//, "")}</div>
            </div>
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}
             className="bg-primary-foreground/5 border border-primary-foreground/[0.09] rounded-[18px] p-5 flex items-center gap-4 no-underline text-primary-foreground transition-all hover:bg-primary-foreground/[0.09] hover:border-primary-foreground/[0.18] hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(52,211,153,0.15)]">
              <Phone size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-[0.68rem] text-primary-foreground/[0.38] uppercase tracking-[0.1em] mb-0.5 font-medium">Phone / WhatsApp</div>
              <div className="text-[0.88rem] font-semibold tracking-tight">{contact.phone}</div>
            </div>
          </a>
          <a href={`mailto:${contact.email}`}
             className="bg-primary-foreground/5 border border-primary-foreground/[0.09] rounded-[18px] p-5 flex items-center gap-4 no-underline text-primary-foreground transition-all hover:bg-primary-foreground/[0.09] hover:border-primary-foreground/[0.18] hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(248,113,113,0.15)]">
              <Mail size={20} className="text-red-400" />
            </div>
            <div>
              <div className="text-[0.68rem] text-primary-foreground/[0.38] uppercase tracking-[0.1em] mb-0.5 font-medium">Email</div>
              <div className="text-[0.88rem] font-semibold tracking-tight">{contact.email}</div>
            </div>
          </a>
          <div className="bg-primary-foreground/5 border border-primary-foreground/[0.09] rounded-[18px] p-5 flex items-center gap-4 cursor-default text-primary-foreground">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(167,139,250,0.15)]">
              <MapPin size={20} className="text-purple-400" />
            </div>
            <div>
              <div className="text-[0.68rem] text-primary-foreground/[0.38] uppercase tracking-[0.1em] mb-0.5 font-medium">Location</div>
              <div className="text-[0.88rem] font-semibold tracking-tight">{contact.location}</div>
            </div>
          </div>
        </div>

        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2.5 bg-primary-foreground text-foreground px-10 py-4 rounded-full no-underline text-[0.95rem] font-extrabold tracking-tight transition-all hover:bg-blue-light hover:text-blue-mid hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] reveal-el opacity-0 translate-y-5 transition-all duration-[650ms]"
           style={{ transitionDelay: '0.24s' }}>
          <Linkedin size={20} />
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
