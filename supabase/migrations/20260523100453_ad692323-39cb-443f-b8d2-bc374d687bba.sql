
-- Restrict certificates table INSERT/DELETE to authenticated users only
DROP POLICY IF EXISTS "Allow certificate inserts" ON public.certificates;
DROP POLICY IF EXISTS "Allow certificate deletes" ON public.certificates;

CREATE POLICY "Authenticated users can insert certificates"
ON public.certificates FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can delete certificates"
ON public.certificates FOR DELETE TO authenticated USING (true);

-- Restrict storage uploads/deletes on certificates bucket to authenticated users
DROP POLICY IF EXISTS "Allow certificate image uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow certificate image deletes" ON storage.objects;

CREATE POLICY "Authenticated users can upload certificate images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'certificates');

CREATE POLICY "Authenticated users can delete certificate images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'certificates');

-- Remove broad SELECT policy on storage.objects to prevent bucket listing.
-- Public URLs continue to work because the bucket is public.
DROP POLICY IF EXISTS "Certificate images are publicly accessible" ON storage.objects;
