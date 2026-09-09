import * as React from "react";

interface BlogContentProps {
  content: string;
  className?: string;
}

export function BlogContent({ content, className = "" }: BlogContentProps) {
  if (!content || !content.trim()) {
    return (
      <div className="py-8 text-[#706B63] italic">
        No additional article content available.
      </div>
    );
  }

  // Pre-process Blogger HTML to sanitize/clean inline styles if needed
  const cleanedContent = (content || "")
    // Remove script tags from Blogger HTML
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    // Remove inline font-family overrides so site font remains consistent
    .replace(/font-family:[^;"]+;?/gi, "")
    // Remove hardcoded black background styles from pasted text
    .replace(/background-color:[^;"]+;?/gi, "")
    // Ensure images inside post content wrap nicely
    .replace(/<img /gi, '<img loading="lazy" class="rounded-2xl my-6 border border-[#D7D0C5] max-w-full h-auto shadow-sm" ');

  return (
    <div
      className={`
        prose prose-stone max-w-none text-[#242321] font-light leading-relaxed text-base sm:text-lg
        
        [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-[#242321]
        
        [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-semibold [&_h1]:text-[#242321] [&_h1]:mt-10 [&_h1]:mb-4
        [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-semibold [&_h2]:text-[#242321] [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:font-serif [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-medium [&_h3]:text-[#242321] [&_h3]:mt-6 [&_h3]:mb-3
        [&_h4]:font-serif [&_h4]:text-lg [&_h4]:font-medium [&_h4]:text-[#242321] [&_h4]:mt-4 [&_h4]:mb-2
        
        [&_a]:text-[#9A8060] [&_a]:font-normal [&_a]:underline [&_a]:decoration-[#9A8060]/40 [&_a]:underline-offset-4 hover:[&_a]:text-[#242321] hover:[&_a]:decoration-[#242321] transition-colors
        
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
        [&_li]:text-[#242321]
        
        [&_blockquote]:border-l-4 [&_blockquote]:border-[#9A8060] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-[#706B63] [&_blockquote]:bg-[#E8E1D7]/30 [&_blockquote]:rounded-r-xl
        
        [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:block
        
        [&_code]:bg-[#191816] [&_code]:text-[#FCFBF8] [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:text-sm [&_code]:font-mono
        [&_pre]:bg-[#191816] [&_pre]:text-[#FCFBF8] [&_pre]:p-4 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:my-6
        
        [&_hr]:border-[#D7D0C5] [&_hr]:my-10
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: cleanedContent }}
    />
  );
}
