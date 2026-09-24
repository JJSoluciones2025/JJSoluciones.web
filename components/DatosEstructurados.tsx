import { EMPRESA, SERVICIOS } from "@/lib/contenido";
import { DESCRIPCION_PRINCIPAL, URL_SITIO } from "@/lib/seo";

// Datos estructurados (schema.org) para Google: le dicen de forma explícita
// qué es JJSoluciones, dónde está, qué ofrece, cómo contactarlo y en qué
// horario. No se ven en la página; los lee el buscador.
export default function DatosEstructurados() {
  const negocio = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${URL_SITIO}/#negocio`,
    name: EMPRESA.nombre,
    description: DESCRIPCION_PRINCIPAL,
    url: `${URL_SITIO}/`,
    logo: `${URL_SITIO}/marca/logo.svg`,
    image: `${URL_SITIO}/og.png`,
    telephone: `+${EMPRESA.whatsapp}`,
    email: EMPRESA.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "General Arenales",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: [
      { "@type": "City", name: "General Arenales" },
      { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:30" },
    ],
    sameAs: [EMPRESA.instagram, EMPRESA.instagramDev],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: SERVICIOS.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.titulo, description: s.descripcion },
      })),
    },
  };

  const sitio = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${URL_SITIO}/#sitio`,
    url: `${URL_SITIO}/`,
    name: EMPRESA.nombre,
    inLanguage: "es-AR",
    publisher: { "@id": `${URL_SITIO}/#negocio` },
  };

  return (
    <script
      type="application/ld+json"
      // JSON generado acá mismo con datos propios: no hay contenido de terceros
      dangerouslySetInnerHTML={{ __html: JSON.stringify([negocio, sitio]).replace(/</g, "\\u003c") }}
    />
  );
}
