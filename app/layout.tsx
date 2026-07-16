import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kanatal Outdoor Adventure",
    template: "%s — KOA | Kanatal Outdoor Adventure",
  },
  description:
    "Giant Swing, Zip Line, Rope Courses, ATV rides, and more at Kanatal Outdoor Adventure. Thrilling activities at Saur Kanatal, Tehri Garhwal, Uttarakhand.",
  metadataBase: new URL("https://kanataloutdooradventures.com"),
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Kanatal Outdoor Adventure",
    description:
      "Giant Swing, Zip Line, Rope Courses, ATV rides, and more at Kanatal Outdoor Adventure. Thrilling activities at Saur Kanatal, Tehri Garhwal, Uttarakhand.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Kanatal Outdoor Adventure",
  description:
    "Adventure park in Saur Kanatal, Tehri Garhwal offering Giant Swing, Sky Roller, Zip Line, Rope Courses, ATV rides, Valley Crossing, and more.",
  url: "https://kanataloutdooradventures.com",
  telephone: "+91-7500069047",
  email: "info@kanataloutdoor.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Village Saur Kanatal, Near by Winter Line Cafe",
    addressLocality: "Kanatal",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.4083,
    longitude: 78.4032,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "300",
    highPrice: "4000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F3D24" />
        <link rel="icon" href="/images/logo.png" sizes="any" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-surface text-ink selection:bg-brand-koa/20 selection:text-brand-koa">
        <a
          href="#main-content"
          className="fixed -top-full left-4 z-[100] bg-brand-koa text-surface text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all focus:top-4"
        >
          Skip to content
        </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
          <FloatingWhatsApp />
      </body>
    </html>
  );
}
