import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
        <li>
          <Link href="/" className="text-ink-muted/50 hover:text-ink-muted transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-ink-muted/30" />
            {item.href ? (
              <Link href={item.href} className="text-ink-muted/50 hover:text-ink-muted transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
