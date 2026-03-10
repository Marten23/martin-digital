import type { Metadata } from "next";
import { PraxisDemoClient } from "./praxis-demo-client";

export const metadata: Metadata = {
  title: "Demo Praxis am Stadtpark",
  description:
    "Demo-Landingpage fuer eine Physiotherapie- und Osteopathie-Praxis als hochwertiges Referenz-Mockup.",
};

export default function PraxisDemoPage() {
  return <PraxisDemoClient />;
}
