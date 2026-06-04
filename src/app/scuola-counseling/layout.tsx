import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scuola di Counseling Napoli - Carl Rogers | ASPU",
  description: "Diventa Counselor professionista. Scuola triennale in Counseling ad Approccio Umanistico Integrato Rogersiano. Teoria, pratica ed esperienze di gruppo.",
  keywords: ["scuola counseling napoli", "counselor rogersiano", "formazione counseling", "relazione aiuto", "carl rogers napoli"],
};

export default function ScuolaCounselingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
