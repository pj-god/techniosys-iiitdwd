'use client';

import { useState } from 'react';
import { ChevronRight, Maximize2, X, Calendar, Users } from 'lucide-react';
import { MEGA_RUSH_GALLERY, GalleryItem } from '../utils/constants';

interface PhaseMegaRushProps {
  onProceed?: () => void;
}

export function PhaseMegaRush({ onProceed }: PhaseMegaRushProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative select-none">
      {/* Main Section Header & Gallery Container */}
      <div className="w-full max-w-6xl mx-auto my-auto py-6 flex flex-col items-center relative z-10">
        {/* Soft Radial Dark Backdrop for Text Legibility */}
        <div className="absolute -inset-10 -z-10 bg-radial from-[#07090e]/80 via-[#07090e]/50 to-transparent blur-2xl pointer-events-none rounded-3xl" />

        {/* Header: PAST EVENTS */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] text-center">
          PAST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#ff4d8d] to-[#00f0ff]">EVENTS</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl text-center leading-relaxed font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Relive the electrifying moments of Techniosys&apos; flagship events, from high-octane esports showdowns to rapid-fire hackathons and grand championship ceremonies.
        </p>

        {/* 3 High-Tech Image Gallery Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full pointer-events-auto">
          {MEGA_RUSH_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-xl bg-[#0f172a]/75 backdrop-blur-md border border-slate-800 hover:border-[#00f0ff]/80 transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1.5 shadow-xl hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-90 group-hover:brightness-105"
                />

                {/* Cyber Scanline & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/40" />
                <div className="absolute inset-0 cyber-scanlines opacity-20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${
                      idx === 0
                        ? 'bg-rose-950/80 text-[#ff0055] border-pink-500/50'
                        : idx === 1
                        ? 'bg-cyan-950/80 text-[#00f0ff] border-cyan-500/50'
                        : 'bg-amber-950/80 text-amber-400 border-amber-500/50'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Date Tag */}
                <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Calendar className="w-3 h-3 text-[#00f0ff]" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-glow-cyan transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-mono text-[#00f0ff]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{item.stats}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 tracking-wider">STATUS: VERIFIED</span>
                  <span className="text-[#00f0ff] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    VIEW DETAILS <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Proceed CTA */}
        {onProceed && (
          <div className="mt-8 flex justify-center pointer-events-auto">
            <button
              onClick={onProceed}
              className="px-6 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-850 border border-pink-500/40 hover:border-[#ff0055] text-slate-200 hover:text-white font-mono text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(255,0,85,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <span>NEXT SECTION</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#ff0055]" />
            </button>
          </div>
        )}
      </div>

      {/* High-Tech Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md pointer-events-auto animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f172a] border border-[#00f0ff]/60 p-6 shadow-2xl shadow-cyan-950/50">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-[#00f0ff] border border-cyan-800">
                {selectedItem.tag}
              </span>
              <span className="text-xs font-mono text-slate-400">{selectedItem.date}</span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              {selectedItem.title}
            </h3>

            {/* Modal Image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 border border-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedItem.desc}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono text-[#00f0ff]">
              <span>TOURNAMENT METRIC:</span>
              <span className="font-bold text-white">{selectedItem.stats}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
