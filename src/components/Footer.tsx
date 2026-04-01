const Footer = () => (
  <footer className="bg-navy border-t border-primary-foreground/[0.07] py-6 px-[5%] flex flex-col gap-4 items-center text-center">
    <div className="flex items-center">
      <svg viewBox="0 0 180 30" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <rect x="0" y="0" width="30" height="30" rx="7" fill="#ffffff" fillOpacity="0.12"/>
        <path d="M7 10 Q7 7 10 7 L20 7 Q23 7 23 10 Q23 13 20 13.5 L10 17 Q7 17.5 7 20.5 Q7 23 10 23 L20 23 Q23 23 23 20.5" 
              fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="25" cy="25" r="2" fill="#2563eb"/>
        <text x="38" y="13" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="#ffffff" letterSpacing="-0.3">Salman</text>
        <text x="38" y="26" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="rgba(255,255,255,0.45)" letterSpacing="2">SANA</text>
      </svg>
    </div>
    <div className="text-[0.8rem] text-primary-foreground/30">© 2025 Salman Sana · BBA Student · University of Turbat</div>
    <div className="flex gap-6">
      {[
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Education", href: "#education" },
        { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/salman-sana-/", external: true },
      ].map(l => (
        <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
           className="text-[0.8rem] text-primary-foreground/[0.38] no-underline transition-colors hover:text-primary-foreground">
          {l.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
