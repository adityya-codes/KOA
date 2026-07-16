import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-8xl font-black text-brand-koa/10">404</span>
        <h1 className="text-3xl font-black uppercase tracking-tight text-ink mt-4">
          Page not found
        </h1>
        <p className="text-sm text-ink-muted mt-4 leading-relaxed">
          The trail you are looking for does not exist on our map. It might have been moved, renamed, or it never existed.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest bg-brand-koa text-surface hover:bg-brand-koa-dark transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest border-2 border-brand-koa text-brand-koa hover:bg-brand-koa hover:text-surface transition-all"
          >
            Explore Activities
          </Link>
        </div>
      </div>
    </main>
  );
}
