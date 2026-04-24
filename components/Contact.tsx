"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { FORMSPREE_ENDPOINT, CONTACT_INFO, GOOGLE_MAPS_EMBED_URL } from "@/lib/config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail - user can retry
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-body)]"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-charcoal font-[family-name:var(--font-heading)]"
          >
            Hablemos de tu <span className="italic">proyecto</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-2xl font-light font-[family-name:var(--font-heading)]">
                  Mensaje enviado
                </h3>
                <p className="text-gray-mid font-[family-name:var(--font-body)]">
                  Nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-[family-name:var(--font-body)]">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-charcoal mb-2 tracking-wide"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-sand/50 text-charcoal placeholder-gray-mid/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-charcoal mb-2 tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-sand/50 text-charcoal placeholder-gray-mid/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-charcoal mb-2 tracking-wide"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white border border-sand/50 text-charcoal placeholder-gray-mid/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-charcoal mb-2 tracking-wide"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border border-sand/50 text-charcoal placeholder-gray-mid/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                  {submitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6 font-[family-name:var(--font-body)]">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-mid uppercase tracking-wide mb-1">
                    Teléfono
                  </p>
                  <p className="text-charcoal">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-mid uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-charcoal">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-mid uppercase tracking-wide mb-1">
                    Dirección
                  </p>
                  <p className="text-charcoal">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] w-full">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de CKMaterials"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
