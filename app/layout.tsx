import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jaipur HomeFix | Home Improvement Services in Jaipur",
  description:
    "Book trusted local home repair services in Jaipur, Rajasthan. Fast and same day service in Jaipur for plumbing, electrical, carpentry, cleaning, AC and more.",
  keywords: [
    "Home Improvement Services in Jaipur",
    "Local home repair services",
    "Same day service in Jaipur",
    "Plumber in Jaipur",
    "Electrician in Jaipur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
