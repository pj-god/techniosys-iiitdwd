export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  tag: string;
  badge: string;
  stats: string;
  desc: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  image: string;
  game: string;
  bio: string;
  socials: {
    discord?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const MEGA_RUSH_GALLERY: GalleryItem[] = [
  {
    id: "lan-finals",
    title: "MEGA RUSH Finals",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    tag: "Esports",
    badge: "ESPORTS",
    stats: "64 Teams • $5K Prize Pool",
    desc: "Adrenaline-fueled 5v5 tactical shooter showdown on the main stage under synchronized laser rigs.",
    date: "OCTOBER 2024",
  },
  {
    id: "hackathon-arena",
    title: "API COMPETITION",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    tag: "Tech",
    badge: "COMPETITION",
    stats: "36 Hours • 140+ Hackers",
    desc: "Non-stop rapid prototyping, AI agent battles, smart contract exploits, and high-intensity live pitching.",
    date: "NOVEMBER 2024",
  },
  {
    id: "main-stage-trophy",
    title: "TECHNO RUSH",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800",
    tag: "Ceremony",
    badge: "CHAMPIONSHIP",
    stats: "2,000+ Attendees • Live Stream",
    desc: "Closing championship awards, custom machined acrylic trophy unveiling, and electronic music visualizers.",
    date: "DECEMBER 2024",
  },
];

export const TEAM_LEADS: TeamMember[] = [
  {
    id: "president",
    name: "Saksham Kushwah",
    handle: "President",
    role: "President",
    image: "https://imgs.search.brave.com/1lVY_4pxn09zID5d9dClNplKbKlAZigZjmLMto0YVls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Rp/b25iZ3MuY29tL2kv/Yy8zNjR4MjA1L21l/ZGlhLzg3MDMvZ29q/by1zYXRvcnUtaG9s/bG93LWdyYWNlLjM4/NDB4MjE2MC5qcGc",
    game: "Valorant Radiant",
    bio: "Leading the club's vision, strategy, and operations while fostering a culture of innovation and collaboration.",
    socials: {
      discord: "https://discord.gg/techniosys",
      github: "https://github.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "esports-head",
    name: "Nishit Rane",
    handle: "VICE_PRESIDENT",
    role: "Vice President",
    image: "https://imgs.search.brave.com/-xZKIPrplRgBoSsuyd6T3dsGA-46wJmCmTceay_10to/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk1MTcx/NzkuanBn",
    game: "CS2 Tier-1 Caster",
    bio: "Orchestrating LAN championships, caster streams, player scouting, and collegiate competitive leagues.",
    socials: {
      discord: "https://discord.gg/techniosys",
      github: "https://github.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "tech-head",
    name: "Abhijeet Nagar",
    handle: "TECHNIO_HEAD",
    role: "Technical Head",
    image: "https://imgs.search.brave.com/2wfr96dDfyt8anUOF-z5gipPWZRGWONjWv-ZZBYwwIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAzL2RlbW9u/LXNsYXllci10YW5q/aXJvLXdpdGgta2F0/YW5hLXllbGxvdy1k/ZXNrdG9wLXdhbGxw/YXBlci1jb3Zlci5q/cGc",
    game: "Web & App Dev",
    bio: "Leading the development of web and mobile applications, AI integrations, and immersive digital experiences for the club.",
    socials: {
      discord: "https://discord.gg/techniosys",
      github: "https://github.com",
      instagram: "https://instagram.com",
    },
  },
  
  {
    id: "ops-lead",
    name: "Charan R Gupta",
    handle: "OPS_HEAD",
    role: "Event Management Head",
    image: "https://imgs.search.brave.com/NRBSvsn2-3_s_atb1StZed6QDIPfA_ewek_kL5stAWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvb25l/LXBpZWNlLWNoYXJh/Y3RlcnMtMjU2MC14/LTE2MDAtd2FsbHBh/cGVyLXh2NjgxeDdu/dzZjbGVjY3cuanBn",
    game: "Free Fire",
    bio: "Coordinating logistics, sponsorships, and on-ground operations for tournaments, workshops, and club events.",
    socials: {
      discord: "https://discord.gg/techniosys",
      github: "https://github.com",
      instagram: "https://instagram.com",
    },
  },
];

export const CLUB_STATS = [
  { label: "Participants", value: "500+" },
  { label: "Tournaments Hosted", value: "3+" },
  { label: "Prize Pool Distributed", value: "Rs. 18,500" },
  { label: "Technical Domains", value: "4+" },
];

export const NAV_LINKS = [
  { label: "SYSTEM // 01", targetPhase: 0, title: "Identity" },
  { label: "MEGA RUSH // 02", targetPhase: 1, title: "Flagship Event" },
  { label: "COMMAND // 03", targetPhase: 2, title: "Team Leads" },
];

export const CACHE_KEY = "megarush";