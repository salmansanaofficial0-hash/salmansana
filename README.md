# Salman Sana portfolio

## Admin control room

The private editor is available at `/admin`. It uses Supabase Auth and does not expose a public sign-up form.

Before first use:

1. Apply the migration in `supabase/migrations/20260827090000_add_site_content.sql` to the connected Supabase project.
2. Create the administrator account in Supabase Dashboard under Authentication > Users.
3. In the SQL editor, provision that user: `insert into public.admin_users (user_id) values ('USER_UUID_FROM_AUTH');`
4. Open `https://www.salmansana.me/admin` and sign in with that account.

The control room currently edits the homepage availability label, name, subtitle, introduction, metrics, and contact details. Certificates remain managed through the authenticated certificate upload controls on the homepage.
