import type { Metadata } from "next";
import { ElektroDemoClient } from "./elektro-demo-client";

export const metadata: Metadata = {
  title: "Demo Elektro Lenz",
  description: "Demo-Landingpage fuer einen Elektrobetrieb mit starkem Handwerker-Fokus und Kontaktformular.",
};

export default function ElektroDemoPage() {
  return <ElektroDemoClient />;
}
