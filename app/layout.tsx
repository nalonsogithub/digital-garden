import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SITE_TITLE, SITE_BYLINE, SITE_DESCRIPTION } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: `${SITE_BYLINE}. ${SITE_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: "42rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <SiteNav />
          {children}
        </div>
      </body>
    </html>
  );
}
