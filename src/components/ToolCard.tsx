import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/tools";
import { SignatureHero } from "./heroes/SignatureHero";
import { VisualGenHero } from "./heroes/VisualGenHero";
import { EmailResponderHero } from "./heroes/EmailResponderHero";
import { ToneOfVoiceHero } from "./heroes/ToneOfVoiceHero";
import { PersonalKitHero } from "./heroes/PersonalKitHero";

const heroes: Record<string, React.ComponentType> = {
  signature: SignatureHero,
  "visual-generator": VisualGenHero,
  "email-responder": EmailResponderHero,
  "tone-of-voice": ToneOfVoiceHero,
  "personal-kit": PersonalKitHero,
};

export function ToolCard({ tool }: { tool: Tool }) {
  const Hero = heroes[tool.id] ?? null;
  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none"
    >
      <div
        className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
        style={{ backgroundColor: tool.bg, color: tool.fg }}
      >
        {Hero ? <Hero /> : null}
        {tool.status !== "live" ? (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
            {tool.status === "beta" ? "Beta" : "Coming soon"}
          </span>
        ) : null}
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-[17px] font-semibold leading-tight text-foreground">
          {tool.name}
        </h3>
        <p className="mt-1.5 text-sm leading-snug text-muted">
          {tool.description}
        </p>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-border bg-pill px-3 py-1 text-xs font-medium text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
          {tool.cta}
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </a>
  );
}
