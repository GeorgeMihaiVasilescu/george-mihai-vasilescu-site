import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "George Mihai Vasilescu – Official Website",
  description:
    "Official website of George Mihai Vasilescu – artist, researcher, and founder of the Museum of Contemporary Tattoos. Explore his projects at the intersection of body, memory, and future technologies.",
  keywords: [
    "George Mihai Vasilescu",
    "contemporary art",
    "contemporary tattoos",
    "museum",
    "artist website",
    "body memory",
    "AI",
    "augmented reality",
    "blockchain"
  ],
  authors: [{ name: "George Mihai Vasilescu", url: "https://georgemihaivasilescu.art" }],
  creator: "George Mihai Vasilescu",
  openGraph: {
    title: "George Mihai Vasilescu – Official Website",
    description:
      "Artist and researcher exploring body, memory, and augmented reality through contemporary tattoo culture and emerging tech.",
    url: "https://georgemihaivasilescu.art",
    siteName: "George Mihai Vasilescu",
    type: "website",
  },
  metadataBase: new URL("https://georgemihaivasilescu.art"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

