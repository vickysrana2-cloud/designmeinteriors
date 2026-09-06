import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/app/globals.css";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesignMeInteriors — Architecture & Interior Design Studio",
  description:
    "Nagpur-based interior design studio. We specialize in custom residential homes, commercial office spaces, and turnkey interior design with 6+ years of experience.",
  keywords: [
    "Interior Design Firm",
    "Home Interior Design",
    "Residential Interiors",
    "Commercial Interiors",
    "Turnkey Interior Design",
    "Nagpur Interior Designer",
  ],
  icons: {
    icon: "/designMeLogo.svg",
    shortcut: "/designMeLogo.svg",
    apple: "/designMeLogo.svg",
  },
  openGraph: {
    title: "DesignMeInteriors — Architecture & Interior Design Studio",
    description:
      "Creating thoughtful, functional, and beautiful interior spaces for homes and businesses.",
    url: "https://designmeinteriors.com",
    siteName: "DesignMeInteriors",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#F5F2EC] text-[#242321]">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
