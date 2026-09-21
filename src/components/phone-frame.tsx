import { useEffect, useState } from "react";
import {
  Battery,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { PLATFORM_MAP, type PlatformId } from "@/lib/platforms";
import { useXtobe } from "@/lib/store";

function clockLabel() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function PhoneFrame({ className }: { className?: string }) {
  const device = useXtobe((s) => s.device);
  const connections = useXtobe((s) => s.connections);
  const conversations = useXtobe((s) => s.conversations);
  const messages = useXtobe((s) => s.messages);
  const sms = useXtobe((s) => s.sms);
  const phoneScreen = useXtobe((s) => s.phoneScreen);
  const phoneApp = useXtobe((s) => s.phoneApp);
  const selectedId = useXtobe((s) => s.selectedId);
  const setPhoneScreen = useXtobe((s) => s.setPhoneScreen);
  const selectConversation = useXtobe((s) => s.selectConversation);
  const [time, setTime] = useState(clockLabel);

  useEffect(() => {
    const id = window.setInterval(() => setTime(clockLabel()), 15000);
    return () => window.clearInterval(id);
  }, []);

  const connected = new Set(
    connections.filter((c) => c.status === "connected").map((c) => c.platform),
  );
  const apps = (["whatsapp", "telegram", "instagram", "sms", "email", "slack"] as PlatformId[]).filter(
    (id) => id === "sms" || connected.has(id),
  );

  const openThread =
    conversations.find((c) => c.id === selectedId && connected.has(c.platform)) ?? null;
  const threadMessages = openThread
    ? messages.filter((m) => m.conversationId === openThread.id)
    : [];

  return (
    <div className={cn("mx-auto w-[280px]", className)}>
      <div className="rounded-phone border border-border-strong bg-elevated p-2">
        <div className="relative overflow-hidden rounded-[28px] bg-bg">
          <div className="flex items-center justify-between px-4 pb-1 pt-2 text-[10px] font-medium tabular-nums text-muted">
            <span>{time}</span>
            <span className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-elevated" />
            <span className="flex items-center gap-1">
              <Wifi className="size-3" />
              <Battery className="size-3" />
              <span>{device.battery}%</span>
            </span>
          </div>

          <div className="h-[460px] overflow-y-auto px-3 pb-2">
            {phoneScreen === "home" && (
              <HomeScreen
                apps={apps}
                onOpen={(id) => {
                  if (id === "sms") setPhoneScreen("messages");
                  else setPhoneScreen("app", id);
                }}
                onSettings={() => setPhoneScreen("settings")}
                device={device}
              />
            )}
            {phoneScreen === "messages" && (
              <MessagesScreen
                items={sms}
                onBack={() => setPhoneScreen("home")}
              />
            )}
            {phoneScreen === "settings" && (
              <SettingsScreen device={device} onBack={() => setPhoneScreen("home")} />
            )}
            {phoneScreen === "app" && phoneApp && (
              <AppScreen
                platform={phoneApp}
                conversations={conversations.filter((c) => c.platform === phoneApp)}
                openThread={openThread?.platform === phoneApp ? openThread : null}
                threadMessages={openThread?.platform === phoneApp ? threadMessages : []}
                onBack={() => {
                  if (openThread?.platform === phoneApp) selectConversation(null);
                  else setPhoneScreen("home");
                }}
                onOpen={(id) => selectConversation(id)}
              />
            )}
          </div>

          <button
            type="button"
            aria-label="Home"
            className="flex w-full items-center justify-center py-2"
            onClick={() => setPhoneScreen("home")}
          >
            <span className="h-1 w-24 rounded-full bg-border-strong" />
          </button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-subtle">
        {device.brand} {device.model} · Android {device.android}
      </p>
    </div>
  );
}

function HomeScreen({
  apps,
  onOpen,
  onSettings,
  device,
}: {
  apps: PlatformId[];
  onOpen: (id: PlatformId) => void;
  onSettings: () => void;
  device: { brand: string; model: string };
}) {
  return (
    <div className="pt-4">
      <p className="text-[11px] uppercase tracking-wide text-subtle">Cloud Android</p>
      <p className="font-display text-lg font-semibold tracking-tight">{device.model}</p>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {apps.map((id) => {
          const p = PLATFORM_MAP[id];
          const Icon = p.icon;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onOpen(id)}
              className="flex flex-col items-center gap-1.5"
            >
              <span className={cn("grid size-12 place-items-center rounded-lg", p.tint)}>
                <Icon className="size-5" />
              </span>
              <span className="text-[10px] text-muted">{p.name}</span>
            </button>
          );
        })}
        <button type="button" onClick={onSettings} className="flex flex-col items-center gap-1.5">
          <span className="grid size-12 place-items-center rounded-lg bg-elevated">
            <span className="text-xs font-medium">i</span>
          </span>
          <span className="text-[10px] text-muted">Identity</span>
        </button>
      </div>
    </div>
  );
}

