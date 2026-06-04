import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corsi Crescita Personale Napoli e Formazione Genitori | ASPU",
  description: "Percorsi esperienziali individuali e di gruppo per aumentare autostima, consapevolezza emotiva, gestione dello stress e relazioni sane a Napoli.",
  keywords: ["crescita personale napoli", "autostima napoli", "formazione genitori", "comunicazione empatica", "consapevolezza emotiva"],
};

export default function CrescitaPersonaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
