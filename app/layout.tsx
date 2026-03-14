import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Open Stacked | Enterprise-Grade IT Solutions",
    template: "%s | Open Stacked",
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
        url: "/os-logo.png",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://openstacked.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
                "https://github.com/your-username",
                "https://linkedin.com/in/your-username",
              ],
            }),
          }}
        />
      </head>
      {/* 1. 'md:cursor-none' ensures the default cursor is only hidden on desktop.
          2. Removed 'select-none' globally so mobile users can interact naturally.
          3. 'antialiased' helps with font rendering performance.
      */}
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <ScrollHandler />
        {/* <CustomCursor /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
