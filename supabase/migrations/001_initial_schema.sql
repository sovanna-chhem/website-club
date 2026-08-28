create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  clerk_user_id text unique,
  full_name text not null,
  email text unique not null,
  expertise text not null default 'Other' check (expertise in ('React', 'Vue', 'WordPress', 'UX', 'Other')),
  role text not null default 'guest' check (role in ('admin', 'member', 'guest')),
  membership_status text not null default 'pending' check (membership_status in ('active', 'expired', 'pending')),
  membership_expiry timestamptz,
  join_date timestamptz not null default now(),
  avatar_url text,
  bio text
);

create table if not exists public.events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  date timestamptz not null,
  location text not null,
  max_capacity integer not null check (max_capacity > 0),
  current_attendees integer not null default 0 check (current_attendees >= 0),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.rsvps (
  id uuid primary key default uuid_generate_v4(),
  event_id uuid not null references public.events(id) on delete cascade,
  member_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'attending' check (status in ('attending', 'cancelled')),
  created_at timestamptz not null default now(),
  unique (event_id, member_id)
);

create table if not exists public.resources (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  file_url text not null,
  category text not null check (category in ('minutes', 'guides', 'assets')),
  uploaded_by uuid references public.profiles(id),
  uploaded_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default uuid_generate_v4(),
  member_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(10, 2) not null check (amount >= 0),
  stripe_payment_id text unique,
  status text not null check (status in ('succeeded', 'failed', 'pending')),
  payment_date timestamptz not null default now(),
  expiry_date timestamptz
);

create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  member_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.events enable row level security;
alter table public.rsvps enable row level security;
alter table public.resources enable row level security;
alter table public.payments enable row level security;
alter table public.testimonials enable row level security;

create policy "Public can read events" on public.events for select using (true);
create policy "Members can read public profiles" on public.profiles for select using (true);
create policy "Public can read approved testimonials" on public.testimonials for select using (is_approved = true);
create policy "Members can read published resources" on public.resources for select using (true);
