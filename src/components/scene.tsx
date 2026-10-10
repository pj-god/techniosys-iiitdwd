'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Experience } from './3d/Experience';
import { PhaseHero } from './ui/PhaseHero';
import { PhaseMegaRush } from './ui/PhaseMegaRush';
import { PhaseTeam } from './ui/PhaseTeam';
import Navbar from './ui/Navbar';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const section0Ref = useRef<HTMLDivElement>(null!);
  const section1Ref = useRef<HTMLDivElement>(null!);
  const section2Ref = useRef<HTMLDivElement>(null!);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  // Smooth programmatic scroll to target phase
  const scrollToPhase = useCallback((phaseIndex: number) => {
    const targets = [section0Ref.current, section1Ref.current, section2Ref.current];
    const target = targets[phaseIndex];
    if (target) {
      const topPos = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set up master scroll trigger on container
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (self.progress < 0.3) {
          setCurrentPhase(0);
        } else if (self.progress < 0.72) {
          setCurrentPhase(1);
        } else {
          setCurrentPhase(2);
        }
      },
    });

    // Animate Section 0 content in on mount
    if (section0Ref.current) {
      gsap.fromTo(
        section0Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
    }

    // Refresh ScrollTrigger after DOM has settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeout);
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#07090e] text-[#f8fafc] overflow-x-hidden">
      {/* BACKGROUND 3D CANVAS (Renders behind HTML overlays) */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          camera={{
            position: [0, 0, 5],
            fov: 50,
            near: 0.1,
            far: 100,
          }}
        >
          <Experience
            scrollProgress={scrollProgress}
            currentPhase={currentPhase}
          />
        </Canvas>
      </div>

      {/* FIXED TOP NAVIGATION BAR */}
      <Navbar/>


      {/* HTML OVERLAYS: 3 DISTINCT SCROLL PHASES (pointer-events-none with interactive children) */}
      <main className="relative z-10 pointer-events-none">
        {/* PHASE 1: HERO & IDENTITY */}
        <section
          ref={section0Ref}
          id="phase-0"
          className="min-h-screen w-full flex items-center justify-center relative"
        >
          <PhaseHero onExplore={() => scrollToPhase(1)} />
        </section>

        {/* PHASE 2: PAST HIGHLIGHT EVENT (MEGA RUSH) */}

        {/* PHASE 3: LEADERSHIP & CORE TEAM */}
        <section
          ref={section2Ref}
          id="phase-2"
          className="min-h-screen w-full flex items-center justify-center relative"
        >
          <PhaseTeam onRestart={() => scrollToPhase(0)} />
        </section>

        <section
          ref={section1Ref}
          id="past-events"
          className="min-h-screen w-full flex items-center justify-center relative"
        >
          <PhaseMegaRush onProceed={() => scrollToPhase(2)} />
        </section>
      </main>

      {/* BOTTOM AMBIENT CYBER FOOTER BANNER */}
      <footer className="relative z-10 w-full py-6 px-4 border-t border-slate-900 bg-[#07090e]/80 backdrop-blur-md text-center text-xs font-mono text-slate-500 pointer-events-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span>TECHNIOSYS CLUB</span>
          </div>
          <div>
            <span>ALL RIGHTS RESERVED © 2026</span>
          </div>
          {/* <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => scrollToPhase(0)}
              className="hover:text-[#00f0ff] transition-colors"
            >
              [TOP]
            </button>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff0055] transition-colors"
            >
              [DISCORD]
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              [GITHUB]
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}