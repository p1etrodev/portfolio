import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/proyectos", label: "proyectos" },
  { href: "/sobre-mi", label: "sobre mí" },
  { href: "/contacto", label: "contacto" },
];

export function SiteHeader() {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/logo.svg" alt="tu.apellido" width={28} height={28} priority />
          tu.apellido
        </Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
