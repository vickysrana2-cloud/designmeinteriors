import { apiFetch } from "./client";
import { ReviewInput, ReviewRecord } from "@/types/api";

export const INITIAL_REVIEWS: ReviewRecord[] = [
  {
    id: "rev-01",
    sentence:
      "DesignMeInteriors transformed our coastal villa into a living masterwork. Their mastery of natural light, warm textures, and spatial flow exceeded every expectation.",
    stars: 5,
    name: "Marcus & Sophia Vance",
    location: "Malibu, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    createdAt: "2026-07-15T10:00:00.000Z",
  },
  {
    id: "rev-02",
    sentence:
      "Working with DesignMeInteriors on our headquarters brought fresh biophilic energy to our company culture. The attention to custom joinery is unmatched.",
    stars: 5,
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    createdAt: "2026-07-28T14:30:00.000Z",
  },
  {
    id: "rev-03",
    sentence:
      "From initial mood boards to turnkey delivery, the process was serene and flawlessly executed. They truly understand luxury minimalism.",
    stars: 5,
    name: "Clara Dupont",
    location: "Paris / Kyoto",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    createdAt: "2026-08-10T09:15:00.000Z",
  },
];

/**
 * Fetch reviews from MockAPI with fallback to initial curated review records.
 */
export async function getReviews(): Promise<ReviewRecord[]> {
  try {
    const reviews = await apiFetch<ReviewRecord[]>("/Reviews");
    if (Array.isArray(reviews) && reviews.length > 0) {
      // Ensure all fetched reviews format stars as valid numbers and retain avatar
      const formatted = reviews.map((r, i) => ({
        id: r.id || `fetched-${i}`,
        sentence: r.sentence || "",
        stars: typeof r.stars === "number" ? Math.min(5, Math.max(1, r.stars)) : 5,
        name: r.name || "Anonymous Client",
        location: r.location || "Private Client",
        avatar: r.avatar || "",
        createdAt: r.createdAt || new Date().toISOString(),
      }));
      return [...formatted, ...INITIAL_REVIEWS];
    }
    return INITIAL_REVIEWS;
  } catch (error) {
    console.warn("MockAPI GET /Reviews failed or endpoint not registered. Using initial reviews fallback:", error);
    return INITIAL_REVIEWS;
  }
}

/**
 * Create a new review record in MockAPI with strict validation.
 */
export async function createReview(data: ReviewInput): Promise<ReviewRecord> {
  if (!data.sentence || !data.sentence.trim()) {
    throw new Error("Review text is required.");
  }
  if (!data.name || !data.name.trim()) {
    throw new Error("Your name is required.");
  }
  if (!data.location || !data.location.trim()) {
    throw new Error("Your location is required.");
  }

  // Ensure stars is strictly a number between 1 and 5
  const parsedStars = Number(data.stars);
  const starsNum = isNaN(parsedStars)
    ? 5
    : Math.min(5, Math.max(1, Math.round(parsedStars)));

  const payload: ReviewRecord = {
    sentence: data.sentence.trim(),
    stars: starsNum,
    name: data.name.trim(),
    location: data.location.trim(),
    avatar: data.avatar || "",
    createdAt: new Date().toISOString(),
  };

  try {
    const record = await apiFetch<ReviewRecord>("/Reviews", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return record;
  } catch (error) {
    console.warn("MockAPI POST /Reviews request error, returning local record fallback:", error);
    return {
      ...payload,
      id: `local-${Date.now()}`,
    };
  }
}
