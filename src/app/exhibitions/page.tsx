import type { Metadata } from "next";
import ExhibitionsContent from "@/components/ExhibitionsContent";

export const metadata: Metadata = {
  title: "Exhibitions",
};

export default function ExhibitionsPage() {
  return <ExhibitionsContent />;
}
