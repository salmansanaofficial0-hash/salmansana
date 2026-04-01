import { useState } from "react";
import { Linkedin, Menu, X } from "lucide-react";

const navItems = ["About", "Skills", "Education", "Certificates", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-background/95 backdrop-blur-[20px] border-b border-border">
      <div className="flex justify-between items-center px-[5%] h-[70px]">
        <a href="#" className="no-underline flex items-center">
          <svg className="h-[32px] sm:h-[38px] w-auto" viewBox="0 0 220 44" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="44" height="44" rx="10" fill="hsl(var(--ink))"/>
            <path d="M10 14 Q10 10 14 10 L30 10 Q34 10 34 14 Q34 18 30 19 L14 25 Q10 26 10 30 Q10 34 14 34 L30 34 Q34 34 34 30"
                  fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="37" cy="37" r="2.5" fill="hsl(var(--blue-mid))"/>
            <text x="54" y="19" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="18" fontWeight="700" fill="hsl(var(--ink))" letterSpacing="-0.5">Salman</text>
            <text x="54" y="38" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11.5" fontWeight="600" fill="hsl(var(--muted))" letterSpacing="2.5">SANA</text>
            <line x1="132" y1="10" x2="132" y2="34" stroke="hsl(var(--border))" strokeWidth="1"/>
            <text x="140" y="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700" fill="hsl(var(--blue-mid))" letterSpacing="1.5">BBA STUDENT</text>
            <text x="140" y="33" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="500" fill="hsl(var(--muted))" letterSpacing="0.5">Finance · Marketing</text>
          </svg>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="no-underline text-muted text-[0.82rem] font-medium px-3.5 py-1.5 rounded-lg transition-all hover:text-foreground hover:bg-card tracking-tight">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/salman-sana-/" target="_blank" rel="noopener noreferrer"
             className="hidden sm:inline-flex ml-2 bg-ink text-primary-foreground px-5 py-2 rounded-full no-underline text-[0.82rem] font-semibold tracking-wide transition-all border-[1.5px] border-ink items-center gap-1.5 hover:bg-blue-mid hover:border-blue-mid hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)]">
            <Linkedin size={13} />
            LinkedIn
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-foreground hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-[5%] py-4 space-y-1 animate-slide-up">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block no-underline text-foreground text-[0.92rem] font-medium px-4 py-3 rounded-xl transition-all hover:bg-card"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/salman-sana-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary text-[0.92rem] font-semibold px-4 py-3 rounded-xl hover:bg-card transition-all no-underline"
          >
            <Linkedin size={16} />
            LinkedIn Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
