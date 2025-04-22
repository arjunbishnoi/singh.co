import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansi Singh - Portfolio",
  description: "Personal portfolio website showcasing my work and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-cream antialiased font-sans ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
