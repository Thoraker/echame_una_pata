"use client";

import { cn } from "@/utils/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  StyleKey,
  styleClasses,
  ColorKey,
  colorClasses,
  SizeKey,
  sizeClasses,
  ModifierKey,
  modifierClasses,
} from "./button.types";

type ButtonProps = {
  children: ReactNode;
  style?: StyleKey;
  color?: ColorKey;
  size?: SizeKey;
  modifier?: ModifierKey;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "color">;

export default function Button({
  children,
  style,
  color = "primary",
  size,
  modifier,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "btn",
        colorClasses[color],
        style && styleClasses[style],
        size && sizeClasses[size],
        modifier && modifierClasses[modifier],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
