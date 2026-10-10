'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Or use useRouter if preferred

const Page = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      {/* Top Left Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          HOME
        </Link>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Techno-Rush
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light tracking-widest text-gray-400 uppercase animate-pulse">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Page;