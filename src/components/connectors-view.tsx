import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { PLATFORMS, type PlatformId } from "@/lib/platforms";
import { useXtobe } from "@/lib/store";

export function ConnectorsView({
  onConnect,
}: {
  onConnect: (id: PlatformId) => void;
}) {
  const connections = useXtobe((s) => s.connections);
  const disconnect = useXtobe((s) => s.disconnect);
  const map = Object.fromEntries(connections.map((c) => [c.platform, c]));

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
      <div className="mb-6 max-w-xl">
        <h2 className="font-display text-xl font-semibold tracking-tight">Connectors</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Every platform registers on this cloud Android. WhatsApp and Signal verify with SMS on
          the device. Others bind by account handle.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {PLATFORMS.map((p) => {
          const conn = map[p.id];
          const on = conn?.status === "connected";
          const Icon = p.icon;
          return (
            <li
              key={p.id}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="flex items-start gap-3">
                <span className={cn("grid size-11 place-items-center rounded-md", p.tint)}>
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">{p.name}</h3>
                    {on ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-success">
                        <Check className="size-3" />
                        Live
                      </span>
                    ) : (
                      <span className="text-[11px] text-subtle">Off</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{p.blurb}</p>
                  {on ? (
                    <p className="mt-2 truncate font-mono text-[11px] text-subtle">{conn.handle}</p>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                {on ? (
                  <Button variant="secondary" size="sm" onClick={() => disconnect(p.id)}>
                    Disconnect
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => onConnect(p.id)}>
                    Connect
                  </Button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
