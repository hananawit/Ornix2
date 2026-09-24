import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND_NAME, BRAND_TAGLINE, SITE_URL } from "@/lib/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND_NAME} | Bridging AI & Ethiopia's Growth`,
  description:
        "ORNIX bridges AI and Ethiopia's growth through sovereign, locally grounded intelligence across healthcare, finance, agriculture, manufacturing, public services, and beyond.",
  keywords: [
    "ORNIX",
    "Healthcare AI",
    "Medical Artificial Intelligence",
    "Clinical Intelligence",
    "Health Data Science",
    "FHIR Data Pipeline",
    "Medical NLP",
    "Radiology AI",
  ],
  authors: [{ name: "ORNIX Inc." }],
  openGraph: {
    title: `${BRAND_NAME}  Bridging AI & Ethiopia's Growth`,
    description: BRAND_TAGLINE,
    url: SITE_URL,
    siteName: BRAND_NAME,
    images: [
      {
        url: "/ornix-logo.png",
        width: 1200,
        height: 630,
        alt: "ORNIX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME}  Bridging AI & Ethiopia's Growth`,
    description: BRAND_TAGLINE,
    images: ["/ornix-logo.png"],
  },
  icons: {
    icon: "/ornix-logo.png",
    apple: "/ornix-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/ornix-logo.png`,
    description: BRAND_TAGLINE,
    sameAs: [
      "https://linkedin.com",
      "https://x.com",
      "https://youtube.com",
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ornix-navy-900 text-white flex flex-col selection:bg-ornix-yellow selection:text-ornix-navy-950" style={{ background: 'linear-gradient(165deg, #1a2850 0%, #111D3D 40%, #0e1830 100%)' }}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
