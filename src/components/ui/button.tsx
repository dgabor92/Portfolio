import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:bg-orange-500",
        secondary:
          "border border-stroke bg-white/5 text-foreground hover:bg-white/10 hover:border-white/20",
        ghost: "text-foreground hover:bg-white/5",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type BaseProps = PropsWithChildren<ButtonVariants> & {
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function buttonClassName({ variant, size, className }: ButtonVariants & { className?: string }) {
  return twMerge(buttonVariants({ variant, size }), className);
}

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ className, variant, size, children, ...props }: LinkButtonProps) {
  return (
    <a className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}
