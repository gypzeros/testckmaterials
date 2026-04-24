interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "#faf8f5" : "#1a1a1a";
  const accent = "#b8864a";

  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CKMaterials logo"
    >
      {/* Monograma CK con detalle geométrico */}
      <rect x="0" y="0" width="40" height="40" rx="2" fill={color} />
      <path
        d="M10 10 L10 30 L18 30 L18 22 L22 22 L30 30 L30 10 L22 10 L22 18 L18 18 L18 10 Z"
        fill={variant === "light" ? "#1a1a1a" : "#faf8f5"}
      />
      {/* Detalle geométrico: ángulo recto tipo baldosa */}
      <rect x="34" y="34" width="6" height="6" fill={accent} />

      {/* Texto MATERIALS */}
      <text
        x="50"
        y="18"
        fontFamily="var(--font-heading), serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="3"
        fill={color}
      >
        CK
      </text>
      <text
        x="50"
        y="34"
        fontFamily="var(--font-body), sans-serif"
        fontSize="9"
        fontWeight="300"
        letterSpacing="4"
        fill={color}
      >
        MATERIALS
      </text>
    </svg>
  );
}
