/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface BonsaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white" | "dark";
  showText?: boolean;
  className?: string;
}

export function BonsaiLogo({
  size = "md",
  variant = "default",
  showText = true,
  className = "",
}: BonsaiLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  const colors = {
    default: {
      primary: "#059669", // emerald-600
      secondary: "#10b981", // emerald-500
      accent: "#34d399", // emerald-400
      text: "#111827", // gray-900
    },
    white: {
      primary: "#ffffff",
      secondary: "#f3f4f6", // gray-100
      accent: "#e5e7eb", // gray-200
      text: "#ffffff",
    },
    dark: {
      primary: "#059669",
      secondary: "#10b981",
      accent: "#34d399",
      text: "#111827",
    },
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Pot/Container */}
          <path
            d="M8 24h16c1.1 0 2-.9 2-2v-6H6v6c0 1.1.9 2 2 2z"
            fill={currentColors.primary}
            opacity="0.8"
          />

          {/* Soil */}
          <rect
            x="6"
            y="20"
            width="20"
            height="4"
            fill={currentColors.secondary}
            opacity="0.6"
          />

          {/* Main trunk */}
          <rect
            x="15"
            y="8"
            width="2"
            height="12"
            fill={currentColors.primary}
            rx="1"
          />

          {/* Left branch */}
          <path
            d="M15 12c-2 0-3-1-4-2s-1-2 0-2 2 1 4 2"
            stroke={currentColors.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right branch */}
          <path
            d="M17 10c2 0 3-1 4-2s1-2 0-2-2 1-4 2"
            stroke={currentColors.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left leaves cluster */}
          <circle
            cx="9"
            cy="8"
            r="2"
            fill={currentColors.accent}
            opacity="0.9"
          />
          <circle
            cx="11"
            cy="7"
            r="1.5"
            fill={currentColors.secondary}
            opacity="0.8"
          />
          <circle
            cx="10"
            cy="9"
            r="1"
            fill={currentColors.primary}
            opacity="0.7"
          />

          {/* Right leaves cluster */}
          <circle
            cx="23"
            cy="6"
            r="2"
            fill={currentColors.accent}
            opacity="0.9"
          />
          <circle
            cx="21"
            cy="5"
            r="1.5"
            fill={currentColors.secondary}
            opacity="0.8"
          />
          <circle
            cx="22"
            cy="7"
            r="1"
            fill={currentColors.primary}
            opacity="0.7"
          />

          {/* Top leaves */}
          <circle
            cx="16"
            cy="4"
            r="1.5"
            fill={currentColors.accent}
            opacity="0.9"
          />
          <circle
            cx="15"
            cy="5"
            r="1"
            fill={currentColors.secondary}
            opacity="0.8"
          />
          <circle
            cx="17"
            cy="5"
            r="1"
            fill={currentColors.primary}
            opacity="0.7"
          />

          {/* Subtle highlight on pot */}
          <rect
            x="6"
            y="16"
            width="20"
            height="1"
            fill={currentColors.accent}
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className={`font-bold ${textSizeClasses[size]} tracking-tight`}
          style={{ color: currentColors.text }}
        >
          Bonsai
        </span>
      )}
    </div>
  );
}

// Alternative minimalist logo
export function BonsaiLogoMinimal({
  size = "md",
  variant = "default",
  className = "",
}: Omit<BonsaiLogoProps, "showText">) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colors = {
    default: "#059669",
    white: "#ffffff",
    dark: "#059669",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Simplified tree shape */}
        <path
          d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z"
          fill={colors[variant]}
          opacity="0.8"
        />

        {/* Trunk */}
        <rect
          x="11"
          y="14"
          width="2"
          height="6"
          fill={colors[variant]}
          rx="1"
        />

        {/* Base */}
        <rect
          x="8"
          y="20"
          width="8"
          height="2"
          fill={colors[variant]}
          opacity="0.6"
          rx="1"
        />
      </svg>
    </div>
  );
}

// Icon-only version for favicons
export function BonsaiIcon({
  size = "md",
  variant = "default",
  className = "",
}: Omit<BonsaiLogoProps, "showText">) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Simple bonsai silhouette */}
        <path
          d="M8 1s-2 2-2 4c0 1 1 2 2 2s2-1 2-2c0-2-2-4-2-4z"
          fill="#059669"
        />
        <rect x="7.5" y="7" width="1" height="4" fill="#059669" rx="0.5" />
        <rect x="5" y="11" width="6" height="1.5" fill="#059669" rx="0.5" />

        {/* Small leaves */}
        <circle cx="6" cy="3" r="0.8" fill="#10b981" opacity="0.8" />
        <circle cx="10" cy="3" r="0.8" fill="#10b981" opacity="0.8" />
      </svg>
    </div>
  );
}
