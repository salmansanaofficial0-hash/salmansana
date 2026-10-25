import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, Menu, X, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/portfolio-data";
import { useSiteContent } from "@/lib/site-content";
import portrait from "@/assets/salman-cutout.webp";
import "./reference-portfolio.css";

const services = [
  ["WEB DESIGN & DEV", "Building clear, responsive websites for businesses, learning platforms and community initiatives.", "Websites that work.", "DESIGN / DEVELOP / LAUNCH"],
  ["AI & DIGITAL SKILLS", "Supporting practical AI learning, digital literacy and skills development for students and young people.", "Human ideas. Digital possibilities.", "LEARN / EXPLORE / CREATE"],
  ["BUSINESS & MARKETING", "Bringing business thinking, market research and brand communication to ideas with purpose.", "Turn an idea into impact.", "STRATEGY / BRAND / GROW"],
  ["COMMUNITY & PROGRAMS", "Coordinating learning experiences, youth initiatives and collaborations across Balochistan.", "Better, together.", "CONNECT / COLLABORATE / BUILD"],
];
function Availability() { return <span className="ref-availability"><i />Available for New Project</span>; }
export default function Index() {
  const { contact, gallery } = useSiteContent();
  const [service, setService] = useState<number | null>(0);
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const socials = <><a href={contact.linkedin} target="_blank" rel="noreferrer" className="ref-pill"><Linkedin size={16}/>LinkedIn</a><a href="https://github.com/salmansanaofficial0-hash" target="_blank" rel="noreferrer" className="ref-pill"><Github size={16}/>GitHub</a><a href={`mailto:${contact.email}`} className="ref-pill"><Mail size={16}/>Email</a><Link to="/about" className="ref-pill">About Me <ArrowUpRight size={16}/></Link></>;
  return <div className="ref-portfolio">
    <div className="ref-clouds" aria-hidden="true" />
    <main className="ref-page">
      <section className="ref-hero" id="home">
        <nav className="ref-nav" aria-label="Main navigation"><a href="#home" aria-label="Back to top"><Availability/></a><div className={`ref-nav-links ${menu ? "is-open" : ""}`}><a href="#work" onClick={()=>setMenu(false)}>Work <small>[{projects.length}]</small></a><a href="#services" onClick={()=>setMenu(false)}>Service <small>[4]</small></a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div><a className="ref-pill ref-dark ref-nav-cta" href={`mailto:${contact.email}`}>Let’s Talk <ArrowUpRight size={17}/></a><button className="ref-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>{menu?<X/>:<Menu/>}</button></nav>
        <h1 className="ref-name"><span>SALMAN</span> SANA</h1>
        <div className="ref-hero-copy"><h2>Developer & Entrepreneur</h2><p>Building digital experiences that connect<br className="ref-desktop"/> people, ideas, and opportunities.</p><a className="ref-pill ref-dark" href="#contact">Let’s collaborate <ArrowUpRight size={18}/></a></div>
        <img className="ref-portrait" src={portrait} alt="Salman Sana" fetchPriority="high"/>
        <div className="ref-socials">{socials}</div>
      </section>
      <section className="ref-work ref-reveal" id="work">
        <header className="ref-heading"><span aria-hidden="true">PORTFOLIO</span><h2>/SELECTED WORK</h2></header>
        <div className="ref-work-bar"><div className="ref-filters" role="group" aria-label="Filter projects">{["All","Real Project","Exploration"].map(item=><button key={item} aria-pressed={filter===item} className={filter===item?"active":""} onClick={()=>setFilter(item)}>{item}</button>)}</div><Link className="ref-pill" to="/portfolio">View All Work <ArrowUpRight size={17}/></Link></div>
        <div className="ref-project-grid">{projects.filter(p=>filter==="All" || (filter==="Real Project" ? !!p.link : !p.link)).map((p)=><Link to="/portfolio" key={p.id} className="ref-project"><div className={`ref-project-art art-${p.id}`}><div className="ref-browser"><div className="ref-browser-top"><span>● ● ●</span><span>{p.link?new URL(p.link).hostname:"A Salman Sana project"}</span><ArrowUpRight size={11}/></div><div className="ref-mockup"><small>{p.category.toUpperCase()} / DIGITAL EXPERIENCE</small><strong>{p.title.replace(" (ilab.pk)","")}</strong><p>{p.id==="01"?"The future of local commerce.":p.id==="06"?"Where ideas become opportunities.":p.id==="05"?"Learn. Create. Grow.":p.outcome}</p><span className="ref-mock-cta">Explore the possibilities ↗</span><div className="ref-mock-panels"><i/><i/><i/></div></div></div><span className="ref-art-label">{p.link?"REAL PROJECT":"EXPLORATION"}</span><span className="ref-art-arrow"><ArrowUpRight/></span></div><div className="ref-project-info"><h3>{p.title}</h3><div>{p.tags.slice(0,2).map(t=><span className="ref-pill" key={t}>{t}</span>)}</div></div></Link>)}</div>
      </section>
      <section className="ref-services ref-reveal" id="services"><h2>/SERVICE</h2><div className="ref-service-list">{services.map(([title,description,headline,label],i)=><article key={title} className={`ref-service ${service===i?"expanded":""}`}><button aria-expanded={service===i} aria-controls={`service-${i}`} onClick={()=>setService(service===i?null:i)}><span>{title}</span>{service===i?<X strokeWidth={1}/>:<ArrowUpRight strokeWidth={1}/>}</button><div className="ref-service-detail" id={`service-${i}`} aria-hidden={service!==i}><div className="ref-service-inner"><p>{description}</p></div></div><div className="ref-service-art" aria-hidden="true"><small>{label}</small><strong>{headline}</strong><span>↗</span></div></article>)}</div></section>
      <section className="ref-experience ref-reveal" id="experience"><header className="ref-heading"><span aria-hidden="true">EXPERIENCE</span><h2>/EXPERIENCE</h2><p>Building with purpose</p></header><div className="ref-experience-row"><div><h3>Balochistan Emerging Leaders Initiative</h3><p>Assistant Director — Centre for AI & Digital Skills</p></div><span>Sep 2026 – Sep 2027</span></div><div className="ref-experience-row"><div><h3>Learnoa</h3><p>Founder & CEO</p></div><span>Current</span></div><div className="ref-experience-row"><div><h3>Inspiration Lab</h3><p>Web Developer & Website Manager</p></div><span>Current</span></div><div className="ref-experience-row"><div><h3>Karbaar</h3><p>Entrepreneurship & Product Development</p></div><span>Startup project</span></div><div className="ref-experience-row"><div><h3>University of Turbat</h3><p>Bachelor of Business Administration</p></div><span>4th Semester</span></div></section>
      {gallery.length>0&&<section className="ref-gallery ref-reveal"><header className="ref-heading"><span aria-hidden="true">JOURNEY</span><h2>/MOMENTS & STORIES</h2></header><div>{gallery.map((g,i)=><figure key={i}><img src={g.url} alt={g.alt||g.caption} loading="lazy"/><figcaption>{g.caption}</figcaption></figure>)}</div><Link to="/blog" className="ref-pill">Read my articles <ArrowUpRight size={16}/></Link></section>}
      <section className="ref-contact ref-reveal" id="contact"><Availability/><h2>HAVE A PROJECT IN MIND?</h2><p>Together, we can create something clear and impactful. Let’s collaborate to bring our<br className="ref-desktop"/> ideas to life in a way that resonates with everyone.</p><a className="ref-pill ref-dark" href={`mailto:${contact.email}`}>Contact Me <ArrowUpRight size={17}/></a><footer><a className="ref-pill ref-dark" href="#home"><img src={portrait} alt=""/>Salman Sana</a>{socials}</footer><div className="ref-footer-note"><span>© {new Date().getFullYear()} Salman Sana</span><span>{contact.location}</span><Link to="/credentials">Credentials ↗</Link><Link to="/blog">Journal ↗</Link></div></section>
    </main>
  </div>;
}
