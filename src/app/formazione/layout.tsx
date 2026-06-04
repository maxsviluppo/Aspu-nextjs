import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corsi Gordon e Formazione Docenti Accreditata MIUR | ASPU",
  description: "Corsi di formazione relazionale accreditati MIM e MIUR per insegnanti, educatori e professionisti. Metodo Gordon T.E.T. e Carta del Docente a Napoli.",
  keywords: ["formazione docenti napoli", "corsi gordon napoli", "metodo gordon tet", "accreditato miur napoli", "carta del docente napoli"],
};

export default function FormazioneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
