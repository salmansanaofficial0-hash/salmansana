-- Create certificates table
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT,
  date_issued DATE,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Anyone can view certificates (public portfolio)
CREATE POLICY "Certificates are publicly viewable"
  ON public.certificates FOR SELECT USING (true);

-- Allow inserts
CREATE POLICY "Allow certificate inserts"
  ON public.certificates FOR INSERT WITH CHECK (true);

-- Allow deletes
CREATE POLICY "Allow certificate deletes"
  ON public.certificates FOR DELETE USING (true);

-- Create storage bucket for certificate images
INSERT INTO storage.buckets (id, name, public) VALUES ('certificates', 'certificates', true);

-- Public read access
CREATE POLICY "Certificate images are publicly accessible"
  ON storage.objects FOR SELECT USING (bucket_id = 'certificates');

-- Allow uploads
CREATE POLICY "Allow certificate image uploads"
  ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'certificates');

-- Allow deletes
CREATE POLICY "Allow certificate image deletes"
  ON storage.objects FOR DELETE USING (bucket_id = 'certificates');