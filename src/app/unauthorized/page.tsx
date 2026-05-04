import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Not authorized
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This site is for the TechBBQ team only. Sign in with your{" "}
          <span className="font-medium text-foreground">@techbbq.org</span> Google account.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Try again
        </Link>
      </div>
    </main>
  );
}
