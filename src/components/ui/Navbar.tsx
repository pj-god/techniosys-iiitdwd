"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [megaRushOpen, setMegaRushOpen] = useState(false);
  const [technoRushOpen, setTechnoRushOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="
        absolute top-5 left-0 z-50
        w-full
        px-[5vw] md:px-[8.5vw]
        font-sans
      "
    >
      {/* NAVBAR */}
      <div className="flex items-center justify-between h-18">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Techniyosis-Logo.png"
            alt="Techniosys"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          <div className="flex flex-col leading-none">
            <Link href="/" className="text-white text-[18px] md:text-[21px] font-bold tracking-[0.08em]">
              TECHNIOSYS
            </Link>

            <Link href="/" className="text-[9px] md:text-[11px] text-white/40 tracking-[0.18em] mt-1">
              TECH & ESPORTS CLUB
            </Link>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden md:flex items-center gap-5">

          {/* MEGA RUSH */}
          <div className="relative">
            <button
              onClick={() => {
                setMegaRushOpen(!megaRushOpen);
                setLeaderboardOpen(false);
                setTechnoRushOpen(false);
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
                cursor-pointer
              "
            >
              MEGA RUSH

              <span
                className={`text-xs transition-transform duration-200 ${
                  megaRushOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

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
                <Link
                  href="/mega-rush/teams"
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
                </Link>

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
                      cursor-pointer
                    "
                  >
                    LEADERBOARD

                    <span
                      className={`text-xs transition-transform duration-200 ${
                        leaderboardOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▸
                    </span>
                  </button>

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
                      <Link
                        href="/leaderboard/freefire"
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
                      </Link>

                      <Link
                        href="/leaderboard/bgmi"
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
                      </Link>

                      <Link
                        href="/leaderboard/smashkarts"
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
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* TECHNO RUSH */}
          <div className="relative">
            <button
              onClick={() => {
                setTechnoRushOpen(!technoRushOpen);
                setMegaRushOpen(false);
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
                cursor-pointer
              "
            >
              TECHNO RUSH

              <span
                className={`text-xs transition-transform duration-200 ${
                  technoRushOpen ? "rotate-180" : ""
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
                <Link
                  href="/techno-rush/teams"
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
                </Link>

                <Link
                   href="/techno-rush/leaderboard"
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
                </Link>
              </div>
            )}
          </div>

          {/* TEAM */}
          <Link
            href="/team"
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
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMegaRushOpen(false);
            setTechnoRushOpen(false);
            setLeaderboardOpen(false);
          }}
          className="
            md:hidden
            flex flex-col justify-center items-center
            gap-1.5
            w-10 h-10
            rounded-lg
            text-white
            hover:bg-white/5
            transition-all duration-200
          "
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            mt-3
            w-full
            p-3
            rounded-2xl
            bg-[#0d1117]/95
            backdrop-blur-xl
            border border-white/10
            shadow-[0_15px_35px_rgba(0,0,0,0.5)]
          "
        >
          {/* MEGA RUSH */}
          <button
            onClick={() => {
              setMegaRushOpen(!megaRushOpen);
              setTechnoRushOpen(false);
              setLeaderboardOpen(false);
            }}
            className="
              w-full
              flex items-center justify-between
              px-4 py-3
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
              className={`transition-transform duration-200 ${
                megaRushOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {megaRushOpen && (
            <div className="ml-3 border-l border-white/10 pl-2">
              <Link
                href="/mega-rush/teams"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  block px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/60
                  hover:text-white
                  hover:bg-white/5
                "
              >
                TEAMS
              </Link>

              <button
                onClick={() => setLeaderboardOpen(!leaderboardOpen)}
                className="
                  w-full
                  flex items-center justify-between
                  px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/60
                  hover:text-white
                  hover:bg-white/5
                "
              >
                LEADERBOARD
                <span
                  className={`transition-transform ${
                    leaderboardOpen ? "rotate-90" : ""
                  }`}
                >
                  ▸
                </span>
              </button>

              {leaderboardOpen && (
                <div className="ml-3 border-l border-white/10 pl-2">
                  <Link
                    href="/leaderboard/freefire"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block px-4 py-2.5
                      text-sm text-white/50
                      hover:text-white
                    "
                  >
                    FREE FIRE
                  </Link>

                  <Link
                    href="/leaderboard/bgmi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block px-4 py-2.5
                      text-sm text-white/50
                      hover:text-white
                    "
                  >
                    BGMI
                  </Link>

                  <Link
                    href="/leaderboard/smashkarts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block px-4 py-2.5
                      text-sm text-white/50
                      hover:text-white
                    "
                  >
                    SMASHKARTS
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* TECHNO RUSH */}
          <button
            onClick={() => {
              setTechnoRushOpen(!technoRushOpen);
              setMegaRushOpen(false);
              setLeaderboardOpen(false);
            }}
            className="
              w-full
              flex items-center justify-between
              px-4 py-3
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
              className={`transition-transform duration-200 ${
                technoRushOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {technoRushOpen && (
            <div className="ml-3 border-l border-white/10 pl-2">
              <Link
                href="/techno-rush/teams"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  block px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/60
                  hover:text-white
                  hover:bg-white/5
                "
              >
                TEAMS
              </Link>

              <Link
                href="/techno-rush/leaderboard"
                className="
                  w-full
                  text-left
                  px-4 py-3
                  rounded-lg
                  text-sm
                  text-white/60
                  hover:text-white
                  hover:bg-white/5
                "
              >
                LEADERBOARD
              </Link>
            </div>
          )}

          {/* TEAM */}
          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block
              px-4 py-3
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            TEAM
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;