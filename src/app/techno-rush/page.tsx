'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Or use useRouter if preferred

const Page = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">

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