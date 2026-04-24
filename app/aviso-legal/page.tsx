import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — CKMaterials",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-cream py-32 px-6">
      <div className="max-w-3xl mx-auto font-[family-name:var(--font-body)]">
        <Link
          href="/"
          className="text-accent text-sm tracking-widest uppercase hover:underline"
        >
          &larr; Volver al inicio
        </Link>
        <h1 className="text-4xl font-light text-charcoal mt-8 mb-8 font-[family-name:var(--font-heading)]">
          Aviso Legal
        </h1>
        <div className="prose prose-neutral max-w-none text-gray-mid space-y-6 text-sm leading-relaxed">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se informa que el presente sitio web es propiedad de CKMaterials.
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Datos identificativos
          </h2>
          <p>
            Denominación social: CKMaterials
            <br />
            Domicilio social: [Dirección completa]
            <br />
            CIF/NIF: [Número]
            <br />
            Email: info@ckmaterials.com
            <br />
            Teléfono: [Número]
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Propiedad intelectual
          </h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos,
            fotografías, gráficos, imágenes, iconos, tecnología, software, así
            como su diseño gráfico y códigos fuente, constituyen una obra cuya
            propiedad pertenece a CKMaterials.
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Limitación de responsabilidad
          </h2>
          <p>
            CKMaterials no se hace responsable de los daños y perjuicios que
            pudieran derivarse del uso de la información contenida en este sitio
            web. Los enlaces a terceros se proporcionan únicamente a título
            informativo.
          </p>
        </div>
      </div>
    </div>
  );
}
