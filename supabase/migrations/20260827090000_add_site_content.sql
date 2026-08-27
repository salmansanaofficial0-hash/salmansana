CREATE TABLE public.site_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.admin_users (
  user_id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view their own access"
  ON public.admin_users FOR SELECT TO authenticated USING (user_id = auth.uid());

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site content is publicly viewable"
  ON public.site_content FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create site content"
  ON public.site_content FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Authenticated users can update site content"
  ON public.site_content FOR UPDATE TO authenticated USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

INSERT INTO public.site_content (content)
VALUES ('{}'::jsonb);