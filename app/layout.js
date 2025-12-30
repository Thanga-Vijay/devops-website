import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zenteq | DevOps & Cloud Engineering",
  description:
    "Zenteq is a DevOps & Cloud Engineering company helping startups build secure, scalable, and cost-efficient infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

