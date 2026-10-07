import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techniosys | IIIT Dharwad",
  description:
    "Where Code Meets Combat. Premier college Technical and Esports club bridging competitive gaming, LAN tournaments, and high-intensity hackathons.",
  keywords: ["Techniosys", "Esports", "Gaming Club", "Hackathon", "College Club", "Mega Rush", "LAN Tournament"],
  authors: [{ name: "Techniosys Team" }],
  openGraph: {
    title: "Techniosys | Premier Technical & Esports Club",
    description: "Where Code Meets Combat. Premier college Technical and Esports club.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#07090e] text-[#f8fafc] font-sans selection:bg-[#00f0ff]/30 selection:text-[#00f0ff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
