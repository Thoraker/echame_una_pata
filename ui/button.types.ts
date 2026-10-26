export const styleClasses = {
  outline: "btn-outline",
  dash: "btn-dash",
  soft: "btn-soft",
  ghost: "btn-ghost",
  link: "btn-link",
  disabled: "btn-disabled",
} as const;

export type StyleKey = keyof typeof styleClasses;

export const colorClasses = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
} as const;

export type ColorKey = keyof typeof colorClasses;

export const sizeClasses = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
} as const;

export type SizeKey = keyof typeof sizeClasses;

export const modifierClasses = {
  wide: "btn-wide",
  block: "btn-block",
  square: "btn-square",
  circle: "circle",
} as const;

export type ModifierKey = keyof typeof modifierClasses;
