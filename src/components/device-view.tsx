import { Button } from "@/components/ui/button";
import { DEVICE_MODELS, REGIONS } from "@/lib/models";
import { useXtobe } from "@/lib/store";
import { cn } from "@/lib/cn";

export function DeviceView() {
  const device = useXtobe((s) => s.device);
  const activity = useXtobe((s) => s.activity);
  const provision = useXtobe((s) => s.provision);
  const setRegion = useXtobe((s) => s.setRegion);
  const connections = useXtobe((s) => s.connections);
  const live = connections.filter((c) => c.status === "connected").length;

  const rows = [
    ["Brand", device.brand],
    ["Model", device.model],
    ["Android", device.android],
    ["Chipset", device.chipset],
    ["IMEI", device.imei],
    ["Serial", device.serial],
    ["Android ID", device.androidId],
    ["Battery", `${device.battery}%`],
  ];

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight">Cloud Android</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            A dedicated ARM profile. WhatsApp sees this identity — not an iPhone IMEI, not a
            desktop emulator. Re-provision to mint a fresh fingerprint.
          </p>
        </div>
        <p className="text-xs tabular-nums text-muted">{live} connectors live</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">Identity</h3>
          <dl className="mt-3 divide-y divide-border">
            {rows.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-2">
                <dt className="text-xs text-subtle">{k}</dt>
                <dd className="break-all text-right font-mono text-xs">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="space-y-6">
          <section className="rounded-xl border border-border bg-surface p-4">
            <h3 className="text-sm font-medium">Hardware profile</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {DEVICE_MODELS.map((m) => {
                const active = device.modelId === m.id;
                return (
                  <li key={m.id}>
                    <button
                      type="button"
                      onClick={() => provision(m)}
                      className={cn(
                        "h-11 w-full rounded-md border px-3 text-left text-xs",
                        active
                          ? "border-accent bg-elevated text-fg"
                          : "border-border bg-bg text-muted hover:text-fg",
                      )}
                    >
                      {m.brand} {m.model}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-[11px] text-subtle">
              Choosing a model mints a new IMEI, serial, and Android ID.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-surface p-4">
            <h3 className="text-sm font-medium">Egress region</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <Button
                  key={r.id}
                  size="pill"
                  variant={device.region === r.id ? "default" : "secondary"}
                  onClick={() => setRegion(r.id)}
                >
                  {r.label}
                </Button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="mt-6 rounded-xl border border-border bg-surface p-4">
        <h3 className="text-sm font-medium">Activity</h3>
        <ol className="mt-3 space-y-2">
          {activity.slice(0, 12).map((a) => (
            <li key={a.id} className="flex items-baseline justify-between gap-3 text-xs">
              <span className="text-muted">{a.text}</span>
              <span className="shrink-0 tabular-nums text-subtle">
                {new Date(a.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
