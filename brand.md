# Manual de Marca — "Exploded View"

Manual de identidad personal como desarrollador full stack. Este documento tiene dos partes:

- **Parte A — Identidad base**: concepto, paleta, tipografía y tono de voz. Válido para cualquier material (CV, portfolio, redes, presentaciones, firma de email).
- **Parte B — Creación de contenido**: cómo se traduce esa identidad a una presencia de contenido tech con publicación recurrente, en cualquier red (Instagram, TikTok, YouTube, etc.).

---

## Índice

**Parte A — Identidad base**
1. Concepto
2. Paleta de colores
3. Tipografía
4. El "layer badge"
5. Tono de voz
6. Reglas de aplicación

**Parte B — Creación de contenido**
7. Perfil / presencia en redes
8. Content pillars
9. Formatos y specs por tipo de plataforma
10. Plantilla de portada
11. Voz en video (hooks)
12. Consistencia entre piezas y plataformas

---
---

# PARTE A — IDENTIDAD BASE

## 1. Concepto

**"Exploded view"**: el trabajo de un full stack tiene capas — interfaz, API, datos. Esas capas se muestran siempre como motivo visual: franjas de color apiladas de fondo y un "layer badge" de tres barras que acompaña cada proyecto o pieza de trabajo, mostrando de qué está hecho.

Es una dirección deliberadamente distinta a lo esperable (ni terminal oscura genérica, ni cuaderno de papel/notion-style). La premisa es literal: mostrar lo que soy — alguien que entrega la pila completa, no una sola capa.

**Mensaje central**: "Hago el producto entero" — de la base de datos al click que ve el usuario. El diferencial no es una tecnología puntual sino la entrega end-to-end.

---

## 2. Paleta de colores

Fondo índigo casi negro con tres acentos **funcionales, no decorativos**: cada color representa siempre la misma capa técnica, en cualquier pieza donde aparezca.

| Token | Valor (dark) | Valor (light) | Uso |
|---|---|---|---|
| `--color-bg` | `#0e1024` | `#eef0fb` | Fondo general |
| `--color-paper` | `#171a35` | `#ffffff` | Superficies / cards |
| `--color-paper-2` | `#1f2342` | `#f4f5fc` | Superficies secundarias |
| `--color-text` | `#eef0fb` | `#121327` | Texto principal |
| `--color-text-muted` | `#8d90b8` | `#5c5f80` | Texto secundario |
| `--layer-ui` (lima) | `#d4f542` | — | Capa **interfaz / UI** |
| `--layer-api` (magenta) | `#ff5d8f` | — | Capa **API / lógica de negocio** |
| `--layer-db` (cian) | `#4fd1e8` | — | Capa **datos / base de datos** |

Los tres colores de capa (lima / magenta / cian) se mantienen **fijos siempre**, en modo claro o modo oscuro. Son la firma de la marca y no varían entre materiales.

**Textura de fondo (opcional)**: gradientes radiales/lineales muy tenues (5–9% opacidad) usando los mismos tres acentos, para dar sensación de profundidad sin saturar.

---

## 3. Tipografía

Tres familias, cada una con un rol fijo. No se mezclan funciones entre ellas.

| Familia | Uso | Notas |
|---|---|---|
| **Instrument Serif** (`italic`) | Frases fuertes, taglines emocionales | Siempre en cursiva. Da el contraste técnico-emocional. |
| **Schibsted Grotesk** (400/500/700/900) | Texto general, títulos, botones, cuerpo | Pesos 900/800/700 para jerarquía de headings. |
| **DM Mono** (400/500) | Specs técnicas, labels, tags, métricas | Todo lo que se lee como dato/código. Siempre en mayúsculas, con `letter-spacing` amplio en labels (`0.08em`–`0.1em`). |

**Fuentes (Google Fonts):**
```
Instrument+Serif:ital@0;1
Schibsted+Grotesk:wght@400;500;700;900
DM+Mono:wght@400;500
```

**Regla dura**: nunca usar Instrument Serif para texto de interfaz, ni DM Mono para cuerpo de texto largo.

