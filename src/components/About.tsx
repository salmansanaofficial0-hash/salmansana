import { ArrowUpRight, Compass, LineChart, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { icon: LineChart, title: "Finance", text: "Turning numbers into clear decisions through financial thinking, research and disciplined analysis." },
  { icon: Megaphone, title: "Marketing", text: "Understanding people, positioning ideas and building communication that earns attention and trust." },
  { icon: Compass, title: "Leadership", text: "Contributing to youth organizations, coordinating teams and moving shared ideas into action." },
];

const About = () => (
  <section id="about" className="section-space bg-background">
    <div className="site-container">
      <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <span className="eyebrow">My perspective</span>
          <h2 className="section-title mt-6">Business is clearer when numbers and people are read together.</h2>
          <Link to="/about" className="secondary-button mt-8">More about me <ArrowUpRight size={17} /></Link>
        </div>
        <div>
          <p className="body-copy border-l-2 border-gold pl-6 text-lg md:text-xl md:leading-9">I&apos;m Salman Sana, a BBA student at the University of Turbat specializing in Finance and Marketing. I bring classroom learning into practical work—digital products, youth initiatives, research and business concepts designed around real needs.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="outline-card rounded-2xl p-5">
                <div className={`mb-8 grid h-11 w-11 place-items-center rounded-xl ${index === 0 ? "bg-indigo-100 text-primary" : index === 1 ? "bg-amber-light text-amber" : "bg-teal-light text-teal"}`}><Icon size={20} /></div>
                <h3 className="font-display text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
