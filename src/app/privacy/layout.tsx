import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ASPU",
  description: "Informativa sul trattamento dei dati personali ed utilizzo dei cookie del sito dell'Associazione per lo Sviluppo della Persona e del Potenziale Umano (ASPU).",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
