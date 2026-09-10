import * as React from "react";
import parseFunc, {
  domToReact,
  attributesToProps,
  Element,
  DOMNode,
  HTMLReactParserOptions,
} from "html-react-parser";
import { sanitizeBloggerHtml, isTrustedIframeUrl } from "@/lib/blogger/sanitizer";
import { MediaIframe, MediaVideo } from "./MediaEmbed";
import { BloggerVideo } from "./BloggerVideo";

// Robust Module Interop for Next.js Server Components & Vercel Serverless Bundling
const parse =
  typeof parseFunc === "function"
    ? parseFunc
    : (parseFunc as any)?.default && typeof (parseFunc as any).default === "function"
    ? (parseFunc as any).default
    : null;

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

  // 1. Perform security sanitization preserving layout styles & structures
  let sanitizedHtml = content;
  try {
    sanitizedHtml = sanitizeBloggerHtml(content);
  } catch (sanitizerErr) {
    console.error("Sanitizer error in BlogContent:", sanitizerErr);
  }

  // Fallback if html-react-parser is unavailable or invalid in serverless environment
  if (typeof parse !== "function") {
    return (
      <div
        className={`prose prose-stone max-w-none text-[#242321] ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
  }

  // 2. Configure AST parsing options to transform media tags into responsive components
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      try {
        if (domNode instanceof Element && domNode.attribs) {
          const { name, attribs, children } = domNode;
          const reactProps = attributesToProps(attribs) as Record<string, any>;

          // A. Transform native Blogger video <object class="BLOG_video_class"> elements
          if (name === "object") {
            const contentid = attribs.contentid || reactProps.contentid;
            const rawClass = attribs.class || reactProps.className || "";
            const isBloggerVideo =
              Boolean(contentid) || rawClass.includes("BLOG_video_class");

            if (isBloggerVideo) {
              const width = attribs.width || reactProps.width;
              const height = attribs.height || reactProps.height;
              return (
                <BloggerVideo
                  contentid={contentid}
                  width={width}
                  height={height}
                />
              );
            }
            return null;
          }

          // B. Transform <img> tags into responsive, lazy-loaded images
          if (name === "img") {
            const { src, alt, className: rawClass, ...restProps } = reactProps;
            if (!src) return null;

            return (
              <img
                src={src}
                alt={alt || "Article illustration"}
                loading="lazy"
                decoding="async"
                className="rounded-2xl my-6 border border-[#D7D0C5] max-w-full h-auto shadow-sm mx-auto block"
                {...restProps}
              />
            );
          }

          // C. Transform <iframe> tags into responsive MediaEmbed or BloggerVideo containers
          if (name === "iframe") {
            const { src, title, width, height } = reactProps;
            if (!src || !isTrustedIframeUrl(src)) {
              return null;
            }

            if (src.includes("video.g")) {
              return (
                <BloggerVideo
                  src={src}
                  title={title || "Blogger Native Video"}
                  width={width}
                  height={height}
                />
              );
            }

            return (
              <MediaIframe
                src={src}
                title={title || "Embedded Video"}
                width={width}
                height={height}
              />
            );
          }

          // D. Transform native <video> tags into responsive MediaVideo containers
          if (name === "video") {
            const { src, poster, ...restProps } = reactProps;
            return (
              <MediaVideo src={src} poster={poster} {...restProps}>
                {children && domToReact(children as DOMNode[], options)}
              </MediaVideo>
            );
          }

          // E. Transform external <a> links to open in a safe new tab
          if (name === "a") {
            const { href, target, rel, ...restProps } = reactProps;
            const isExternal =
              href && (href.startsWith("http://") || href.startsWith("https://"));
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : target}
                rel={isExternal ? "noopener noreferrer" : rel}
                {...restProps}
              >
                {children && domToReact(children as DOMNode[], options)}
              </a>
            );
          }
        }
      } catch (nodeErr) {
        console.error("Error transforming DOM node in BlogContent:", nodeErr);
      }
    },
  };

  let parsedContent: React.ReactNode = null;
  try {
    parsedContent = parse(sanitizedHtml, options);
  } catch (parseErr) {
    console.error("Parse error in BlogContent, falling back to raw html:", parseErr);
    return (
      <div
        className={`prose prose-stone max-w-none text-[#242321] ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
  }

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
    >
      {parsedContent}
    </div>
  );
}
