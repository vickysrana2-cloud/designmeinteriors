"use client";

import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Search,
  Trash2,
  RefreshCw,
  Loader2,
  Briefcase,
  DollarSign,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { EnquiryRecord } from "@/types/api";
import { apiFetch } from "@/lib/api/client";

export function EnquiriesTab() {
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<EnquiryRecord[]>("/Enquires");
      if (Array.isArray(data)) {
        // Sort newest first
        const sorted = data.sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
        );
        setEnquiries(sorted);
      } else {
        setEnquiries([]);
      }
    } catch (err) {
      console.error("Failed to load enquiries:", err);
      setError("Unable to fetch enquiry records from server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;

    setDeletingId(id);
    try {
      await apiFetch(`/Enquires/${id}`, {
        method: "DELETE",
      });
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Failed to delete enquiry record.");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.fullName?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.serviceCategory?.toLowerCase().includes(q) ||
      item.projectLocation?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Header Bar & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#322F2C] pb-6">
        <div>
          <h2 className="font-serif text-2xl text-[#FCFBF8]">
            Customer Enquiries ({enquiries.length})
          </h2>
          <p className="text-xs text-[#706B63]">
            Live project leads and consultation requests submitted via contact form.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchEnquiries}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] transition-colors hover:border-[#9A8060] hover:text-[#9A8060]"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#706B63]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, email, location, category..."
          className="w-full rounded-xl border border-[#322F2C] bg-[#191816] pl-10 pr-4 py-2.5 text-xs text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A8060]" />
          <p className="text-xs text-[#706B63]">Loading customer enquiry records...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl border border-red-500/30 bg-red-950/30 text-center text-red-300 text-xs">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredEnquiries.length === 0 && (
        <div className="p-12 text-center border border-[#322F2C] bg-[#242321] rounded-3xl space-y-3">
          <UserCheck className="mx-auto h-10 w-10 text-[#706B63]" />
          <h3 className="font-serif text-lg text-[#FCFBF8]">No Enquiries Found</h3>
          <p className="text-xs text-[#706B63]">
            {searchQuery
              ? "No records match your search criteria."
              : "When clients submit the contact form, their records will appear here."}
          </p>
        </div>
      )}

      {/* Enquiries Grid */}
      {!loading && !error && filteredEnquiries.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredEnquiries.map((item, idx) => (
            <div
              key={item.id || idx}
              className="rounded-3xl border border-[#322F2C] bg-[#242321] p-6 flex flex-col justify-between space-y-5 transition-all hover:border-[#9A8060]/60 shadow-lg"
            >
              <div className="space-y-4">
                {/* Header: Name + Date + Delete */}
                <div className="flex items-start justify-between border-b border-[#322F2C] pb-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#FCFBF8]">
                      {item.fullName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#9A8060]">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Recent"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    title="Delete Record"
                    className="p-2 rounded-lg text-[#706B63] hover:bg-red-950/40 hover:text-red-400 transition-colors"
                  >
                    {deletingId === item.id ? (
                      <Loader2 className="h-4 w-4 animate-spin text-red-400" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Details Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D7D0C5]">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-[#CAA05C]" />
                    <a
                      href={`mailto:${item.email}`}
                      className="hover:underline hover:text-white truncate"
                    >
                      {item.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-[#CAA05C]" />
                    <span>{item.phone || "Not provided"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-[#9A8060]" />
                    <span>{item.projectLocation || "Not specified"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 shrink-0 text-[#9A8060]" />
                    <span className="capitalize">{item.serviceCategory || "General"}</span>
                  </div>

                  {item.estimatedBudget && (
                    <div className="flex items-center gap-2 sm:col-span-2 text-[#CAA05C]">
                      <DollarSign className="h-4 w-4 shrink-0" />
                      <span className="font-semibold">Budget: {item.estimatedBudget}</span>
                    </div>
                  )}
                </div>

                {/* Project Overview */}
                <div className="rounded-2xl border border-[#322F2C] bg-[#191816] p-4 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A8060]">
                    Project Overview & Vision
                  </span>
                  <p className="text-xs text-[#D7D0C5] leading-relaxed italic whitespace-pre-wrap">
                    &quot;{item.projectOverview}&quot;
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${item.email}?subject=DesignMeInteriors Studio - Project Consultation&body=Dear ${encodeURIComponent(item.fullName)},`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#9A8060] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#80684D] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Reply via Email</span>
                </a>

                {item.phone && (
                  <a
                    href={`tel:${item.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:border-[#9A8060] hover:text-[#9A8060] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
