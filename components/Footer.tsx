"use client";

import Logo from "./Logo";
import { brands } from "@/lib/brands";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/config";

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconLinkedin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#marcas", label: "Marcas" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const socialIcons = [
  { icon: IconInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: IconFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: IconLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 font-[family-name:var(--font-body)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="h-8 w-auto mb-6" />
            <p className="text-sm leading-relaxed text-cream/50">
              Distribuidor de referencia en cerámica, porcelánico y
              revestimientos de alta calidad.
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream text-sm tracking-widest uppercase mb-6">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-cream text-sm tracking-widest uppercase mb-6">
              Marcas
            </h4>
            <ul className="space-y-3">
              {brands.slice(0, 6).map((brand) => (
                <li key={brand.slug}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm tracking-widest uppercase mb-6">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} CKMaterials. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/aviso-legal" className="hover:text-cream/60 transition-colors">
              Aviso legal
            </a>
            <a href="/privacidad" className="hover:text-cream/60 transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
