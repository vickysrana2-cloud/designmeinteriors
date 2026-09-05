import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-none border border-[#D7D0C5] bg-[#FCFBF8] px-4 py-3 text-sm text-[#242321] transition-colors placeholder:text-[#706B63]/70 focus-visible:outline-none focus-visible:border-[#9A8060] focus-visible:ring-1 focus-visible:ring-[#9A8060] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
