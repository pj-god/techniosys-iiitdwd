"use client";

import { useState } from "react";

const Navbar = () => {
  const [megaRushOpen, setMegaRushOpen] = useState(false);
  const [technoRushOpen, setTechnoRushOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  return (
  <nav
  className="
    absolute top-5 left-0 z-50
    w-full h-[72px]
    flex items-center justify-between
    px-[8.5vw]
    font-sans
  "
>
      {/* Logo */}
      <div className="flex items-center gap-3">
  <img
  src="/Techniyosis-Logo.png"
  alt="Techniosys"
  className="w-16 h-16 object-contain"
/>

  <div className="flex flex-col leading-none">
    <span className="text-white text-[21px] font-bold tracking-[0.08em]">
      TECHNIOSYS
    </span>

    <span className="text-[11px] text-white/40 tracking-[0.18em] mt-1">
      TECH & ESPORTS CLUB
    </span>
  </div>
</div>

      {/* Navigation */}
      <div className="flex items-center gap-5">

        {/* MEGA RUSH */}
        <div className="relative">
          <button
            onClick={() => {
              setMegaRushOpen(!megaRushOpen);
              setLeaderboardOpen(false);
            }}
            className="
              flex items-center gap-2
              px-4 py-2.5
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            MEGA RUSH

            <span
              className={`text-xs transition-transform duration-200 ${megaRushOpen ? "rotate-180" : ""
                }`}
            >
              ▾
            </span>
          </button>

          {/* Mega Rush Dropdown */}
          {megaRushOpen && (
            <div
              className="
                absolute right-0 top-[calc(100%+10px)]
                w-48
                p-2
                rounded-xl
                bg-[#0d1117]
                border border-white/10
                shadow-[0_15px_35px_rgba(0,0,0,0.5)]
              "
            >
              {/* Teams */}
              <a
                href="#teams"
                className="
                  block px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/70
                  hover:text-white
                  hover:bg-white/5
                  transition-all duration-200
                "
              >
                TEAMS
              </a>

              {/* Leaderboard */}
              <div className="relative">
                <button
                  onClick={() => setLeaderboardOpen(!leaderboardOpen)}
                  className="
                    w-full
                    flex items-center justify-between
                    px-4 py-3
                    rounded-lg
                    text-sm
                    text-white/70
                    hover:text-white
                    hover:bg-white/5
                    transition-all duration-200
                  "
                >
                  LEADERBOARD

                  <span
                    className={`text-xs transition-transform duration-200 ${leaderboardOpen ? "rotate-180" : ""
                      }`}
                  >
                    ▸
                  </span>
                </button>

                {/* Leaderboard Submenu */}
                {leaderboardOpen && (
                  <div
                    className="
                      absolute right-full top-0 mr-2
                      w-44
                      p-2
                      rounded-xl
                      bg-[#0d1117]
                      border border-white/10
                      shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                    "
                  >
                    <a
                      href="#freefire"
                      className="
                        block px-4 py-3
                        rounded-lg
                        text-sm
                        text-white/70
                        hover:text-white
                        hover:bg-white/5
                        transition-all duration-200
                      "
                    >
                      FREE FIRE
                    </a>

                    <a
                      href="#bgmi"
                      className="
                        block px-4 py-3
                        rounded-lg
                        text-sm
                        text-white/70
                        hover:text-white
                        hover:bg-white/5
                        transition-all duration-200
                      "
                    >
                      BGMI
                    </a>

                    <a
                      href="#smashkarts"
                      className="
                        block px-4 py-3
                        rounded-lg
                        text-sm
                        text-white/70
                        hover:text-white
                        hover:bg-white/5
                        transition-all duration-200
                      "
                    >
                      SMASHKARTS
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
        <button
            onClick={() => {
              setTechnoRushOpen(!technoRushOpen);
            }}
            className="
              flex items-center gap-2
              px-4 py-2.5
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            TECHNO RUSH

            <span
              className={`text-xs transition-transform duration-200 ${technoRushOpen ? "rotate-180" : ""
                }`}
            >
              ▾
            </span>
          </button>
          {technoRushOpen && (
            <div
              className="
                absolute right-0 top-[calc(100%+10px)]
                w-48
                p-2
                rounded-xl
                bg-[#0d1117]
                border border-white/10
                shadow-[0_15px_35px_rgba(0,0,0,0.5)]
              "
            >
              {/* Teams */}
              <a
                href="#teams"
                className="
                  block px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/70
                  hover:text-white
                  hover:bg-white/5
                  transition-all duration-200
                "
              >
                TEAMS
              </a>

              {/* Leaderboard */}
              <div className="relative">
                <button
                  className="
                    w-full
                    flex items-center justify-between
                    px-4 py-3
                    rounded-lg
                    text-sm
                    text-white/70
                    hover:text-white
                    hover:bg-white/5
                    transition-all duration-200
                  "
                >
                  LEADERBOARD
                </button>
              </div>
            </div>
          )}
        </div>

        {/* TEAM */}
        <a
          href="#team"
          className="
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            text-white/75
            hover:text-white
            hover:bg-white/5
            transition-all duration-200
          "
        >
          TEAM
        </a>
      </div>
    </nav>
  );
};

export default Navbar;