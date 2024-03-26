import { FC, ReactNode } from "react";
import Providers from "@/lib/providers";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  authors: [{ name: "Manuel Sabarrós", url: "https://manusabarros.com" }],
  creator: "Manuel Sabarrós",
  publisher: "Manuel Sabarrós",
  keywords: [
    "Manuel Sabarrós",
    "Manu Sabarrós",
    "software",
    "developer",
    "frontend",
    "front end",
    "front-end",
    "backend",
    "back end",
    "back-end",
    "fullstack",
    "full stack",
    "full-stack",
    "web developer",
    "mobile developer",
    "react developer",
    "react",
    "next js",
    "next.js",
    "react native",
    "node js",
  ],
  twitter: {
    card: "summary",
    siteId: "197505893",
    creator: "@manusabarros",
    creatorId: "197505893",
  },
  openGraph: {
    siteName: "Manu Sabarrós",
    locale: "en_US",
    type: "website",
  },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-8JJ1MR3NXV" />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
