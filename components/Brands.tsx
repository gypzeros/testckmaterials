"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { brands } from "@/lib/brands";
import BrandModal from "./BrandModal";
import type { Brand } from "@/lib/brands";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <>
      <section id="marcas" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-body)]"
            >
              Nuestras marcas
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light text-charcoal font-[family-name:var(--font-heading)]"
            >
              Firmas de <span className="italic">prestigio</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <motion.button
                key={brand.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => setSelectedBrand(brand)}
                className="group relative overflow-hidden aspect-[3/2] text-left cursor-pointer"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${brand.image}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl text-cream font-light font-[family-name:var(--font-heading)] mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-cream/70 text-sm font-[family-name:var(--font-body)] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {brand.description}
                  </p>
                  <span className="mt-3 text-accent text-xs tracking-widest uppercase font-[family-name:var(--font-body)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ver catálogo &rarr;
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <BrandModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
      />
    </>
  );
}
