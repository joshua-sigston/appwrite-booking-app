import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/page-components/header";
import Footer from "@/components/page-components/footer";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Bespeak | Book a Room",
  description: "Book a meeting or conference room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body>
        <Header />
        <main className="max-auto w-full px-4 py-6 sm:px-6 lg:px-8 bg-white h-screen text-black">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
