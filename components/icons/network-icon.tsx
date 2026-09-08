import type { IconProps } from "./icon-props";

export function NetworkIcon({ size = 20, className, "aria-hidden": ariaHidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.2 7.3l3.6 8.4" />
      <path d="M16.8 7.3l-3.6 8.4" />
      <path d="M7.5 6h9" />
    </svg>
  );
}
