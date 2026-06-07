import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Cepedas Event Center | Tulsa Event Venue",
    template: "%s | Cepedas Event Center",
  },
  description:
    "Cepedas Event Center is an open event venue in Tulsa, OK for weddings, quinceañeras, receptions, corporate events & more. Serving Tulsa, Broken Arrow, Owasso & Catoosa.",
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "Cepedas Event Center | Tulsa Event Venue",
    description: "An open event venue in Tulsa, OK for life's biggest moments.",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: SITE.url },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  areaServed: SITE.serviceAreas,
  sameAs: [SITE.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
