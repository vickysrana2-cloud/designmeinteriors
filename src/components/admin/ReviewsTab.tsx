"use client";

import React, { useEffect, useState } from "react";
import { Star, Trash2, RefreshCw, Loader2, MessageSquare, Calendar } from "lucide-react";
import { ReviewRecord } from "@/types/api";
import { getReviews, deleteReview } from "@/lib/api/reviews";

export function ReviewsTab() {
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getReviews();
      setReviews(data);
    } catch (err) {
      console.error("Failed to load reviews:", err);
      setError("Unable to load reviews from server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this client review?")) return;

    setDeletingId(id);
    try {
      await deleteReview(id);
    } catch (err) {
      console.warn("Delete Review Notice:", err);
    } finally {
      setReviews((prev) => prev.filter((r) => r.id !== id));
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-8 text-[#FCFBF8]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2A26] pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="h-px w-8 bg-[#9A7248]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A7248]">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Client Reviews ({reviews.length})
          </h2>
          <p className="text-xs text-[#9E978E]">
            Manage client reflections and testimonials submitted via website form.
          </p>
        </div>

        <button
          onClick={fetchReviews}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-2xl border border-[#2D2A26] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:border-[#9A7248] transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 text-[#9A7248] ${loading ? "animate-spin" : ""}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A7248]" />
          <p className="text-xs text-[#9E978E]">Loading customer reviews...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl border border-red-500/30 bg-red-950/30 text-center text-red-300 text-xs">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && reviews.length === 0 && (
        <div className="p-16 text-center border border-[#2D2A26] bg-[#191816] rounded-2xl space-y-3">
          <MessageSquare className="mx-auto h-10 w-10 text-[#7A746C]" />
          <h3 className="font-serif text-lg text-white">No Reviews Recorded</h3>
          <p className="text-xs text-[#9E978E]">
            When clients submit reviews on the website, they will appear here.
          </p>
        </div>
      )}

      {/* Reviews Grid */}
      {!loading && !error && reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={r.id || idx}
              className="rounded-2xl border border-[#2D2A26] bg-[#191816] p-6 flex flex-col justify-between space-y-4 shadow-xl transition-all hover:border-[#9A7248]/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[#9A7248]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < r.stars
                            ? "fill-[#9A7248] text-[#9A7248]"
                            : "text-[#2D2A26] fill-[#2D2A26]"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleDelete(r.id)}
                    disabled={deletingId === r.id}
                    className="p-1.5 rounded-lg text-[#9E978E] hover:text-red-400 transition-colors"
                    title="Delete Review"
                  >
                    {deletingId === r.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-red-400" />
                    ) : (
                      <Trash2 className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <p className="font-serif text-sm italic text-[#D5CDBF] leading-relaxed">
                  &quot;{r.sentence}&quot;
                </p>
              </div>

              <div className="border-t border-[#2D2A26] pt-3.5 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-serif text-xs font-semibold text-white">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-[#9E978E]">{r.location}</p>
                </div>

                {r.createdAt && (
                  <span className="text-[10px] uppercase text-[#9E978E]">
                    {new Date(r.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
