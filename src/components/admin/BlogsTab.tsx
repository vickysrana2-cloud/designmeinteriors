"use client";

import React, { useEffect, useState } from "react";
import { BlogImage } from "@/components/blog/BlogImage";
import {
  Plus,
  PenSquare,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  Loader2,
  X,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Blog } from "@/types/blog";
import {
  getAllBlogsForAdmin,
  createBlog,
  updateBlog,
  deleteBlog,
} from "@/lib/api/blog";

export function BlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: "DesignMeInteriors Studio",
    category: "Interior Architecture",
    published: true,
  });

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBlogsForAdmin();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setError("Unable to load blogs from server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openCreateModal = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      author: "DesignMeInteriors Studio",
      category: "Interior Architecture",
      published: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      coverImage: blog.coverImage || "",
      author: blog.author || "DesignMeInteriors Studio",
      category: blog.category || "Interior Architecture",
      published: blog.published !== false,
    });
    setIsModalOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const autoSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: editingBlog ? prev.slug : autoSlug,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Title and content are required.");
      return;
    }

    setSubmitting(true);
    try {
      if (editingBlog) {
        // Update existing blog
        const updated = await updateBlog(editingBlog.id, formData);
        setBlogs((prev) =>
          prev.map((b) => (b.id === editingBlog.id ? updated : b))
        );
      } else {
        // Create new blog
        const created = await createBlog(formData);
        setBlogs((prev) => [created, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Save Blog Error:", err);
      alert(
        err instanceof Error ? err.message : "Failed to save blog post to MockAPI."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    setDeletingId(id);
    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Delete Blog Error:", err);
      alert("Failed to delete blog post.");
    } finally {
      setDeletingId(null);
    }
  };

  const togglePublish = async (blog: Blog) => {
    try {
      const updated = await updateBlog(blog.id, { published: !blog.published });
      setBlogs((prev) => prev.map((b) => (b.id === blog.id ? updated : b)));
    } catch (err) {
      console.error("Toggle Publish Error:", err);
      alert("Failed to update publish status.");
    }
  };

  return (
    <div className="space-y-8 text-[#FCFBF8]">
      {/* Header Bar & Create Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2A26] pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="h-px w-8 bg-[#9A7248]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A7248]">
              BLOG MANAGEMENT
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Blog Posts ({blogs.length})
          </h2>
          <p className="text-xs text-[#9E978E]">
            Create, edit, and publish blogs directly to the website via MockAPI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchBlogs}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#2D2A26] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:border-[#9A7248] transition-colors"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-[#9A7248] ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#9A7248] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#80684D] transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Create New Blog</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A7248]" />
          <p className="text-xs text-[#9E978E]">Fetching blogs from server...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl border border-red-500/30 bg-red-950/30 text-center text-red-300 text-xs">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && blogs.length === 0 && (
        <div className="p-16 text-center border border-[#2D2A26] bg-[#191816] rounded-2xl space-y-4">
          <FileText className="mx-auto h-10 w-10 text-[#7A746C]" />
          <h3 className="font-serif text-lg text-white">No Blogs Created Yet</h3>
          <p className="text-xs text-[#9E978E]">
            Start sharing spatial design insights by creating your first blog post.
          </p>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#9A7248] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
          >
            <Plus className="h-4 w-4" />
            <span>Write First Blog</span>
          </button>
        </div>
      )}

      {/* Blogs Grid */}
      {!loading && !error && blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-[#2D2A26] bg-[#191816] overflow-hidden flex flex-col justify-between space-y-4 shadow-xl transition-all hover:border-[#9A7248]/60"
            >
              <div className="space-y-3">
                {/* Cover Image */}
                <div className="relative h-48 w-full bg-[#141312] overflow-hidden">
                  <BlogImage
                    src={b.coverImage}
                    alt={b.title}
                    fill
                    category={b.category}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#141312]/90 backdrop-blur-sm border border-[#9A7248]/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#9A7248]">
                    {b.category || "Architecture"}
                  </span>

                  {/* Published Tag */}
                  <span
                    className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${
                      b.published !== false
                        ? "bg-[#132A1C]/90 border-[#1E4D30] text-[#4ADE80]"
                        : "bg-amber-950/80 border-amber-500/50 text-amber-400"
                    }`}
                  >
                    {b.published !== false ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-base font-semibold text-white line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#9E978E] line-clamp-3 leading-relaxed">
                    {b.excerpt || b.content}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#2D2A26] mt-auto">
                <button
                  onClick={() => togglePublish(b)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#9A7248] hover:text-white transition-colors"
                >
                  {b.published !== false ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5" />
                      <span>Unpublish</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5" />
                      <span>Publish</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(b)}
                    className="p-2 rounded-xl border border-[#2D2A26] bg-[#141312] text-[#FCFBF8] hover:border-[#9A7248] hover:text-[#9A7248] transition-colors"
                    title="Edit Blog"
                  >
                    <PenSquare className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(b.id)}
                    disabled={deletingId === b.id}
                    className="p-2 rounded-xl border border-[#2D2A26] bg-[#141312] text-[#9E978E] hover:border-red-500/50 hover:text-red-400 transition-colors"
                    title="Delete Blog"
                  >
                    {deletingId === b.id ? (
                      <Loader2 className="h-4 w-4 animate-spin text-red-400" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CREATE / EDIT BLOG MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl border border-[#322F2C] bg-[#242321] p-6 sm:p-8 shadow-2xl text-[#FCFBF8] my-8">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 rounded-full p-2 text-[#706B63] hover:bg-[#322F2C] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
                  Blog Manager
                </span>
                <h3 className="font-serif text-2xl text-[#FCFBF8]">
                  {editingBlog ? "Edit Blog Post" : "Write New Blog Post"}
                </h3>
              </div>

              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                  Blog Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. Modern Residential Architectural Layouts"
                  className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                />
              </div>

              {/* Slug & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, slug: e.target.value }))
                    }
                    placeholder="modern-residential-architectural-layouts"
                    className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-xs text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, category: e.target.value }))
                    }
                    placeholder="e.g. Interior Architecture"
                    className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                  />
                </div>
              </div>

              {/* Cover Image URL */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                  Cover Image URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.coverImage}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, coverImage: e.target.value }))
                  }
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                  Short Excerpt / Summary *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
                  }
                  placeholder="Brief 1-2 sentence preview for cards..."
                  className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none"
                />
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#D7D0C5] font-semibold block">
                  Full Blog Article Content *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, content: e.target.value }))
                  }
                  placeholder="Write full blog content..."
                  className="w-full rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-3 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none font-sans leading-relaxed"
                />
              </div>

              {/* Published Checkbox & Author */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#322F2C]">
                <label className="inline-flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        published: e.target.checked,
                      }))
                    }
                    className="h-4 w-4 rounded border-[#322F2C] bg-[#191816] text-[#9A8060] focus:ring-[#9A8060]"
                  />
                  <span className="text-xs font-semibold text-[#FCFBF8]">
                    Publish blog post immediately
                  </span>
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-[#322F2C] bg-[#191816] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9A8060] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#80684D] disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <span>{editingBlog ? "Update Blog" : "Publish Blog"}</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
