import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

const Contact = () => {
  const { contact } = useSiteContent();
  return (
    <section id="contact" className="noise relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="contact-dots absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
      <div className="site-container relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="page-kicker">Available for meaningful opportunities</p>
            <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[.9] tracking-[-.065em]">Have an idea?<br /><span className="text-yellow-300">Let&apos;s make it move.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/55">I&apos;m open to internships, collaborations, youth initiatives and thoughtful conversations about finance, marketing and business.</p>
          </div>
          <div className="grid gap-3">
            <a href={`mailto:${contact.email}`} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.05] p-5 transition hover:border-white/25 hover:bg-white/[.09]"><span className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10"><Mail size={19} /></span><span><small className="block text-[.62rem] font-bold uppercase tracking-[.17em] text-white/35">Email</small><strong className="mt-1 block text-sm">{contact.email}</strong></span></span><ArrowUpRight className="text-white/30 transition group-hover:text-yellow-300" /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.05] p-5 transition hover:border-white/25 hover:bg-white/[.09]"><span className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/15 text-blue-300"><Linkedin size={19} /></span><span><small className="block text-[.62rem] font-bold uppercase tracking-[.17em] text-white/35">LinkedIn</small><strong className="mt-1 block text-sm">Connect professionally</strong></span></span><ArrowUpRight className="text-white/30 transition group-hover:text-yellow-300" /></a>
            <p className="mt-3 flex items-center gap-2 px-2 text-xs text-white/40"><MapPin size={14} />{contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
