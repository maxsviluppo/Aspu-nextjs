import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASPU | Scuola Superiore di Counseling Umanistico Integrato",
  description: "Scuola di Counseling ad Approccio Umanistico Integrato (Carl Rogers) a Napoli. Crescita personale, formazione e consulenza professionale dal 1999.",
  keywords: ["counseling napoli", "approccio rogersiano", "carl rogers", "crescita personale", "scuola counseling", "aspu"],
  verification: {
    google: "o1JLvqbSa14o6nqXXHVy29rhjflpg7QMlwSZdd4qoeI",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {/* Schema.org Structured Data for AI Crawler & Search Engine Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "ASPU - Associazione per lo Sviluppo della Persona e del Potenziale Umano",
              "alternateName": "ASPU",
              "url": "https://www.aspu.it",
              "logo": "https://www.aspu.it/logo.avif",
              "description": "Scuola Superiore di Counseling ad Approccio Umanistico Integrato Rogersiano dal 1999 a Napoli. Formazione accreditata MIUR, corsi Gordon T.E.T. e percorsi di crescita personale.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vico Pallonetto a Santa Chiara, 8",
                "addressLocality": "Napoli",
                "postalCode": "80134",
                "addressRegion": "Campania",
                "addressCountry": "IT"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+39 338 540 6384",
                "contactType": "segreteria",
                "email": "info@aspu.it"
              },
              "sameAs": [
                "https://www.facebook.com/share/18r5Bou2Gf/?mibextid=wwXIfr"
              ],
              "knowsAbout": [
                "Counseling Umanistico",
                "Carl Rogers",
                "Approccio Centrato sulla Persona",
                "Metodo Gordon T.E.T.",
                "Crescita Personale"
              ]
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RBJK0LYEF0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RBJK0LYEF0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
