
DROP POLICY IF EXISTS "Authenticated users can insert certificates" ON public.certificates;
DROP POLICY IF EXISTS "Authenticated users can delete certificates" ON public.certificates;

CREATE POLICY "Authenticated users can insert certificates"
ON public.certificates FOR INSERT TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete certificates"
ON public.certificates FOR DELETE TO authenticated
USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Authenticated users can upload certificate images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete certificate images" ON storage.objects;

CREATE POLICY "Authenticated users can upload certificate images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'certificates' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete certificate images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'certificates' AND auth.uid() IS NOT NULL);
