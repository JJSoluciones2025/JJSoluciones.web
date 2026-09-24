import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import { EMPRESA } from "@/lib/contenido";

export const metadata: Metadata = {
  alternates: { canonical: "legal/terminos/" },
  title: "Términos y Condiciones",
  description: "Condiciones de uso del sitio y de contratación de los servicios de JJSoluciones.",
};

export default function TerminosPage() {
  return (
    <PaginaLegal titulo="Términos y Condiciones" actual="/legal/terminos/">
      <p>
        Estos Términos y Condiciones (los &quot;Términos&quot;) regulan el uso del sitio web{" "}
        <strong>jsoluciones.com.ar</strong> (el &quot;Sitio&quot;) y la contratación de los servicios que ofrece{" "}
        <strong>JJSoluciones</strong> (&quot;JJSoluciones&quot;, &quot;nosotros&quot;), con domicilio en {EMPRESA.ubicacion} y
        contacto en <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>. Al navegar el Sitio o contratar un servicio,
        aceptás estos Términos. Si no estás de acuerdo con alguna parte, te pedimos que no uses el Sitio.
      </p>

      <h2>1. Quiénes somos y qué hacemos</h2>
      <p>
        JJSoluciones es un equipo de tecnología con base en la provincia de Buenos Aires, Argentina, que presta servicios de:
      </p>
      <ul>
        <li>Desarrollo de sistemas de gestión a medida (stock, ventas, clientes, reportes).</li>
        <li>Desarrollo de sitios web, landing pages, tiendas y aplicaciones.</li>
        <li>Reparación y mantenimiento de computadoras de escritorio y notebooks.</li>
        <li>Asistencia técnica remota y presencial.</li>
        <li>Hosting y administración de sitios y sistemas para nuestros clientes.</li>
      </ul>

      <h2>2. Uso del Sitio</h2>
      <p>
        El Sitio es informativo: presenta nuestros servicios, precios orientativos y medios de contacto. Podés usarlo
        libremente siempre que no lo hagas con fines ilícitos, no intentes acceder a áreas restringidas, no interfieras con su
        funcionamiento ni copies su contenido para fines comerciales sin autorización.
      </p>
      <p>
        El <strong>Acceso de clientes</strong> (<code>/clientes</code>) es un atajo que redirige a cada cliente al sistema de
        gestión que le desarrollamos. Ese sistema tiene sus propias credenciales y condiciones de uso, que se entregan al momento
        de la implementación. El Sitio no almacena las credenciales ni los datos de esos sistemas.
      </p>

      <h2>3. Presupuestos, precios y pagos</h2>
      <ol>
        <li>
          Los precios publicados en el Sitio son <strong>orientativos</strong>, están expresados en pesos argentinos e incluyen
          IVA salvo indicación en contrario. Pueden actualizarse sin previo aviso; el precio que rige es el del presupuesto
          escrito que te enviamos (por WhatsApp, email o el medio que acordemos).
        </li>
        <li>Los presupuestos tienen una validez de <strong>15 días corridos</strong> desde su envío, salvo que se indique otro plazo.</li>
        <li>
          Los trabajos de desarrollo (sitios web y sistemas) se inician con una <strong>seña del 50 %</strong> y se entregan
          contra el pago del saldo, salvo acuerdo distinto por escrito. Las reparaciones se abonan al retirar el equipo.
        </li>
        <li>Aceptamos transferencia bancaria, billeteras virtuales y efectivo. Emitimos comprobante por cada pago.</li>
        <li>Los servicios mensuales (hosting, mantenimiento, soporte) se facturan por adelantado y pueden darse de baja con 30 días de aviso.</li>
      </ol>

      <h2>4. Reparación y mantenimiento de equipos</h2>
      <ol>
        <li>
          Al dejarnos un equipo, te entregamos un comprobante de recepción con la descripción del equipo y la falla informada.
          Ese comprobante es necesario para retirarlo.
        </li>
        <li>
          El diagnóstico puede tener un costo que se informa antes de realizarlo. Si aceptás la reparación, el costo del
          diagnóstico se descuenta del total.
        </li>
        <li>
          <strong>Respaldo de datos:</strong> toda reparación puede implicar pérdida de información. Es responsabilidad del
          cliente contar con un respaldo previo. Si querés, ofrecemos el servicio de backup antes de intervenir el equipo, con
          costo adicional. JJSoluciones no se responsabiliza por la pérdida de datos, programas o configuraciones.
        </li>
        <li>
          <strong>Garantía:</strong> las reparaciones tienen una garantía de <strong>30 días</strong> sobre la falla reparada y
          la mano de obra. Los repuestos nuevos tienen la garantía del fabricante o distribuidor. La garantía no cubre daños por
          golpes, líquidos, sobretensión, virus, instalación de software por parte del cliente ni intervención de terceros.
        </li>
        <li>
          Los equipos no retirados dentro de los <strong>60 días</strong> de notificada la finalización del trabajo se
          considerarán abandonados conforme al artículo 2525 y concordantes del Código Civil y Comercial, pudiendo JJSoluciones
          disponer de ellos para cubrir los costos del servicio.
        </li>
      </ol>

      <h2>5. Desarrollo de sitios web y sistemas</h2>
      <ol>
        <li>
          El alcance de cada trabajo (secciones, funcionalidades, plazos) se define en el presupuesto aceptado. Los cambios
          fuera de ese alcance se presupuestan aparte.
        </li>
        <li>
          El cliente debe entregar en tiempo el material necesario (textos, imágenes, logos, accesos). Los plazos de entrega se
          cuentan desde que recibimos ese material completo.
        </li>
        <li>
          Cada plan incluye una cantidad de rondas de revisión indicada en el presupuesto. Una vez aprobada la entrega, los
          ajustes posteriores se consideran mantenimiento.
        </li>
        <li>
          <strong>Propiedad intelectual:</strong> con el pago total, el cliente adquiere el derecho de uso del sitio o sistema
          entregado, incluyendo su diseño y contenido específico. JJSoluciones conserva la propiedad de las herramientas,
          componentes y librerías genéricas que reutiliza en distintos proyectos, y el derecho a mencionar el trabajo en su
          portfolio, salvo pedido en contrario por escrito.
        </li>
        <li>
          Los dominios se registran a nombre del cliente cuando el cliente lo solicita. El hosting que provee JJSoluciones se
          mantiene mientras el servicio esté al día; ante falta de pago de más de 30 días el sitio puede suspenderse.
        </li>
        <li>
          El cliente es responsable del contenido que publica en su sitio o carga en su sistema y de contar con los derechos
          sobre ese contenido.
        </li>
      </ol>

      <h2>6. Soporte y garantía de los desarrollos</h2>
      <p>
        Los desarrollos incluyen el período de soporte indicado en cada plan (por ejemplo, 30 días en el plan Website Premium)
        para corregir errores de funcionamiento sin costo. No incluye nuevas funcionalidades, cambios de diseño ni problemas
        causados por modificaciones del cliente o de terceros, ni por cambios en servicios externos (plataformas, APIs,
        proveedores de hosting no gestionados por nosotros).
      </p>

      <h2>7. Limitación de responsabilidad</h2>
      <p>
        Trabajamos con diligencia, pero no podemos garantizar que el Sitio o los servicios estén libres de interrupciones o
        errores. En la máxima medida permitida por la ley, JJSoluciones no responde por lucro cesante ni daños indirectos
        derivados del uso del Sitio o de los servicios. En todos los casos, nuestra responsabilidad se limita al monto abonado por
        el servicio en cuestión. Nada de lo anterior limita los derechos que te reconoce la Ley 24.240 de Defensa del Consumidor.
      </p>

      <h2>8. Contenido de terceros</h2>
      <p>
        El Sitio muestra contenido de otros sitios y servicios (por ejemplo, la vista previa de Minuto Fútbol y la escena 3D del
        inicio) y contiene enlaces a WhatsApp e Instagram. Esos servicios tienen sus propias condiciones y políticas de
        privacidad, que no controlamos. Podés bloquear el contenido de terceros desde el aviso de cookies.
      </p>

      <h2>9. Minuto Fútbol y otras aplicaciones</h2>
      <p>
        Minuto Fútbol (sitio y aplicación para Android) es un producto desarrollado por JJSoluciones para la Liga Deportiva de
        General Arenales. Su descarga desde el Sitio se ofrece tal cual, sin costo. Al instalarla, aplican las condiciones y la
        política de privacidad propias de esa aplicación.
      </p>

      <h2>10. Derecho de arrepentimiento</h2>
      <p>
        Si contratás un servicio a distancia (por ejemplo, por WhatsApp o email), tenés derecho a revocar la aceptación dentro
        de los <strong>10 días corridos</strong> desde la contratación, sin expresar motivos ni costo, conforme al artículo 34
        de la Ley 24.240. Podés hacerlo escribiendo a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> o por WhatsApp.
        El derecho no aplica a trabajos ya ejecutados con tu conformidad expresa.
      </p>

      <h2>11. Propiedad intelectual del Sitio</h2>
      <p>
        El diseño, los textos, las marcas y el código del Sitio son propiedad de JJSoluciones o de sus licenciantes. Las marcas
        y logos de terceros (clubes, empresas, sponsors) pertenecen a sus titulares.
      </p>

      <h2>12. Modificaciones</h2>
      <p>
        Podemos actualizar estos Términos. La versión vigente es la publicada en esta página, con su fecha de actualización.
        Los cambios no afectan a los trabajos ya presupuestados y aceptados.
      </p>

      <h2>13. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República Argentina. Para cualquier controversia, las partes intentarán
        primero una solución amistosa; de no lograrla, se someten a los tribunales ordinarios competentes de la provincia de
        Buenos Aires, sin perjuicio del derecho del consumidor a recurrir a los tribunales de su domicilio y a la Dirección
        Nacional de Defensa del Consumidor (<a href="https://www.argentina.gob.ar/defensadelconsumidor" target="_blank" rel="noopener noreferrer">argentina.gob.ar/defensadelconsumidor</a>).
      </p>

      <h2>14. Contacto</h2>
      <p>
        Por consultas sobre estos Términos: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> · WhatsApp{" "}
        {EMPRESA.telefonoVisible}.
      </p>
    </PaginaLegal>
  );
}
