"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type TeamRow = {
  ID: string;
  Pool: string;
  "Team Name": string;
  "IGL Name": string;
  "IGL WhatsApp": string;
  "P1 IGN": string;
  "P2 IGN": string;
  "P3 IGN": string;
  "P4 IGN": string;
  "R1 Kills": string;
  "R1 Position": string;
  "R1 Total": string;
  "R2 Kills": string;
  "R2 Position": string;
  "R2 Total": string;
  "R3 Kills": string;
  "R3 Position": string;
  "R3 Total": string;
};

type LeaderboardData = {
  bgmi: TeamRow[];
  freeFire: TeamRow[];
};

type GameKey = keyof LeaderboardData;

const GAMES: { key: GameKey; label: string }[] = [
  { key: "bgmi", label: "BGMI" },
  { key: "freeFire", label: "Free Fire" },
];

const ROUNDS = ["R1", "R2", "R3"] as const;

const num = (v: string | undefined) => {
  const n = parseInt(v ?? "", 10);
  return Number.isNaN(n) ? 0 : n;
};

type RankedTeam = {
  row: TeamRow;
  totalKills: number;
  totalPoints: number;
};

// Drop blank spreadsheet rows, group by pool, and rank each pool
const buildPools = (rows: TeamRow[]) => {
  const pools: Record<string, RankedTeam[]> = {};

  rows
    .filter((r) => r["Team Name"]?.trim())
    .forEach((row) => {
      const pool = row.Pool || "-";
      const totalKills = ROUNDS.reduce((s, r) => s + num(row[`${r} Kills`]), 0);
      const totalPoints = ROUNDS.reduce((s, r) => s + num(row[`${r} Total`]), 0);
      (pools[pool] ||= []).push({ row, totalKills, totalPoints });
    });

  Object.values(pools).forEach((teams) =>
    teams.sort(
      (a, b) => b.totalPoints - a.totalPoints || b.totalKills - a.totalKills
    )
  );

  return Object.entries(pools).sort(([a], [b]) => a.localeCompare(b));
};

const GameDropdown = ({
  value,
  onChange,
}: {
  value: GameKey;
  onChange: (key: GameKey) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = GAMES.find((g) => g.key === value)!;

  return (
    <div ref={ref} className="relative z-30 w-44">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md border border-slate-500 bg-slate-900 px-4 py-2 text-sm text-white hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <span>{current.label}</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1 w-full overflow-hidden rounded-md border border-slate-500 bg-slate-900 shadow-xl"
        >
          {GAMES.map((g) => (
            <li
              key={g.key}
              role="option"
              aria-selected={g.key === value}
              onClick={() => {
                onChange(g.key);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 text-sm hover:bg-sky-600 ${
                g.key === value ? "bg-slate-700 font-semibold" : ""
              }`}
            >
              {g.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const LeaderboardPage = () => {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [game, setGame] = useState<GameKey>("bgmi");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        const json = await response.json();
        setData(json.data);
      } catch (err) {
        console.error("Error fetching leaderboard data:", err);
        setError("Could not load the leaderboard. Please try again.");
      }
    };

    fetchLeaderboardData();
  }, []);

  const pools = useMemo(() => (data ? buildPools(data[game] ?? []) : []), [data, game]);

  return (
    <div className="relative z-10 mx-auto w-[80%] min-w-[320px] py-10 text-white">
      <Link
        href="/"
        className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-500 px-3 py-2 text-sm text-slate-200 hover:border-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12.5 4.5 7 10l5.5 5.5M7.5 10h9" />
        </svg>
        Home
      </Link>
      <h2 className="mb-6 text-center text-3xl font-bold">Leaderboard</h2>

      <div className="mb-6 flex items-center justify-end gap-2">
        <span className="text-sm text-slate-300">Game</span>
        <GameDropdown value={game} onChange={setGame} />
      </div>

      {error && <p className="text-red-400">{error}</p>}
      {!data && !error && <p>Loading...</p>}

      {data && pools.length === 0 && (
        <p className="text-slate-400">No teams have been added for this game yet.</p>
      )}

      {pools.map(([pool, teams]) => (
        <section key={pool} className="mb-10">
          <h3 className="mb-2 text-center text-xl font-semibold">Pool {pool}</h3>

          <div className="overflow-x-auto rounded-lg border border-slate-500 bg-slate-950/95 shadow-lg backdrop-blur-md">
            <table className="w-full min-w-[820px] border-collapse text-sm">
              <thead className="bg-slate-900 text-slate-200">
                <tr>
                  <th rowSpan={2} className="px-3 py-2 text-left">#</th>
                  <th rowSpan={2} className="px-3 py-2 text-left">Team</th>
                  <th rowSpan={2} className="px-3 py-2 text-left">IGL</th>
                  <th
                    colSpan={2}
                    className="border-l border-slate-600 px-3 py-2 text-center"
                  >
                    Overall
                  </th>
                  {ROUNDS.map((r) => (
                    <th
                      key={r}
                      colSpan={3}
                      className="border-l border-slate-600 px-3 py-2 text-center"
                    >
                      Round {r.slice(1)}
                    </th>
                  ))}
                </tr>
                <tr className="text-xs text-slate-400">
                  <th className="border-l border-slate-600 px-2 py-1 text-center">Kills</th>
                  <th className="px-2 py-1 text-center">Points</th>
                  {ROUNDS.map((r) => (
                    <React.Fragment key={r}>
                      <th className="border-l border-slate-600 px-2 py-1 text-center">Pos</th>
                      <th className="px-2 py-1 text-center">Kills</th>
                      <th className="px-2 py-1 text-center">Pts</th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>

              <tbody>
                {teams.map(({ row, totalKills, totalPoints }, index) => (
                  <tr
                    key={`${pool}-${row.ID}-${row["Team Name"]}`}
                    className="border-t border-slate-600 hover:bg-slate-800"
                  >
                    <td className="px-3 py-2 font-semibold">{index + 1}</td>
                    <td className="px-3 py-2 font-medium">{row["Team Name"]}</td>
                    <td className="px-3 py-2 text-slate-300">{row["P1 IGN"]}</td>
                    <td className="border-l border-slate-600 px-2 py-2 text-center">
                      {totalKills}
                    </td>
                    <td className="px-2 py-2 text-center font-bold text-sky-300">{totalPoints}</td>
                    {ROUNDS.map((r) => (
                      <React.Fragment key={r}>
                        <td className="border-l border-slate-600 px-2 py-2 text-center">
                          {row[`${r} Position`] || "-"}
                        </td>
                        <td className="px-2 py-2 text-center">{row[`${r} Kills`] || "-"}</td>
                        <td className="px-2 py-2 text-center">{row[`${r} Total`] || "-"}</td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LeaderboardPage;
