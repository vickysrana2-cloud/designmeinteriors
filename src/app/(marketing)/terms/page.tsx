import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Compass,
  CreditCard,
  Sparkles,
  Users,
  Scale,
  Gavel,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
  Info,
  ChevronRight,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = generateSiteMetadata({
  title: "Terms of Engagement | DesignMeInteriors Studio",
  description:
    "Review the Terms of Engagement for DesignMeInteriors studio in Nagpur, Maharashtra. Learn about our project process, non-binding inquiries, design ownership, and terms of service.",
  canonicalUrl: "/terms",
});

const TERMS_SECTIONS = [
  {
    id: "inquiries",
    title: "1. Non-Binding Inquiries",
    icon: HelpCircleIcon,
    summary:
      "Filling out the contact form, calling, or messaging us on WhatsApp is strictly an inquiry.",
    details:
      "Submitting an inquiry or contacting us for an initial conversation does not create a binding commitment for either party. A formal interior design or turnkey execution project officially commences only after both parties review and sign a separate, detailed Project Agreement covering the specific scope of work, fee schedule, and project timeline.",
  },
  {
    id: "process",
    title: "2. Our 5-Stage Design Process",
    icon: Compass,
    summary:
      "Structured workflow: Consultation → Concept & Planning → Design Development → Execution → Handover.",
    details:
      "We follow a transparent 5-step methodology to ensure design excellence and seamless execution. Target completion timelines depend on project size, site conditions, customization complexity, and timely client approvals at each milestone.",
  },
  {
    id: "fees",
    title: "3. Fees & Payment Terms",
    icon: CreditCard,
    summary:
      "Custom project quotes with milestone-based payment schedules.",
    details:
      "Design and execution fees are quoted individually per project based on customized requirements and are specified in your Project Agreement. Payments are staged according to agreed project milestones. DesignMeInteriors reserves the right to pause design activity or site work if payments become overdue.",
  },
  {
    id: "ownership",
    title: "4. Design Ownership & Intellectual Property",
    icon: Sparkles,
    summary:
      "Concepts, drawings, and 3D renders remain our property until full payment.",
    details:
      "All initial concepts, 2D drawings, 3D visualizations, material boards, and technical specifications remain the exclusive intellectual property of DesignMeInteriors until all project dues are cleared in full. Completed projects may be photographed and featured in our portfolio or marketing channels unless you request confidentiality in writing prior to project kickoff.",
  },
  {
    id: "vendors",
    title: "5. Third-Party Vendors & Execution",
    icon: Users,
    summary:
      "Carefully vetted external contractors and material suppliers.",
    details:
      "Turnkey execution may involve specialized third-party contractors, artisans, or material vendors. While we curate and supervise our trade partners with strict quality control, DesignMeInteriors is not liable for indirect losses or delays caused solely by independent vendor actions beyond our operational control.",
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    icon: Scale,
    summary:
      "Liability is capped at total fees paid for the specific project.",
    details:
      "To the maximum extent permitted by applicable law, DesignMeInteriors' total liability for any claim arising out of or relating to a project shall be limited strictly to the professional fees actually received by us for that specific project.",
  },
  {
    id: "governing-law",
    title: "7. Governing Law & Jurisdiction",
    icon: Gavel,
    summary:
      "Governed by Indian Law with jurisdiction in Nagpur courts.",
    details:
      "These Terms of Engagement and any separate Project Agreements shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims shall be subject to the exclusive jurisdiction of the competent courts in Nagpur, Maharashtra.",
  },
];

function HelpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Info {...props} />;
}

