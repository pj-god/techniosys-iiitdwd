'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Radio } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';

interface NavbarProps {
  currentPhase: number;
  onNavigate: (phaseIndex: number) => void;
}

export function Navbar({ currentPhase, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  // Cyber synth audio feedback using Web Audio API
  const playCyberBeep = (freq = 880, type: OscillatorType = 'sine', duration = 0.08) => {
    if (!audioActive && typeof window !== 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // AudioContext unavailable or restricted
    }
  };

  const handleNavClick = (idx: number) => {
    playCyberBeep(700, 'triangle', 0.1);
    onNavigate(idx);
    setMobileMenuOpen(false);
  };

  const toggleAudio = () => {
    const next = !audioActive;
    setAudioActive(next);
    if (next) {
      playCyberBeep(987, 'sine', 0.15);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-[#0f172a]/70 border border-slate-800/80 rounded-xl px-4 md:px-6 py-2.5 shadow-2xl shadow-cyan-950/20">
        {/* Brand Identity */}
        <div
          onClick={() => handleNavClick(0)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#ff0055] p-[1.5px] cyber-clip-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded flex items-center justify-center">
              <span className="font-heading text-xs font-black tracking-widest text-[#00f0ff] group-hover:text-white transition-colors">
                TS
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-extrabold tracking-wider text-white group-hover:text-glow-cyan transition-all">
                TECHNIOSYS
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono tracking-widest bg-cyan-950/60 text-[#00f0ff] border border-cyan-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                V2.5
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1 hidden sm:block">
              TECH &amp; ESPORTS FEDERATION
            </p>
          </div>
        </div>

        {/* Desktop Phase Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#07090e]/70 px-2 py-1 rounded-lg border border-slate-800">
          {NAV_LINKS.map((link, idx) => {
            const isActive = currentPhase === idx;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(idx)}
                onMouseEnter={() => playCyberBeep(1200, 'sine', 0.04)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-300 relative flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-slate-800/90 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {isActive && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      idx === 2 ? 'bg-[#ff0055]' : 'bg-[#00f0ff]'
                    }`}
                  />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <div
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full ${
                      idx === 2 ? 'bg-[#ff0055]' : 'bg-[#00f0ff]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-2.5">
          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            title={audioActive ? 'Cyber Audio: ON' : 'Cyber Audio: MUTED'}
            className={`p-2 rounded-lg border transition-all ${
              audioActive
                ? 'bg-cyan-950/50 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Discord / Join Guild CTA */}
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playCyberBeep(1000, 'sine', 0.05)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-wider bg-gradient-to-r from-[#00f0ff]/10 to-[#ff0055]/10 hover:from-[#00f0ff]/25 hover:to-[#ff0055]/25 text-white border border-[#00f0ff]/50 hover:border-[#00f0ff] shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all duration-300"
          >
            <Radio className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
            <span>JOIN DISCORD</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-xl bg-[#0f172a]/95 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col gap-2">
          {NAV_LINKS.map((link, idx) => {
            const isActive = currentPhase === idx;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(idx)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider text-left transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white border-l-4 border-[#00f0ff]'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">{link.title}</span>
              </button>
            );
          })}
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider bg-[#00f0ff] text-[#07090e] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <Terminal className="w-4 h-4" />
            <span>ENTER GUILD DISCORD</span>
          </a>
        </div>
      )}
    </header>
  );
}
