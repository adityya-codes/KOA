"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-8xl font-black text-brand-koa/10">500</span>
        <h1 className="text-3xl font-black uppercase tracking-tight text-ink mt-4">
          Something went wrong
        </h1>
        <p className="text-sm text-ink-muted mt-4 leading-relaxed">
          An unexpected error occurred. Please try again, and if the problem persists, contact us.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="primary" onClick={reset}>
            Try Again
          </Button>
          <Button variant="outline" href="/">
            Go Home
          </Button>
        </div>
      </div>
    </main>
  );
}
