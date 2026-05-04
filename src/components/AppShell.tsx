import Link from "next/link";
import { ReactNode } from "react";
import { auth, signOut } from "@/auth";

export async function AppShell({ children }: { children: ReactNode }) {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-6">
          <Link href="/" className="flex items-center" aria-label="TechBBQ Tools">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="TechBBQ Tools" className="h-7 w-auto" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <Link href="/" className="transition-colors hover:text-foreground">
              Tools
            </Link>
            <Link href="/feedback" className="transition-colors hover:text-foreground">
              Feedback
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            {user ? (
              <>
                <span className="hidden text-muted sm:inline">{user.email}</span>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/login" });
                  }}
                >
                  <button
                    type="submit"
                    className="rounded-full border border-border bg-pill px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <span className="hidden text-muted sm:inline">Internal · @techbbq.org</span>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 text-xs text-muted">
          <span>Built by Auri · Digital &amp; Technology</span>
          <span>v0.1</span>
        </div>
      </footer>
    </div>
  );
}
