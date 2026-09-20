// Todo el texto y los datos del sitio en un solo lugar. Para cambiar un
// precio, un teléfono o un servicio, se edita acá y listo.

export const EMPRESA = {
  nombre: "JJSoluciones",
  eslogan: "Sistemas, sitios web y soporte técnico para tu negocio",
  email: "jjdev.code@gmail.com",
  // Dos WhatsApp: el principal y el alternativo (los mismos del sitio anterior)
  whatsapp: "5492353405216",
  whatsappAlternativo: "5492364264690",
  telefonoVisible: "+54 9 2353 40-5216",
  instagram: "https://www.instagram.com/jjjsoluciones.ar/",
  instagramDev: "https://www.instagram.com/jjdevcode/",
  ubicacion: "Buenos Aires, Argentina",
  horario: ["Lun a Vie: 9:00 a 18:00", "Sáb: 9:00 a 12:30"],
};

export const LINK_WHATSAPP = (texto = "Hola JJSoluciones, quiero hacer una consulta") =>
  `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Servicio = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: "Cpu" | "Laptop" | "Globe" | "Boxes" | "Sparkles" | "Headset";
  // Imagen de public/img (las fotos del sitio anterior)
  imagen?: string;
};

export const SERVICIOS: Servicio[] = [
  {
    id: "sistemas",
    titulo: "Sistemas de gestión",
    descripcion:
      "Desarrollamos sistemas a medida: control de stock, ventas, clientes y reportes. Lo que tu negocio necesita, sin pagar por lo que no usa.",
    icono: "Boxes",
    imagen: "/servicios/sistemas.svg",
  },
  {
    id: "web",
    titulo: "Desarrollo web",
    descripcion:
      "Sitios profesionales, landing pages y tiendas. Rápidos, adaptados al celular y listos para aparecer en Google.",
    icono: "Globe",
    imagen: "/servicios/web.svg",
  },
  {
    id: "pc",
    titulo: "Reparación de PC",
    descripcion:
      "Formateo, optimización, cambio de componentes, eliminación de virus y mantenimiento completo para computadoras de escritorio.",
    icono: "Cpu",
    imagen: "/fotos/img1.jpg",
  },
  {
    id: "notebooks",
    titulo: "Mantenimiento de notebooks",
    descripcion:
      "Limpieza, cambio de pasta térmica, reparación de lentitud y actualización de componentes para que vuelva a andar como nueva.",
    icono: "Laptop",
    imagen: "/fotos/img3.jpg",
  },
  {
    id: "premium",
    titulo: "Mantenimiento premium",
    descripcion:
      "Servicio completo: limpieza + formateo + optimización + revisión general. Tu equipo como recién comprado.",
    icono: "Sparkles",
    imagen: "/fotos/img7.jpg",
  },
  {
    id: "remota",
    titulo: "Asistencia remota",
    descripcion:
      "Soporte técnico online para resolver problemas sin salir de tu casa. Rápido, seguro y sin vueltas.",
    icono: "Headset",
    imagen: "/servicios/remota.svg",
  },
];

export type Plan = {
  id: string;
  nombre: string;
  precio: string;
  detalle: string;
  descripcion: string;
  items: string[];
  destacado?: boolean;
};

// Solo dos planes (el de Cloud se dio de baja)
export const PLANES: Plan[] = [
  {
    id: "basic",
    nombre: "Website Basic",
    precio: "70.000",
    detalle: "pago único",
    descripcion: "Ideal para presentar tu negocio y que te encuentren.",
    items: ["Diseño adaptado a celular", "Hasta 5 secciones", "Optimización SEO básica", "Formulario de contacto", "Entrega en 7 días"],
  },
  {
    id: "premium",
    nombre: "Website Premium",
    precio: "90.000",
    detalle: "pago único",
    descripcion: "Para negocios que quieren crecer y administrar su propio contenido.",
    items: [
      "Todo lo del plan Basic",
      "Hasta 10 secciones",
      "Optimización SEO avanzada",
      "Integración con redes sociales",
      "Panel de administración",
      "Soporte 30 días",
    ],
    destacado: true,
  },
];

export const METRICAS = [
  { valor: "20+", etiqueta: "Clientes satisfechos" },
  { valor: "70+", etiqueta: "Equipos reparados" },
  { valor: "15+", etiqueta: "Sitios y sistemas" },
];

// Fotos de trabajos (las del sitio anterior)
export const GALERIA = ["/fotos/img1.jpg", "/fotos/img2.jpg", "/fotos/img3.jpg", "/fotos/img4.jpg", "/fotos/img5.jpg", "/fotos/img6.jpg", "/fotos/img7.jpg", "/fotos/img8.jpg"];

// Minuto Fútbol: el proyecto destacado
export const MINUTO_FUTBOL = {
  sitio: "https://minutofutbol.jsoluciones.com.ar",
  // Link que cuenta la descarga en el dashboard y redirige al archivo
  // (el APK vive en cPanel: public_html/descargas/minuto-futbol.apk)
  apk: "https://api-minutofutbol.jsoluciones.com.ar/api/metrics/apk",
  apkDisponible: true,
  version: "1.0",
  tamano: "3,3 MB",
  androidMinimo: "Android 7 o superior",
};

// Tecnologías y habilidades que flotan de fondo en /app. Editar a gusto.
export const TECNOLOGIAS = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Capacitor",
  "Android", "Firebase", "Cloudflare", "cPanel", "REST API", "JWT", "PWA", "Push", "Git", "Linux",
  "SEO", "UX/UI", "Sistemas de gestión", "Control de stock", "Reparación de PC", "Soporte remoto",
];

// Portal de clientes: cada email lleva a la URL del sistema de ese cliente.
// Los sistemas todavía son locales; cuando estén online se pone la URL real.
export const CLIENTES: { email: string; nombre: string; url: string }[] = [
  { email: "trapitos@gmail.com", nombre: "Trapitos", url: "https://trapitos.jsoluciones.com.ar" },
];
