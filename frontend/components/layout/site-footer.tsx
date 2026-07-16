import Image from "next/image";
import Link from "next/link";
import { LayerBadge } from "@/components/ui/layer-badge";
import { channels } from "@/lib/channels";

const links = [
  { href: "/proyectos", label: "proyectos" },
  { href: "/sobre-mi", label: "sobre mí" },
  { href: "/contacto", label: "contacto" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-border border-t">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-8 px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg italic">
              <Image src="/logo.svg" alt="" width={20} height={20} />
              pietrodev
            </Link>
            <p className="max-w-[280px] text-[13px] text-text-muted">
              Full stack independiente. Interfaz, lógica y datos, en un solo bloque.
            </p>
            <LayerBadge className="mt-1 max-w-30" />
          </div>

          <nav className="flex gap-5 font-mono text-[12px] text-text-muted">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-text">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1.5 font-mono text-[12px]">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-text-muted hover:text-layer-ui"
              >
                {channel.value}
              </a>
            ))}
          </div>
        </div>

        <p className="font-mono text-[11px] text-text-muted">
          © {new Date().getFullYear()} pietrodev
        </p>
      </div>
    </footer>
  );
}
