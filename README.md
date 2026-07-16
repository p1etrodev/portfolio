# Portfolio — "Exploded View"

Portfolio personal full stack. Identidad definida en [`brand.md`](brand.md) (paleta, tipografía, tono) y mockup de referencia en [`design.html`](design.html) (5 pantallas: Inicio, Proyectos, Caso de estudio, Sobre mí, Contacto). Todavía no existe el proyecto de frontend — este documento es la hoja de ruta para armarlo.

## To-do

### 0. Setup del proyecto
- [x] Stack: **Next.js + Tailwind** (Next para poder sumar API routes/lógica de backend propia)
- [x] Proyecto inicializado (`create-next-app`)
- [x] **oxlint** (lint) y **oxfmt** (formatter) configurados — reemplazan eslint
- [x] Tailwind configurado vía CSS + `@theme` ([globals.css](frontend/app/globals.css)): tokens de marca (`--color-bg`, `--color-paper`, `--color-layer-ui/api/db`, `--radius-brand`, `--shadow-brand`, `--ease-brand`)
- [x] Fuentes cargadas con `next/font/google` ([layout.tsx](frontend/app/layout.tsx)): Instrument Serif (`font-display`), Schibsted Grotesk (`font-ui`), DM Mono (`font-mono`)
- [x] Modo claro/oscuro vía `prefers-color-scheme` (dark por defecto, override en `@media (prefers-color-scheme: light)`, layer colors fijos — ver `brand.md` sección 2)
- [x] Estructura de carpetas (páginas/rutas, componentes, `lib`, `data`, `types`, `hooks`, `utils`) — ver detalle abajo

**Estructura creada:**
```
frontend/
├── app/
│   ├── layout.tsx          # metadata global, fuentes, JSON-LD (Person), header/footer
│   ├── page.tsx            # Inicio (vacío, pendiente sección 2)
│   ├── globals.css
│   ├── sitemap.ts          # genera /sitemap.xml a partir de data/projects.ts
│   ├── robots.ts           # /robots.txt
│   ├── manifest.ts         # /manifest.webmanifest
│   ├── proyectos/
│   │   ├── page.tsx        # listado
│   │   └── [slug]/page.tsx # caso de estudio, generateStaticParams + generateMetadata dinámico
│   ├── sobre-mi/page.tsx
│   ├── contacto/page.tsx
│   └── api/contact/route.ts # stub 501, falta implementar envío real (sección 4)
├── components/
│   ├── layout/    # SiteHeader, SiteFooter
│   ├── ui/        # vacío — Layer badge, Tag, Button (sección 1)
│   └── seo/       # JsonLd
├── lib/
│   ├── site-config.ts  # nombre, descripción, url, locale del sitio
│   └── metadata.ts     # buildMetadata() — genera title/description/canonical/OG/Twitter por ruta
├── data/projects.ts     # datos tipados de proyectos (placeholder, ver sección 3)
├── types/project.ts     # tipos Project, ProjectLayer, ProjectMetric, etc.
├── hooks/         # vacío, a demanda
└── utils/cn.ts    # helper para combinar clases
```

**Base SEO ya andando:** cada ruta tiene su propio `title`/`description`/canonical vía `buildMetadata()`, `sitemap.xml` lista todas las rutas (incluye proyectos dinámicos), `robots.txt` permite indexación, `manifest.webmanifest`, y JSON-LD tipo `Person` en el layout raíz. Falta: contenido real (sección 3), imagen OG de marca, y el favicon (sección 4).

### 1. Design system / componentes base
- [x] Componente **Layer badge** — [layer-badge.tsx](frontend/components/ui/layer-badge.tsx), recibe `ratios={{ ui, api, db }}` para la proporción real por proyecto
- [x] Componente **Tag** — [tag.tsx](frontend/components/ui/tag.tsx), un solo componente con `variant="ui" | "api" | "db"`
- [x] Componente de botón — [button.tsx](frontend/components/ui/button.tsx): un solo `Button` polimórfico con `variant="primary" | "ghost"`; si recibe `href` renderiza `<Link>`, si no, `<button>` (evita tener `Button` y `ButtonLink` por separado)
- [x] Tipografía: ya cubierta por los tokens `font-display`/`font-ui`/`font-mono` del theme (sección 0), no requiere componente aparte
- [x] Animación "assemble" — utilidad CSS `.animate-assemble` en [globals.css](frontend/app/globals.css)
- [x] Textura de fondo (gradientes tenues lima/magenta/cian) aplicada globalmente al `body` en [globals.css](frontend/app/globals.css)

