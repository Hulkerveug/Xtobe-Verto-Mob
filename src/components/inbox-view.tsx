import { Send } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { PLATFORM_MAP, type PlatformId } from "@/lib/platforms";
import { useXtobe } from "@/lib/store";

function timeAgo(at: number) {
  const mins = Math.max(0, Math.round((Date.now() - at) / 60000));
  if (mins < 1) return "now";
  if (mins < 60) return `${mins}m`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

export function InboxView({ onConnectWhatsApp }: { onConnectWhatsApp: () => void }) {
  const connections = useXtobe((s) => s.connections);
  const conversations = useXtobe((s) => s.conversations);
  const selectedId = useXtobe((s) => s.selectedId);
  const selectConversation = useXtobe((s) => s.selectConversation);
  const markRead = useXtobe((s) => s.markRead);
  const [filter, setFilter] = useState<"all" | PlatformId>("all");

  const connected = useMemo(
    () => new Set(connections.filter((c) => c.status === "connected").map((c) => c.platform)),
    [connections],
  );
  const waOn = connected.has("whatsapp");
  const list = conversations
    .filter((c) => connected.has(c.platform))
    .filter((c) => filter === "all" || c.platform === filter)
    .slice()
    .sort((a, b) => b.updatedAt - a.updatedAt);

  const filters = (["all", ...Array.from(connected)] as Array<"all" | PlatformId>);

  return (
    <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
      <section className="flex min-h-0 flex-col border-b border-border lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-2 overflow-x-auto px-4 py-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "h-9 shrink-0 rounded-full px-3 text-xs font-medium",
                filter === f ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
              )}
            >
              {f === "all" ? "All" : PLATFORM_MAP[f].name}
            </button>
          ))}
        </div>
        {!waOn && (
          <div className="mx-4 mb-3 rounded-lg border border-border bg-elevated p-3">
            <p className="text-sm font-medium">WhatsApp is not on this Android yet</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Register it on the cloud device. The verification SMS lands on the phone, then chats merge here.
            </p>
            <Button size="sm" className="mt-3" onClick={onConnectWhatsApp}>
              Connect WhatsApp
            </Button>
          </div>
        )}
        <ul className="min-h-0 flex-1 overflow-y-auto">
          {list.length === 0 ? (
            <li className="px-4 py-10 text-sm text-muted">No threads on the connected platforms.</li>
          ) : (
            list.map((c) => {
              const p = PLATFORM_MAP[c.platform];
              const Icon = p.icon;
              const active = selectedId === c.id;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => {
                      selectConversation(c.id);
                      markRead(c.id);
                    }}
                    className={cn(
                      "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors duration-150",
                      active ? "bg-elevated" : "hover:bg-surface",
                    )}
                  >
                    <span className={cn("mt-0.5 grid size-10 shrink-0 place-items-center rounded-md", p.tint)}>
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="truncate text-sm font-medium">{c.name}</span>
                        <span className="shrink-0 text-[11px] tabular-nums text-subtle">
                          {timeAgo(c.updatedAt)}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted">{c.preview}</span>
                    </span>
                    {c.unread > 0 ? (
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-fg">
                        {c.unread}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </section>
      <ThreadPane />
    </div>
  );
}

function ThreadPane() {
  const selectedId = useXtobe((s) => s.selectedId);
  const conversations = useXtobe((s) => s.conversations);
  const messages = useXtobe((s) => s.messages);
  const typingId = useXtobe((s) => s.typingId);
  const sendMessage = useXtobe((s) => s.sendMessage);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const convo = conversations.find((c) => c.id === selectedId);
  const thread = messages.filter((m) => m.conversationId === selectedId);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [thread.length, typingId, selectedId]);

  useEffect(() => {
    setDraft("");
  }, [selectedId]);

  if (!convo) {
    return (
      <div className="hidden min-h-[320px] flex-col items-center justify-center px-8 text-center lg:flex">
        <p className="font-display text-lg font-semibold tracking-tight">Universal inbox</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Pick a thread. Replies send from the cloud Android and stay bound to that platform.
        </p>
      </div>
    );
  }

  const p = PLATFORM_MAP[convo.platform];

  return (
    <div className="flex min-h-[50dvh] flex-col">
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div>
          <p className="text-sm font-medium">{convo.name}</p>
          <p className="text-xs text-muted">
            {p.name} · {convo.handle}
          </p>
        </div>
      </header>
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto px-4 py-4">
        {thread.map((m) => (
          <div
            key={m.id}
            className={cn("flex", m.direction === "out" ? "justify-end" : "justify-start")}
          >
            <p
              className={cn(
                "max-w-[min(72%,28rem)] rounded-lg px-3 py-2 text-sm leading-relaxed",
                m.direction === "out" ? "bg-accent text-accent-fg" : "bg-elevated text-fg",
              )}
            >
              {m.text}
            </p>
          </div>
        ))}
        {typingId === convo.id ? (
          <p className="text-xs text-subtle">{convo.name} is typing</p>
        ) : null}
        <div ref={endRef} />
      </div>
      <form
        className="flex gap-2 border-t border-border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(convo.id, draft);
          setDraft("");
        }}
      >
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={`Message on ${p.name}`}
        />
        <Button type="submit" size="icon" aria-label="Send" disabled={!draft.trim()}>
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
