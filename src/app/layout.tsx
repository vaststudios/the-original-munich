import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Original München - Smash Burgers & Tacos",
  description: "Handcrafted smash burgers and authentic tacos in the heart of Munich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
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
