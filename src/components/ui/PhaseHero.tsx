'use client';

import { ChevronDown, Cpu, Gamepad2 } from 'lucide-react';
import { CLUB_STATS } from '../utils/constants';

interface PhaseHeroProps {
  onExplore: () => void;
}

export function PhaseHero({ onExplore }: PhaseHeroProps) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative select-none">
      {/* Main Hero Centerpiece */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto py-6 relative z-10">
        {/* Soft Radial Dark Backdrop to ensure 100% Text Legibility over 3D background */}
        <div className="absolute -inset-10 -z-10 bg-radial from-[#07090e]/80 via-[#07090e]/50 to-transparent blur-2xl pointer-events-none rounded-3xl" />

        {/* Title: TECHNIOSYS */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          TECHNIO<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#ff0055]">SYS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-wide text-slate-100 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Feel The Rush <span className="text-[#00f0ff]">|</span> The Tech &amp; Esports Club
        </p>

        {/* Action Button */}
        <div className="mt-8 flex items-center justify-center pointer-events-auto">
          <button
            onClick={onExplore}
            className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-[#07090e] font-mono font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.75)] transition-all duration-300 hover:scale-105 flex items-center gap-2.5 cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4 text-[#07090e]" />
            <span>EXPLORE PORTAL</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Key Club Stats Bar */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pointer-events-auto">
          {CLUB_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-3.5 sm:p-4 rounded-xl bg-[#0f172a]/75 backdrop-blur-md border border-slate-800/90 hover:border-cyan-500/50 transition-colors group text-center shadow-lg"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                {idx % 2 === 0 ? (
                  <Cpu className="w-3.5 h-3.5 text-[#00f0ff] group-hover:animate-spin" />
                ) : (
                  <Gamepad2 className="w-3.5 h-3.5 text-[#ff0055]" />
                )}
                <span className="font-heading text-xl sm:text-2xl font-black text-white group-hover:text-glow-cyan transition-all">
                  {stat.value}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
