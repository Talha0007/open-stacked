import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollHandler from "@/components/ScrollHandler";

// 1. Font Optimization (Load only needed weights)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. SEO Metadata Optimization
export const metadata: Metadata = {
  title: {
    default: "Open Stacked | Enterprise-Grade IT Solutions",
    template: "%s | Open Stacked", // Baqi pages par title "Page Name | Open Stacked" show hoga
  },
  description:
    "Providing high-performance MERN stack development, cloud virtualization, and resilient digital infrastructure for modern businesses.",
  keywords: [
    "Full Stack Development",
    "MERN Stack",
    "DevOps",
    "Cloud Virtualization",
    "Open Stacked",
    "Next.js Expert",
  ],
  openGraph: {
    title: "Open Stacked",
    description:
      "Enterprise-grade IT solutions and resilient digital infrastructure.",
    url: "https://openstacked.com",
    siteName: "Open Stacked",
    images: [
      {
        url: "/os-logo.png", // OG Image for social sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`cursor-none ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Canonical URL (Essential for SEO to avoid duplicate content) */}
        <link rel="canonical" href="https://openstacked.com" />

        {/* JSON-LD Structured Data (Head section is better for early bot detection) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Open Stacked",
              url: "https://openstacked.com",
              logo: "https://openstacked.com/os-logo.png",
              image: "https://openstacked.com/os-logo.png",
              description:
                "Enterprise-grade IT solutions, MERN stack development, and resilient digital infrastructure.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              sameAs: [
                "https://github.com/your-username", // Change this
                "https://linkedin.com/in/your-username", // Change this
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white cursor-none select-none antialiased">
        <ScrollHandler />
        <CustomCursor />
        <Navbar />
        <main>{children}</main> {/* Semantic <main> tag for SEO */}
        <Footer />
      </body>
    </html>
  );
}
