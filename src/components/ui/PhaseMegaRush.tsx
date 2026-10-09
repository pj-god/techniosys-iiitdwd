'use client';

import { useState } from 'react';
import { ChevronRight, X, Calendar, Users } from 'lucide-react';
import { MEGA_RUSH_GALLERY, GalleryItem } from '../utils/constants';

interface PhaseMegaRushProps {
  onProceed?: () => void;
}

export function PhaseMegaRush({ onProceed }: PhaseMegaRushProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative select-none">
      {/* Main Section Header & Gallery Container */}
      <div className="w-full max-w-[110rem] mx-auto my-auto py-6 flex flex-col items-center relative z-10">
        {/* Soft Radial Dark Backdrop for Text Legibility */}
        <div className="absolute -inset-10 -z-10 bg-radial from-[#07090e]/80 via-[#07090e]/50 to-transparent blur-2xl pointer-events-none rounded-3xl" />

        {/* Header: PAST EVENTS */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] text-center">
          PAST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#ff4d8d] to-[#00f0ff]">EVENTS</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-white max-w-2xl text-center leading-relaxed font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Techniosys&apos; flagship events, from high-octane esports showdowns to rapid-fire technical questions and grand api competitions
        </p>

        {/* Compact horizontal past-event cards */}
        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-3 pointer-events-auto">
          {MEGA_RUSH_GALLERY.map((item, idx) => {
            const accent =
              idx === 0
                ? {
                    text: 'text-[#ff2874]',
                    border: 'border-pink-500/70',
                    badge: 'border-pink-500/40 bg-pink-950/60 text-pink-400',
                    stripe: 'bg-[#ff2874]',
                    hover: 'group-hover:border-pink-500/50',
                  }
                : idx === 1
                ? {
                    text: 'text-[#00e5ff]',
                    border: 'border-cyan-500/70',
                    badge: 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300',
                    stripe: 'bg-[#00e5ff]',
                    hover: 'group-hover:border-cyan-500/50',
                  }
                : {
                    text: 'text-amber-400',
                    border: 'border-amber-500/70',
                    badge: 'border-amber-500/40 bg-amber-950/60 text-amber-400',
                    stripe: 'bg-amber-500',
                    hover: 'group-hover:border-amber-500/50',
                  };

            const statParts = item.stats
              .split(/\s*[•|]\s*/)
              .map((part) => part.trim())
              .filter(Boolean);

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedItem(item)}
                aria-label={`View details for ${item.title}`}
                className={`group relative h-80 w-110 min-w-0 overflow-hidden rounded-xl border border-slate-800/90 bg-[#080d12] text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,240,255,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${accent.hover}`}
              >
                {/* Image is clipped to the LEFT of the diagonal boundary */}
                <div
                  className="absolute inset-0 z-0 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 43% 0, 32% 100%, 0 100%)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Opaque panel covers everything to the RIGHT of the diagonal.
                    This prevents any part of the image showing beyond the slash. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 bg-[#080d12]"
                  style={{
                    clipPath: 'polygon(43% 0, 100% 0, 100% 100%, 32% 100%)',
                  }}
                />

                {/* Diagonal accent sits ABOVE both panels */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 z-20 pointer-events-none ${accent.stripe}`}
                  style={{
                    clipPath: 'polygon(42.5% 0, 44.2% 0, 33.2% 100%, 31.5% 100%)',
                  }}
                />

                {/* Right-side information */}
                <div className="absolute inset-0 z-30 flex min-w-0 flex-col justify-between py-3 pl-[46%] pr-3 sm:py-3.5 sm:pr-3.5">
                  <span className={`w-fit mt-2 max-w-full truncate rounded-full border px-3.5 py-1 text-[12px] font-semibold uppercase tracking-widest ${accent.badge}`}>
                    {item.badge}
                  </span>

                  <div className="my-1 min-w-0">
                    <h3 className="font-sans tracking-widest text-sm font-bold uppercase leading-loose text-white transition-colors duration-300 group-hover:text-slate-100 sm:text-[1.2rem]">
                      {item.title}
                    </h3>

                    <div className={`mt-2 flex items-start gap-1.5 text-[10px] leading-snug tracking-widest sm:text-[15px] ${accent.text}`}>
                      <Users className="mt-0.5 h-3 w-3 shrink-0" />
                      <span className="line-clamp-1">
                        {statParts[0] ?? item.stats}
                      </span>
                    </div>

                    {statParts[1] && (
                      <div className="mt-1 flex items-start gap-1.5 text-[10px] leading-snug tracking-widest text-slate-300 sm:text-[15px]">
                        <span className={`shrink-0 ${accent.text}`}>◈</span>
                        <span className="line-clamp-1">{statParts[1]}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex font-sans tracking-widest min-w-0 items-center gap-1.5 border-t border-slate-800/80 pt-5 pb-2 pr-8 text-[9px] uppercase text-slate-400 sm:text-[10px]">
                    <Calendar className="h-3 w-3 shrink-0" />
                    <span className="truncate">{item.date}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
