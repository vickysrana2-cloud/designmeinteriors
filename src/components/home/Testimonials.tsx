"use client";

import React, { useEffect, useState } from "react";
import { Star, MessageSquarePlus, X, Loader2, CheckCircle2, User } from "lucide-react";
import { getReviews, createReview } from "@/lib/api/reviews";
import { ReviewRecord } from "@/types/api";

const AVATAR_PALETTES = [
  { bg: "from-[#9A8060] to-[#CAA05C]", border: "#CAA05C" },
  { bg: "from-[#6B5740] to-[#9A8060]", border: "#9A8060" },
  { bg: "from-[#8A5A44] to-[#B37960]", border: "#B37960" },
  { bg: "from-[#4A5D5E] to-[#7B9294]", border: "#7B9294" },
  { bg: "from-[#5A4E40] to-[#8C7A6B]", border: "#8C7A6B" },
  { bg: "from-[#7C6354] to-[#B89C89]", border: "#B89C89" },
  { bg: "from-[#3D4045] to-[#6E737B]", border: "#6E737B" },
  { bg: "from-[#8C6D31] to-[#D4AF37]", border: "#D4AF37" },
];

function renderVectorIcon(variant: number) {
  switch (variant) {
    case 0:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.76-2.24-5-5-5zm0 12c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
        </svg>
      );
    case 1:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.2 2 7 4.2 7 7c0 2.2 1.4 4.1 3.3 4.7C7.3 12.6 5 15.1 5 18v1h14v-1c0-2.9-2.3-5.4-5.3-6.3C15.6 11.1 17 9.2 17 7c0-2.8-2.2-5-5-5zm-3 5c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="7" r="3.5" />
          <path d="M12 12.5c-4 0-7 2-7 4.5V19h14v-2c0-2.5-3-4.5-7-4.5z" />
          <path d="M9.5 7h1M13.5 7h1" stroke="#CAA05C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a4 4 0 100 8 4 4 0 000-8zm-6 17c0-3 3-5 6-5s6 2 6 5v1H6v-1z" />
          <path d="M19 2l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.5.8.3-1.7-1.2-1.2 1.7-.3L19 2z" fill="#CAA05C" />
        </svg>
      );
    case 4:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="7" r="4" />
          <path d="M12 13c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z" />
          <path d="M12 13.5l1.2 2.5-.8 3h-0.8l-.8-3 1.2-2.5z" fill="#CAA05C" />
        </svg>
      );
    case 5:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-2.8 0-5 2.2-5 5 0 1.7.9 3.2 2.2 4.1C6.4 12.2 4 14.8 4 18v1h16v-1c0-3.2-2.4-5.8-5.2-6.9C16.1 10.2 17 8.7 17 7c0-2.8-2.2-5-5-5z" />
        </svg>
      );
    case 6:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 7:
    default:
      return (
        <svg className="w-5 h-5 text-[#FCFBF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.2 2 7 4.2 7 7c0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.8-2.2-5-5-5zm0 12c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
          <circle cx="17" cy="6" r="2.5" fill="#CAA05C" />
        </svg>
      );
  }
}

