import { apiFetch } from "./client";
import { EnquiryInput, EnquiryRecord } from "@/types/api";

/**
 * Persists a new enquiry record to MockAPI endpoint (/enquiries).
 * Gracefully logs any API failure without throwing if requested.
 */
export async function createEnquiry(
  data: EnquiryInput
): Promise<EnquiryRecord | null> {
  if (!data.fullName || !data.email || !data.projectOverview) {
    throw new Error("Full name, email address, and project overview are required.");
  }

  const payload: EnquiryRecord = {
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: (data.phone || "").trim(),
    projectLocation: (data.projectLocation || "").trim(),
    serviceCategory: (data.serviceCategory || "").trim(),
    estimatedBudget: (data.estimatedBudget || "").trim(),
    projectOverview: data.projectOverview.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const record = await apiFetch<EnquiryRecord>("/Enquires", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return record;
  } catch (error) {
    console.error("MockAPI Enquiry Persistence Error:", error);
    return null;
  }
}
