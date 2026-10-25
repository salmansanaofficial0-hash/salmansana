import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ProjectCards from "@/components/ProjectCards";
export default function Portfolio(){return <>
  <Helmet><title>Founder & Developer Projects | Salman Sana</title><meta name="description" content="Explore Salman Sana’s founder ventures Karbaar and Learnoa, and development work for Inspiration Lab."/><link rel="canonical" href="https://www.salmansana.me/portfolio"/></Helmet>
  <Navbar/><main><section className="page-hero"><div className="site-container"><p className="page-kicker">Founder & Developer</p><h1 className="page-title">/SELECTED WORK</h1><p className="page-lead">Ventures I’m building and websites I develop and manage.</p></div></section><section className="ref-portfolio ref-work-page"><div className="ref-page ref-work"><ProjectCards/></div></section><Contact/></main><Footer/>
</>;}
