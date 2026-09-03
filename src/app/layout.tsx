import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/app/globals.css";

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
    "International luxury architecture and interior design studio. Specializing in bespoke residential sanctuaries, commercial spaces, and spatial interventions across New York, London, and Tokyo.",
  keywords: [
    "Architecture Studio",
    "Interior Design",
    "Luxury Residential Design",
    "Commercial Architecture",
    "Bespoke Furniture",
    "Turnkey Interior Design",
  ],
  openGraph: {
    title: "DesignMeInteriors — Architecture & Interior Design Studio",
    description:
      "Crafting spatial elegance through tactile materials and deliberate proportion.",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#F5F2EC] text-[#242321]">
        {children}
      </body>
    </html>
  );
}
