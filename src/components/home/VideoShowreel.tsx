"use client";

import { useState } from "react";

export default function VideoShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background placeholder — replace with actual video background */}
      <div className="absolute inset-0 bg-charcoal">
        {/* TODO: Replace with <video> or background video element */}
        {/* Example:
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/showreel.mp4"
        />
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/60" />
      </div>

      {/* Video player (shown when play is clicked) */}
      {isPlaying && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/95"
          onClick={() => setIsPlaying(false)}
        >
          {/* TODO: Replace src with actual showreel video URL */}
          <video
            autoPlay
            controls
            className="h-full w-full max-w-[90vw] max-h-[90vh]"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Play button */}
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/70 hover:bg-white/20"
          aria-label="Play showreel"
        >
          <svg
            className="ml-1 h-10 w-10 text-white transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Text below play button */}
        <p className="mt-8 text-base uppercase tracking-[0.25em] text-white">
          Watch Our Showreel
        </p>
      </div>
    </section>
  );
}
