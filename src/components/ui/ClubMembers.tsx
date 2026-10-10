import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const MEMBERS = [
  { id: 'president', name: 'Saksham Kushwah', role: 'President', accent: 'pink', hairstyle: 0 },
  { id: 'vice-president', name: 'Nishit Rane', role: 'Vice President', accent: 'cyan', hairstyle: 1 },
  { id: 'technical-lead', name: 'Abhijeet Nagar', role: 'Technical Lead', accent: 'pink', hairstyle: 2 },
  { id: 'event-management-lead', name: 'Charan Raj Gupta', role: 'Event Management Lead', accent: 'cyan', hairstyle: 3 },
  { id: 'social-media-lead', name: 'Nitish Yadav', role: 'Social Media Lead', accent: 'pink', hairstyle: 4 },
  { id: 'esports-lead', name: 'XYZ', role: 'eSports Lead', accent: 'cyan', hairstyle: 5 },
] as const;

const HAIR_STYLES = [
  'M72 83c0-36 20-58 49-58 30 0 49 22 49 58v11h-12l-8-24c-19 13-45 18-78 17v7H72z',
  'M72 83c0-34 19-58 48-58 31 0 50 24 50 58v14h-13l-4-27c-10 10-24 16-41 16-13 0-25-3-35-10v21H72z',
  'M72 84c0-37 20-60 49-60 28 0 48 23 48 60v11h-12l-3-19-9 8-8-18c-15 12-36 18-65 17v12H72z',
  'M72 84c0-36 20-59 49-59 28 0 48 23 48 59v15h-12l-3-25c-8 8-18 12-30 12-16 0-27-7-34-18l-5 31H72z',
  'M72 84c0-35 19-59 49-59 30 0 49 24 49 59v12h-12l-5-27c-9 12-23 18-42 18-12 0-23-3-32-9v18H72z',
  'M72 84c0-37 20-60 49-60 29 0 48 23 48 60v12h-12l-4-21c-8 9-19 14-32 14-16 0-28-6-36-18l-3 25H72z',
] as const;

