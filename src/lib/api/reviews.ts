import { apiFetch } from "./client";
import { ReviewInput, ReviewRecord } from "@/types/api";

/**
 * Fetch reviews directly from MockAPI (/Reviews).
 */
export async function getReviews(): Promise<ReviewRecord[]> {
  try {
    const reviews = await apiFetch<ReviewRecord[]>("/Reviews");
    if (Array.isArray(reviews)) {
      return reviews.map((r, i) => ({
        id: String(r.id || `review-${i}`),
        sentence: r.sentence || "",
        stars: typeof r.stars === "number" ? Math.min(5, Math.max(1, r.stars)) : 5,
        name: r.name || "Anonymous Client",
        location: r.location || "Private Client",
        avatar: r.avatar || "",
        createdAt: r.createdAt || new Date().toISOString(),
      }));
    }
    return [];
  } catch (error) {
    console.warn("MockAPI GET /Reviews request failed:", error);
    return [];
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

/**
 * Delete a review record from MockAPI.
 */
export async function deleteReview(id: string): Promise<boolean> {
  if (!id) return true;

  // Local fallback items or temporary client-side IDs
  if (
    id.startsWith("rev-") ||
    id.startsWith("local-") ||
    id.startsWith("fetched-")
  ) {
    return true;
  }

  try {
    await apiFetch(`/Reviews/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch (error) {
    console.warn("Delete review warning (record may be local or removed):", error);
    // Return true so frontend removes item gracefully even if 404 returned
    return true;
  }
}
