import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — CKMaterials",
};

export default function Privacidad() {
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
          Política de Privacidad
        </h1>
        <div className="prose prose-neutral max-w-none text-gray-mid space-y-6 text-sm leading-relaxed">
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo
            y del Consejo (RGPD), le informamos sobre el tratamiento de sus
            datos personales.
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Responsable del tratamiento
          </h2>
          <p>
            CKMaterials
            <br />
            Email: info@ckmaterials.com
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Finalidad del tratamiento
          </h2>
          <p>
            Los datos recogidos a través del formulario de contacto serán
            utilizados exclusivamente para atender su consulta y, en su caso,
            enviarle información comercial relacionada con nuestros productos y
            servicios.
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Base legal
          </h2>
          <p>
            El consentimiento del interesado al enviar el formulario de contacto
            y el interés legítimo en la gestión de consultas comerciales.
          </p>
          <h2 className="text-xl font-light text-charcoal font-[family-name:var(--font-heading)]">
            Derechos
          </h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión,
            limitación, portabilidad y oposición enviando un email a
            info@ckmaterials.com.
          </p>
        </div>
      </div>
    </div>
  );
}
