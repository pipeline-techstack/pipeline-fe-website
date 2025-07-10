import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with className
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pipeline AI",
  description: "AI-powered insights and outreach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
