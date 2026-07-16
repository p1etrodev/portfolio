import type { SideProject } from "@/types/side-project";

export const sideProjects: SideProject[] = [
  {
    slug: "social-league",
    name: "Social League",
    description: "Red social para postear como tu campeón favorito de League of Legends.",
    stack: ["Angular", "TypeScript"],
    githubUrl: "https://github.com/P1etrodev/social-league",
  },
  {
    slug: "ml-tracker",
    name: "ML Tracker",
    description: "Tracker de escritorio para publicaciones de MercadoLibre.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/ml-tracker",
  },
  {
    slug: "harakiri",
    name: "Harakiri",
    description:
      "Integración de chat de Tango para OBS, con extensión de navegador y actualizador propio.",
    stack: ["TypeScript"],
    githubUrl: "https://github.com/P1etrodev/harakiri",
  },
  {
    slug: "tango-time-tools",
    name: "Tango Counter",
    description:
      "Herramienta de escritorio para saber el tiempo restante para el reinicio de las recompensas de la plataforma TangoLive.",
    stack: ["Angular", "Electron"],
    githubUrl: "https://github.com/P1etrodev/tango-time-tools",
  },
  // {
  //   slug: "kombat-ui",
  //   name: "Kombat-UI",
  //   description: "Kit de componentes de interfaz construido con Vue + Tailwind.",
  //   stack: ["Vue", "Tailwind"],
  //   githubUrl: "https://github.com/P1etrodev/kombat-ui",
  // },
  {
    slug: "settings-manager",
    name: "Settings Manager",
    description:
      "Paquete de Python para manejar configuración vía archivos INI, publicado en PyPI.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/settings-manager",
  },
  // {
  //   slug: "pydantic-set-operations",
  //   name: "Pydantic-Set-Operations",
  //   description:
  //     "Extensión de Pydantic con operaciones de conjuntos (unión, intersección, exclusión) entre modelos.",
  //   stack: ["Python"],
  //   githubUrl: "https://github.com/P1etrodev/pydantic-set-operations",
  // },
  {
    slug: "linker",
    name: "Linker",
    description: "Gestor de symlinks para organizar dotfiles y configuraciones.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/linker",
  },
  {
    slug: "organizer",
    name: "Organizer",
    description: "Organizador automático de carpetas para Windows.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/organizer",
  },
  {
    slug: "passgen",
    name: "Passgen",
    description: "Generador de contraseñas, con versión de escritorio y servidor.",
    stack: ["JavaScript"],
    githubUrl: "https://github.com/P1etrodev/passgen",
  },
  {
    slug: "wordling",
    name: "Wordling",
    description: "Clon de Wordle en español.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/wordling",
  },
  {
    slug: "brick-breaker",
    name: "Brick Breaker",
    description: "Clon de Breakout.",
    stack: ["Java"],
    githubUrl: "https://github.com/P1etrodev/brick-breaker",
  },
  {
    slug: "squba",
    name: "Squba",
    description:
      "Set de herramientas de consola: explorar directorios, crear/borrar archivos en bulk, monitorear recursos del sistema en vivo.",
    stack: ["Python"],
    githubUrl: "https://github.com/P1etrodev/squba",
  },
  {
    slug: "dnd-waitress-bot",
    name: "D&D Waitress Bot",
    description: "Bot de Discord temático de D&D.",
    stack: ["TypeScript"],
  },
];
