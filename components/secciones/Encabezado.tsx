"use client";

import { motion } from "framer-motion";

// Título de sección con animación al entrar en pantalla
export default function Encabezado({ etiqueta, titulo, texto }: { etiqueta: string; titulo: string; texto?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-2xl text-center space-y-4"
    >
      <div className="flex justify-center">
        <span className="rounded-full border border-border px-4 py-1 text-xs font-mono uppercase tracking-widest text-violeta">
          {etiqueta}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{titulo}</h2>
      {texto && <p className="text-muted-foreground md:text-lg">{texto}</p>}
    </motion.div>
  );
}