function CartoonAvatar({
  id,
  name,
  accent,
  hairstyle,
}: {
  id: string;
  name: string;
  accent: 'pink' | 'cyan';
  hairstyle: number;
}) {
  const accentColor = accent === 'pink' ? '#ff2d83' : '#00e5ff';
  const hairColor = ['#252239', '#321f32', '#18283b', '#40252c', '#282238', '#1d2932'][hairstyle];
  const skinColor = ['#d99b75', '#bd805f', '#e4ac86', '#c68a68', '#d99c78', '#ba7959'][hairstyle];
  const shirtColor = ['#b92f70', '#147d91', '#724ca0', '#216c83', '#a74774', '#455eaa'][hairstyle];

  return (
    <svg
      aria-label={`Cartoon portrait of ${name}`}
      className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      role="img"
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`shirt-${id}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={shirtColor} />
          <stop offset="1" stopColor="#101827" />
        </linearGradient>
        <radialGradient id={`glow-${id}`}>
          <stop offset="0" stopColor={accentColor} stopOpacity=".2" />
          <stop offset="1" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect fill="#090e18" height="200" width="240" />
      <ellipse cx="120" cy="102" fill={`url(#glow-${id})`} rx="108" ry="100" />
      <circle cx="120" cy="91" fill="none" opacity=".18" r="72" stroke={accentColor} />
      <circle cx="120" cy="91" fill="none" opacity=".12" r="87" stroke={accentColor} />
      <path d="M41 200c5-35 30-54 79-54s74 19 79 54" fill={`url(#shirt-${id})`} />
      <path d="m101 149 19 20 19-20-9-15h-20z" fill={skinColor} />
      <path d="M102 151 120 169 92 200h-36c5-28 20-43 46-49Zm36 0-18 18 28 31h38c-5-28-22-43-48-49Z" fill={accentColor} opacity=".2" />
      <path d="M78 85c0-29 16-47 42-47s42 18 42 47v24c0 25-18 44-42 44s-42-19-42-44z" fill={skinColor} />
      <path d={HAIR_STYLES[hairstyle]} fill={hairColor} />
      <path d="M89 105c4-3 9-3 13 0m36 0c4-3 9-3 13 0" fill="none" stroke="#35242a" strokeLinecap="round" strokeWidth="3" />
      <ellipse cx="99" cy="114" fill="#201d29" rx="3" ry="4" />
      <ellipse cx="141" cy="114" fill="#201d29" rx="3" ry="4" />
      <path d="M116 118c-1 6-3 11-2 13 2 2 5 2 8 0" fill="none" opacity=".55" stroke="#9c5c4b" strokeLinecap="round" strokeWidth="2" />
      <path d="M108 137c7 6 17 6 24 0" fill="none" stroke="#873f4b" strokeLinecap="round" strokeWidth="3" />
      <path d="M80 88c-7 0-10 7-8 15 2 7 6 10 10 9m78-24c7 0 10 7 8 15-2 7-6 10-10 9" fill={skinColor} />
      {hairstyle === 2 && (
        <g fill="none" stroke={accentColor} strokeWidth="2">
          <rect height="17" rx="5" width="26" x="85" y="106" />
          <rect height="17" rx="5" width="26" x="129" y="106" />
          <path d="M111 114h18" />
        </g>
      )}
      {hairstyle === 4 && (
        <path d="M77 72c-8 13-8 29-5 42m91-42c8 13 8 29 5 42" fill="none" stroke={hairColor} strokeLinecap="round" strokeWidth="7" />
      )}
    </svg>
  );
}

export function ClubMembers() {
  return (
    <section className="relative flex min-h-screen w-full flex-col mt-6 items-center overflow-hidden px-4 pb-14 pt-8 sm:px-6 md:px-10">
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-pink-500/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 border-l border-t border-cyan-400/20" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-44 w-44 border-b border-r border-pink-500/20" />

      <div className="relative z-10 mx-auto mt-18 flex w-full max-w-7xl flex-col items-center">
        <header className="text-left">
          
          <h1 className="mt-3 font-sans text-4xl font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl">
            CORE{' '}
            <span className="bg-gradient-to-r from-[#ff2d83] via-[#d78bd9] to-[#00e5ff] bg-clip-text text-transparent">
              TEAM
            </span>
          </h1>
          <p className="mx-auto justify-self-center mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white sm:text-lg">
            Meet the members leading Techniosys.
          </p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
            <span className="h-px w-12 bg-white" />
            <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#ff2d83] to-[#00e5ff]" />
            <span className="h-px w-12 bg-white" />
          </div>
        </header>

        <div className="mt-9 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {MEMBERS.map((member) => {
            const isPink = member.accent === 'pink';
            const accent = isPink
              ? {
                  border: 'border-[#ff2d83]/70',
                  text: 'text-[#ff2d83]',
                  background: 'from-[#ff2d83]/20',
                  glow: 'group-hover:shadow-[0_8px_30px_rgba(255,45,131,0.09)]',
                }
              : {
                  border: 'border-[#00e5ff]/70',
                  text: 'text-[#00e5ff]',
                  background: 'from-[#00e5ff]/20',
                  glow: 'group-hover:shadow-[0_8px_30px_rgba(0,229,255,0.09)]',
                };

            return (
              <article
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#090e18]/90 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_8px_30px_rgba(0,229,255,0.12)] ${accent.glow}`}
                key={member.id}
              >
                <div className="relative h-48 overflow-hidden bg-[#090e18] sm:h-52">
                  <CartoonAvatar
                    accent={member.accent}
                    hairstyle={member.hairstyle}
                    id={member.id}
                    name={member.name}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090e18]/80 via-transparent to-black/10" />
                  <div className="pointer-events-none absolute inset-0 cyber-scanlines opacity-10" />
                  <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/5" />
                  <div className="absolute -right-1 -top-5 h-28 w-28 rounded-full border border-white/5" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3">
                      
                  </div>
                  <h2 className="font-sans text-xl font-semibold tracking-wide text-white sm:text-[22px]">
                    {member.name}
                  </h2>
                  <p className={`mt-2.5 flex-1 text-sm font-semibold uppercase tracking-wider ${accent.text}`}>
                    {member.role}
                  </p>
                  <span
                    className={`mt-4 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14 ${isPink ? 'bg-[#ff2d83]' : 'bg-[#00e5ff]'}`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
