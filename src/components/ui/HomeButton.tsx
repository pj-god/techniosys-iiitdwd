import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HomeButton() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="fixed left-5 top-5 z-[100] inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-slate-950/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur transition-colors hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      <span>Back to Home</span>
    </Link>
  );
}