export function EmailResponderHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[280px] rounded-2xl bg-white p-4 text-left shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2 border-b border-border pb-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
              M
            </div>
            <p className="truncate text-[11px] font-medium text-foreground">
              Re: Partnership next steps
            </p>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted">
            Hi Mark — happy to jump on a call this week.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-muted">
            Tuesday after 14:00 works for me — I&apos;ll send an invite.
          </p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Drafted by AI
          </div>
        </div>
      </div>
    </div>
  );
}
