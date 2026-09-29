import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: { container: 'h-8', icon: 28, textMain: 'text-sm', textSub: 'text-[9px]' },
    md: { container: 'h-10', icon: 36, textMain: 'text-base', textSub: 'text-[10px]' },
    lg: { container: 'h-14', icon: 48, textMain: 'text-xl', textSub: 'text-xs' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-blue text-white shadow"
        style={{ width: s.icon, height: s.icon }}
      >
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width={s.icon * 0.7} height={s.icon * 0.7}>
          {/* House shape */}
          <path d="M18 4L5 15H8V28H16V21H20V28H28V15H31L18 4Z" fill="white" opacity="0.9" />
          {/* Sparkle top right */}
          <path d="M27 6l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" fill="#FFC107" />
          {/* Sparkle small */}
          <path d="M31 10l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" fill="#FFC107" />
          {/* Brush/cleaning mark on house */}
          <rect x="13" y="16" width="10" height="7" rx="1" fill="#0057B8" opacity="0.3" />
          <path d="M14 20h8M14 22h6" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-brand-dark tracking-tight ${s.textMain}`}>
          JASA CLEANING
        </span>
        <span className={`font-black text-brand-blue tracking-widest uppercase ${s.textMain}`}>
          JOGJA
        </span>
        <span className={`text-gray-400 font-normal ${s.textSub}`}>Jasa Cleaning No 1 di Jogja</span>
      </div>
    </div>
  );
}
