"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "inicio" },
  { href: "/proyectos", label: "proyectos" },
  { href: "/sobre-mi", label: "sobre mí" },
  { href: "/estado", label: "estado" },
  { href: "/contacto", label: "contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-border border-b bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl italic">
          <Image src="/logo.svg" alt="" width={24} height={24} priority />
          pietrodev
        </Link>

        <div className="flex gap-6 font-ui text-[15px] text-text-muted">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn("transition-colors hover:text-text", isActive && "text-text")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Button href="/cv.pdf" variant="ghost" download>
          CV ↓
        </Button>
      </nav>
    </header>
  );
}
