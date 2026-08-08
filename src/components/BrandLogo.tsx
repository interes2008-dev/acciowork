/* Shared Accio Work brand mark — identical across all pages */
export function BrandLogo({ size = 28 }: { size?: number }) {
  return (
    <div
      className="flex items-center gap-1.5 font-bold tracking-tight"
      style={{ fontSize: size }}
    >
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id="accioTriShared" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#17B26A" />
            <stop offset="100%" stopColor="#7CE7C2" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTriShared)" />
      </svg>
      <span className="text-[#0F172A]">Accio</span>
    </div>
  );
}

export default BrandLogo;
