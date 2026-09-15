import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-white/10 bg-navy pb-8 pt-10 text-white">
    <div className="site-container flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-9 sm:flex-row sm:items-center">
        <Link to="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-300 text-xs font-extrabold text-ink">SS</span><span className="font-display text-base font-extrabold tracking-[-.03em]">SALMAN SANA</span></Link>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/45"><Link to="/about" className="hover:text-white">About</Link><Link to="/portfolio" className="hover:text-white">Work</Link><Link to="/blog" className="hover:text-white">Insights</Link><a href="/#contact" className="hover:text-white">Contact</a></div>
      </div>
      <div className="flex items-center justify-between gap-4 text-xs text-white/30"><p>© {new Date().getFullYear()} Salman Sana. Built with purpose in Balochistan.</p><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 hover:border-white/30 hover:text-white" aria-label="Back to top"><ArrowUp size={16} /></a></div>
    </div>
  </footer>
);

export default Footer;
