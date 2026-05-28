import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

export default function Home() {
  return (
    <AppShell>
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Internal · TechBBQ
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Tools built for the team.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A growing collection of small, focused tools that take repetitive work off your plate.
            Pick one and go.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}

          <Link href="/feedback" className="group block focus:outline-none">
            <div className="relative flex aspect-square w-full flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-border transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-foreground/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pill text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <Plus className="h-5 w-5" />
              </div>
              <p className="mt-4 px-8 text-center text-[15px] font-medium leading-snug text-foreground">
                Want to see something next?
              </p>
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-[17px] font-semibold leading-tight text-foreground">
                Suggest a tool
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-muted">
                Got an idea for a tool that would save you time? Tell Auri.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-border bg-pill px-3 py-1 text-xs font-medium text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                Suggest
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
