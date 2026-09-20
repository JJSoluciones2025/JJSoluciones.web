import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import { EMPRESA } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Qué datos tratamos, para qué y cuáles son tus derechos según la Ley 25.326 de Protección de Datos Personales.",
};

export default function PrivacidadPage() {
  return (
    <PaginaLegal titulo="Política de Privacidad" actual="/legal/privacidad/">
      <p>
        En <strong>JJSoluciones</strong> cuidamos tus datos. Esta política explica qué información tratamos cuando usás el
        sitio <strong>jsoluciones.com.ar</strong> (el &quot;Sitio&quot;) o contratás nuestros servicios, con qué fin, con quién
        la compartimos y qué derechos tenés, conforme a la <strong>Ley 25.326 de Protección de Datos Personales</strong>, su
        decreto reglamentario y las disposiciones de la Agencia de Acceso a la Información Pública (AAIP).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        JJSoluciones, con domicilio en {EMPRESA.ubicacion}. Contacto: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> ·
        WhatsApp {EMPRESA.telefonoVisible}.
      </p>

      <h2>2. Qué datos tratamos y de dónde salen</h2>
      <h3>a) Cuando navegás el Sitio</h3>
      <p>
        El Sitio es estático: <strong>no tiene cuentas de usuario, no guarda formularios ni usa herramientas de analítica</strong>{" "}
        (no usamos Google Analytics ni píxeles publicitarios). Lo único que se guarda en tu navegador es tu elección sobre las
        cookies (ver <a href="/legal/cookies/">Política de Cookies</a>). El proveedor de hosting y Cloudflare, que protege el
        Sitio, registran datos técnicos de conexión (dirección IP, fecha, página solicitada, navegador) en sus registros de
        servidor por motivos de seguridad, durante los plazos que fijan sus propias políticas.
      </p>
      <h3>b) Cuando nos escribís</h3>
      <p>
        El formulario de contacto no envía nada a nuestros servidores: arma un mensaje y lo abre en <strong>WhatsApp</strong>.
        A partir de ahí, la conversación se rige por la política de privacidad de WhatsApp (Meta) y nosotros conservamos el
        historial del chat como cualquier usuario, para poder atenderte. Lo mismo aplica si nos escribís por email o Instagram.
      </p>
      <h3>c) Cuando contratás un servicio</h3>
      <p>
        Para presupuestar, facturar y prestar el servicio necesitamos tu <strong>nombre, teléfono, email, domicilio (si hay
        entrega o visita técnica) y datos de facturación (CUIT/DNI)</strong>. En reparaciones, además, los datos del equipo. En
        desarrollos, los accesos que nos des a tus cuentas (hosting, dominios, redes) y el contenido que nos entregues.
      </p>
      <h3>d) Datos dentro de tu equipo</h3>
      <p>
        Al reparar una computadora podemos tener acceso técnico a la información que contiene. <strong>No la revisamos, copiamos
        ni conservamos</strong>, salvo que nos contrates un respaldo, en cuyo caso te entregamos la copia y borramos la nuestra al
        finalizar el trabajo.
      </p>
      <h3>e) Acceso de clientes</h3>
      <p>
        La página <code>/clientes</code> solo compara el email que escribís con una lista de clientes para redirigirte a tu
        sistema. Ese email <strong>no se guarda ni se transmite</strong>: la comprobación se hace en tu navegador.
      </p>

      <h2>3. Para qué usamos los datos</h2>
      <ul>
        <li>Responder consultas y enviar presupuestos.</li>
        <li>Prestar el servicio contratado, coordinar entregas y visitas, y dar soporte.</li>
        <li>Facturar y cumplir obligaciones fiscales y contables.</li>
        <li>Proteger el Sitio contra usos abusivos (registros técnicos del hosting y Cloudflare).</li>
        <li>Con tu consentimiento, enviarte novedades sobre nuestros servicios. Podés pedir que dejemos de hacerlo cuando quieras.</li>
      </ul>
      <p>
        La base legal es la ejecución del contrato o de las medidas previas a él (presupuesto), el cumplimiento de obligaciones
        legales y, para lo demás, tu consentimiento.
      </p>

      <h2>4. Con quién compartimos los datos</h2>
      <p>No vendemos ni cedemos tus datos. Solo los comparten con nosotros, en la medida necesaria:</p>
      <ul>
        <li>
          <strong>Proveedores tecnológicos</strong> que usamos para operar: hosting y Cloudflare (Sitio), WhatsApp y email
          (comunicación), proveedores de dominios y hosting cuando contratás un sitio, y Firebase (Google) para las
          notificaciones de aplicaciones que desarrollamos, como Minuto Fútbol.
        </li>
        <li><strong>Organismos públicos</strong> cuando la ley lo exige (por ejemplo, AFIP/ARCA por facturación).</li>
      </ul>
      <p>
        Algunos de esos proveedores están fuera de Argentina (Estados Unidos, Unión Europea). Cuando eso ocurre, se trata de
        países o empresas con niveles de protección adecuados o con cláusulas contractuales que los garantizan, según lo previsto
        en la Ley 25.326 y la Disposición 60-E/2016 de la AAIP.
      </p>

      <h2>5. Cuánto tiempo conservamos los datos</h2>
      <ul>
        <li>Consultas que no derivan en contratación: hasta 12 meses.</li>
        <li>Datos de clientes y facturación: mientras dure la relación y por los plazos legales posteriores (10 años para documentación contable).</li>
        <li>Accesos a cuentas de clientes (hosting, dominios): mientras prestemos el servicio; después se eliminan.</li>
        <li>Registros técnicos del servidor: según la política del proveedor de hosting, normalmente menos de 90 días.</li>
      </ul>

      <h2>6. Seguridad</h2>
      <p>
        Aplicamos medidas razonables para proteger la información: conexiones cifradas (HTTPS), contraseñas robustas y acceso
        restringido a los datos de clientes. Ningún sistema es infalible; si detectáramos un incidente que afecte tus datos, te
        avisaríamos a la brevedad.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Podés ejercer en cualquier momento, de forma gratuita, los derechos de <strong>acceso, rectificación, actualización,
        supresión y oposición</strong> escribiendo a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> con el asunto
        &quot;Datos personales&quot;. Respondemos dentro de los 10 días corridos (acceso) o 5 días hábiles (rectificación y
        supresión) que fija la ley. Para acreditar tu identidad podemos pedirte una copia de tu DNI.
      </p>
      <div className="aviso">
        La <strong>Agencia de Acceso a la Información Pública</strong>, en su carácter de Órgano de Control de la Ley
        N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus
        derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.{" "}
        <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">
          argentina.gob.ar/aaip
        </a>
      </div>

      <h2>8. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a mayores de 18 años. No recopilamos a sabiendas datos de menores; si un padre, madre
        o tutor detecta que un menor nos envió datos, puede pedirnos que los eliminemos.
      </p>

      <h2>9. Aplicaciones que desarrollamos para terceros</h2>
      <p>
        Los sitios y sistemas que desarrollamos para nuestros clientes (por ejemplo, Minuto Fútbol para la Liga Deportiva de
        General Arenales) tienen su propio responsable del tratamiento y sus propias políticas. JJSoluciones actúa en esos casos
        como encargado técnico, bajo las instrucciones del cliente, y no usa esos datos para fines propios.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha. Si el cambio es relevante, te lo
        avisaremos por los medios de contacto que tengamos.
      </p>
    </PaginaLegal>
  );
}
