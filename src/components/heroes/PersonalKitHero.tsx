export function PersonalKitHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative h-[78%] w-[78%] rounded-3xl bg-white/95 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                Speaking
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/50">
                TechBBQ 2026
              </span>
            </div>
            <div className="flex items-end gap-3">
              <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-rose-400 to-pink-600" />
              <div className="min-w-0 pb-0.5">
                <p className="truncate text-[16px] font-semibold leading-tight text-foreground">
                  Your Name
                </p>
                <p className="mt-0.5 truncate text-[11px] leading-tight text-foreground/55">
                  Title · Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
