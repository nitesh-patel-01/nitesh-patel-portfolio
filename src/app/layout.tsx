import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nitesh-patel-portfolio.vercel.app"),
  title: "Nitesh Patel – Web Developer & SEO Expert in India",
  description: "Trusted web development and SEO services focused on performance, clarity, and results — helping businesses establish a strong and reliable digital presence.",
  keywords: ["Web Developer", "SEO Expert", "India", "Freelance Web Developer", "Nitesh Patel"],
  openGraph: {
    title: "Nitesh Patel – Web Developer & SEO Expert in India",
    description: "Trusted web development and SEO services focused on performance, clarity, and results.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Patel – Web Developer & SEO Expert in India",
    description: "Trusted web development and SEO services focused on performance, clarity, and results.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nitesh Patel",
  "jobTitle": "Web Developer & SEO Expert",
  "url": "https://niteshpatel.in",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://instagram.com/_nitesh_visions"
  ],
  "telephone": "+917974823298"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-blue-500/30 overflow-x-hidden min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
