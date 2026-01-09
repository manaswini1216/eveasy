import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-20 pt-24 relative overflow-hidden bg-gradient-to-br from-black-950 via-blue-900 to-orange-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
          {/* Left content */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-purple-300 font-light tracking-wide">
                <span className="text-blue-400"> </span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[1] tracking-tight text-white">
              Create & <br />
              locate memorable <br />
              <span className="bg-gradient-to-r from-black-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                events
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-200 mb-14 max-w-lg font-light">
              Eveasy helps you host, explore, and manage events effortlessly —
              from registrations to real-time experiences.
            </p>

            <Link href="/explore">
  <Button
    variant="ghost"
    className="
      px-12 py-8
      text-lg font-semibold
      rounded-full
      bg-black hover:bg-orange-600
      text-white
      shadow-xl shadow-orange-500/30
      transition-all
    "
  >
    Get Started with Eveasy
  </Button>
</Link>

          </div>

          {/* Right - Hero Image */}
          <div className="relative block">
            <Image
              src="/her.png"
              alt="event management app preview"
              width={700}
              height={700}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Soft background glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-black-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-3xl" />
      </section>
    </div>
  );
}

