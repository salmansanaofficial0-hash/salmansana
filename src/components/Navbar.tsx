import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/portfolio" },
  { label: "Insights", to: "/blog" },
  { label: "Credentials", to: "/#certificates" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const darkTop = location.pathname !== "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-[200] transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`site-container flex h-16 items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-5 ${scrolled ? "border-border bg-background/90 shadow-[0_10px_35px_rgba(15,23,42,.09)] backdrop-blur-xl" : darkTop ? "border-white/10 bg-white/[.04] text-white backdrop-blur-sm" : "border-transparent bg-transparent"}`}>
        <Link to="/" className="group flex items-center gap-3" aria-label="Salman Sana home">
          <span className={`grid h-10 w-10 place-items-center rounded-full text-sm font-extrabold transition group-hover:rotate-6 group-hover:bg-primary group-hover:text-white ${darkTop ? "bg-gold text-ink" : "bg-ink text-white"}`}>SS</span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-extrabold leading-none tracking-[-.03em]">SALMAN SANA</span>
            <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[.2em] text-muted">Finance × Marketing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = location.pathname === item.to;
            return <Link key={item.label} to={item.to} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active ? darkTop ? "bg-white text-ink" : "bg-ink text-white" : darkTop ? "text-white/60 hover:bg-white/10 hover:text-white" : "text-muted hover:bg-white hover:text-foreground"}`}>{item.label}</Link>;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#contact" className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-extrabold uppercase tracking-[.12em] text-ink transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 -z-10 bg-navy px-6 pb-10 pt-28 text-white lg:hidden">
          <nav className="mx-auto flex h-full max-w-lg flex-col justify-center" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.label} to={item.to} className="flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-extrabold tracking-[-.04em]">
                <span><span className="mr-4 text-xs text-yellow-300">0{index + 1}</span>{item.label}</span><ArrowUpRight className="text-white/30" />
              </Link>
            ))}
            <a href="/#contact" className="primary-button mt-10 bg-gold text-ink hover:bg-white">Start a conversation <ArrowUpRight size={17} /></a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
