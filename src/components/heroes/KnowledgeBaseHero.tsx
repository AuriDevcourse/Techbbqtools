import { Search } from "lucide-react";

export function KnowledgeBaseHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative h-[78%] w-[78%] rounded-3xl bg-white/95 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 rounded-full border border-border bg-pill px-3 py-2">
              <Search className="h-3.5 w-3.5 text-foreground/50" />
              <span className="text-[11px] text-foreground/50">Search the team wiki</span>
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5">
              <div className="h-2 w-[85%] rounded-full bg-foreground/15" />
              <div className="h-2 w-[70%] rounded-full bg-foreground/10" />
              <div className="h-2 w-[78%] rounded-full bg-foreground/10" />
              <div className="h-2 w-[55%] rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