function ReviewerAvatarIcon({ name, id, index }: { name: string; id?: string; index: number }) {
  let charSum = index;
  const str = (name || "") + (id || "");
  for (let i = 0; i < str.length; i++) {
    charSum += str.charCodeAt(i);
  }

  const paletteIndex = charSum % AVATAR_PALETTES.length;
  const iconVariant = charSum % 8;
  const palette = AVATAR_PALETTES[paletteIndex];
  const initial = name ? name.trim().charAt(0).toUpperCase() : "U";

  return (
    <div
      className={`relative h-11 w-11 shrink-0 rounded-full bg-gradient-to-br ${palette.bg} border p-0.5 flex items-center justify-center shadow-md shadow-black/40 transition-transform duration-300 hover:scale-105`}
      style={{ borderColor: palette.border }}
    >
      <div className="w-full h-full rounded-full bg-[#191816]/30 backdrop-blur-[1px] flex items-center justify-center relative overflow-hidden">
        {renderVectorIcon(iconVariant)}
      </div>
      <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#242321] border border-[#9A8060]/70 text-[9px] font-bold text-[#CAA05C]">
        {initial}
      </span>
    </div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Review Form Data
  const [formData, setFormData] = useState({
    sentence: "",
    stars: 5,
    name: "",
    location: "",
  });

  // Fetch reviews from MockAPI on mount
  useEffect(() => {
    async function loadReviews() {
      setLoading(true);
      setError(null);
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
        setError("Unable to load reviews at this time.");
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, stars: rating }));
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return; // Prevent double-clicking

    if (!formData.sentence.trim() || !formData.name.trim() || !formData.location.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const newReview = await createReview({
        sentence: formData.sentence,
        stars: formData.stars,
        name: formData.name,
        location: formData.location,
        avatar: "",
      });

      // Update state dynamically with newly recorded review
      setReviews((prev) => [newReview, ...prev]);
      setSubmitSuccess(true);

      // Reset form fields
      setFormData({
        sentence: "",
        stars: 5,
        name: "",
        location: "",
      });

      // Automatically close modal after success
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
      }, 1800);
    } catch (err: unknown) {
      console.error("Review submission error:", err);
      setFormError(
        err instanceof Error ? err.message : "Failed to submit review. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#191816] text-[#FCFBF8] py-24 border-t border-[#322F2C] relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Client Testimonials & Reflections
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FCFBF8]">
              Reflections on spatial transformation.
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="animate-smooth-jump inline-flex items-center gap-2.5 rounded-full border border-[#9A8060] bg-[#9A8060] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#80684D] hover:border-[#80684D]"
          >
            <MessageSquarePlus className="h-4 w-4 animate-pulse" />
            <span>Share Your Reflection</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 rounded-3xl border border-[#322F2C] bg-[#242321]/50 p-8 flex flex-col justify-between animate-pulse"
              >
                <div className="space-y-3">
                  <div className="h-4 w-24 bg-[#322F2C] rounded" />
                  <div className="h-4 w-full bg-[#322F2C] rounded" />
                  <div className="h-4 w-3/4 bg-[#322F2C] rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#322F2C] rounded-full" />
                  <div className="h-4 w-32 bg-[#322F2C] rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="p-8 text-center border border-[#322F2C] bg-[#242321] rounded-3xl text-[#D7D0C5]">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && reviews.length === 0 && (
          <div className="p-12 text-center border border-[#322F2C] bg-[#242321] rounded-3xl space-y-4">
            <h3 className="font-serif text-xl text-[#FCFBF8]">No reflections shared yet</h3>
            <p className="text-sm text-[#706B63]">Be the first to share your experience with DesignMeInteriors Studio.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#9A8060] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Write First Review
            </button>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((t, idx) => {
              return (
                <div
                  key={t.id || t.name + t.createdAt + idx}
                  className="flex flex-col justify-between rounded-3xl border border-[#322F2C] bg-[#242321] p-8 space-y-6 transition-all duration-300 hover:border-[#9A8060]/60"
                >
                  <div className="space-y-4">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 text-[#CAA05C]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < t.stars
                              ? "fill-[#CAA05C] text-[#CAA05C]"
                              : "text-[#322F2C] fill-[#322F2C]"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="font-serif text-base italic leading-relaxed text-[#D7D0C5]">
                      &quot;{t.sentence}&quot;
                    </p>
                  </div>

                  {/* Reviewer Info with Vector Avatar Icon */}
                  <div className="flex items-center justify-between border-t border-[#322F2C] pt-4 mt-auto">
                    <div className="flex items-center gap-3.5">
                      {/* Stylized Vector Human Avatar Icon */}
                      <ReviewerAvatarIcon name={t.name} id={t.id} index={idx} />

                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#FCFBF8]">
                          {t.name}
                        </h4>
                        <p className="text-xs text-[#706B63]">{t.location}</p>
                      </div>
                    </div>

                    {t.createdAt && (
                      <span className="text-[10px] uppercase tracking-wider text-[#706B63] pl-2">
                        {new Date(t.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* REVIEW SUBMISSION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#322F2C] bg-[#242321] p-8 sm:p-10 shadow-2xl text-[#FCFBF8]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 rounded-full p-2 text-[#706B63] hover:bg-[#322F2C] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#9A8060]/20 text-[#9A8060]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#FCFBF8]">Reflection Recorded</h3>
                <p className="text-sm text-[#D7D0C5] max-w-sm mx-auto">
                  Thank you for sharing your experience with DesignMeInteriors Studio. Your review has been recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
                    Share Your Experience
                  </span>
                  <h3 className="font-serif text-2xl text-[#FCFBF8]">Write A Review</h3>
                </div>

                {formError && (
                  <div className="p-3 text-xs border border-red-500/30 bg-red-900/20 text-red-300 rounded-xl">
                    {formError}
                  </div>
                )}

                {/* Rating Selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    Rating (1 to 5 Stars) *
                  </label>
                  <div className="flex items-center gap-2 pt-1">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => handleStarClick(starVal)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            starVal <= formData.stars
                              ? "fill-[#CAA05C] text-[#CAA05C]"
                              : "text-[#322F2C] fill-transparent"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 text-sm font-semibold text-[#CAA05C]">
                      {formData.stars} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Rajesh Kulkarni"
                    className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g. Nagpur / Pune"
                    className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                  />
                </div>

                {/* Review Text */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    Your Reflection / Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.sentence}
                    onChange={(e) => setFormData((prev) => ({ ...prev, sentence: e.target.value }))}
                    placeholder="Share details of your spatial design experience..."
                    className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#9A8060] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#856c4d] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Recording Review...</span>
                    </>
                  ) : (
                    <span>Submit Reflection</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
