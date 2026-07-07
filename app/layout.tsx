import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE_TITLE, SITE_BYLINE, SITE_DESCRIPTION } from "@/lib/site";
import "@/styles/globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: `${SITE_BYLINE}. ${SITE_DESCRIPTION}`,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/nick-alonso.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <div className="site-shell">
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
