"use client";

import { Calendar, MapPin, Users, Trash2, X, QrCode, Eye } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { getCategoryIcon, getCategoryLabel } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EventCard({
  event,
  onClick,
  onDelete,
  variant = "grid",
  action = null,
  className = "",
}) {
  /* ---------- LIST VARIANT ---------- */
  if (variant === "list") {
    return (
      <Card
        className={`group cursor-pointer border bg-background/60 backdrop-blur hover:shadow-md hover:border-blue-500/40 transition-all ${className}`}
        onClick={onClick}
      >
        <CardContent className="p-4 flex gap-4">
          {/* Image */}
          <div className="w-20 h-20 rounded-xl shrink-0 overflow-hidden relative">
            {event.coverImage ? (
              <Image
                src={event.coverImage}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center text-3xl"
                style={{ backgroundColor: event.themeColor }}
              >
                {getCategoryIcon(event.category)}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
              {event.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-1">
              {format(event.startDate, "EEE, dd MMM • HH:mm")}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <MapPin className="w-3 h-3" />
              <span className="line-clamp-1">
                {event.locationType === "online" ? "Online Event" : event.city}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{event.registrationCount} attending</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ---------- GRID VARIANT ---------- */
  return (
    <Card
      className={`group overflow-hidden border bg-background/60 backdrop-blur ${
        onClick
          ? "cursor-pointer hover:shadow-xl hover:border-blue-500/40 transition-all"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {event.coverImage ? (
          <Image
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={500}
            height={192}
            priority
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-4xl"
            style={{ backgroundColor: event.themeColor }}
          >
            {getCategoryIcon(event.category)}
          </div>
        )}

        <Badge
          variant="secondary"
          className="absolute top-3 right-3 shadow-sm"
        >
          {event.ticketType === "free" ? "Free" : "Paid"}
        </Badge>
      </div>

      <CardContent className="p-5 space-y-3">
        <div>
          <Badge variant="outline" className="mb-2">
            {getCategoryIcon(event.category)}{" "}
            {getCategoryLabel(event.category)}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors">
            {event.title}
          </h3>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(event.startDate, "PPP")}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">
              {event.locationType === "online"
                ? "Online Event"
                : `${event.city}, ${event.state || event.country}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>
              {event.registrationCount} / {event.capacity} registered
            </span>
          </div>
        </div>

        {action && (
          <div className="flex gap-2 pt-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(e);
              }}
            >
              {action === "event" ? (
                <>
                  <Eye className="w-4 h-4" />
                  View
                </>
              ) : (
                <>
                  <QrCode className="w-4 h-4" />
                  Show Ticket
                </>
              )}
            </Button>

            {onDelete && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(event._id);
                }}
              >
                {action === "event" ? (
                  <Trash2 className="w-4 h-4" />
                ) : (
                  <X className="w-4 h-4" />
                )}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
