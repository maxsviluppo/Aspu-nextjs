import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinar ed Eventi Formativi Relazionali Napoli | ASPU",
  description: "Partecipa ai seminari di aggiornamento continuo ed eventi online gratuiti di ASPU. Sviluppo del potenziale umano e socioterapia a Napoli.",
  keywords: ["webinar aspu", "eventi formativi napoli", "aggiornamento docenti", "socioterapia napoli", "seminari gratuiti counseling"],
};

export default function AggiornamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
