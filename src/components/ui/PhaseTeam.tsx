'use client';

import { ChevronRight } from 'lucide-react';
import { TEAM_LEADS } from '../utils/constants';

interface PhaseTeamProps {
  onRestart?: () => void;
}

function DiscordIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function PhaseTeam({ onRestart }: PhaseTeamProps) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative select-none">
      {/* Main Section Content */}
      <div className="w-full max-w-6xl mx-auto my-auto py-6 flex flex-col items-center relative z-10">
        {/* Soft Radial Dark Backdrop for Text Legibility */}
        <div className="absolute -inset-10 -z-10 bg-radial from-[#07090e]/80 via-[#07090e]/50 to-transparent blur-2xl pointer-events-none rounded-3xl" />

        {/* Header: CORE TEAM */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] text-center">
          CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#ff4d8d] to-[#00f0ff]">TEAM</span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl text-center leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Meet the core team of Techniosys, the leaders and visionaries driving our mission forward.
        </p>

        {/* Grid of Team Lead Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full pointer-events-auto">
          {TEAM_LEADS.map((lead) => (
            <div
              key={lead.id}
              className="group relative rounded-xl bg-[#0f172a]/75 backdrop-blur-md border border-slate-800 hover:border-[#ff0055]/80 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl hover:shadow-[0_0_25px_rgba(255,0,85,0.25)] flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-90 group-hover:brightness-105"
                />

                {/* Cyber Scanlines & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />
                <div className="absolute inset-0 cyber-scanlines opacity-20 pointer-events-none" />

                {/* Handle / Callout Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-pink-950/80 text-[#ff0055] border border-pink-500/50">
                    {lead.handle}
                  </span>
                </div>

                {/* Game / Focus Badge */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-slate-950/60 backdrop-blur-sm px-2 py-1 rounded border border-slate-800">
                  <span className="text-[#00f0ff] font-semibold">{lead.game}</span>
                </div>
              </div>

              {/* Details & Socials */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-glow-magenta transition-colors">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-mono text-[#ff0055] font-semibold tracking-wide mt-0.5">
                    {lead.role}
                  </p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {lead.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">COMMS:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={lead.socials.discord || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 hover:bg-indigo-950 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors"
                      title="Discord"
                    >
                      <DiscordIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={lead.socials.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={lead.socials.instagram || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 hover:bg-pink-950 text-slate-400 hover:text-pink-400 border border-slate-800 transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Squad CTA banner */}
        <div className="mt-10 w-full max-w-4xl p-4 sm:p-5 rounded-xl bg-gradient-to-r from-pink-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
          <div>
            <h4 className="font-heading text-sm sm:text-base font-bold text-white">
              WANT TO JOIN?
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Recruitment is open for Game Masters, 3D Graphics, Deep Learning, Web/App Dev Teams.
            </p>
          </div>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-[#ff0055] hover:bg-[#e0004c] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(255,0,85,0.4)] whitespace-nowrap flex items-center gap-1.5"
          >
            <span>APPLY</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Optional Return CTA */}
        {onRestart && (
          <div className="mt-6 flex justify-center pointer-events-auto">
            <button
              onClick={onRestart}
              className="text-xs font-mono text-slate-400 hover:text-[#00f0ff] tracking-widest uppercase transition-colors"
            >
              [ RETURN TO TOP ]
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
