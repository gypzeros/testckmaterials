"use client";

import { motion } from "framer-motion";
import { Award, Layers, Users, Truck } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Calidad Premium",
    description:
      "Solo trabajamos con las mejores marcas europeas, garantizando materiales de primera línea.",
  },
  {
    icon: Layers,
    title: "Variedad",
    description:
      "Amplio catálogo de cerámica, porcelánico, azulejos y revestimientos para todo tipo de proyectos.",
  },
  {
    icon: Users,
    title: "Asesoramiento",
    description:
      "Nuestro equipo te guía en la elección del material perfecto para tu espacio.",
  },
  {
    icon: Truck,
    title: "Entrega a obra",
    description:
      "Servicio de entrega directa a tu proyecto, con plazos fiables y cuidado en el transporte.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-body)]"
          >
            Sobre nosotros
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-charcoal mb-6 font-[family-name:var(--font-heading)]"
          >
            Tu distribuidor de
            <span className="italic"> referencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-mid text-lg leading-relaxed font-[family-name:var(--font-body)]"
          >
            En CKMaterials seleccionamos y distribuimos cerámica, porcelánico y
            revestimientos de las firmas más prestigiosas de Europa. Cada pieza
            que ofrecemos refleja nuestro compromiso con la excelencia y el
            diseño.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center p-8 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-sand mb-6 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                <value.icon
                  size={24}
                  className="text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-medium text-charcoal mb-3 font-[family-name:var(--font-heading)] text-xl">
                {value.title}
              </h3>
              <p className="text-gray-mid text-sm leading-relaxed font-[family-name:var(--font-body)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
