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
  Users,
  Clock,
  CheckCircle2,
  Home,
  FileText,
  MoreVertical,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
} from "lucide-react";
import { EnquiryRecord } from "@/types/api";
import { apiFetch } from "@/lib/api/client";

export function EnquiriesTab() {
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeActionId, setActiveActionId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<EnquiryRecord[]>("/Enquires");
      if (Array.isArray(data)) {
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
      setActiveActionId(null);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredEnquiries.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredEnquiries.map((e) => e.id || ""));
    }
  };

  const toggleSelect = (id?: string) => {
    if (!id) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Filter Locations & Services dynamically
  const uniqueLocations = Array.from(
    new Set(enquiries.map((e) => e.projectLocation).filter(Boolean))
  );
  const uniqueServices = Array.from(
    new Set(enquiries.map((e) => e.serviceCategory).filter(Boolean))
  );

  const handleReplyEmail = (item: EnquiryRecord, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!item.email) {
      alert("No email address provided for this enquiry.");
      return;
    }
    const subject = encodeURIComponent("DesignMeInteriors Studio — Project Consultation");
    const body = encodeURIComponent(
      `Dear ${item.fullName},\n\nThank you for reaching out to DesignMeInteriors Studio regarding your ${item.serviceCategory || "interior design"} project.\n\nBest regards,\nDesignMeInteriors Studio\n+91 9579540206`
    );
    window.location.href = `mailto:${item.email}?subject=${subject}&body=${body}`;
  };

  const handleOpenGmail = (item: EnquiryRecord, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!item.email) {
      alert("No email address provided for this enquiry.");
      return;
    }
    const subject = encodeURIComponent("DesignMeInteriors Studio — Project Consultation");
    const body = encodeURIComponent(
      `Dear ${item.fullName},\n\nThank you for reaching out to DesignMeInteriors Studio regarding your ${item.serviceCategory || "interior design"} project.\n\nBest regards,\nDesignMeInteriors Studio\n+91 9579540206`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(item.email)}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const handleCopyEmail = (email?: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!email) return;
    navigator.clipboard.writeText(email);
    alert(`Email address (${email}) copied to clipboard!`);
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.fullName?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.serviceCategory?.toLowerCase().includes(q) ||
      item.projectLocation?.toLowerCase().includes(q) ||
      item.projectOverview?.toLowerCase().includes(q);

    const matchesLocation =
      selectedLocation === "all" || item.projectLocation === selectedLocation;

    const matchesService =
      selectedService === "all" || item.serviceCategory === selectedService;

    return matchesSearch && matchesLocation && matchesService;
  });

  return (
    <div className="space-y-8 text-[#FCFBF8]">
      {/* =====================================================
          BANNER & STATS ROW
      ===================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Header Title */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            All Enquiries{" "}
            <span className="text-2xl sm:text-3xl text-[#9A7248]">
              ({enquiries.length})
            </span>
          </h2>
        </div>

        {/* Right Stats Box */}
        <div className="lg:col-span-5 border border-[#2D2A26] bg-[#191816] rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="grid grid-cols-4 gap-2 w-full text-center divide-x divide-[#2D2A26]">
            {/* Total Enquiries */}
            <div className="space-y-1 px-1">
              <Users className="h-4 w-4 mx-auto text-[#9A7248]" />
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                {enquiries.length}
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-[#9E978E] uppercase tracking-wider">
                Total Enquiries
              </div>
            </div>

            {/* Today */}
            <div className="space-y-1 px-1">
              <Clock className="h-4 w-4 mx-auto text-[#9A7248]" />
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                0
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-[#9E978E] uppercase tracking-wider">
                Today
              </div>
            </div>

            {/* This Month */}
            <div className="space-y-1 px-1">
              <Calendar className="h-4 w-4 mx-auto text-[#9A7248]" />
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                {enquiries.length}
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-[#9E978E] uppercase tracking-wider">
                This Month
              </div>
            </div>

            {/* Converted */}
            <div className="space-y-1 px-1">
              <CheckCircle2 className="h-4 w-4 mx-auto text-[#9A7248]" />
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                0
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-[#9E978E] uppercase tracking-wider">
                Converted
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SEARCH & FILTERS ROW
      ===================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-[#7A746C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, location, or service..."
            className="w-full rounded-2xl border border-[#2D2A26] bg-[#191816] pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-[#7A746C] focus:border-[#9A7248] focus:outline-none transition-colors"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="md:col-span-5 grid grid-cols-3 gap-2.5">
          {/* Location Filter */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 h-3.5 w-3.5 text-[#9A7248] pointer-events-none" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#2D2A26] bg-[#191816] pl-8 pr-7 py-3 text-xs text-[#D5CDBF] focus:border-[#9A7248] focus:outline-none cursor-pointer truncate"
            >
              <option value="all">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-3.5 h-3.5 w-3.5 text-[#7A746C] pointer-events-none" />
          </div>

          {/* Service Filter */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-3.5 w-3.5 text-[#9A7248] pointer-events-none" />
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#2D2A26] bg-[#191816] pl-8 pr-7 py-3 text-xs text-[#D5CDBF] focus:border-[#9A7248] focus:outline-none cursor-pointer truncate"
            >
              <option value="all">All Services</option>
              {uniqueServices.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-3.5 h-3.5 w-3.5 text-[#7A746C] pointer-events-none" />
          </div>

          {/* Time Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 h-3.5 w-3.5 text-[#9A7248] pointer-events-none" />
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#2D2A26] bg-[#191816] pl-8 pr-7 py-3 text-xs text-[#D5CDBF] focus:border-[#9A7248] focus:outline-none cursor-pointer truncate"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="this_month">This Month</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-3.5 h-3.5 w-3.5 text-[#7A746C] pointer-events-none" />
          </div>
        </div>

        {/* Refresh Button */}
        <div className="md:col-span-2">
          <button
            onClick={fetchEnquiries}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-[#2D2A26] bg-[#191816] hover:bg-[#242321] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-[#9A7248] ${loading ? "animate-spin" : ""}`} />
            <span>REFRESH</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A7248]" />
          <p className="text-xs text-[#9E978E]">Loading customer enquiry records...</p>
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
        <div className="p-16 text-center border border-[#2D2A26] bg-[#191816] rounded-2xl space-y-3">
          <FileText className="mx-auto h-10 w-10 text-[#7A746C]" />
          <h3 className="font-serif text-lg text-white">No Enquiries Found</h3>
          <p className="text-xs text-[#9E978E]">
            {searchQuery
              ? "No records match your search query or selected filters."
              : "When clients submit project enquiries, they will appear here."}
          </p>
        </div>
      )}

      {/* =====================================================
          DESKTOP TABLE VIEW (hidden on mobile, visible md+)
      ===================================================== */}
      {!loading && !error && filteredEnquiries.length > 0 && (
        <div className="hidden md:block border border-[#2D2A26] bg-[#191816] rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              {/* Header */}
              <thead>
                <tr className="border-b border-[#2D2A26] bg-[#141312] text-[10px] font-bold uppercase tracking-wider text-[#9A7248]">
                  <th className="py-4 px-4 w-10 text-center">
                    <input
                      type="checkbox"
                      checked={
                        selectedIds.length === filteredEnquiries.length &&
                        filteredEnquiries.length > 0
                      }
                      onChange={toggleSelectAll}
                      className="h-3.5 w-3.5 rounded border-[#3A332C] bg-[#191816] accent-[#9A7248]"
                    />
                  </th>
                  <th className="py-4 px-3 w-10">#</th>
                  <th className="py-4 px-4">NAME</th>
                  <th className="py-4 px-4">CONTACT</th>
                  <th className="py-4 px-4">LOCATION</th>
                  <th className="py-4 px-4">SERVICE INTEREST</th>
                  <th className="py-4 px-4">BUDGET</th>
                  <th className="py-4 px-4 max-w-xs">MESSAGE / OVERVIEW</th>
                  <th className="py-4 px-4">RECEIVED ON</th>
                  <th className="py-4 px-4">STATUS</th>
                  <th className="py-4 px-4 text-right">ACTIONS</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[#2A2724]">
                {filteredEnquiries.map((item, idx) => {
                  const isSelected = selectedIds.includes(item.id || "");
                  const isMenuOpen = activeActionId === item.id;

                  return (
                    <tr
                      key={item.id || idx}
                      className={`transition-colors hover:bg-[#201D1A] ${
                        isSelected ? "bg-[#23201C]" : ""
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelect(item.id)}
                          className="h-3.5 w-3.5 rounded border-[#3A332C] bg-[#191816] accent-[#9A7248]"
                        />
                      </td>

                      {/* Index */}
                      <td className="py-4 px-3 font-semibold text-[#9E978E]">
                        {idx + 1}
                      </td>

                      {/* Name */}
                      <td className="py-4 px-4 font-bold text-white text-sm whitespace-nowrap">
                        {item.fullName}
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-4 space-y-1 whitespace-nowrap">
                        <a
                          href={`mailto:${item.email}`}
                          className="flex items-center gap-2 text-[#D5CDBF] hover:text-[#9A7248] transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>{item.email}</span>
                        </a>
                        {item.phone && (
                          <a
                            href={`tel:${item.phone}`}
                            className="flex items-center gap-2 text-[#D5CDBF] hover:text-[#9A7248] transition-colors"
                          >
                            <Phone className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                            <span>{item.phone}</span>
                          </a>
                        )}
                      </td>

                      {/* Location */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#D5CDBF]">
                          <MapPin className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>{item.projectLocation || "Not specified"}</span>
                        </div>
                      </td>

                      {/* Service Category */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#D5CDBF]">
                          <Home className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>{item.serviceCategory || "Interior Design"}</span>
                        </div>
                      </td>

                      {/* Budget */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-[#D5CDBF]">
                          <IndianRupee className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>{item.estimatedBudget || "Undecided"}</span>
                        </div>
                      </td>

                      {/* Message / Overview */}
                      <td className="py-4 px-4 max-w-xs truncate font-light italic text-[#9E978E]">
                        &ldquo;{item.projectOverview}&rdquo;
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 whitespace-nowrap text-[#9E978E]">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Recent"}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132A1C] border border-[#1E4D30] text-[#4ADE80] font-medium text-[11px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                          New
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right relative">
                        <button
                          onClick={() =>
                            setActiveActionId(
                              isMenuOpen ? null : item.id || null
                            )
                          }
                          className="p-1.5 rounded-lg text-[#9E978E] hover:text-white hover:bg-[#2D2A26] transition-colors"
                          aria-label="Actions"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>

                        {/* Action Menu Popover */}
                        {isMenuOpen && (
                          <div className="absolute right-4 top-12 z-50 w-48 rounded-xl border border-[#2D2A26] bg-[#141312] p-1.5 shadow-2xl text-left space-y-1">
                            <button
                              onClick={(e) => handleReplyEmail(item, e)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg transition-colors text-left"
                            >
                              <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                              <span>Reply (Mail App)</span>
                            </button>

                            <button
                              onClick={(e) => handleOpenGmail(item, e)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg transition-colors text-left"
                            >
                              <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                              <span>Open in Gmail</span>
                            </button>

                            <button
                              onClick={(e) => handleCopyEmail(item.email, e)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg transition-colors text-left"
                            >
                              <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                              <span>Copy Email</span>
                            </button>

                            {item.phone && (
                              <a
                                href={`tel:${item.phone}`}
                                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg transition-colors"
                              >
                                <Phone className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                                <span>Call Client</span>
                              </a>
                            )}

                            <button
                              onClick={() => handleDelete(item.id)}
                              disabled={deletingId === item.id}
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-400 hover:bg-red-950/40 rounded-lg transition-colors text-left"
                            >
                              {deletingId === item.id ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Trash2 className="h-3.5 w-3.5" />
                              )}
                              <span>Delete Record</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =====================================================
          MOBILE CARD LIST VIEW (visible on mobile, hidden md+)
      ===================================================== */}
      {!loading && !error && filteredEnquiries.length > 0 && (
        <div className="md:hidden space-y-4">
          {filteredEnquiries.map((item, idx) => {
            const isMenuOpen = activeActionId === item.id;

            return (
              <div
                key={item.id || idx}
                className="border border-[#2D2A26] bg-[#191816] rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl"
              >
                {/* Top Row: Index + Name + Date + Status + Action */}
                <div className="flex items-start justify-between border-b border-[#2D2A26] pb-3">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-serif text-sm font-bold text-[#9E978E]">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-white leading-tight">
                        {item.fullName}
                      </h3>
                      <span className="text-[11px] text-[#9E978E] block">
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

                  <div className="flex items-center gap-2 relative">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#132A1C] border border-[#1E4D30] text-[#4ADE80] font-medium text-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                      New
                    </span>

                    <button
                      onClick={() =>
                        setActiveActionId(isMenuOpen ? null : item.id || null)
                      }
                      className="p-1 rounded-lg text-[#9E978E] hover:text-white"
                      aria-label="Actions"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>

                    {/* Action Menu Popover */}
                    {isMenuOpen && (
                      <div className="absolute right-0 top-8 z-50 w-48 rounded-xl border border-[#2D2A26] bg-[#141312] p-1.5 shadow-2xl text-left space-y-1">
                        <button
                          onClick={(e) => handleReplyEmail(item, e)}
                          className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg text-left"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>Reply (Mail App)</span>
                        </button>

                        <button
                          onClick={(e) => handleOpenGmail(item, e)}
                          className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg text-left"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>Open in Gmail</span>
                        </button>

                        <button
                          onClick={(e) => handleCopyEmail(item.email, e)}
                          className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg text-left"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                          <span>Copy Email</span>
                        </button>

                        {item.phone && (
                          <a
                            href={`tel:${item.phone}`}
                            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#D5CDBF] hover:bg-[#201D1A] rounded-lg"
                          >
                            <Phone className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                            <span>Call Client</span>
                          </a>
                        )}

                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-400 hover:bg-red-950/40 rounded-lg text-left"
                        >
                          <Trash2 className="h-3.5 w-3.5 shrink-0" />
                          <span>Delete Record</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#D5CDBF]">
                  <a
                    href={`mailto:${item.email}`}
                    className="flex items-center gap-2 hover:text-[#9A7248] truncate"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                    <span className="truncate">{item.email}</span>
                  </a>

                  {item.phone && (
                    <a
                      href={`tel:${item.phone}`}
                      className="flex items-center gap-2 hover:text-[#9A7248]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                      <span>{item.phone}</span>
                    </a>
                  )}

                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                    <span>{item.projectLocation || "Not specified"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Home className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                    <span>{item.serviceCategory || "Interior Design"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-3.5 w-3.5 text-[#9A7248] shrink-0" />
                    <span>Budget: <strong className="text-white font-medium">{item.estimatedBudget || "Flexible"}</strong></span>
                  </div>
                </div>

                {/* Message Overview Sub-box */}
                <div className="rounded-xl border border-[#2D2A26] bg-[#141312] p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#9A7248]">
                    <FileText className="h-3 w-3 text-[#9A7248]" />
                    <span>MESSAGE / OVERVIEW</span>
                  </div>
                  <p className="text-xs text-[#D5CDBF] italic leading-relaxed">
                    &ldquo;{item.projectOverview}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =====================================================
          FOOTER PAGINATION (Desktop & Mobile)
      ===================================================== */}
      {!loading && !error && filteredEnquiries.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2D2A26]/60 text-xs text-[#9E978E]">
          <div>
            Showing 1 to {filteredEnquiries.length} of {filteredEnquiries.length} enquiries
          </div>

          <div className="flex items-center gap-1.5">
            <button
              disabled
              className="p-2 rounded-xl border border-[#2D2A26] bg-[#191816] text-[#7A746C] cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button className="h-9 w-9 rounded-xl bg-[#9A7248] text-white font-bold flex items-center justify-center shadow-md">
              1
            </button>

            <button
              disabled
              className="p-2 rounded-xl border border-[#2D2A26] bg-[#191816] text-[#7A746C] cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
