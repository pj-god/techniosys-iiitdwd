'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
      <p className="text-white text-lg animate-pulse">Loading 3D Environment...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Scene />
    </main>
  );
}