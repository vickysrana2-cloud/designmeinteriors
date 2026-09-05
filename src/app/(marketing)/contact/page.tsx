"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const OFFICES = [
  {
    city: "Nagpur Studio",
    address: "DesignMeInteriors",
    district: "Nagpur, Maharashtra, India",
    phone: "+91 9579540206",
    email: "contact@designmeinteriors.com",
    hours: "Mon – Sat: 09:30 – 18:30 IST",
  },
];

const FAQS = [
  {
    q: "What is your typical project scope?",
    a: "We accept full-scale interior architecture, bespoke residential builds, luxury farmhouses, and commercial flagship spaces. We tailor complete design and turn-key execution packages.",
  },
  {
    q: "Do you undertake commissions across India outside of Delhi, Mumbai, and Bengaluru?",
    a: "Yes. Over 40% of our portfolio consists of pan-India commissions in Goa, Hyderabad, Pune, Jaipur, Chandigarh, as well as international projects in Dubai and Singapore.",
  },
  {
    q: "How long does a full architectural or interior design project take?",
    a: "Concept design and spatial blueprinting generally spans 4 to 8 weeks. Execution and procurement timelines range from 3 months for luxury apartments to 12+ months for custom private villas.",
  },
  {
    q: "Can DesignMeInteriors work alongside our chosen general contractor?",
    a: "Absolutely. We provide detailed technical shop drawings, material schedules, and regular site audits to ensure your contractor executes every architectural detail according to specification.",
  },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "residential-design";

  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    serviceType: initialService,
    budget: "",
    message: "",
  });



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.error || "Failed to submit inquiry. Please try again."
        );
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setErrorMessage(
        "An unexpected error occurred while sending your request. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FCFBF8] border border-[#D7D0C5] p-8 sm:p-12 shadow-sm space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#242321]">
          Consultation Request
        </h2>
        <p className="text-xs text-[#706B63] mt-1">
          Fill out the form below and our client director will contact you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-[#F4F9F5] border border-[#BDE0C7] text-[#1E562F] space-y-4 text-center">
          <CheckCircle2 className="w-12 h-12 text-[#288444] mx-auto animate-bounce" />
          <h3 className="text-xl font-serif">
            Thank You for Your Inquiry
          </h3>
          <p className="text-xs text-[#2A6E3F] max-w-md mx-auto leading-relaxed">
            We have received your project details. A member of our senior architectural team will reach out to schedule your private consultation.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-4 border-[#288444] text-[#288444]"
          >
            Submit Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 bg-[#FDF2F2] border border-[#F8B4B4] text-[#9B1C1C] text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-[#9B1C1C]" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Full Name *
              </label>
              <Input
                required
                placeholder="e.g. Ananya Sharma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Email Address *
              </label>
              <Input
                required
                type="email"
                placeholder="e.g. ananya.sharma@example.in"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Phone Number
              </label>
              <Input
                placeholder="+91 95795 40206"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Project Location
              </label>
              <Input
                placeholder="e.g. Bandra, Mumbai / Gurugram"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Service Category
              </label>
              <select
                className="w-full h-12 border border-[#D7D0C5] bg-[#FCFBF8] text-[#242321] px-4 text-sm focus:outline-none focus:border-[#9A8060]"
                value={formData.serviceType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    serviceType: e.target.value,
                  })
                }
              >
                <option value="residential-interior-design">
                  Residential Interior Design
                </option>
                <option value="commercial-interior-design">
                  Commercial Interior Design
                </option>
                <option value="interior-design-consultation">
                  Interior Design Consultation
                </option>
                <option value="outdoor-landscape-design">
                  Outdoor & Landscape Design
                </option>
                <option value="renovation-and-remodeling">
                  Renovation and Remodeling
                </option>
                <option value="interior-2d-3d-layouts">
                  Interior 2D/3D Layouts
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                Estimated Budget
              </label>
              <select
                className="w-full h-12 border border-[#D7D0C5] bg-[#FCFBF8] text-[#242321] px-4 text-sm focus:outline-none focus:border-[#9A8060]"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              >
                <option value="">Select Estimated Budget (Optional)</option>
                <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores</option>
                <option value="₹2.5 Crores +">₹2.5 Crores +</option>
                <option value="Flexible / Undecided">Flexible / Undecided</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
              Project Overview & Vision *
            </label>
            <Textarea
              required
              placeholder="Tell us about the property, your desired timeline, scope of work, and aesthetic aspirations..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              "Submit Project Inquiry"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2EC]">
      {/* Page Hero */}
      <section
        className="relative py-28 border-b border-[#D7D0C5] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/contact-sketch.png')" }}
      >
        <div className="absolute inset-0 bg-[#F5F2EC]/85 backdrop-blur-[1px]" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold">
              Inquire Project
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#242321] leading-tight">
              Let&apos;s shape your space together.
            </h1>
            <p className="text-base sm:text-lg text-[#706B63] font-light leading-relaxed">
              Whether you are planning a private coastal sanctuary, an urban
              loft, or a commercial flagship, we invite you to start a
              conversation with our studio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section id="contact-form" className="py-20 border-b border-[#D7D0C5]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <React.Suspense fallback={<div className="p-8 bg-[#FCFBF8] border border-[#D7D0C5] text-[#706B63]">Loading inquiry form...</div>}>
                <ContactForm />
              </React.Suspense>
            </div>

            {/* Direct Studio Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold">
                  Global Presence
                </span>
                <h2 className="text-3xl font-serif text-[#242321]">
                  Our Studio Offices
                </h2>
                <p className="text-xs text-[#706B63] leading-relaxed">
                  Visit our studios by appointment for material inspections and spatial blueprint reviews.
                </p>
              </div>

              <div className="space-y-6">
                {OFFICES.map((office, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FCFBF8] border border-[#D7D0C5] p-6 space-y-3 shadow-sm"
                  >
                    <h3 className="text-lg font-serif text-[#242321]">
                      {office.city}
                    </h3>
                    <div className="space-y-1.5 text-xs text-[#706B63]">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#9A8060] shrink-0" />
                        <span>
                          {office.address}, {office.district}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#9A8060] shrink-0" />
                        <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#9A8060] shrink-0" />
                        <span>{office.email}</span>
                      </p>
                      <p className="flex items-center gap-2 pt-1 border-t border-[#D7D0C5]">
                        <Clock className="w-3.5 h-3.5 text-[#9A8060] shrink-0" />
                        <span>{office.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#E8E1D7]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold">
              Clarifications
            </span>
            <h2 className="text-3xl font-serif text-[#242321]">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="bg-[#FCFBF8] p-6 border border-[#D7D0C5]"
          >
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="hover:no-underline font-serif text-[#242321]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-[#706B63] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
