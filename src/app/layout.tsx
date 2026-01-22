import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Original München - Smash Burgers & Tacos",
    template: "%s | The Original München",
  },
  description: "Handgemachte Smash Burgers und Authentic Tacos im Herzen von München. 100% Fresh, No Bullshit Just Food.",
  keywords: ["Smash Burgers", "Tacos", "München", "Restaurant", "Burgers", "Munich", "Food", "Catering"],
  authors: [{ name: "The Original München" }],
  creator: "The Original München",
  publisher: "The Original München",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://theoriginal-munich.com"),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/de",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "The Original München",
    title: "The Original München - Smash Burgers & Tacos",
    description: "Handgemachte Smash Burgers und Authentic Tacos im Herzen von München. 100% Fresh, No Bullshit Just Food.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Original München - Smash Burgers & Tacos",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Original München - Smash Burgers & Tacos",
    description: "Handgemachte Smash Burgers und Authentic Tacos im Herzen von München.",
    images: ["/og-image.png"],
    creator: "@theoriginalmunich",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full font-anton bg-[var(--color-primary-light)]">
        {children}
      </body>
    </html>
  );
}
