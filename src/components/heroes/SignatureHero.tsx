export function SignatureHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[280px] rounded-2xl bg-white p-5 text-left shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-white"
              style={{ background: "#FF6A3D" }}
            >
              AB
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Auri Baciauskas</p>
              <p className="text-[11px] text-muted">Senior Digital Designer</p>
            </div>
          </div>
          <div className="mt-3 h-px bg-border" />
          <div className="mt-3 space-y-1 text-[11px] text-muted">
            <p>abs@techbbq.org</p>
            <p>techbbq.org</p>
          </div>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium text-white">
            TechBBQ 2026
          </div>
        </div>
      </div>
    </div>
  );
}
