import { FormEvent, useEffect, useState } from "react";
import { LogOut, Save, ShieldCheck, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { defaultSiteContent, mergeContent, SiteContent } from "@/lib/site-content";

const fieldClass = "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-blue-mid/30";

const Admin = () => {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      const user = data.session?.user;
      setSessionEmail(user?.email ?? null);
      if (user) {
        const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
        setAuthorized(!!admin);
      }
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      setSessionEmail(nextSession?.user.email ?? null);
      if (nextSession?.user) {
        const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", nextSession.user.id).maybeSingle();
        setAuthorized(!!admin);
      } else setAuthorized(false);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!sessionEmail) return;
    supabase.from("site_content").select("content").limit(1).maybeSingle().then(({ data }) => {
      if (data?.content) setContent(mergeContent(data.content));
    });
  }, [sessionEmail]);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast.error(error.message);
    else toast.success("Welcome back");
  };

  const save = async () => {
    setSaving(true);
    const { data: existing } = await supabase.from("site_content").select("id").limit(1).maybeSingle();
    const query = existing
      ? supabase.from("site_content").update({ content }).eq("id", existing.id)
      : supabase.from("site_content").insert({ content });
    const { error } = await query;
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Site content published");
  };

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted">Loading admin...</div>;
  if (!sessionEmail || !authorized) return (
    <main className="min-h-screen bg-[#f6f7f9] flex items-center justify-center px-5">
      <form onSubmit={signIn} className="w-full max-w-md bg-background border border-border rounded-2xl p-8 shadow-xl">
        <div className="w-11 h-11 rounded-xl bg-ink text-white flex items-center justify-center mb-6"><ShieldCheck size={22} /></div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-mid mb-2">Private workspace</p>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Site admin</h1>
        <p className="text-sm text-muted mb-7">{sessionEmail ? "This account is not provisioned as an administrator." : "Sign in with the Supabase account created for this website."}</p>
        <div className="space-y-4">
          <input className={fieldClass} type="email" required placeholder="Admin email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={fieldClass} type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {!sessionEmail && <button className="w-full rounded-lg bg-ink text-white py-3 text-sm font-bold hover:bg-blue-mid transition-colors">Sign in</button>}
        </div>
        <a href="/" className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"><ExternalLink size={14} /> View website</a>
      </form>
    </main>
  );

  const updateHero = (key: keyof SiteContent["hero"], value: string) => setContent((current) => ({ ...current, hero: { ...current.hero, [key]: value } }));
  const updateContact = (key: keyof SiteContent["contact"], value: string) => setContent((current) => ({ ...current, contact: { ...current.contact, [key]: value } }));

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-foreground">
      <header className="border-b border-border bg-background px-5 md:px-10 py-5 flex items-center justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-mid">Salman Sana</p><h1 className="font-display text-3xl font-bold">Control room</h1></div>
        <div className="flex items-center gap-4"><span className="hidden sm:block text-sm text-muted">{sessionEmail}</span><button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground"><LogOut size={16} /> Sign out</button></div>
      </header>
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-10">
        <div className="mb-8"><p className="text-sm text-muted">Edit the content visitors see on your homepage. Changes publish immediately.</p></div>
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6">
          <section className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Homepage identity</h2>
            <div className="space-y-5">
              <label className="block text-sm font-semibold">Availability<input className={`${fieldClass} mt-2`} value={content.hero.availability} onChange={(e) => updateHero("availability", e.target.value)} /></label>
              <label className="block text-sm font-semibold">Name<input className={`${fieldClass} mt-2`} value={content.hero.title} onChange={(e) => updateHero("title", e.target.value)} /></label>
              <label className="block text-sm font-semibold">Subtitle<textarea rows={2} className={`${fieldClass} mt-2 resize-y`} value={content.hero.subtitle} onChange={(e) => updateHero("subtitle", e.target.value)} /></label>
              <label className="block text-sm font-semibold">Introduction<textarea rows={4} className={`${fieldClass} mt-2 resize-y`} value={content.hero.description} onChange={(e) => updateHero("description", e.target.value)} /></label>
            </div>
          </section>
          <div className="space-y-6">
            <section className="bg-background border border-border rounded-2xl p-6 md:p-8"><h2 className="font-display text-2xl font-bold mb-6">Metrics</h2><div className="space-y-3">{content.metrics.map((metric, index) => <div className="grid grid-cols-[0.65fr_1fr] gap-3" key={index}><input className={fieldClass} value={metric.num} aria-label={`Metric ${index + 1} value`} onChange={(e) => setContent((current) => ({ ...current, metrics: current.metrics.map((item, i) => i === index ? { ...item, num: e.target.value } : item) }))} /><input className={fieldClass} value={metric.label} aria-label={`Metric ${index + 1} label`} onChange={(e) => setContent((current) => ({ ...current, metrics: current.metrics.map((item, i) => i === index ? { ...item, label: e.target.value } : item) }))} /></div>)}</div></section>
            <section className="bg-background border border-border rounded-2xl p-6 md:p-8"><h2 className="font-display text-2xl font-bold mb-6">Contact details</h2><div className="space-y-4"><label className="block text-sm font-semibold">Phone<input className={`${fieldClass} mt-2`} value={content.contact.phone} onChange={(e) => updateContact("phone", e.target.value)} /></label><label className="block text-sm font-semibold">Email<input className={`${fieldClass} mt-2`} value={content.contact.email} onChange={(e) => updateContact("email", e.target.value)} /></label><label className="block text-sm font-semibold">Location<input className={`${fieldClass} mt-2`} value={content.contact.location} onChange={(e) => updateContact("location", e.target.value)} /></label><label className="block text-sm font-semibold">LinkedIn URL<input className={`${fieldClass} mt-2`} value={content.contact.linkedin} onChange={(e) => updateContact("linkedin", e.target.value)} /></label></div></section>
          </div>
        </div>
        <div className="mt-6 flex justify-end"><button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-ink text-white px-5 py-3 text-sm font-bold hover:bg-blue-mid transition-colors disabled:opacity-50"><Save size={16} />{saving ? "Publishing..." : "Publish changes"}</button></div>
      </div>
    </main>
  );
};

export default Admin;