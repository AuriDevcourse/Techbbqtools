import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { auth } from "@/auth";
import { AppShell } from "@/components/AppShell";
import { FeedbackForm } from "./FeedbackForm";

export default async function FeedbackPage() {
  const session = await auth();
  const userEmail = session?.user?.email ?? "";

  return (
    <AppShell>
      <section className="mx-auto w-full max-w-2xl px-6 pb-24 pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All tools
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Feedback
        </h1>
        <p className="mt-2 max-w-lg text-base leading-relaxed text-muted">
          Tell Auri what's working, what's broken, or what you wish existed. Goes straight
          to his inbox.
        </p>
        <div className="mt-8">
          <FeedbackForm userEmail={userEmail} />
        </div>
      </section>
    </AppShell>
  );
}
