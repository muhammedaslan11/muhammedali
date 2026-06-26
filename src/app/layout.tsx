import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative } from "next/font/google";
import Script from "next/script";
import { WebVitals } from "@/components/web-vitals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const BASE_URL = "https://muhammedaslan.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Muhammed Ali Aslan — Software Developer & Media",
    template: "%s | Muhammed Ali Aslan",
  },
  description:
    "Software Developer with 3.5 years of experience building modern web experiences with React, Next.js, TypeScript, and TailwindCSS. Also active in media production, branding, and digital content.",
  keywords: [
    "Muhammed Ali Aslan",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "TailwindCSS",
    "Web Developer Istanbul",
    "Software & Media",
    "UI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammed Ali Aslan", url: BASE_URL }],
  creator: "Muhammed Ali Aslan",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Muhammed Ali Aslan",
    title: "Muhammed Ali Aslan — Software Developer & Media",
    description:
      "Software Developer with 3.5 years of experience building modern web experiences with React, Next.js, TypeScript, and TailwindCSS.",
    locale: "en_US",
    images: [
      {
        url: "/medias/muhammedali.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Ali Aslan — Software Developer & Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ali Aslan — Software Developer & Media",
    description:
      "Software Developer with 3.5 years of experience building modern web experiences with React, Next.js, TypeScript, and TailwindCSS.",
    images: ["/medias/muhammedali.png"],
    creator: "@muhammedaaslan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/medias/favicon.png",
    shortcut: "/medias/favicon.png",
    apple: "/medias/favicon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "hqLzNidGE9aj63SWuneuVr-S4dgLssUH_je6rYWTpB8",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammed Ali Aslan",
  url: BASE_URL,
  image: `${BASE_URL}/medias/muhammedali.png`,
  jobTitle: "Software Developer",
  description:
    "Software Developer with 3.5 years of experience in React, Next.js, TypeScript, and TailwindCSS. Also experienced in media production and digital content.",
  worksFor: {
    "@type": "Organization",
    name: "GLOMİL Technology",
    url: "https://www.GLOMİL.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://www.linkedin.com/in/muhammedaaslan/",
    "https://github.com/muhammedaslan11",
    "https://www.instagram.com/muhammedaali",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript", "Web Development", "Media Production"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WebVitals />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K2DH4EKF4C" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K2DH4EKF4C');
        `}</Script>
      </body>
    </html>
  );
}
