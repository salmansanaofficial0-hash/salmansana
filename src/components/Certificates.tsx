import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, Award, Calendar, Building2, Plus, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Certificate {
  id: string;
  title: string;
  issuer: string | null;
  date_issued: string | null;
  image_url: string;
  pdf_url?: string;
}

const localCertificateExtras: Certificate[] = [
  {
    id: "coursera-6ug02qrket4t",
    title: "Coursera Credential - 6UG02QRKET4T",
    issuer: "Coursera",
    date_issued: null,
    image_url: "/certificates/coursera-6ug02qrket4t.png",
    pdf_url: "/certificates/coursera-6ug02qrket4t.pdf",
  },
  {
    id: "coursera-8nk16ap23fr8",
    title: "Coursera Credential - 8NK16AP23FR8",
    issuer: "Coursera",
    date_issued: null,
    image_url: "/certificates/coursera-8nk16ap23fr8.png",
    pdf_url: "/certificates/coursera-8nk16ap23fr8.pdf",
  },
  {
    id: "dstp-kp97uaumk",
    title: "DSTP Credential - KP97UAUMK",
    issuer: "DSTP",
    date_issued: null,
    image_url: "/certificates/dstp-kp97uaumk.png",
    pdf_url: "/certificates/dstp-kp97uaumk.pdf",
  },
  {
    id: "dstp-5ndngvmk5",
    title: "DSTP Credential - 5NDNGVMK5",
    issuer: "DSTP",
    date_issued: null,
    image_url: "/certificates/dstp-5ndngvmk5.png",
    pdf_url: "/certificates/dstp-5ndngvmk5.pdf",
  },
  {
    id: "dstp-h9xq5ffmk",
    title: "DSTP Credential - SALMAN SANA",
    issuer: "DSTP",
    date_issued: null,
    image_url: "/certificates/dstp-h9xq5ffmk.png",
    pdf_url: "/certificates/dstp-h9xq5ffmk.pdf",
  },
  {
    id: "ai-fluency-cert",
    title: "AI Fluency Certificate",
    issuer: null,
    date_issued: null,
    image_url: "/certificates/ai-fluency-cert.jpg",
  },
  {
    id: "beli-personal-branding",
    title: "Personal Branding Certificate",
    issuer: "BELI",
    date_issued: null,
    image_url: "/certificates/beli-personal-branding.png",
  },
  {
    id: "business-skill-competitions",
    title: "Business Skills Competition Certificate",
    issuer: null,
    date_issued: null,
    image_url: "/certificates/business-skill-competitions.png",
  },
  {
    id: "karbaar-youth-summit",
    title: "Karbaar Youth Summit Certificate",
    issuer: "Karbaar",
    date_issued: null,
    image_url: "/certificates/karbaar-youth-summit.png",
  },
  {
    id: "national-youth-summit-gwadar",
    title: "National Youth Summit Gwadar Certificate",
    issuer: null,
    date_issued: null,
    image_url: "/certificates/national-youth-summit-gwadar.png",
  },
];

