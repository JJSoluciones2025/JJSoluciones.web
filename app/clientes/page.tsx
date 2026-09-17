import type { Metadata } from "next";
import PortalClientes from "@/components/PortalClientes";

export const metadata: Metadata = {
  title: "Acceso clientes",
  description: "Ingresá con tu email para entrar al sistema de gestión de tu negocio.",
  robots: { index: false },
};

export default function ClientesPage() {
  return <PortalClientes />;
}
