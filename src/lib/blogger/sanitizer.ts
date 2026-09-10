import DOMPurify from "isomorphic-dompurify";

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
  if (!src) return false;
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
 * Sanitizes raw Blogger HTML while preserving layout structures, captions, inline alignment styles,
 * and Blogger native video <object class="BLOG_video_class"> elements.
 */
export function sanitizeBloggerHtml(rawHtml: string): string {
  if (!rawHtml) return "";

  return DOMPurify.sanitize(rawHtml, {
    ADD_TAGS: ["iframe", "video", "source", "figure", "figcaption", "object", "param"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "controls",
      "poster",
      "loading",
      "target",
      "rel",
      "src",
      "alt",
      "title",
      "class",
      "style",
      "width",
      "height",
      "contentid",
      "id",
      "name",
      "value",
    ],
    ALLOWED_URI_REGEXP:
      /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
    FORBID_TAGS: ["script", "style", "embed", "form", "input"],
    FORBID_ATTR: ["onload", "onerror", "onclick", "onmouseover"],
  });
}
