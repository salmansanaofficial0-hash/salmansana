import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const navigation = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/#services" },
  { label: "Experience", to: "/#experience" },
  { label: "Certificates", to: "/credentials#certificates" },
  { label: "Journal", to: "/blog" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  return <header className="website-header"><nav className="ref-nav" aria-label="Primary navigation">
    <Link className="website-wordmark" to="/">Salman Sana<span>Developer & Founder</span></Link>
    <div id="secondary-navigation" className={`ref-nav-links ${open ? "is-open" : ""}`}>{navigation.map(item => <Link key={item.label} to={item.to} aria-current={location.pathname === item.to ? "page" : undefined}>{item.label}</Link>)}</div>
    <Link className="ref-pill ref-dark ref-nav-cta" to="/#contact">Let’s Talk <ArrowUpRight size={17}/></Link>
    <button className="ref-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="secondary-navigation">{open ? <X/> : <Menu/>}</button>
  </nav></header>;
}
