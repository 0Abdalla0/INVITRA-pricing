type Props = { className?: string; flip?: boolean };

export function FloralCorner({ className, flip }: Props) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.9">
        <path d="M10 200 C 60 170, 100 130, 130 70" />
        <path d="M30 210 C 80 190, 130 150, 170 90" opacity="0.6" />
        <path d="M50 200 C 70 180, 80 160, 85 140" />
        <path d="M85 140 C 95 145, 110 145, 118 135" />
        <path d="M85 140 C 80 125, 82 110, 95 100" />
        <path d="M130 70 C 138 60, 148 56, 160 58" />
        <path d="M130 70 C 124 60, 122 48, 128 36" />
      </g>
      <g fill="currentColor" opacity="0.85">
        <circle cx="130" cy="70" r="6" />
        <circle cx="85" cy="140" r="5" />
        <circle cx="50" cy="195" r="3.5" />
        <circle cx="170" cy="90" r="3" opacity="0.7" />
      </g>
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.7" fill="none">
        <ellipse cx="118" cy="76" rx="9" ry="4" transform="rotate(-30 118 76)" />
        <ellipse cx="142" cy="64" rx="9" ry="4" transform="rotate(30 142 64)" />
        <ellipse cx="130" cy="56" rx="4" ry="9" />
        <ellipse cx="77" cy="146" rx="8" ry="3.5" transform="rotate(-25 77 146)" />
        <ellipse cx="93" cy="134" rx="8" ry="3.5" transform="rotate(25 93 134)" />
      </g>
    </svg>
  );
}

export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} fill="none" aria-hidden="true">
      <path d="M2 12 H58" stroke="currentColor" strokeWidth="0.8" />
      <g fill="currentColor">
        {[10, 18, 26, 34, 42, 50].map((x, i) => (
          <g key={x}>
            <ellipse cx={x} cy={8} rx="3.2" ry="1.4" transform={`rotate(-25 ${x} 8)`} opacity={0.7 - i * 0.05} />
            <ellipse cx={x} cy={16} rx="3.2" ry="1.4" transform={`rotate(25 ${x} 16)`} opacity={0.7 - i * 0.05} />
          </g>
        ))}
        <circle cx="56" cy="12" r="1.5" />
      </g>
    </svg>
  );
}
