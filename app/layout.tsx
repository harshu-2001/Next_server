"use-client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} index-page`}>{children}</body>
    </html>
  );
}
