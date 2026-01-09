// Event Categories with visual styling
export const CATEGORIES = [
  {
    id: "tech",
    label: "Technology",
    icon: "🧠",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    description: "Tech meetups, hackathons, AI, and developer conferences",
  },
  {
    id: "music",
    label: "Music & Live",
    icon: "🎶",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    description: "Concerts, festivals, DJ nights, and live performances",
  },
  {
    id: "sports",
    label: "Sports & Fitness",
    icon: "🏆",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-500/10",
    description: "Sports events, tournaments, marathons, and fitness sessions",
  },
  {
    id: "art",
    label: "Art & Culture",
    icon: "🖼️",
    color: "from-purple-500 to-fuchsia-600",
    bg: "bg-purple-500/10",
    description: "Art exhibitions, cultural shows, and creative workshops",
  },
  {
    id: "food",
    label: "Food & Drink",
    icon: "🍽️",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    description: "Food festivals, tastings, cooking classes, and cafes",
  },
  {
    id: "business",
    label: "Business & Startups",
    icon: "📈",
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-500/10",
    description: "Networking events, conferences, founders & startup meetups",
  },
  {
    id: "health",
    label: "Health & Wellness",
    icon: "💆‍♀️",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-500/10",
    description: "Yoga, meditation, mental health, and wellness sessions",
  },
  {
    id: "education",
    label: "Education & Learning",
    icon: "🎓",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    description: "Workshops, bootcamps, talks, and learning experiences",
  },
  {
    id: "gaming",
    label: "Gaming & Esports",
    icon: "🕹️",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-500/10",
    description: "Gaming tournaments, esports, LAN parties, and conventions",
  },
  {
    id: "networking",
    label: "Networking",
    icon: "🌐",
    color: "from-cyan-500 to-sky-600",
    bg: "bg-cyan-500/10",
    description: "Professional networking and community-driven events",
  },
  {
    id: "outdoor",
    label: "Outdoor & Adventure",
    icon: "⛰️",
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-500/10",
    description: "Hiking, trekking, camping, and outdoor experiences",
  },
  {
    id: "community",
    label: "Community & Social",
    icon: "💬",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    description: "Local meetups, social gatherings, and community events",
  },
];

// Helpers
export const getCategoryById = (id) =>
  CATEGORIES.find((cat) => cat.id === id);

export const getCategoryLabel = (id) =>
  getCategoryById(id)?.label ?? id;

export const getCategoryIcon = (id) =>
  getCategoryById(id)?.icon ?? "📍";

export const getCategoryStyle = (id) =>
  getCategoryById(id) ?? {};
