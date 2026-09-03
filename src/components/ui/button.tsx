import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer tracking-wider uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-[1.01]",
        accent:
          "bg-[#C86D51] text-white hover:bg-[#B55C41] shadow-sm hover:shadow-md",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline lowercase tracking-normal font-normal",
        darkPill: "bg-[#1E1C1A] text-[#F9F8F5] hover:bg-[#322F2C] rounded-full px-6",
      },
      size: {
        default: "h-11 px-7 py-3 text-xs",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-14 px-9 text-xs font-semibold tracking-widest",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