export default function TermsOfEngagementPage() {
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Terms of Engagement", item: "/terms" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="bg-[#161412] text-[#F4F0EA] min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#322F2C] bg-gradient-to-b from-[#1E1C18] to-[#161412] pt-32 pb-16 lg:pt-40 lg:pb-24">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9A8060]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs text-[#A8A29E]"
            >
              <Link
                href="/"
                className="hover:text-[#9A8060] transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-[#706B63]" />
              <span className="text-[#9A8060] font-medium">Terms of Engagement</span>
            </nav>

            {/* Badge & Title */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#9A8060]/30 bg-[#9A8060]/10 px-3.5 py-1 text-xs font-semibold text-[#9A8060] uppercase tracking-widest mb-6">
              <ShieldCheck className="h-3.5 w-3.5" />
              Legal & Framework
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F0EA] tracking-tight mb-4">
              Terms of Engagement
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#A8A29E]">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#9A8060]" />
                <span>
                  <strong className="text-[#D7D0C5]">DesignMeInteriors</strong> — Nagpur, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#322F2C] pl-6">
                <Calendar className="h-4 w-4 text-[#9A8060]" />
                <span>Effective Date: <strong>10 September 2026</strong></span>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#D7D0C5] max-w-3xl leading-relaxed">
              By using our website (<strong className="text-[#9A8060]">designmeinteriors.com</strong>) or contacting us for a consultation or project, you agree to the following terms and guidelines.
            </p>
          </div>
        </section>

        {/* Process Visual Banner */}
        <section className="border-b border-[#322F2C] bg-[#1E1C18]/60 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9A8060] mb-4">
              Our 5-Stage Project Journey
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                "1. Consultation",
                "2. Concept & Planning",
                "3. Design Development",
                "4. Execution",
                "5. Handover",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-[#322F2C] bg-[#161412] p-3 text-center transition-colors hover:border-[#9A8060]/50"
                >
                  <span className="block text-xs font-semibold text-[#F4F0EA]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Content Terms List */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="space-y-8">
              {TERMS_SECTIONS.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="group rounded-2xl border border-[#322F2C] bg-[#1E1C18]/40 p-6 sm:p-8 transition-all hover:border-[#9A8060]/40 hover:bg-[#1E1C18]/80"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#9A8060]/30 bg-[#9A8060]/10 text-[#9A8060] transition-colors group-hover:bg-[#9A8060] group-hover:text-[#161412]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-serif text-xl sm:text-2xl text-[#F4F0EA] font-normal mb-2">
                          {section.title}
                        </h2>
                        <p className="text-sm font-medium text-[#9A8060] mb-3">
                          {section.summary}
                        </p>
                        <p className="text-sm sm:text-base text-[#D7D0C5] leading-relaxed">
                          {section.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Box */}
            <div className="mt-16 rounded-2xl border border-[#9A8060]/30 bg-gradient-to-br from-[#1E1C18] via-[#24211D] to-[#1E1C18] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-[#9A8060]/10 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F0EA] font-normal mb-3">
                Contact Us
              </h2>
              <p className="text-sm text-[#D7D0C5] mb-6">
                Have questions regarding our terms or interested in starting your interior design journey with us? Reach out directly to our Nagpur Studio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3.5 rounded-xl border border-[#322F2C] bg-[#161412]/80 p-4">
                  <MapPin className="h-5 w-5 text-[#9A8060] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#D7D0C5]">
                    <strong className="block text-[#F4F0EA] font-semibold mb-0.5">
                      DesignMeInteriors Studio
                    </strong>
                    Saraswati Palace, Wanjari Nagar, Nagpur, Maharashtra 440003
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border border-[#322F2C] bg-[#161412]/80 p-4">
                  <Mail className="h-5 w-5 text-[#9A8060] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#D7D0C5]">
                    <strong className="block text-[#F4F0EA] font-semibold mb-0.5">
                      Direct Communication
                    </strong>
                    <a
                      href="mailto:Interiorsdesignme@gmail.com"
                      className="hover:text-[#9A8060] transition-colors underline decoration-[#9A8060]/50"
                    >
                      Interiorsdesignme@gmail.com
                    </a>
                    <span className="block text-[#A8A29E] mt-0.5">
                      Phone / WhatsApp:{" "}
                      <a
                        href="https://wa.me/919579540206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#9A8060] transition-colors"
                      >
                        +91 95795 40206
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#322F2C]">
                <Button
                  asChild
                  variant="accent"
                  className="rounded-xl px-6 py-5 text-xs uppercase tracking-wider font-semibold shadow-lg"
                >
                  <Link href="/contact">
                    <span>Book a Consultation</span>
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-[#322F2C] bg-[#161412] text-[#F4F0EA] hover:border-[#9A8060] hover:text-[#9A8060] px-6 py-5 text-xs uppercase tracking-wider"
                >
                  <a
                    href="mailto:Interiorsdesignme@gmail.com"
                  >
                    <Mail className="mr-2 h-4 w-4 text-[#9A8060]" />
                    Email Studio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
