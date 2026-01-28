import Link from "next/link";

const nav = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/about", label: "关于" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 hover:text-neutral-600"
        >
          Kosayuu
        </Link>
        <ul className="flex gap-6">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