function MessagesScreen({
  items,
  onBack,
}: {
  items: { id: string; from: string; body: string; at: number }[];
  onBack: () => void;
}) {
  return (
    <div className="pt-2">
      <button type="button" onClick={onBack} className="mb-3 text-xs text-muted">
        Home
      </button>
      <p className="font-display text-base font-semibold">Messages</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="rounded-md bg-elevated p-3">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-medium">{item.from}</span>
              <span className="text-[10px] tabular-nums text-subtle">
                {new Date(item.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SettingsScreen({
  device,
  onBack,
}: {
  device: {
    brand: string;
    model: string;
    android: string;
    imei: string;
    serial: string;
    androidId: string;
    chipset: string;
  };
  onBack: () => void;
}) {
  const rows = [
    ["Model", `${device.brand} ${device.model}`],
    ["Android", device.android],
    ["Chipset", device.chipset],
    ["IMEI", device.imei],
    ["Serial", device.serial],
    ["Android ID", device.androidId],
  ];
  return (
    <div className="pt-2">
      <button type="button" onClick={onBack} className="mb-3 text-xs text-muted">
        Home
      </button>
      <p className="font-display text-base font-semibold">Device identity</p>
      <dl className="mt-3 space-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="rounded-md bg-elevated px-3 py-2">
            <dt className="text-[10px] uppercase tracking-wide text-subtle">{k}</dt>
            <dd className="mt-0.5 break-all font-mono text-[11px] text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function AppScreen({
  platform,
  conversations,
  openThread,
  threadMessages,
  onBack,
  onOpen,
}: {
  platform: PlatformId;
  conversations: { id: string; name: string; preview: string; unread: number }[];
  openThread: { id: string; name: string } | null;
  threadMessages: { id: string; direction: "in" | "out"; text: string }[];
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  const p = PLATFORM_MAP[platform];
  if (openThread) {
    return (
      <div className="pt-2">
        <button type="button" onClick={onBack} className="mb-3 text-xs text-muted">
          {p.name}
        </button>
        <p className="font-display text-base font-semibold">{openThread.name}</p>
        <ul className="mt-3 space-y-2">
          {threadMessages.map((m) => (
            <li
              key={m.id}
              className={cn(
                "max-w-[90%] rounded-md px-2.5 py-1.5 text-xs leading-relaxed",
                m.direction === "out" ? "ml-auto bg-accent text-accent-fg" : "bg-elevated text-fg",
              )}
            >
              {m.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="pt-2">
      <button type="button" onClick={onBack} className="mb-3 text-xs text-muted">
        Home
      </button>
      <p className="font-display text-base font-semibold">{p.name}</p>
      {conversations.length === 0 ? (
        <p className="mt-4 text-xs text-muted">No threads on this Android yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-border">
          {conversations.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onOpen(c.id)}
                className="flex w-full items-start justify-between gap-2 py-2.5 text-left"
              >
                <span>
                  <span className="block text-xs font-medium">{c.name}</span>
                  <span className="mt-0.5 block text-[11px] text-muted">{c.preview}</span>
                </span>
                {c.unread > 0 ? (
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-fg">
                    {c.unread}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