### 2. Páginas / secciones
- [x] **Navbar**: logo + nav (proyectos/sobre mí/contacto) + botón CV, sticky, estado activo por ruta — [site-header.tsx](frontend/components/layout/site-header.tsx) (el link de CV apunta a `/cv.pdf`, que todavía no existe — sección 4)
- [x] **Inicio**: hero + "Proyectos destacados" (3 reales) + "Cómo trabajo" (bio real, 5+ años freelance) + CTA final a contacto — [page.tsx](frontend/app/page.tsx). "agendar llamada" linkea a `/contacto` (no hay herramienta de booking definida)
- [x] **Proyectos** (listado): grid de cards con crumb/numeración, stack y layer badge con la proporción real de cada proyecto — [page.tsx](frontend/app/proyectos/page.tsx)
- [x] **Caso de estudio** (detalle de proyecto): back link, crumb, stack, 3 columnas con borde de color por capa, métricas (vacías por ahora), navegación anterior/siguiente — [\[slug\]/page.tsx](frontend/app/proyectos/[slug]/page.tsx)
- [x] **Sobre mí**: bio real (5+ años freelance), stack por capa, proyectos separados en "productos propios" / "para clientes" con links, CTA a contacto — [page.tsx](frontend/app/sobre-mi/page.tsx)
- [x] **Contacto**: formulario funcional + canales reales (email, GitHub, LinkedIn) — [page.tsx](frontend/app/contacto/page.tsx) + [contact-form.tsx](frontend/components/forms/contact-form.tsx). El form ya hace POST a `/api/contact` y maneja estados de carga/éxito/error; hoy muestra error porque la API todavía es un stub 501 (sección 4)

### 3. Contenido real
- [x] Proyectos reales (analizados desde GitHub, `P1etrodev`, incluyendo repos privados), reemplazando los 4 ficticios en [data/projects.ts](frontend/data/projects.ts). 6 proyectos full-stack con layer badge:
  - **CRM de prospección y panel de salud organizacional** — cliente anonimizado como "consultora b2b" (repo real: "Sistema Conecta")
  - **Hospy** — SaaS de dashboard para hostels
  - **Costea** — gestión de producción para emprendimientos gastronómicos
  - **Pooly** — tracker de sesiones de pool con ranking ELO
  - **Panel interno de operaciones para un hostel** — cliente anonimizado (repo real: Alfar, migrado de Angular a Next.js + Supabase/PLpgSQL)
  - **Tienda online con pagos integrados** — cliente anonimizado (repo real: Vikuri, Angular + Supabase + Mercado Pago)
  - Sin métricas por ahora (decisión tuya: preferiste dejarlas vacías antes que inventar números) — la página ya degrada bien sin ellas
- [x] Sección **"Otros proyectos"** en la página de Proyectos ([data/side-projects.ts](frontend/data/side-projects.ts)) — 14 repos reales sin las 3 capas (librerías publicadas, apps de escritorio, juegos, bots), sin layer badge porque no aplicaría honestamente. Link a GitHub excepto en el único privado (D&D Waitress Bot)
- [x] Stack real en Sobre mí (TypeScript, Next.js, React, Astro, Vue, Angular · Django, DRF, FastAPI, Express, Go+Fiber · Postgres, Pandas, Polars) — [page.tsx](frontend/app/sobre-mi/page.tsx)
- [x] Nombre real en JSON-LD (Franco Pietrokovsky / pietrodev) y `siteConfig.name` — [layout.tsx](frontend/app/layout.tsx), [site-config.ts](frontend/lib/site-config.ts)
- [ ] CV descargable (PDF)
- [ ] Texto real "sobre mí" (el párrafo de proceso de trabajo sigue siendo el de `design.html`, no personalizado más allá de eso)

### 4. Funcionalidad
- [ ] Formulario de contacto funcional vía API route propia de Next.js (`/app/api/contact`), con envío de mail (Resend/Nodemailer) — la capa "API/lógica" del portfolio hace de caso de estudio en sí misma
- [ ] Descarga de CV (link a PDF)
- [ ] Navegación entre secciones (rail lateral del mockup → decidir si se traduce a nav real o se simplifica para sitio productivo)
- [x] Base de meta tags / SEO por ruta (título, descripción, canonical, OG, Twitter, sitemap, robots, JSON-LD)
- [ ] Imagen Open Graph de marca (falta el asset — hoy OG no tiene `images`)
- [x] Favicon/logo placeholder (`public/logo.svg`, no es el final) — usado como `icons.icon` en metadata, en `manifest.ts` y en el header

### 5. Responsive y accesibilidad
- [ ] Adaptar grid de proyectos y rail lateral a mobile (el mockup ya define breakpoint `900px` para `span-2`)
- [ ] Revisar contraste de colores en modo claro y oscuro
- [ ] Navegación por teclado y labels de formulario accesibles

### 6. Deploy
- [x] Hosting: **Railway**
- [ ] Escribir `Dockerfile` para build/deploy de Next.js en Railway (multi-stage build, `output: 'standalone'`, variables de entorno)
- [ ] Configurar dominio propio
- [ ] Analytics básico (opcional)

### 7. Pendientes de decisión (marcados en `brand.md`)
- [ ] Confirmar disponibilidad del handle `pietrodev` en Instagram/TikTok/YouTube y como dominio antes de fijarlo en todos los materiales
