import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Target,
  Share2,
  Clock,
  UserCheck,
  Cookie,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
  Info,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = generateSiteMetadata({
  title: "Privacy Policy | DesignMeInteriors Studio",
  description:
    "Read the Privacy Policy for DesignMeInteriors studio in Nagpur, Maharashtra. Learn how we collect, protect, use, and retain your personal and project information.",
  canonicalUrl: "/privacy",
});

const PRIVACY_SECTIONS = [
  {
    id: "collect",
    title: "1. Information We Collect",
    icon: Database,
    summary:
      "Contact form submissions, project details, technical logs, and third-party integration data.",
    details:
      "We collect personal and project details you directly provide—such as your full name, email address, phone number, project location, budget range, and design preferences submitted via our contact forms, direct email, or WhatsApp. Additionally, we automatically collect standard technical data (such as IP address, browser type, operating system, and referral source) when you navigate our Site, along with interaction data from embedded tools like Google Maps and WhatsApp.",
  },
  {
    id: "purpose",
    title: "2. How We Use Your Information",
    icon: Target,
    summary:
      "To respond to inquiries, prepare estimates, manage projects, and feature portfolio work with consent.",
    details:
      "We use your information primarily to address your consultations, draft customized design proposals and agreements, coordinate project execution, and deliver our services. Only with your explicit consent do we feature project photography, design renders, or testimonials in our digital portfolio, website, or social media channels.",
  },
  {
    id: "sharing",
    title: "3. Sharing & Third-Party Disclosure",
    icon: Share2,
    summary:
      "We do not sell data. We share only with essential project partners, service providers, or legal authorities.",
    details:
      "DesignMeInteriors strictly respects your privacy and will never sell, rent, or monetize your personal information. We share relevant project data solely with trusted third-party contractors, trade artisans, and material vendors working directly on your project, service providers supporting our web communications, or regulatory authorities if mandated by law.",
  },
  {
    id: "retention",
    title: "4. Data Retention",
    icon: Clock,
    summary:
      "Kept only for project duration, warranty handling, and legal compliance.",
    details:
      "We retain your personal data and project documentation only for as long as necessary to fulfill your project requirements, maintain ongoing service guarantees, and satisfy statutory, tax, or legal record-keeping obligations under Indian law.",
  },
  {
    id: "rights",
    title: "5. Your Privacy Rights & Choices",
    icon: UserCheck,
    summary:
      "Access, correct, or request deletion of your information, or withdraw consent anytime.",
    details:
      "You have the right to request access to the personal information we hold about you, request corrections to inaccurate details, or ask us to delete your personal data. You may also withdraw any previously given consent (such as for marketing or portfolio showcase) by reaching out to us directly.",
  },
  {
    id: "cookies",
    title: "6. Cookies & Tracking",
    icon: Cookie,
    summary:
      "Basic functional cookies used to enhance website experience and performance.",
    details:
      "Our Site utilizes essential cookies and similar technology to facilitate smooth navigation, analyze overall site traffic, and support interactive features. You can modify your browser settings to decline or clear cookies at any time, though some site functions may be affected.",
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="bg-[#161412] text-[#F4F0EA] min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#322F2C] bg-gradient-to-b from-[#1E1C18] to-[#161412] pt-32 pb-16 lg:pt-40 lg:pb-24">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9A8060]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Breadcrumb */}
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
              <span className="text-[#9A8060] font-medium">Privacy Policy</span>
            </nav>

            {/* Badge & Title */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#9A8060]/30 bg-[#9A8060]/10 px-3.5 py-1 text-xs font-semibold text-[#9A8060] uppercase tracking-widest mb-6">
              <Lock className="h-3.5 w-3.5" />
              Data Protection & Privacy
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F0EA] tracking-tight mb-4">
              Privacy Policy
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
              By using our website (<strong className="text-[#9A8060]">designmeinteriors.com</strong>) or contacting us for a consultation or project, you agree to the privacy practices outlined below.
            </p>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className="border-b border-[#322F2C] bg-[#1E1C18]/60 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-3 rounded-lg border border-[#322F2C] bg-[#161412] p-3.5">
                <ShieldCheck className="h-4 w-4 text-[#9A8060]" />
                <span className="text-xs font-medium text-[#F4F0EA]">No Selling of Personal Data</span>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-lg border border-[#322F2C] bg-[#161412] p-3.5">
                <Lock className="h-4 w-4 text-[#9A8060]" />
                <span className="text-xs font-medium text-[#F4F0EA]">Secure Project Communications</span>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-lg border border-[#322F2C] bg-[#161412] p-3.5">
                <UserCheck className="h-4 w-4 text-[#9A8060]" />
                <span className="text-xs font-medium text-[#F4F0EA]">Consent-Based Portfolio Showcase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content Sections */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="space-y-8">
              {PRIVACY_SECTIONS.map((section) => {
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
                If you have any privacy inquiries, data requests, or wish to update your preferences, please get in touch with our studio team.
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
