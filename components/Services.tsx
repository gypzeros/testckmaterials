"use client";

import { motion } from "framer-motion";
import { Palette, Truck, Package, BadgePercent } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Asesoramiento personalizado",
    description:
      "Te ayudamos a elegir los materiales que mejor se adaptan a tu proyecto, combinando estética y funcionalidad.",
  },
  {
    icon: Truck,
    title: "Envío directo a obra",
    description:
      "Gestionamos la logística para que los materiales lleguen a tu obra en perfecto estado y en el plazo acordado.",
  },
  {
    icon: Package,
    title: "Muestras sin compromiso",
    description:
      "Solicita muestras de cualquier material de nuestro catálogo para que puedas verlo y tocarlo antes de decidir.",
  },
  {
    icon: BadgePercent,
    title: "Precios profesionales",
    description:
      "Condiciones especiales para profesionales del sector: arquitectos, interioristas, constructoras y reformistas.",
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

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-body)]"
          >
            Servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light font-[family-name:var(--font-heading)]"
          >
            Por qué <span className="italic">elegirnos</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-cream/10 p-8 hover:border-accent/40 transition-colors duration-500 group"
            >
              <service.icon
                size={28}
                className="text-accent mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-light mb-4 font-[family-name:var(--font-heading)] text-2xl">
                {service.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed font-[family-name:var(--font-body)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
