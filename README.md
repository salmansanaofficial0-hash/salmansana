# Salman Sana portfolio

## Admin control room

The private editor is available at `/admin`. It uses Supabase Auth and does not expose a public sign-up form.

Before first use:

1. Apply the migrations in `supabase/migrations` to the connected Supabase project, including `20260914090000_restrict_certificates_to_admins.sql`.
2. Create the administrator account in Supabase Dashboard under Authentication > Users.
3. In the SQL editor, provision that user: `insert into public.admin_users (user_id) values ('USER_UUID_FROM_AUTH');`
4. Open `https://www.salmansana.me/admin` and sign in with that account.

The control room edits the homepage availability label, name, subtitle, introduction, metrics, and contact details. Certificate uploads and deletions use the same `admin_users` allowlist.

## Website routes

- `/` — portfolio overview, capabilities, selected work, credentials, and contact options
- `/about` — background, leadership roles, and working principles
- `/portfolio` — filterable project case studies
- `/blog` — published insights
- `/blog/:slug` — complete article pages
- `/admin` — authenticated content control room
