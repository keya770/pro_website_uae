import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const siteName = "HCT Services | AL HASEL Consultancy Services LLC";
const siteUrl = "https://example.ae";
const logoPath = "/pro_logo.png";
const defaultOgImage = `${siteUrl}${logoPath}`;
const siteTitle = "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts";
const siteDescription =
  "UAE PRO services, freelance visa UAE, employment visa Dubai, and Dubai business setup by AL HASEL Consultancy (HCT Services) with fast, reliable support.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  icons: { icon: logoPath, apple: logoPath },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "UAE PRO services and visa support in Dubai by HCT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-slate-50 text-slate-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          id="ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteName,
              url: siteUrl,
              image: defaultOgImage,
              telephone: "+971545420537",
              address: {
                "@type": "PostalAddress",
                streetAddress: "P.O Box: 32935, Office 313, Emgate Building, Near Business Bay Metro Station (Sea Side)",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "United Arab Emirates",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
