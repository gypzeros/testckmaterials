# CKMaterials — Landing Page

Landing page profesional para **CKMaterials**, distribuidor de cerámica, porcelánico, azulejos y revestimientos de alta calidad.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)
- **Google Fonts** (Cormorant Garamond + Inter)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Sube el repositorio a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/ckmaterials.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com), importa el repositorio y haz clic en **Deploy**. No necesita variables de entorno ni configuración especial.

## Personalización

### Datos de contacto y formulario
Edita `lib/config.ts`:
- `FORMSPREE_ENDPOINT`: tu endpoint de [Formspree](https://formspree.io) (gratuito)
- `CONTACT_INFO`: teléfono, email y dirección
- `GOOGLE_MAPS_EMBED_URL`: URL de Google Maps embebido
- `SOCIAL_LINKS`: URLs de redes sociales

### Marcas
Edita `lib/brands.ts` para añadir, quitar o modificar marcas. Cada marca tiene:
- `name`: nombre visible
- `slug`: identificador URL
- `url`: web oficial / catálogo
- `description`: breve descripción
- `image`: URL de imagen representativa

### Colores
Los colores se definen en `app/globals.css` dentro de `@theme inline`:
- `--color-charcoal`: negro profundo (#1a1a1a)
- `--color-sand`: arena/beige (#d4c5a9)
- `--color-accent`: terracota/dorado (#b8864a)
- `--color-cream`: fondo blanco roto (#faf8f5)

### Textos
- Hero: `components/Hero.tsx`
- Sobre nosotros: `components/About.tsx`
- Servicios: `components/Services.tsx`
- Páginas legales: `app/aviso-legal/page.tsx` y `app/privacidad/page.tsx`

### SEO
Metadatos en `app/layout.tsx`. Sitemap y robots en `app/sitemap.ts` y `app/robots.ts`.

## Estructura del proyecto

```
ckmaterials/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos y tema
│   ├── sitemap.ts          # Sitemap XML
│   ├── robots.ts           # Robots.txt
│   ├── aviso-legal/        # Página de aviso legal
│   └── privacidad/         # Página de privacidad
├── components/
│   ├── Navbar.tsx           # Barra de navegación
│   ├── Hero.tsx             # Sección hero
│   ├── About.tsx            # Sobre nosotros
│   ├── Brands.tsx           # Grid de marcas
│   ├── BrandModal.tsx       # Modal con iframe del catálogo
│   ├── Gallery.tsx          # Galería masonry
│   ├── Services.tsx         # Servicios
│   ├── Contact.tsx          # Formulario + mapa
│   ├── Footer.tsx           # Pie de página
│   └── Logo.tsx             # Logo SVG
├── lib/
│   ├── brands.ts            # Datos de marcas
│   └── config.ts            # Configuración (endpoints, contacto)
├── public/
│   └── images/
├── next.config.ts
├── tsconfig.json
└── package.json
```
