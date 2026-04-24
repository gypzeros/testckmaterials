"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sand-light text-sm tracking-[0.3em] uppercase mb-6 font-[family-name:var(--font-body)]"
        >
          Cerámica &middot; Porcelánico &middot; Revestimientos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight tracking-tight font-[family-name:var(--font-heading)]"
        >
          Materiales que
          <br />
          <span className="italic font-normal">transforman</span> espacios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-light font-[family-name:var(--font-body)]"
        >
          Distribuidor de las mejores marcas europeas en cerámica y porcelánico
          para proyectos que inspiran.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center font-[family-name:var(--font-body)]"
        >
          <a
            href="#marcas"
            className="inline-block px-8 py-4 bg-accent text-cream text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors duration-300"
          >
            Ver marcas
          </a>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 border border-cream/40 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll abajo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
