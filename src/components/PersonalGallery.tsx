import { ArrowUpRight, Camera, BookOpen, Award, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSiteContent } from "@/lib/site-content";

function RecognitionPhoto() {
  const [imageAvailable, setImageAvailable] = useState(true);
  return (
    <div className="relative min-h-[290px] overflow-hidden bg-slate-800 lg:min-h-[440px]">
      {imageAvailable ? (
        <img
          src="/images/ai-awareness-volunteer-certificate-2026.jpg"
          alt="Receiving a volunteer appreciation certificate from University of Turbat Vice Chancellor Prof. Dr. Gul Hasan"
          loading="lazy"
          onError={() => setImageAvailable(false)}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <div className="flex h-full min-h-[290px] flex-col items-center justify-center gap-3 px-8 text-center text-slate-400 lg:min-h-[440px]">
          <Camera size={36} className="text-cyan-300" />
          <p className="text-sm">Recognition photograph will be displayed here once uploaded.</p>
        </div>
      )}
    </div>
  );
}

export default function PersonalGallery() {
  const { gallery } = useSiteContent();
  return (
    <section id="gallery" className="section-space bg-[#0b1224] text-white">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-cyan-300">Moments & milestones</p>
            <h2 className="section-title">Gallery <span className="text-cyan-300">& Recognition.</span></h2>
            <p className="mt-5 max-w-2xl text-slate-400">Highlights from my learning journey, community involvement, and meaningful experiences.</p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"><BookOpen size={17} /> Articles & thoughts <ArrowUpRight size={17} /></Link>
        </div>

        <article className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045] shadow-2xl shadow-black/20 lg:grid-cols-2">
          <RecognitionPhoto />
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-cyan-300">
              <Award size={16} /> Volunteer Recognition
            </div>
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">Recognized for Volunteering at an AI Education Session</h3>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-cyan-300" /> October 16, 2026</span>
              <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-cyan-300" /> University of Turbat</span>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
              I served as a volunteer during “Exploring Artificial Intelligence (AI) Education,” an interactive session organized by the University of Turbat's Computer Science Department in collaboration with the Balochistan Emerging Leaders Initiative (BELI), at the UoT Smart Classroom.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Centered on “If AI Can Do the Work, What Should Humans Learn?”, the event explored the growing capabilities of AI, including large language models and natural language processing, as well as the importance of critical thinking, adaptability, responsible technology use, and future-ready human skills.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              I was honored to receive a Certificate of Appreciation for my volunteer contribution, presented by <strong className="font-semibold text-white">Prof. Dr. Gul Hasan, Vice Chancellor of the University of Turbat</strong>. This recognition reflects a meaningful opportunity to support AI education and student engagement.
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-cyan-300">Volunteer · AI Education · Community Engagement</p>
          </div>
        </article>

        {gallery.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure key={index} className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5">
                <div className="aspect-[4/3] overflow-hidden"><img src={item.url} alt={item.alt || item.caption || "Gallery photograph"} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div>
                <figcaption className="p-5 text-sm font-medium text-slate-300">{item.caption || "A moment worth sharing"}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
