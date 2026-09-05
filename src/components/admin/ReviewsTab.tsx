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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#322F2C] pb-6">
        <div>
          <h2 className="font-serif text-2xl text-[#FCFBF8]">
            Client Reviews ({reviews.length})
          </h2>
          <p className="text-xs text-[#706B63]">
            Manage client reflections and testimonials submitted via website form.
          </p>
        </div>

        <button
          onClick={fetchReviews}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:border-[#9A8060] transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A8060]" />
          <p className="text-xs text-[#706B63]">Loading customer reviews...</p>
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
        <div className="p-12 text-center border border-[#322F2C] bg-[#242321] rounded-3xl space-y-3">
          <MessageSquare className="mx-auto h-10 w-10 text-[#706B63]" />
          <h3 className="font-serif text-lg text-[#FCFBF8]">No Reviews Recorded</h3>
          <p className="text-xs text-[#706B63]">
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
              className="rounded-3xl border border-[#322F2C] bg-[#242321] p-6 flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[#CAA05C]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < r.stars
                            ? "fill-[#CAA05C] text-[#CAA05C]"
                            : "text-[#322F2C] fill-[#322F2C]"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleDelete(r.id)}
                    disabled={deletingId === r.id}
                    className="p-1.5 rounded-lg text-[#706B63] hover:text-red-400 transition-colors"
                    title="Delete Review"
                  >
                    {deletingId === r.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-red-400" />
                    ) : (
                      <Trash2 className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <p className="font-serif text-sm italic text-[#D7D0C5] leading-relaxed">
                  &quot;{r.sentence}&quot;
                </p>
              </div>

              <div className="border-t border-[#322F2C] pt-3 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-serif text-xs font-semibold text-[#FCFBF8]">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-[#706B63]">{r.location}</p>
                </div>

                {r.createdAt && (
                  <span className="text-[10px] uppercase text-[#706B63]">
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
