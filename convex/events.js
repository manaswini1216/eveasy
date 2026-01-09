import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/* -------------------------------------------------------------------------- */
/*                                CREATE EVENT                                */
/* -------------------------------------------------------------------------- */

export const createEvent = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    startDate: v.number(),
    endDate: v.number(),
    timezone: v.string(),

    locationType: v.union(v.literal("physical"), v.literal("online")),
    venue: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.string(),
    state: v.optional(v.string()),
    country: v.string(),

    capacity: v.number(),
    ticketType: v.union(v.literal("free"), v.literal("paid")),
    ticketPrice: v.optional(v.number()),

    coverImage: v.optional(v.string()),
    themeColor: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);
    const hasPro = user.hasPro === true;

    /* ------------------------- FREE PLAN LIMIT CHECK ------------------------ */
    if (!hasPro && user.freeEventsCreated >= 1) {
      throw new Error(
        "Free plan allows only 1 event. Upgrade to Pro to create more."
      );
    }

    /* ------------------------- THEME COLOR ENFORCEMENT ---------------------- */
    const DEFAULT_THEME_COLOR = "#1e3a8a"; // bluish default

    if (!hasPro && args.themeColor && args.themeColor !== DEFAULT_THEME_COLOR) {
      throw new Error("Custom theme colors are available on Pro plan only.");
    }

    const themeColor = hasPro
      ? args.themeColor ?? DEFAULT_THEME_COLOR
      : DEFAULT_THEME_COLOR;

    /* ----------------------------- SLUG CREATION ---------------------------- */
    const slugBase = args.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const slug = `${slugBase}-${Date.now()}`;

    /* ------------------------------ CREATE EVENT ---------------------------- */
    const eventId = await ctx.db.insert("events", {
      ...args,
      themeColor,
      slug,

      organizerId: user._id,
      organizerName: user.name,

      registrationCount: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    /* ----------------------- TRACK FREE USER USAGE -------------------------- */
    if (!hasPro) {
      await ctx.db.patch(user._id, {
        freeEventsCreated: user.freeEventsCreated + 1,
      });
    }

    return eventId;
  },
});

/* -------------------------------------------------------------------------- */
/*                              GET EVENT BY SLUG                             */
/* -------------------------------------------------------------------------- */

export const getEventBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("events")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
  },
});

/* -------------------------------------------------------------------------- */
/*                              GET MY EVENTS                                 */
/* -------------------------------------------------------------------------- */

export const getMyEvents = query({
  handler: async (ctx) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);

    return await ctx.db
      .query("events")
      .withIndex("by_organizer", (q) => q.eq("organizerId", user._id))
      .order("desc")
      .collect();
  },
});

/* -------------------------------------------------------------------------- */
/*                               DELETE EVENT                                 */
/* -------------------------------------------------------------------------- */

export const deleteEvent = mutation({
  args: { eventId: v.id("events") },

  handler: async (ctx, { eventId }) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);
    const event = await ctx.db.get(eventId);

    if (!event) {
      throw new Error("Event not found");
    }

    if (event.organizerId !== user._id) {
      throw new Error("You are not authorized to delete this event");
    }

    /* ---------------------- DELETE EVENT REGISTRATIONS --------------------- */
    const registrations = await ctx.db
      .query("registrations")
      .withIndex("by_event", (q) => q.eq("eventId", eventId))
      .collect();

    for (const r of registrations) {
      await ctx.db.delete(r._id);
    }

    /* ----------------------------- DELETE EVENT ----------------------------- */
    await ctx.db.delete(eventId);

    /* -------------------- ADJUST FREE EVENT COUNT --------------------------- */
    if (!user.hasPro && user.freeEventsCreated > 0) {
      await ctx.db.patch(user._id, {
        freeEventsCreated: user.freeEventsCreated - 1,
      });
    }

    return { success: true };
  },
});
