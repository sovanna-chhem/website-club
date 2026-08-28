export type Event = {
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  capacity: number;
  featured?: boolean;
  gradient: string;
};

export const events: Event[] = [
  {
    slug: "product-night-08",
    title: "Product Night: Ship something real",
    description: "A fast-moving evening of product demos, practical feedback, and the stories behind the launch.",
    date: "Aug 29, 2026",
    time: "6:30 PM – 9:00 PM",
    location: "The Foundry, District 1",
    category: "Featured",
    attendees: 84,
    capacity: 120,
    featured: true,
    gradient: "from-lime/30 via-cyan/10 to-transparent"
  },
  {
    slug: "design-critique",
    title: "Design critique club",
    description: "Bring one screen, leave with ten thoughtful perspectives. All levels and disciplines welcome.",
    date: "Sep 05, 2026",
    time: "10:00 AM – 12:00 PM",
    location: "Studio B, Thao Dien",
    category: "Workshop",
    attendees: 31,
    capacity: 40,
    gradient: "from-cyan/25 via-blue-500/10 to-transparent"
  },
  {
    slug: "founders-breakfast",
    title: "Founders breakfast",
    description: "An intimate breakfast for people building ambitious things and sharing the messy middle.",
    date: "Sep 12, 2026",
    time: "8:30 AM – 10:30 AM",
    location: "Okkio Coffee, Nguyen Hue",
    category: "Community",
    attendees: 18,
    capacity: 24,
    gradient: "from-fuchsia-400/20 via-orange-400/10 to-transparent"
  },
  {
    slug: "build-in-public",
    title: "Build in public showcase",
    description: "Four members. Four demos. Zero decks. Come see what is being built in our community.",
    date: "Sep 19, 2026",
    time: "7:00 PM – 9:30 PM",
    location: "The Hive, Binh Thanh",
    category: "Showcase",
    attendees: 62,
    capacity: 90,
    gradient: "from-violet-400/25 via-cyan/10 to-transparent"
  }
];

export const members = [
  { name: "Minh Tran", role: "Founder, Dott", initials: "MT", color: "bg-lime text-ink", joined: "Jan 2025", status: "Active" },
  { name: "An Nguyen", role: "Product designer", initials: "AN", color: "bg-cyan text-ink", joined: "Mar 2025", status: "Active" },
  { name: "Khoa Pham", role: "Engineer, Orbit", initials: "KP", color: "bg-violet-400 text-ink", joined: "Apr 2025", status: "Active" },
  { name: "Mai Le", role: "Creative director", initials: "ML", color: "bg-orange-300 text-ink", joined: "May 2025", status: "Active" },
  { name: "Quang Vo", role: "Independent maker", initials: "QV", color: "bg-pink-300 text-ink", joined: "Jun 2025", status: "Pending" }
];

export const resources = [
  { title: "The Club playbook", type: "Guide", description: "A practical guide to getting value from every room, introduction, and event.", meta: "12 min read", icon: "✦" },
  { title: "Community directory template", type: "Template", description: "A lightweight system for knowing who can help, collaborate, or make an intro.", meta: "Notion template", icon: "▦" },
  { title: "Launch checklist", type: "Toolkit", description: "Everything to sanity-check before sharing your next product with the world.", meta: "PDF · 24 pages", icon: "↗" }
];

export const testimonials = [
  { quote: "The rare community where people share the messy middle, not just polished launches.", name: "Thao Nguyen", role: "Product lead, Linear", initials: "TN" },
  { quote: "I came for one workshop and left with a collaborator, a new perspective, and three warm introductions.", name: "Duy Pham", role: "Independent maker", initials: "DP" },
  { quote: "Every event feels intentionally small. You get to have the conversations you usually wish you had.", name: "Linh Tran", role: "Design director, Orbit", initials: "LT" }
];

export const stats = [
  { label: "Members", value: "1,240", change: "+18.4%" },
  { label: "Events hosted", value: "86", change: "+12.0%" },
  { label: "Connections made", value: "3,920", change: "+24.8%" },
  { label: "Member NPS", value: "72", change: "+4.6%" }
];
