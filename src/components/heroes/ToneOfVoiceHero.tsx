export function ToneOfVoiceHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[280px] space-y-2.5">
          <div className="rounded-2xl bg-white/10 px-3.5 py-2.5 backdrop-blur-sm">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              Draft
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/70">
              We are pleased to invite you to attend our annual conference.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              TechBBQ voice
            </div>
          </div>
          <div className="rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">
              On brand
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-foreground">
              Come hang out at TechBBQ — Nordic founders, real talks, zero fluff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
