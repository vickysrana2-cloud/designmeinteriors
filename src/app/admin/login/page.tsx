"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the admin password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      // Refresh router and navigate to Admin Portal
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      console.error("Login Error:", err);
      setError(
        err instanceof Error ? err.message : "Invalid password. Access denied."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#191816] text-[#FCFBF8] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#9A8060]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#CAA05C]/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9A8060]/40 bg-[#242321] text-[#9A8060] shadow-xl">
            <ShieldCheck className="h-7 w-7 text-[#CAA05C]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9A8060]">
            DesignMeInteriors Studio
          </span>
          <h1 className="font-serif text-3xl font-normal text-[#FCFBF8]">
            Owner Portal Login
          </h1>
          <p className="text-xs text-[#706B63]">
            Restricted access for website owner and studio management.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-[#322F2C] bg-[#242321]/90 p-8 shadow-2xl backdrop-blur-sm space-y-6">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-3.5 text-xs text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D7D0C5] block">
                Admin Security Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 h-4 w-4 text-[#706B63]" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secret password..."
                  className="w-full rounded-xl border border-[#322F2C] bg-[#191816] pl-11 pr-11 py-3.5 text-sm text-[#FCFBF8] placeholder-[#706B63] focus:border-[#9A8060] focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-[#706B63] hover:text-[#D7D0C5] transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#9A8060] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#80684D] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Access Owner Portal</span>
              )}
            </button>
          </form>


        </div>
      </div>
    </main>
  );
}
