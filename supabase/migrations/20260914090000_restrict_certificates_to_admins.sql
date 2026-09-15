-- Certificate management should follow the same administrator model as site content.
DROP POLICY IF EXISTS "Authenticated users can insert certificates" ON public.certificates;
DROP POLICY IF EXISTS "Authenticated users can delete certificates" ON public.certificates;

CREATE POLICY "Admins can insert certificates"
ON public.certificates FOR INSERT TO authenticated
WITH CHECK (EXISTS (
  SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
));

CREATE POLICY "Admins can delete certificates"
ON public.certificates FOR DELETE TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
));

DROP POLICY IF EXISTS "Authenticated users can upload certificate images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete certificate images" ON storage.objects;

CREATE POLICY "Admins can upload certificate images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'certificates'
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admins can delete certificate images"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'certificates'
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);
