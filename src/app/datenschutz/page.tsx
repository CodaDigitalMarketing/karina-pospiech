import type { Metadata } from "next";
import DatenschutzContent from "@/components/DatenschutzContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
