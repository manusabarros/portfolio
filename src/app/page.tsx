import { FC } from "react";
import { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Manu Sabarrós",
  description: "Manuel Sabarrós' Portfolio. Software Developer based in Portugal",
  alternates: {
    canonical: "https://manusabarros.com",
  },
  twitter: {
    title: "Manu Sabarrós",
    description: "Manuel Sabarrós' Portfolio. Software Developer based in Portugal",
  },
  openGraph: {
    title: "Manu Sabarrós",
    description: "Manuel Sabarrós' Portfolio. Software Developer based in Portugal",
    url: "https://manusabarros.com",
  },
};

const HomePage: FC = () => <Home version={process.env.npm_package_version as string} />;

export default HomePage;
