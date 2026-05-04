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
        </div>
      </section>
    </AppShell>
  );
}
