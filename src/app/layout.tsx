import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { JsonLd } from "@/components/seo/JsonLd";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auralix-ui.netlify.app"),
  title: {
    default: "Auralix UI - Modern UI Component Library",
    template: "%s | Auralix UI",
  },
  description: "A collection of beautiful, reusable, and accessible UI components built with React, TypeScript, and Tailwind CSS. Designed for modern web applications.",
  keywords: ["UI", "components", "React", "TypeScript", "Tailwind CSS", "design system", "Auralix", "web development", "next.js ui"],
  authors: [
    {
      name: "Auralix Team",
      url: "https://auralix-ui.netlify.app",
    },
  ],
  creator: "Auralix Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auralix-ui.netlify.app",
    title: "Auralix UI - Modern UI Component Library",
    description: "Beautiful, reusable, and accessible UI components for React and Tailwind CSS.",
    siteName: "Auralix UI",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder or update path
        width: 1200,
        height: 630,
        alt: "Auralix UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralix UI - Modern UI Component Library",
    description: "Beautiful, reusable, and accessible UI components for React and Tailwind CSS.",
    images: ["/og-image.png"],
    creator: "@auralixui",
  },
  verification: {
    google: "1q7Qf0Fo93c80c4CqAhvmKo2qYA3Iln4JWPkHKWySlU",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif" }}
      >
         <JsonLd<any>
          json={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Auralix UI",
            url: "https://auralix-ui.netlify.app",
            description: "Modern UI Component Library for React and Tailwind CSS",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://auralix-ui.netlify.app/docs?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
