import { useEffect, useState } from "react";
import { Inbox, Radio, Smartphone } from "lucide-react";
import { ConnectFlow } from "@/components/connect-flow";
import { ConnectorsView } from "@/components/connectors-view";
import { DeviceView } from "@/components/device-view";
import { InboxView } from "@/components/inbox-view";
import { PhoneFrame } from "@/components/phone-frame";
import { cn } from "@/lib/cn";
import type { PlatformId } from "@/lib/platforms";
import { useXtobe, type AppView } from "@/lib/store";

const NAV: { id: AppView; label: string; icon: typeof Inbox }[] = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "connectors", label: "Connectors", icon: Radio },
  { id: "device", label: "Android", icon: Smartphone },
];

export function AppShell() {
  const hydrated = useXtobe((s) => s.hydrated);
  const markHydrated = useXtobe((s) => s.markHydrated);
  const view = useXtobe((s) => s.view);
  const setView = useXtobe((s) => s.setView);
  const device = useXtobe((s) => s.device);
  const connections = useXtobe((s) => s.connections);
  const [connectId, setConnectId] = useState<PlatformId | null>(null);
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    void useXtobe.persist.rehydrate();
    markHydrated();
  }, [markHydrated]);

  const live = connections.filter((c) => c.status === "connected").length;

  if (!hydrated) {
    return (
      <div className="grid min-h-dvh place-items-center bg-bg text-muted">
        <p className="text-sm">Starting cloud Android…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md bg-accent text-sm font-display font-semibold text-accent-fg">
            X
          </span>
          <div>
            <p className="font-display text-sm font-semibold tracking-tight">XTOBE</p>
            <p className="text-[11px] text-muted">Universal connector</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="hidden items-center gap-2 sm:inline-flex">
            <span className="live-dot size-1.5 rounded-full bg-success" />
            {device.brand} {device.model}
          </span>
          <span className="tabular-nums">{live} live</span>
          <button
            type="button"
            className="h-11 rounded-md border border-border px-3 lg:hidden"
            onClick={() => setPhoneOpen(true)}
          >
            Phone
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <nav className="hidden w-52 shrink-0 flex-col border-r border-border p-3 md:flex">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={cn(
                  "mb-1 flex h-11 items-center gap-2 rounded-md px-3 text-sm",
                  active ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            );
          })}
          <p className="mt-auto px-3 pb-2 text-[11px] leading-relaxed text-subtle">
            Messages stay on this Android. No second iPhone, no APK sideload from iOS.
          </p>
        </nav>

        <main className="flex min-w-0 flex-1 flex-col pb-16 md:pb-0">
          {view === "inbox" && (
            <InboxView onConnectWhatsApp={() => setConnectId("whatsapp")} />
          )}
          {view === "connectors" && <ConnectorsView onConnect={setConnectId} />}
          {view === "device" && <DeviceView />}
        </main>

        <aside className="hidden w-[320px] shrink-0 border-l border-border p-5 lg:block">
          <PhoneFrame />
        </aside>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 md:hidden">
        <div className="grid grid-cols-3">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-1 text-[11px]",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {phoneOpen ? (
        <div className="fixed inset-0 z-50 bg-bg/80 p-4 lg:hidden">
          <div className="mx-auto flex max-h-dvh max-w-sm flex-col overflow-y-auto pt-4">
            <ButtonClose onClick={() => setPhoneOpen(false)} />
            <PhoneFrame className="mt-3" />
          </div>
        </div>
      ) : null}

      <ConnectFlow platform={connectId} onClose={() => setConnectId(null)} />
    </div>
  );
}

function ButtonClose({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-11 self-end rounded-md border border-border px-4 text-sm"
    >
      Close
    </button>
  );
}
