import { internalMutation } from "./_generated/server";

// Sample events data with Unsplash images
const SAMPLE_EVENTS = [
  {
  title: "Frontend Dev Meetup – React, Next.js & Performance",
  description: `Deep dive into modern frontend development with React and Next.js.

Topics:
- React Server Components
- Next.js App Router best practices
- Performance optimization
- SEO for frontend apps
- Real-world case studies

Live demos and open discussion included.`,
  category: "tech",
  tags: ["tech", "frontend", "react", "nextjs"],
  city: "Bengaluru",
  state: "Karnataka",
  venue: "https://maps.google.com/?q=Indiranagar+Bangalore",
  address: "Indiranagar Tech Hub, Bengaluru",
  capacity: 80,
  ticketType: "free",
  coverImage: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  themeColor: "#1e40af",
},

{
  title: "Women in Tech – Career Growth & Leadership",
  description: `An empowering meetup focused on women building impactful tech careers.

Sessions include:
- Career transitions
- Leadership mindset
- Overcoming imposter syndrome
- Panel with senior women engineers

Open to allies and supporters as well.`,
  category: "tech",
  tags: ["tech", "women", "career", "leadership"],
  city: "Pune",
  state: "Maharashtra",
  venue: "https://maps.google.com/?q=Hinjewadi+Pune",
  address: "Hinjewadi Phase 1, Pune",
  capacity: 60,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  themeColor: "#9333ea",
},

{
  title: "AI for Beginners – From Zero to Practical",
  description: `Learn AI concepts without heavy math.

Covers:
- What is AI & ML?
- Popular use cases
- Hands-on demos
- Career roadmap in AI

Perfect for students and beginners.`,
  category: "tech",
  tags: ["ai", "machine-learning", "beginners"],
  city: "Hyderabad",
  state: "Telangana",
  venue: "https://maps.google.com/?q=Gachibowli+Hyderabad",
  address: "Tech Park, Gachibowli",
  capacity: 120,
  ticketType: "free",
  coverImage: "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  themeColor: "#0f766e",
},

{
  title: "Digital Marketing Bootcamp – Ads, SEO & Growth",
  description: `One-day intensive bootcamp on modern digital marketing.

Learn:
- Google Ads & Meta Ads
- SEO fundamentals
- Analytics & tracking
- Scaling strategies

Hands-on exercises included.`,
  category: "business",
  tags: ["marketing", "seo", "ads", "business"],
  city: "Delhi",
  state: "Delhi",
  venue: "https://maps.google.com/?q=Connaught+Place+Delhi",
  address: "Connaught Place, New Delhi",
  capacity: 50,
  ticketType: "paid",
  ticketPrice: 499,
  coverImage: "https://plus.unsplash.com/premium_photo-1684341008757-3b456034e943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
  themeColor: "#b45309",
},

{
  title: "Freelancers Meetup – Clients, Pricing & Growth",
  description: `Meet fellow freelancers and learn how to grow sustainably.

Agenda:
- Finding high-paying clients
- Pricing strategies
- Contracts & taxes
- Personal branding

Open networking session included.`,
  category: "business",
  tags: ["freelance", "business", "networking"],
  city: "Jaipur",
  state: "Rajasthan",
  venue: "https://maps.google.com/?q=Malviya+Nagar+Jaipur",
  address: "Malviya Nagar, Jaipur",
  capacity: 40,
  ticketType: "free",
  coverImage: "https://plus.unsplash.com/premium_photo-1661763119491-c0c6205a2163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZWxhbmNlfGVufDB8fDB8fHww",
  themeColor: "#7c2d12",
},

{
  title: "Startup Pitch Night – Idea to Investment",
  description: `Pitch your startup idea to investors and mentors.

Highlights:
- 5-minute pitches
- Live feedback
- Investor networking
- Prizes for best pitch

Early-stage founders encouraged.`,
  category: "business",
  tags: ["startup", "pitch", "investment"],
  city: "Mumbai",
  state: "Maharashtra",
  venue: "https://maps.google.com/?q=Andheri+East+Mumbai",
  address: "Startup Hub, Andheri East",
  capacity: 70,
  ticketType: "paid",
  ticketPrice: 299,
  coverImage: "https://plus.unsplash.com/premium_photo-1661633037424-16cd7b56576a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcnQlMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
  themeColor: "#991b1b",
},

{
  title: "Open Mic Night – Poetry, Comedy & Music",
  description: `Express yourself at our open mic night!

Perform:
- Poetry
- Stand-up comedy
- Acoustic music
- Storytelling

Audience voting and prizes.`,
  category: "cultural",
  tags: ["open-mic", "music", "poetry", "comedy"],
  city: "Chandigarh",
  state: "Chandigarh",
  venue: "https://maps.google.com/?q=Sector+17+Chandigarh",
  address: "Sector 17 Plaza, Chandigarh",
  capacity: 100,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1764032760868-dced31a72fb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3BlbiUyMG1pa2V8ZW58MHx8MHx8fDA%3D",
  themeColor: "#334155",
},

{
  title: "Photography Walk – Street Stories",
  description: `Capture candid moments and street stories with fellow photographers.

Includes:
- Photo walk
- Tips from professionals
- Editing session
- Instagram showcase`,
  category: "cultural",
  tags: ["photography", "art", "street"],
  city: "Kolkata",
  state: "West Bengal",
  venue: "https://maps.google.com/?q=Park+Street+Kolkata",
  address: "Park Street Area, Kolkata",
  capacity: 25,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
  themeColor: "#0f172a",
},

{
  title: "Weekend Football Tournament – 5v5",
  description: `Fast-paced 5v5 football tournament.

Details:
- Team registration
- Knockout format
- Trophies & medals
- Refreshments provided`,
  category: "sports",
  tags: ["football", "sports", "tournament"],
  city: "Noida",
  state: "Uttar Pradesh",
  venue: "https://maps.google.com/?q=Noida+Sports+Complex",
  address: "Noida Stadium",
  capacity: 60,
  ticketType: "paid",
  ticketPrice: 199,
  coverImage: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
  themeColor: "#166534",
},

{
  title: "Yoga & Mindfulness Morning Session",
  description: `Start your day with yoga and guided mindfulness.

Includes:
- Breathing exercises
- Yoga asanas
- Meditation
- Wellness tips`,
  category: "health",
  tags: ["yoga", "wellness", "mindfulness"],
  city: "Rishikesh",
  state: "Uttarakhand",
  venue: "https://maps.google.com/?q=Rishikesh+Yoga+Ashram",
  address: "Yoga Ashram, Rishikesh",
  capacity: 50,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
  themeColor: "#047857",
},

{
  title: "Hackathon – Build for Sustainability",
  description: `24-hour hackathon focused on sustainability and climate tech.

Themes:
- Clean energy
- Waste management
- Smart cities
- Climate awareness

Mentorship and prizes included.`,
  category: "tech",
  tags: ["hackathon", "sustainability", "tech"],
  city: "Ahmedabad",
  state: "Gujarat",
  venue: "https://maps.google.com/?q=IIT+Gandhinagar",
  address: "IIT Gandhinagar Campus",
  capacity: 150,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFja2F0aG9ufGVufDB8fDB8fHww",
  themeColor: "#064e3b",
},

{
  title: "Content Creators Meetup – Reels to Revenue",
  description: `Learn how creators monetize content effectively.

Topics:
- Brand deals
- Growth hacks
- Analytics
- Creator tools`,
  category: "business",
  tags: ["content", "creators", "social-media"],
  city: "Indore",
  state: "Madhya Pradesh",
  venue: "https://maps.google.com/?q=Vijay+Nagar+Indore",
  address: "Vijay Nagar, Indore",
  capacity: 45,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1581368121163-0d9c85127cdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYXRvcnN8ZW58MHx8MHx8fDA%3D",
  themeColor: "#7e22ce",
},

{
  title: "Book Reading & Discussion Club",
  description: `Monthly book reading and discussion meetup.

This month:
- Fiction & non-fiction
- Open discussion
- Coffee & snacks`,
  category: "cultural",
  tags: ["books", "reading", "discussion"],
  city: "Bhopal",
  state: "Madhya Pradesh",
  venue: "https://maps.google.com/?q=Arera+Colony+Bhopal",
  address: "Arera Colony, Bhopal",
  capacity: 30,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
  themeColor: "#1f2937",
},

{
  title: "Cybersecurity Basics – Staying Safe Online",
  description: `Learn how to protect yourself and your data online.

Topics:
- Phishing & scams
- Password management
- Privacy tools
- Safe browsing habits`,
  category: "tech",
  tags: ["cybersecurity", "privacy", "tech"],
  city: "Kochi",
  state: "Kerala",
  venue: "https://maps.google.com/?q=Infopark+Kochi",
  address: "Infopark, Kochi",
  capacity: 90,
  ticketType: "free",
  coverImage: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
  themeColor: "#0f172a",
},

{
  title: "Design Thinking Workshop",
  description: `Hands-on workshop on design thinking principles.

Includes:
- User research
- Ideation
- Prototyping
- Case studies`,
  category: "design",
  tags: ["design", "ux", "workshop"],
  city: "Trivandrum",
  state: "Kerala",
  venue: "https://maps.google.com/?q=Technopark+Trivandrum",
  address: "Technopark Campus",
  capacity: 40,
  ticketType: "paid",
  ticketPrice: 349,
  coverImage: "https://plus.unsplash.com/premium_photo-1664475926084-d20248544896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
  themeColor: "#2563eb",
},

{
  title: "College Tech Fest – Innovation & Fun",
  description: `Annual college tech fest with competitions and talks.

Events:
- Coding contests
- Robotics
- Gaming
- Tech talks`,
  category: "tech",
  tags: ["college", "fest", "tech"],
  city: "Warangal",
  state: "Telangana",
  venue: "https://maps.google.com/?q=NIT+Warangal",
  address: "NIT Warangal Campus",
  capacity: 300,
  ticketType: "free",
  coverImage: "https://media.istockphoto.com/id/1468201427/photo/3d-rendering-of-a-neon-sign-with-the-word-tech-in-the-center-abstract-scene-with-neon-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Jr-XONzOWfZdj-7akGb097xnqtOqPImryKVSomHJgI=",
  themeColor: "#7c3aed",
},

{
  title: "Stock Market 101 – Investing for Beginners",
  description: `Learn stock market basics and long-term investing strategies.

Topics:
- Stocks vs mutual funds
- Risk management
- Common mistakes
- Q&A session`,
  category: "finance",
  tags: ["finance", "investing", "stocks"],
  city: "Surat",
  state: "Gujarat",
  venue: "https://maps.google.com/?q=Adajan+Surat",
  address: "Adajan Area, Surat",
  capacity: 70,
  ticketType: "paid",
  ticketPrice: 249,
  coverImage: "https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
  themeColor: "#78350f",
},

{
  title: "Gaming Night – Valorant & FIFA",
  description: `Casual gaming night for gamers.

Includes:
- Valorant matches
- FIFA tournaments
- Snacks & prizes`,
  category: "gaming",
  tags: ["gaming", "esports"],
  city: "Nagpur",
  state: "Maharashtra",
  venue: "https://maps.google.com/?q=IT+Park+Nagpur",
  address: "IT Park, Nagpur",
  capacity: 40,
  ticketType: "free",
  coverImage: "https://plus.unsplash.com/premium_photo-1677870728119-52aef052d7ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  themeColor: "#020617",
},

{
  title: "Community Cleanup Drive",
  description: `Join hands to clean and protect our environment.

Activities:
- Area cleanup
- Waste segregation
- Awareness session`,
  category: "social",
  tags: ["community", "environment"],
  city: "Vizag",
  state: "Andhra Pradesh",
  venue: "https://maps.google.com/?q=RK+Beach+Vizag",
  address: "RK Beach Area",
  capacity: 200,
  ticketType: "free",
  coverImage: "https://images.unsplash.com/photo-1758599669327-83d310882929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5JTIwY2xlYW4lMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
  themeColor: "#14532d",
},
 
];