---

## 4. El "layer badge" — elemento de firma

Barra de tres segmentos de color (lima / magenta / cian) que representa la proporción interfaz/lógica/datos de un proyecto o pieza de trabajo. Es el elemento gráfico más reconocible de la marca y se reutiliza en cualquier material: portfolio, CV, firma de email, redes.

- Las proporciones son **distintas según el proyecto real** (ej.: un checkout es más UI-heavy, un motor de pricing es más API-heavy, un dashboard de scoring es más DB-heavy). No es decorativo: comunica en qué consistió realmente el trabajo.
- Los **tags** (`tag-ui`, `tag-api`, `tag-db`) son la versión inline del mismo código de color, con un punto del color correspondiente. Se usan en listas de skills o stacks.

---

## 5. Tono de voz

- Español rioplatense, directo, en primera persona ("vos", "tenés que escribirte").
- Frases cortas y afirmativas, sin jerga de marketing.
- Siempre concreto: en vez de "experiencia en desarrollo full stack", números y hechos ("80k SKUs indexados", "+9% conversión", stacks reales por proyecto).
- La propuesta de valor es el trabajo end-to-end, no una tecnología de moda.

---

## 6. Reglas de aplicación

- El código de color de capas (lima=UI, magenta=API, cian=datos) se mantiene 100% consistente en todos los materiales donde aparezca la marca.
- Los roles fijos de cada tipografía se respetan en todo lo que se produzca.
- La marca se aplica de forma consistente en cada superficie: portfolio, CV, redes, firma de email, presentaciones.

---
---

# PARTE B — CREACIÓN DE CONTENIDO (multi-plataforma)

Hereda paleta, tipografía y tono de voz de la Parte A. Acá se resuelve lo específico de una presencia de contenido con publicación recurrente, pensada para funcionar igual en Instagram, TikTok, YouTube o cualquier red que se sume después.

## 7. Perfil / presencia en redes

- **Usuario (@)**: `pietrodev` — el mismo handle en todas las plataformas donde se pueda, bajo el nombre/apellido de marca que también se use en dominio, CV y demás materiales. Corto, sin letras problemáticas, fácil de decir en voz alta. Pendiente de confirmar disponibilidad en Instagram, TikTok, YouTube y como dominio antes de darlo por definitivo en todos los materiales.
- **Foto de perfil**: idéntica en todas las plataformas — fondo `--color-bg` (índigo casi negro) con el layer badge o una versión simplificada de las tres franjas como elemento central. Nada de foto de perfil genérica sin marca, y nada de variarla entre redes.
- **Bio / descripción de canal**: misma estructura en todas las plataformas, adaptada al límite de caracteres de cada una —
  ```
  [una línea Schibsted 900: qué hacés]
  [una línea itálica-equivalente: el mensaje "hago el producto entero"]
  [link en bio / enlace del canal]
  ```
  Ejemplo de tono (no de contenido): afirmación corta + aterrizaje concreto, sin adjetivos vacíos.
- **Organización de contenido guardado** (Highlights en Instagram, playlists en YouTube, colecciones en TikTok): cada categoría con un color de capa asociado (ej. "Proyectos", "Tips", "Stack"), consistente entre plataformas.

---

## 8. Content pillars

La Parte A asume que cada pieza es "un proyecto real". Para una cuenta activa hacen falta más categorías:

| Pilar | Qué es | ¿Lleva layer badge? |
|---|---|---|
| **Proyecto real** | Caso concreto: qué hiciste, stack, métrica de impacto | Sí — proporción real UI/API/DB de ese proyecto |
| **Tip técnico** | Solución puntual, patrón, herramienta | No, o versión mínima (un tag de color, no la barra completa) |
| **Opinión / hot take** | Postura sobre una tecnología, práctica o tendencia | No |
| **Detrás de escena** | Proceso de trabajo, día a día, cómo pensás un problema | Opcional, según si hay un proyecto de fondo |

