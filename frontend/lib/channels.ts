export interface Channel {
  label: string;
  value: string;
  href: string;
}

export const channels: Channel[] = [
  { label: "email", value: "pietrocodes@gmail.com", href: "mailto:pietrocodes@gmail.com" },
  { label: "github", value: "github.com/P1etrodev", href: "https://github.com/P1etrodev" },
  {
    label: "linkedin",
    value: "linkedin.com/in/francodavidp",
    href: "https://www.linkedin.com/in/francodavidp",
  },
];
