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
        <Link href="/">tu.apellido</Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