Definir una proporción aproximada de publicación entre pilares (ej. 40% proyecto real, 30% tips, 20% opinión, 10% detrás de escena) ayuda a que el feed no dependa solo de tener "proyectos nuevos" para publicar.

---

## 9. Formatos y specs por tipo de plataforma

El contenido vertical corto (Reels, TikTok, YouTube Shorts) comparte specs entre sí; lo mismo el contenido horizontal largo y el contenido estático. Conviene pensar en **formato**, no en plataforma, y adaptar el mismo diseño base a donde corresponda.

| Formato | Aspect ratio | Dónde se usa | Notas |
|---|---|---|---|
| Vertical corto | 9:16 (1080×1920) | Reels, TikTok, YouTube Shorts | Texto legible a tamaño mobile: mínimo ~60px de altura de línea en Schibsted 700/900. Diseñar una sola vez y exportar para las tres plataformas. |
| Horizontal largo | 16:9 (1920×1080) | YouTube (video principal) | Portada/thumbnail se diseña aparte (ver más abajo); el layer badge puede ir de marca de agua fija en una esquina durante todo el video. |
| Post estático de feed | 4:5 (1080×1350) | Instagram, X, LinkedIn | Prioridad sobre 1:1: ocupa más espacio en el feed. |
| Carrusel | 4:5 por slide | Instagram, LinkedIn | Primera slide = portada (ver sección 10). Últimas slides con espacio para CTA (guardar/compartir). |
| Thumbnail / portada de video | 16:9 (YouTube) o recorte 9:16 visible en grid (Reels/TikTok) | Todas las de video | El texto principal no puede depender de zonas que la plataforma tapa con su propia UI (controles de reproducción, ícono de perfil, contador de likes). Revisar el área segura de cada plataforma antes de exportar. |

**Regla de legibilidad mobile**: en cualquier formato y cualquier plataforma, el texto en DM Mono no baja de un tamaño que se lea sin hacer zoom (specs y labels son apoyo, no el mensaje principal).

---

## 10. Plantilla de portada (carrusel, Reel/TikTok/Short, thumbnail de YouTube)

Misma estructura base para cualquier plataforma, ajustando proporciones al formato correspondiente (ver sección 9):

1. Franja superior con el layer badge (si aplica al pilar) o un tag de color simple.
2. Título en Schibsted Grotesk 900, 2-4 líneas máximo.
3. Línea de apoyo en Instrument Serif itálica (el "gancho" emocional o de contexto).
4. Fondo con la textura tenue de gradientes de marca (5-9% opacidad), nunca plano sin textura ni saturado.

Mismo layout en cada pieza = reconocible en cualquier feed o grid sin leer el texto, sea Instagram, TikTok o YouTube.

---

## 11. Voz en video (hooks)

El tono de voz de la Parte A (directo, concreto, con números) se mantiene, pero video tiene reglas propias:

- **Primeros 2 segundos**: afirmación o número concreto, nunca introducción tipo "hoy les quiero contar...". Mismo espíritu que "80k SKUs indexados", pero dicho en voz alta y de entrada.
- **Sin jerga de marketing también en video**: nada de "en este video vas a aprender", ir directo al punto.
- **Cierre**: termina con el dato o la conclusión, no con un resumen genérico ("y eso fue todo"). Si hay CTA (seguir, guardar), que sea una frase corta, no un pedido largo.

---

## 12. Consistencia entre piezas y plataformas

- Mismo lugar y tamaño del layer badge / tag en toda portada donde aparezca, sea cual sea la plataforma.
- Mismo tratamiento tipográfico por rol (900 para título, itálica para el gancho, DM Mono solo para specs) sin excepciones entre pilares ni entre redes.
- Paleta de capas (lima=UI, magenta=API, cian=datos) nunca se reasigna a otro significado, ni siquiera en un pilar como "opinión" que no tiene proyecto de fondo — si no aplica, se omite, no se reutiliza para otra cosa.
- Un mismo contenido puede recortarse/adaptarse entre plataformas (ej. un Reel también sirve como TikTok y como YouTube Short), pero la identidad visual (paleta, tipografía, layer badge) no cambia según la red de destino.
