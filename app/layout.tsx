import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [{ url: "/ico.png" }],
    shortcut: "/ico.png",
    apple: "/ico.png",
  },
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XFDGGH560G"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFDGGH560G');
          `}
        </Script>

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

      <body className="bg-black text-white antialiased overflow-x-hidden">
        <ScrollHandler />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
