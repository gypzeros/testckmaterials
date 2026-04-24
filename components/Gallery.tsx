"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
    alt: "Baño moderno con revestimiento cerámico",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    alt: "Cocina con azulejos de diseño",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    alt: "Salón con pavimento porcelánico",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=800&fit=crop",
    alt: "Detalle de revestimiento mármol",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=400&fit=crop",
    alt: "Interior minimalista con cerámica",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
    alt: "Terraza con gres porcelánico",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=800&fit=crop",
    alt: "Ducha con azulejo artesanal",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
    alt: "Hall de entrada con mosaico",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    alt: "Ambiente de diseño contemporáneo",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop",
    alt: "Piscina con revestimiento cerámico",
    tall: true,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-body)]"
          >
            Inspiración
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-charcoal font-[family-name:var(--font-heading)]"
          >
            Galería de <span className="italic">ambientes</span>
          </motion.h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden group break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  img.tall ? "h-[450px]" : "h-[280px]"
                }`}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-end">
                <p className="text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 font-[family-name:var(--font-body)]">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
