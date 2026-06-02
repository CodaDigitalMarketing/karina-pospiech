import type { Metadata } from "next";
import CVContent from "@/components/CVContent";

export const metadata: Metadata = {
  title: "CV",
};

export default function CVPage() {
  return <CVContent />;
}
