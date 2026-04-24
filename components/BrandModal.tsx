"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Loader2 } from "lucide-react";
import type { Brand } from "@/lib/brands";

interface BrandModalProps {
  brand: Brand | null;
  onClose: () => void;
}

export default function BrandModal({ brand, onClose }: BrandModalProps) {
  const [iframeStatus, setIframeStatus] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  useEffect(() => {
    if (!brand) return;
    setIframeStatus("loading");

    const timer = setTimeout(() => {
      if (iframeStatus === "loading") {
        setIframeStatus("error");
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [brand]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Block body scroll when modal is open
  useEffect(() => {
    if (brand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [brand]);

  return (
    <AnimatePresence>
      {brand && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-charcoal/95 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-charcoal border-b border-white/10">
            <h3 className="text-cream text-lg font-[family-name:var(--font-heading)]">
              {brand.name}
            </h3>
            <div className="flex items-center gap-4">
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-accent text-sm transition-colors font-[family-name:var(--font-body)]"
              >
                <ExternalLink size={16} />
                <span className="hidden sm:inline">Abrir en nueva pestaña</span>
              </a>
              <button
                onClick={onClose}
                className="text-cream/70 hover:text-cream transition-colors p-1"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Iframe area */}
          <div className="flex-1 relative">
            {iframeStatus === "loading" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-cream/60">
                <Loader2 size={32} className="animate-spin" />
                <p className="text-sm font-[family-name:var(--font-body)]">
                  Cargando catálogo...
                </p>
              </div>
            )}

            {iframeStatus === "error" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-cream/60 px-6 text-center">
                <p className="text-lg font-[family-name:var(--font-heading)]">
                  No se ha podido cargar el catálogo embebido
                </p>
                <p className="text-sm max-w-md font-[family-name:var(--font-body)]">
                  Algunos sitios web no permiten ser embebidos. Puedes acceder
                  al catálogo directamente:
                </p>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-cream text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors font-[family-name:var(--font-body)]"
                >
                  <ExternalLink size={16} />
                  Abrir catálogo en nueva pestaña
                </a>
              </div>
            ) : (
              <iframe
                src={brand.url}
                title={`Catálogo de ${brand.name}`}
                className="w-full h-full border-0"
                onLoad={() => setIframeStatus("loaded")}
                onError={() => setIframeStatus("error")}
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
