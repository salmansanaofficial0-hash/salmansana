import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SiteContent = {
  hero: {
    availability: string;
    title: string;
    subtitle: string;
    description: string;
  };
  metrics: Array<{ num: string; label: string }>;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
  };
};

export const defaultSiteContent: SiteContent = {
  hero: {
    availability: "Open to Internships",
    title: "Salman Sana",
    subtitle: "BBA Student — Finance & Marketing\nUniversity of Turbat, Balochistan",
    description: "Combining academic knowledge with strategic thinking to create business impact and growth opportunities. Passionate about market analysis, financial concepts, and building meaningful brands.",
  },
  metrics: [
    { num: "4th", label: "Semester" },
    { num: "BBA", label: "Degree Program" },
    { num: "2×", label: "Specializations" },
    { num: "∞", label: "Growth Mindset" },
  ],
  contact: {
    phone: "0343 835 9055",
    email: "salmansanajan@gmail.com",
    location: "Turbat, Balochistan, Pakistan",
    linkedin: "https://www.linkedin.com/in/salman-sana-/",
  },
};

const mergeContent = (value: unknown): SiteContent => {
  if (!value || typeof value !== "object") return defaultSiteContent;
  const incoming = value as Partial<SiteContent>;
  return {
    ...defaultSiteContent,
    ...incoming,
    hero: { ...defaultSiteContent.hero, ...incoming.hero },
    metrics: Array.isArray(incoming.metrics) && incoming.metrics.length === 4 ? incoming.metrics : defaultSiteContent.metrics,
    contact: { ...defaultSiteContent.contact, ...incoming.contact },
  };
};

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    supabase.from("site_content").select("content").limit(1).maybeSingle().then(({ data }) => {
      if (data?.content) setContent(mergeContent(data.content));
    });
  }, []);

  return content;
};

export { mergeContent };