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
    imagen: "/servicios/premium.svg",
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

// --- Vitrina interna --------------------------------------------------------
// Con este email (en /clientes) no se entra a ningún sistema: se abre la
// vitrina con todos los trabajos, para mostrárselos a un cliente uno por uno.
export const ACCESO_INTERNO = "jjsoluciones@admin.com";

export type Proyecto = {
  id: string;
  nombre: string;
  tipo: string;
  resumen: string;
  descripcion: string;
  // Miniatura: por ahora mockups generados (scripts/generar-proyectos.js).
  // Cuando haya capturas reales, se reemplaza el archivo con el mismo nombre.
  imagen: string;
  // Color del borde/acento de la tarjeta
  color: string;
  puntos: string[];
  tecnologias: string[];
  // Si está online, el botón abre el sistema. Si no, se muestra el estado.
  url?: string;
  urlTexto?: string;
  extraUrl?: string;
  extraTexto?: string;
  estado?: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    id: "minuto-futbol",
    nombre: "Minuto Fútbol",
    tipo: "Sitio + app Android",
    resumen: "El minuto a minuto de la liga, en vivo y en el celular.",
    descripcion:
      "Plataforma de la Liga Deportiva de General Arenales: partidos en vivo con el relato minuto a minuto, tabla de posiciones, goleadores, tarjetas, plantel de cada club, alineaciones y noticias. Los delegados cargan lo suyo desde el celular y el hincha lo ve al instante.",
    imagen: "/proyectos/minuto-futbol.svg",
    color: "#22c55e",
    puntos: [
      "Partidos en vivo con reloj de minuto y eventos (gol, tarjetas, cambios)",
      "Tabla de posiciones y goleadores que se actualizan solos",
      "Panel para delegados: cada club carga su equipo y sus partidos",
      "App Android instalable, además del sitio web",
      "Panel interno con visitas, descargas y actividad",
    ],
    tecnologias: ["Next.js", "Node.js", "PostgreSQL", "Android"],
    url: MINUTO_FUTBOL.sitio,
    urlTexto: "Ver el sitio en vivo",
    extraUrl: MINUTO_FUTBOL.apk,
    extraTexto: "Descargar la app",
  },
  {
    id: "trapitos",
    nombre: "Trapitos",
    tipo: "Sistema de gestión (ERP)",
    resumen: "Ventas, stock y clientes de un local de ropa, en una pantalla.",
    descripcion:
      "Sistema de gestión para un local de indumentaria: carga de ventas, control de stock por talle y color, clientes, cuenta corriente y reportes del día, de la semana y del mes. Pensado para que lo use cualquiera, sin capacitación.",
    imagen: "/proyectos/trapitos.svg",
    color: "#b794f4",
    puntos: [
      "Ventas en segundos, con búsqueda rápida de productos",
      "Stock por talle y color, con aviso de stock bajo",
      "Clientes y cuenta corriente",
      "Reportes de ventas por día, semana y mes",
    ],
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    url: "https://trapitos.jsoluciones.com.ar",
    urlTexto: "Abrir el sistema en vivo",
    estado: "Demo en vivo",
  },
  {
    id: "ls-entrenamientos",
    nombre: "LS Entrenamientos",
    tipo: "Sistema de gestión",
    resumen: "Alumnos, rutinas y cuotas de un entrenador personal.",
    descripcion:
      "Sistema para gestionar alumnos: ficha de cada uno, rutina armada por semana, seguimiento de la asistencia y control de las cuotas (quién está al día y quién debe). El alumno recibe su rutina y el profe deja de anotar en papel.",
    imagen: "/proyectos/ls-entrenamientos.svg",
    color: "#38bdf8",
    puntos: [
      "Ficha del alumno con objetivo, plan y progreso",
      "Rutinas por día de la semana, con series y repeticiones",
      "Control de cuotas: al día, por vencer y vencidas",
      "Todo desde el celular, adentro del gimnasio",
    ],
    tecnologias: ["Next.js", "Node.js", "PostgreSQL"],
    estado: "Instalado en el equipo del cliente",
  },
  {
    id: "ccs",
    nombre: "CCS",
    tipo: "Sistema de gestión",
    resumen: "Trabajos, clientes y cobranzas organizados por estado.",
    descripcion:
      "Sistema de administración de trabajos: cada pedido pasa por pendiente, en proceso y listo, con su cliente, su detalle y lo que hay que cobrar. De un vistazo se ve todo lo que está abierto y lo que falta facturar.",
    imagen: "/proyectos/ccs.svg",
    color: "#f59e0b",
    puntos: [
      "Tablero por estados: pendiente, en proceso y listo",
      "Ficha de cliente con su historial de trabajos",
      "Control de lo entregado y lo que falta cobrar",
      "Resumen del mes siempre a la vista",
    ],
    tecnologias: ["Next.js", "Node.js", "PostgreSQL"],
    estado: "Instalado en el equipo del cliente",
  },
  {
    id: "prode",
    nombre: "Prode Fútbol",
    tipo: "Plataforma de prodes",
    resumen: "Un prode por club, con el fixture real de Minuto Fútbol.",
    descripcion:
      "Plataforma de prodes para los 8 clubes de la liga: cada club tiene su propio prode, con sus colores, su escudo, sus jugadores y su pozo. El fixture y los resultados se toman solos de Minuto Fútbol cada 15 minutos. El jugador entra con su cuenta de Google, pronostica el resultado exacto y cada partido se cierra cuando empieza.",
    imagen: "/proyectos/prode.jpg",
    color: "#f472b6",
    puntos: [
      "Un prode por club: colores, escudo, jugadores y pozo propios",
      "Fixture y resultados sincronizados con Minuto Fútbol",
      "Ingreso con Google, sin contraseñas",
      "Cada partido se cierra solo cuando empieza",
      "Panel del organizador: fechas, inscripciones y pagos",
    ],
    tecnologias: ["Laravel", "PHP", "MySQL", "Google"],
    url: "https://arenales.prode.jsoluciones.com.ar",
    urlTexto: "Ver el Prode de Arenales",
    estado: "En desarrollo · fase 2 de 7",
  },
  {
    id: "allyerbas",
    nombre: "AllYerbas",
    tipo: "Sitio web",
    resumen: "Catálogo online de yerbas, listo para vender por WhatsApp.",
    descripcion:
      "Sitio de catálogo con los productos, precios y fotos, adaptado al celular y preparado para Google. El pedido se cierra por WhatsApp, sin comisiones de terceros.",
    imagen: "/proyectos/allyerbas.svg",
    color: "#4ade80",
    puntos: [
      "Catálogo con fotos, precios y buscador",
      "Pedidos directos por WhatsApp",
      "Rápido en el celular y optimizado para Google",
    ],
    tecnologias: ["Next.js", "Tailwind CSS"],
    estado: "En desarrollo",
  },
];
