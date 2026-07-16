import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-[18px] py-2.5 font-ui text-[15px] font-bold transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-layer-ui text-bg hover:opacity-90",
  ghost: "border border-border bg-transparent text-text hover:bg-paper-2",
};

type ButtonProps = { variant?: ButtonVariant; className?: string } & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
);

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { href: _href, ...buttonProps } = props;
  return <button className={classes} {...buttonProps} />;
}