// Helper functions
function getRandomFutureDate(minDays = 7, maxDays = 90) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}

function getEventEndTime(startTime) {
  const durationHours = Math.floor(Math.random() * 3) + 2;
  return startTime + durationHours * 60 * 60 * 1000;
}

function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// RUN THIS DIRECTLY FROM CONVEX DASHBOARD
// Go to Dashboard > Functions > seed:run > Run
export const run = internalMutation({
  handler: async (ctx) => {
    // First, get or create a default organizer user
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      // Create a default organizer if no users exist
      const organizerId = await ctx.db.insert("users", {
        email: "organizer@eventhub.com",
        tokenIdentifier: "seed-user-token",
        name: "EventHub Team",
        hasCompletedOnboarding: true,
        location: {
          city: "Bangalore",
          state: "Karnataka",
          country: "India",
        },
        interests: ["tech", "music", "business"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(organizerId);
    }

    const createdEvents = [];

    for (const eventData of SAMPLE_EVENTS) {
      const startDate = getRandomFutureDate();
      const endDate = getEventEndTime(startDate);
      const registrationCount = Math.floor(
        Math.random() * eventData.capacity * 0.7
      );

      const event = {
        ...eventData,
        slug: generateSlug(eventData.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        startDate,
        endDate,
        timezone: "Asia/Kolkata",
        locationType: "physical",
        country: "India",
        registrationCount,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const eventId = await ctx.db.insert("events", event);
      createdEvents.push(eventData.title);
    }

    console.log(`✅ Successfully seeded ${createdEvents.length} events!`);
    return {
      success: true,
      count: createdEvents.length,
      events: createdEvents,
    };
  },
});

// Optional: Clear all events
export const clear = internalMutation({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    let count = 0;

    for (const event of events) {
      const regs = await ctx.db
        .query("registrations")
        .withIndex("by_event", (q) => q.eq("eventId", event._id))
        .collect();

      for (const reg of regs) {
        await ctx.db.delete(reg._id);
      }

      await ctx.db.delete(event._id);
      count++;
    }

    console.log(`🗑️ Cleared ${count} events`);
    return { success: true, deleted: count };
  },
});