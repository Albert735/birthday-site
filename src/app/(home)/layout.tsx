import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import localFont from "next/font/local";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local Pacifico font
const pacificoFont = localFont({
  src: "../../font/Pacifico-Regular.ttf",
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Wishes",
  description: "Heartfelt messages from your loved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacificoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
