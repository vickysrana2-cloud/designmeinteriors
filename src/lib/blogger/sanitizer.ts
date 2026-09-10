const ALLOWED_IFRAME_HOSTS = [
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "www.blogger.com",
  "blogger.com",
  "player.vimeo.com",
  "vimeo.com",
];

/**
 * Checks whether an iframe src URL points to a trusted video host.
 */
export function isTrustedIframeUrl(src?: string): boolean {
  if (!src || typeof src !== "string") return false;
  try {
    const url = new URL(src, "https://localhost");
    const hostname = url.hostname.toLowerCase();
    return ALLOWED_IFRAME_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
}

/**
 * Lightweight, 0-dependency HTML Sanitizer for Next.js & Vercel Serverless.
 * Strips dangerous tags (<script>, <style>, <embed>, <form>, <input>)
 * and inline event handlers (onload, onerror, onclick, etc.) without requiring jsdom/canvas.
 */
export function sanitizeBloggerHtml(rawHtml: string): string {
  if (!rawHtml || typeof rawHtml !== "string") return "";

  try {
    return rawHtml
      // 1. Remove dangerous script tags and content
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      // 2. Remove style blocks that override global CSS
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      // 3. Remove inline event handlers (onload=, onerror=, onclick=, etc.)
      .replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      // 4. Remove javascript: URIs in href or src
      .replace(/(href|src)\s*=\s*["']\s*javascript:[^"']*["']/gi, '$1="#"')
      // 5. Remove form, input, embed tags
      .replace(/<\/?(form|input|embed)[^>]*>/gi, "");
  } catch (err) {
    console.error("Sanitizer error:", err);
    return rawHtml;
  }
}
