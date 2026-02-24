import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Digital Garden",
  description: "Living resume and portfolio",
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
