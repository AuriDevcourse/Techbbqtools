export function VisualGenHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative h-[78%] w-[78%] rounded-3xl bg-gradient-to-br from-pink-400 via-fuchsia-500 to-indigo-600 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                TechBBQ 2026
              </span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] text-white backdrop-blur-sm">
                AI
              </div>
            </div>
            <div>
              <p className="text-[28px] font-semibold leading-[1.05] text-white">
                Doors are open.
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-white/80">
                26–27 Aug · Bella Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
