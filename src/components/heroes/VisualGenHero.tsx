export function VisualGenHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative h-[78%] w-[78%] rounded-3xl bg-gradient-to-br from-pink-400 via-fuchsia-500 to-indigo-600 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                Panel
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                TechBBQ 2026
              </span>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-white/80 bg-gradient-to-br from-amber-300 to-orange-500" />
                <div className="h-9 w-9 rounded-full border-2 border-white/80 bg-gradient-to-br from-sky-300 to-blue-600" />
                <div className="h-9 w-9 rounded-full border-2 border-white/80 bg-gradient-to-br from-emerald-300 to-teal-600" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">
                3 speakers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
