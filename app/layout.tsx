import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martin-digital.de"),
  title: {
    default: "Martin Digital | Webdesign & Webentwicklung für lokale Unternehmen",
    template: "%s | Martin Digital",
  },
  description:
    "Professionelle Webseiten für lokale Firmen, Praxen und Vereine: modern, vertrauenswürdig und conversion-orientiert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
