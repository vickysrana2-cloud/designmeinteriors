import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-[#F9F8F5]">
      <div className="max-w-md mx-auto text-center space-y-6 px-6">
        <div className="w-16 h-16 border border-[#C86D51] flex items-center justify-center mx-auto text-[#C86D51]">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#C86D51] font-semibold block">
          404 Error
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif text-[#1E1C1A]">
          Page Outside Boundaries
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
          The architectural coordinates you requested could not be located on our sitemap.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button asChild variant="default">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Studio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
