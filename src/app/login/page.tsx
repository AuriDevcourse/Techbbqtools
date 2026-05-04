import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;
  const from = params.from ?? "/";

  if (session) redirect(from);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-white p-8 text-center shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="TechBBQ Tools"
          className="mx-auto mb-6 h-8 w-auto"
        />
        <h1 className="sr-only">TechBBQ Tools</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Sign in with your <span className="font-medium text-foreground">@techbbq.org</span> Google
          account to continue.
        </p>

        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: from });
          }}
        >
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}
