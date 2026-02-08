import { FC, ReactNode } from "react";
import { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  authors: [{ name: "Manuel Sabarros", url: "https://manusabarros.com" }],
  creator: "Manuel Sabarros",
  publisher: "Manuel Sabarros",
  keywords: [
    "Manuel Sabarros",
    "Manu Sabarros",
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
    siteName: "Manu Sabarros",
    locale: "en_US",
    type: "website",
  },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
        <GoogleAnalytics gaId="G-8JJ1MR3NXV" />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