const mergeCertificates = (existing: Certificate[]) => {
  const combined = [...existing, ...localCertificateExtras];
  const seen = new Set<string>();

  return combined.filter(cert => {
    const titleKey = cert.title.trim().toLowerCase().replace(/\s+/g, " ");
    const issuerKey = (cert.issuer ?? "").trim().toLowerCase().replace(/\s+/g, " ");
    const imageKey = cert.image_url.split("?")[0].split("/").pop()?.toLowerCase() ?? cert.image_url;
    const keys = [`title:${titleKey}|issuer:${issuerKey}`, `image:${imageKey}`];

    if (keys.some(key => seen.has(key))) return false;
    keys.forEach(key => seen.add(key));
    return true;
  });
};

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [showUpload, setShowUpload] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchCertificates();
    // Check if user is logged in (admin)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0'); });
    }, { threshold: 0.07 });
    sectionRef.current?.querySelectorAll('.reveal-el').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [certificates]);

  const fetchCertificates = async () => {
    const { data, error } = await supabase.from("certificates").select("*").order("created_at", { ascending: false });
    if (error) console.error("Failed to fetch certificates:", error);
    const merged = data ? mergeCertificates(data) : localCertificateExtras;
    setCertificates(merged);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) {
      toast.error("Please provide a title and image");
      return;
    }
    setUploading(true);
    try {
      const ext = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("certificates").upload(fileName, selectedFile);
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("certificates").getPublicUrl(fileName);

      const { error: insertError } = await supabase.from("certificates").insert({
        title: title.trim(),
        issuer: issuer.trim() || null,
        date_issued: dateIssued || null,
        image_url: urlData.publicUrl,
      });
      if (insertError) throw insertError;

      toast.success("Certificate uploaded!");
      setTitle(""); setIssuer(""); setDateIssued(""); setSelectedFile(null); setPreview(null); setShowUpload(false);
      fetchCertificates();
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    const fileName = imageUrl.split("/").pop();
    if (fileName) await supabase.storage.from("certificates").remove([fileName]);
    await supabase.from("certificates").delete().eq("id", id);
    toast.success("Certificate removed");
    fetchCertificates();
  };

  return (
    <section id="certificates" className="py-28 px-[5%] bg-card" ref={sectionRef}>
      <div className="text-center max-w-[560px] mx-auto mb-14">
        <div className="text-[0.73rem] font-bold uppercase tracking-[0.16em] text-blue-mid mb-3">Achievements</div>
        <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground mb-4">
          Certificates &amp; <em className="italic text-blue-mid">Awards</em>
        </h2>
        <p className="text-[0.97rem] text-muted leading-relaxed">Professional certifications and academic achievements earned along the way.</p>
      </div>

      {/* Upload toggle - admin only */}
      {isAdmin && (
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="inline-flex items-center gap-2 bg-ink text-primary-foreground px-6 py-3 rounded-full text-[0.85rem] font-bold tracking-wide transition-all hover:bg-blue-mid hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
          >
            <Plus size={16} />
            {showUpload ? "Cancel" : "Upload Certificate"}
          </button>
        </div>
      )}

      {/* Upload form */}
      {showUpload && (
        <div className="max-w-lg mx-auto mb-12 bg-background border border-border rounded-[20px] p-6 animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted mb-1.5 block">Certificate Title *</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Google Digital Marketing"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-blue-mid transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted mb-1.5 block">Issuer</label>
                <input value={issuer} onChange={e => setIssuer(e.target.value)} placeholder="e.g. Google"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-blue-mid transition-colors" />
              </div>
              <div>
                <label className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted mb-1.5 block">Date Issued</label>
                <input type="date" value={dateIssued} onChange={e => setDateIssued(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-blue-mid transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted mb-1.5 block">Certificate Image *</label>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              {preview ? (
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img src={preview} alt="Preview" className="w-full h-48 object-contain bg-card" />
                  <button onClick={() => { setSelectedFile(null); setPreview(null); }} className="absolute top-2 right-2 bg-foreground/70 text-primary-foreground p-1 rounded-full">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button onClick={() => fileRef.current?.click()}
                  className="w-full py-8 border-2 border-dashed border-border rounded-xl flex flex-col items-center gap-2 text-muted hover:border-blue-mid hover:text-blue-mid transition-colors">
                  <Upload size={24} />
                  <span className="text-sm font-medium">Click to upload image</span>
                </button>
              )}
            </div>
            <button onClick={handleUpload} disabled={uploading}
              className="w-full bg-ink text-primary-foreground py-3 rounded-xl font-bold text-sm transition-all hover:bg-blue-mid disabled:opacity-50">
              {uploading ? "Uploading..." : "Save Certificate"}
            </button>
          </div>
        </div>
      )}

      {/* Certificates grid */}
      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div key={cert.id}
              className="group bg-background border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:border-transparent reveal-el opacity-0 translate-y-5"
              style={{ transitionDelay: `${i * 0.07}s`, transitionDuration: '650ms', animationFillMode: 'forwards' }}>
              <div className="relative cursor-pointer" onClick={() => setViewImage(cert.image_url)}>
                <img src={cert.image_url} alt={cert.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                  <Award size={32} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[0.95rem] font-bold text-foreground mb-1">{cert.title}</h3>
                {cert.issuer && (
                  <div className="flex items-center gap-1.5 text-[0.8rem] text-muted mb-1">
                    <Building2 size={12} /> {cert.issuer}
                  </div>
                )}
                {cert.date_issued && (
                  <div className="flex items-center gap-1.5 text-[0.75rem] text-muted">
                    <Calendar size={12} /> {new Date(cert.date_issued).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </div>
                )}
                {cert.pdf_url && (
                  <a href={cert.pdf_url} target="_blank" rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-blue-mid hover:text-foreground transition-colors">
                    <ExternalLink size={12} /> View original PDF
                  </a>
                )}
                {isAdmin && (
                  <button onClick={() => handleDelete(cert.id, cert.image_url)}
                    className="mt-3 inline-flex items-center gap-1 text-[0.72rem] font-semibold text-rose hover:text-destructive transition-colors">
                    <Trash2 size={12} /> Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : !showUpload && (
        <div className="text-center py-16 text-muted">
          <Award size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-sm">No certificates uploaded yet. Click "Upload Certificate" to add one.</p>
        </div>
      )}

      {/* Lightbox */}
      {viewImage && (
        <div className="fixed inset-0 z-[300] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-8" onClick={() => setViewImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={viewImage} alt="Certificate" className="max-w-full max-h-[85vh] object-contain rounded-xl" />
            <button onClick={() => setViewImage(null)} className="absolute -top-3 -right-3 bg-primary-foreground text-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
