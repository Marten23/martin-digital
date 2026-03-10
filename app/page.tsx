import type { Metadata } from "next";
import { HomePageContent } from "./components/home-page-content";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Martin Digital erstellt professionelle Webseiten für lokale Firmen, Praxen und Vereine, die modern aussehen und Vertrauen schaffen.",
};

export default function Home() {
  return <HomePageContent />;
}
