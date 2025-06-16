import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indrani Barui - Creative Portfolio & Professional Showcase",
  description:
    "Welcome to my portfolio! Explore my work, skills, and achievements in [your field/industry]. Discover how I bring creativity and expertise to every project, with a focus on [specific strengths or areas of expertise]. Let’s connect and create something extraordinary!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
