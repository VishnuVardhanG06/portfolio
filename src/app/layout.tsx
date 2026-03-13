import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { resume } from "@/data/resume";

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    `${(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "")}${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/`,
  ),
  title: {
    default: `${resume.fullName} | Portfolio`,
    template: `%s | ${resume.fullName}`,
  },
  description: resume.summary,
  openGraph: {
    title: `${resume.fullName} | Portfolio`,
    description: resume.summary,
    type: "website",
    locale: "en_US",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-dvh">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
