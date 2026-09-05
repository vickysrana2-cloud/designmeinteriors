import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A8060]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer tracking-wider uppercase active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#3A2920] text-[#FCFBF8] shadow-[0_3px_10px_rgba(45,30,20,0.25)] hover:shadow-[0_6px_18px_rgba(45,30,20,0.35)]",

        accent:
          "wood-button text-[#FCFBF8]",

        outline:
          "border border-[#5A3A28]/40 bg-transparent text-[#3A2920] hover:border-[#5A3A28] hover:bg-[#5A3A28] hover:text-[#FCFBF8] hover:shadow-[0_4px_12px_rgba(65,40,25,0.25)]",

        ghost:
          "bg-transparent text-[#3A2920] hover:bg-[#E8E1D7]/60 hover:text-[#5A3A28]",

        link:
          "rounded-none bg-transparent p-0 text-[#3A2920] underline-offset-4 hover:text-[#8B5E3C] hover:underline lowercase tracking-normal font-normal",

        darkPill:
          "rounded-full bg-[#3A2920] text-[#FCFBF8] px-6 shadow-[0_3px_10px_rgba(45,30,20,0.3)] hover:bg-[#5A3A28] hover:shadow-[0_6px_18px_rgba(45,30,20,0.4)]",
      },

      size: {
        default: "h-11 px-7 py-3 text-xs",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-14 px-9 text-xs font-semibold tracking-widest",
        icon: "h-10 w-10 p-0 rounded-full",
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
