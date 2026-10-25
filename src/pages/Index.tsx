import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, Menu, X, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Certificates from "@/components/Certificates";
import ProjectCards from "@/components/ProjectCards";
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
  const [menu, setMenu] = useState(false);
  const socials = <><a href={contact.linkedin} target="_blank" rel="noreferrer" className="ref-pill"><Linkedin size={16}/>LinkedIn</a><a href="https://github.com/salmansanaofficial0-hash" target="_blank" rel="noreferrer" className="ref-pill"><Github size={16}/>GitHub</a><a href={`mailto:${contact.email}`} className="ref-pill"><Mail size={16}/>Email</a><Link to="/about" className="ref-pill">About Me <ArrowUpRight size={16}/></Link></>;
  return <div className="ref-portfolio website-home">
    <header className="website-header"><nav className="ref-nav" aria-label="Main navigation"><a className="website-wordmark" href="#home" aria-label="Salman Sana home">Salman Sana<span>Developer & Founder</span></a><div id="website-navigation" className={`ref-nav-links ${menu ? "is-open" : ""}`}><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a><a href="#certificates" onClick={()=>setMenu(false)}>Certificates</a><Link to="/blog" onClick={()=>setMenu(false)}>Journal</Link><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div><a className="ref-pill ref-dark ref-nav-cta" href={`mailto:${contact.email}`}>Let’s Talk <ArrowUpRight size={17}/></a><button className="ref-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-controls="website-navigation" aria-expanded={menu}>{menu?<X/>:<Menu/>}</button></nav></header>
    <main className="ref-page">
      <section className="ref-hero" id="home">
        <div className="website-intro"><Availability/><p className="website-eyebrow">BASED IN TURBAT, BALOCHISTAN</p><h1 className="ref-name">Salman Sana<span>Developer.<br/>Founder. Builder.</span></h1><p className="website-intro-copy">I build websites and grow ideas into useful digital experiences. From my own ventures to the organizations I work with, I bring business thinking and development together.</p><div className="website-actions"><a className="ref-pill ref-dark" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="ref-pill" href="#contact">Get in touch <ArrowUpRight size={17}/></a></div><div className="ref-socials">{socials}</div></div>
        <div className="website-portrait-stage"><img className="ref-portrait" src={portrait} alt="Salman Sana" fetchPriority="high"/><div className="website-portrait-note"><span>BUILDING WITH PURPOSE</span><p>Ideas into experiences.</p></div></div>
      </section>
      <div className="website-context"><div><span>FOUNDER</span><p>Karbaar & Learnoa</p></div><div><span>DEVELOPER</span><p>Inspiration Lab</p></div><div><span>AI & DIGITAL SKILLS</span><p>Assistant Director at BELI</p></div></div>
      <section className="ref-work ref-reveal" id="work">
        <header className="ref-heading"><span>SELECTED WORK</span><h2>Ideas brought to life.</h2><p>Explore the ventures I’m building and the websites I develop.</p></header>
        <ProjectCards />
      </section>
      <section className="ref-services ref-reveal" id="services"><div className="website-services-intro"><p className="website-eyebrow">HOW I CAN HELP</p><h2>Let’s build<br/>something useful.</h2><p>Development, business thinking and digital skills, shaped around your next step.</p></div><div className="ref-service-list">{services.map(([title,description,headline,label],i)=><article key={title} className={`ref-service ${service===i?"expanded":""}`}><button aria-expanded={service===i} aria-controls={`service-${i}`} onClick={()=>setService(service===i?null:i)}><span>{title}</span>{service===i?<X strokeWidth={1}/>:<ArrowUpRight strokeWidth={1}/>}</button><div className="ref-service-detail" id={`service-${i}`} aria-hidden={service!==i}><div className="ref-service-inner"><p>{description}</p></div></div><div className="ref-service-art" aria-hidden="true"><small>{label}</small><strong>{headline}</strong><span>↗</span></div></article>)}</div></section>
      <section className="ref-experience ref-reveal" id="experience"><header className="ref-heading"><span>EXPERIENCE & EDUCATION</span><h2>What I’m working on.</h2><p>My roles, ventures and ongoing learning.</p></header><div className="ref-experience-row"><div><h3>Balochistan Emerging Leaders Initiative</h3><p>Assistant Director — Centre for AI & Digital Skills</p></div><span>Sep 2026 – Sep 2027</span></div><div className="ref-experience-row"><div><h3>Learnoa</h3><p>Founder & CEO</p></div><span>Current</span></div><div className="ref-experience-row"><div><h3>Inspiration Lab</h3><p>Web Developer & Website Manager</p></div><span>Current</span></div><div className="ref-experience-row"><div><h3>Karbaar</h3><p>Entrepreneurship & Product Development</p></div><span>Startup project</span></div><div className="ref-experience-row"><div><h3>University of Turbat</h3><p>Bachelor of Business Administration</p></div><span>4th Semester</span></div></section>
      <Certificates />
      {gallery.length>0&&<section className="ref-gallery ref-reveal"><header className="ref-heading"><span>BEYOND THE WORK</span><h2>Moments & stories.</h2></header><div>{gallery.map((g,i)=><figure key={i}><img src={g.url} alt={g.alt||g.caption} loading="lazy"/><figcaption>{g.caption}</figcaption></figure>)}</div><Link to="/blog" className="ref-pill">Read my articles <ArrowUpRight size={16}/></Link></section>}
      <section className="ref-contact ref-reveal" id="contact"><Availability/><h2>Have something in mind?<br/>Let’s talk.</h2><p>Together, we can create something clear and impactful. Let’s collaborate to bring our<br className="ref-desktop"/> ideas to life in a way that resonates with everyone.</p><a className="ref-pill ref-dark" href={`mailto:${contact.email}`}>Contact Me <ArrowUpRight size={17}/></a><footer><a className="ref-pill ref-dark" href="#home"><img src={portrait} alt=""/>Salman Sana</a>{socials}</footer><div className="ref-footer-note"><span>© {new Date().getFullYear()} Salman Sana</span><span>{contact.location}</span><Link to="/credentials#certificates">Certificates ↗</Link><Link to="/blog">Journal ↗</Link></div></section>
    </main>
  </div>;
}
