import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEVICE_MODELS, type DeviceModel } from "@/lib/models";
import {
  generateAndroidId,
  generateCode,
  generateImei,
  generateSerial,
  uid,
} from "@/lib/imei";
import type { PlatformId } from "@/lib/platforms";

export type AppView = "inbox" | "connectors" | "device";
export type PhoneScreen = "home" | "messages" | "app" | "settings";

export type Connection = {
  platform: PlatformId;
  status: "connected" | "disconnected";
  handle: string;
  connectedAt: number | null;
};

export type Conversation = {
  id: string;
  platform: PlatformId;
  name: string;
  handle: string;
  preview: string;
  unread: number;
  updatedAt: number;
};

export type ChatMessage = {
  id: string;
  conversationId: string;
  direction: "in" | "out";
  text: string;
  at: number;
};

export type SmsItem = {
  id: string;
  from: string;
  body: string;
  at: number;
};

export type Device = {
  modelId: string;
  brand: string;
  model: string;
  android: string;
  chipset: string;
  imei: string;
  serial: string;
  androidId: string;
  region: string;
  battery: number;
  provisionedAt: number;
};

export type Activity = {
  id: string;
  text: string;
  at: number;
};

type PendingVerify = {
  platform: PlatformId;
  handle: string;
  code: string;
} | null;

type State = {
  hydrated: boolean;
  view: AppView;
  device: Device;
  connections: Connection[];
  conversations: Conversation[];
  messages: ChatMessage[];
  sms: SmsItem[];
  activity: Activity[];
  selectedId: string | null;
  phoneScreen: PhoneScreen;
  phoneApp: PlatformId | null;
  pending: PendingVerify;
  connecting: PlatformId | null;
  typingId: string | null;
};

type Actions = {
  markHydrated: () => void;
  setView: (view: AppView) => void;
  selectConversation: (id: string | null) => void;
  setPhoneScreen: (screen: PhoneScreen, app?: PlatformId | null) => void;
  setRegion: (region: string) => void;
  provision: (model: DeviceModel) => void;
  startVerify: (platform: PlatformId, handle: string) => string;
  confirmVerify: (code: string) => boolean;
  connectDirect: (platform: PlatformId, handle: string) => void;
  disconnect: (platform: PlatformId) => void;
  sendMessage: (conversationId: string, text: string) => void;
  markRead: (conversationId: string) => void;
};

const REPLIES = [
  "Got it — I will check and come back.",
  "On it.",
  "Received, thank you.",
  "Can we take this on a call later?",
  "Noted. Sending the rest this afternoon.",
];

function makeDevice(model: DeviceModel, region = "dxb"): Device {
  return {
    modelId: model.id,
    brand: model.brand,
    model: model.model,
    android: model.android,
    chipset: model.chipset,
    imei: generateImei(),
    serial: generateSerial(),
    androidId: generateAndroidId(),
    region,
    battery: 84,
    provisionedAt: Date.now(),
  };
}

function seedConnections(): Connection[] {
  return [
    {
      platform: "telegram",
      status: "connected",
      handle: "@northdesk",
      connectedAt: Date.now() - 86400000 * 4,
    },
    {
      platform: "email",
      status: "connected",
      handle: "ops@xtobe.app",
      connectedAt: Date.now() - 86400000 * 12,
    },
  ];
}

function seedConversations(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const t1 = uid();
  const t2 = uid();
  const e1 = uid();
  const now = Date.now();
  const conversations: Conversation[] = [
    {
      id: t1,
      platform: "telegram",
      name: "Leila Rahman",
      handle: "@leila",
      preview: "Deck is in the shared folder.",
      unread: 1,
      updatedAt: now - 1000 * 60 * 18,
    },
    {
      id: t2,
      platform: "telegram",
      name: "Studio Ops",
      handle: "ops channel",
      preview: "Standup moved to 09:40.",
      unread: 0,
      updatedAt: now - 1000 * 60 * 80,
    },
    {
      id: e1,
      platform: "email",
      name: "Harbor Freight",
      handle: "billing@harbor.example",
      preview: "PO-4418 cleared this morning.",
      unread: 0,
      updatedAt: now - 1000 * 60 * 240,
    },
  ];
  const messages: ChatMessage[] = [
    {
      id: uid(),
      conversationId: t1,
      direction: "in",
      text: "Morning — can you look at the Q4 numbers before the call?",
      at: now - 1000 * 60 * 50,
    },
    {
      id: uid(),
      conversationId: t1,
      direction: "out",
      text: "Yes. I will send comments in thirty minutes.",
      at: now - 1000 * 60 * 40,
    },
    {
      id: uid(),
      conversationId: t1,
      direction: "in",
      text: "Deck is in the shared folder.",
      at: now - 1000 * 60 * 18,
    },
    {
      id: uid(),
      conversationId: t2,
      direction: "in",
      text: "Standup moved to 09:40.",
      at: now - 1000 * 60 * 80,
    },
    {
      id: uid(),
      conversationId: e1,
      direction: "in",
      text: "PO-4418 cleared this morning. Let us know if the packing list still needs a revision.",
      at: now - 1000 * 60 * 240,
    },
  ];
  return { conversations, messages };
}

function whatsappPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const a = uid();
  const b = uid();
  const c = uid();
  const now = Date.now();
  const conversations: Conversation[] = [
    {
      id: a,
      platform: "whatsapp",
      name: "Maya Chen",
      handle: "+65 8123 4410",
      preview: "Did the samples ship?",
      unread: 2,
      updatedAt: now - 1000 * 40,
    },
    {
      id: b,
      platform: "whatsapp",
      name: "Northwind Ops",
      handle: "+971 4 000 2210",
      preview: "Invoice is with finance.",
      unread: 0,
      updatedAt: now - 1000 * 60 * 12,
    },
    {
      id: c,
      platform: "whatsapp",
      name: "Family",
      handle: "group",
      preview: "Dinner at 7?",
      unread: 1,
      updatedAt: now - 1000 * 60 * 6,
    },
  ];
  const messages: ChatMessage[] = [
    {
      id: uid(),
      conversationId: a,
      direction: "in",
      text: "Hi — following up on the fabric samples.",
      at: now - 1000 * 60 * 8,
    },
    {
      id: uid(),
      conversationId: a,
      direction: "in",
      text: "Did the samples ship?",
      at: now - 1000 * 40,
    },
    {
      id: uid(),
      conversationId: b,
      direction: "out",
      text: "Sending the packing list now.",
      at: now - 1000 * 60 * 20,
    },
    {
      id: uid(),
      conversationId: b,
      direction: "in",
      text: "Invoice is with finance.",
      at: now - 1000 * 60 * 12,
    },
    {
      id: uid(),
      conversationId: c,
      direction: "in",
      text: "Dinner at 7?",
      at: now - 1000 * 60 * 6,
    },
  ];
  return { conversations, messages };
}

function instagramPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "instagram",
        name: "atelier.north",
        handle: "@atelier.north",
        preview: "Can we use the west stills?",
        unread: 1,
        updatedAt: now - 1000 * 90,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "Can we use the west stills?",
        at: now - 1000 * 90,
      },
    ],
  };
}

function slackPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "slack",
        name: "#launch",
        handle: "northwind",
        preview: "Cutover window is Thursday 02:00.",
        unread: 0,
        updatedAt: now - 1000 * 60 * 30,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "Cutover window is Thursday 02:00.",
        at: now - 1000 * 60 * 30,
      },
    ],
  };
}

function discordPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "discord",
        name: "build-log",
        handle: "studio",
        preview: "Nightly is green.",
        unread: 0,
        updatedAt: now - 1000 * 60 * 50,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "Nightly is green.",
        at: now - 1000 * 60 * 50,
      },
    ],
  };
}

function messengerPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "messenger",
        name: "Rafi Noor",
        handle: "messenger",
        preview: "I sent the moodboard.",
        unread: 1,
        updatedAt: now - 1000 * 60 * 9,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "I sent the moodboard.",
        at: now - 1000 * 60 * 9,
      },
    ],
  };
}

function signalPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "signal",
        name: "Counsel",
        handle: "signal",
        preview: "Draft is in the vault.",
        unread: 0,
        updatedAt: now - 1000 * 60 * 70,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "Draft is in the vault.",
        at: now - 1000 * 60 * 70,
      },
    ],
  };
}

function xPack(): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "x",
        name: "press",
        handle: "@press",
        preview: "Need a line on the launch window.",
        unread: 1,
        updatedAt: now - 1000 * 60 * 15,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "Need a line on the launch window.",
        at: now - 1000 * 60 * 15,
      },
    ],
  };
}

function smsPack(handle: string): { conversations: Conversation[]; messages: ChatMessage[] } {
  const id = uid();
  const now = Date.now();
  return {
    conversations: [
      {
        id,
        platform: "sms",
        name: "Carrier",
        handle,
        preview: "eSIM profile active on this Android.",
        unread: 0,
        updatedAt: now - 1000 * 20,
      },
    ],
    messages: [
      {
        id: uid(),
        conversationId: id,
        direction: "in",
        text: "eSIM profile active on this Android.",
        at: now - 1000 * 20,
      },
    ],
  };
}

function packFor(platform: PlatformId, handle: string) {
  switch (platform) {
    case "whatsapp":
      return whatsappPack();
    case "instagram":
      return instagramPack();
    case "slack":
      return slackPack();
    case "discord":
      return discordPack();
    case "messenger":
      return messengerPack();
    case "signal":
      return signalPack();
    case "x":
      return xPack();
    case "sms":
      return smsPack(handle);
    default:
      return { conversations: [], messages: [] };
  }
}

function log(text: string): Activity {
  return { id: uid(), text, at: Date.now() };
}

const seeded = seedConversations();
const initialDevice = makeDevice(DEVICE_MODELS[0]);

const initial: State = {
  hydrated: false,
  view: "inbox",
  device: initialDevice,
  connections: seedConnections(),
  conversations: seeded.conversations,
  messages: seeded.messages,
  sms: [
    {
      id: uid(),
      from: "XTOBE",
      body: "Cloud Android is online. WhatsApp can register on this device.",
      at: Date.now() - 1000 * 60 * 5,
    },
  ],
  activity: [
    log("Provisioned Google Pixel 9 Pro · Android 15"),
    log("Telegram connected as @northdesk"),
    log("Email connected as ops@xtobe.app"),
  ],
  selectedId: null,
  phoneScreen: "home",
  phoneApp: null,
  pending: null,
  connecting: null,
  typingId: null,
};

export const useXtobe = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      markHydrated: () => set({ hydrated: true }),
      setView: (view) => set({ view, selectedId: view === "inbox" ? get().selectedId : null }),
      selectConversation: (id) => set({ selectedId: id, view: "inbox" }),
      setPhoneScreen: (screen, app = null) => set({ phoneScreen: screen, phoneApp: app }),
      setRegion: (region) =>
        set((s) => ({
          device: { ...s.device, region },
          activity: [log(`Region set to ${region}`), ...s.activity].slice(0, 40),
        })),
      provision: (model) => {
        const region = get().device.region;
        set((s) => ({
          device: makeDevice(model, region),
          phoneScreen: "home",
          phoneApp: null,
          activity: [log(`Re-provisioned ${model.brand} ${model.model}`), ...s.activity].slice(0, 40),
        }));
      },
      startVerify: (platform, handle) => {
        const code = generateCode();
        set((s) => ({
          pending: { platform, handle, code },
          connecting: platform,
          phoneScreen: "messages",
          sms: [
            {
              id: uid(),
              from: platform === "whatsapp" ? "WhatsApp" : "Signal",
              body: `${code} is your ${platform === "whatsapp" ? "WhatsApp" : "Signal"} code. Do not share it.`,
              at: Date.now(),
            },
            ...s.sms,
          ],
          activity: [log(`Verification SMS delivered on cloud Android`), ...s.activity].slice(0, 40),
        }));
        return code;
      },
      confirmVerify: (code) => {
        const pending = get().pending;
        if (!pending) return false;
        if (code.trim() !== pending.code) return false;
        get().connectDirect(pending.platform, pending.handle);
        set({ pending: null, connecting: null, phoneScreen: "app", phoneApp: pending.platform });
        return true;
      },
      connectDirect: (platform, handle) => {
        const pack = packFor(platform, handle);
        set((s) => {
          const rest = s.connections.filter((c) => c.platform !== platform);
          const nextConversations = [
            ...pack.conversations,
            ...s.conversations.filter((c) => c.platform !== platform),
          ];
          const nextMessages = [
            ...pack.messages,
            ...s.messages.filter((m) =>
              s.conversations.some((c) => c.id === m.conversationId && c.platform !== platform),
            ),
          ];
          return {
            connections: [
              {
                platform,
                status: "connected" as const,
                handle,
                connectedAt: Date.now(),
              },
              ...rest,
            ],
            conversations: nextConversations,
            messages: nextMessages,
            connecting: null,
            pending: null,
            view: "inbox",
            activity: [log(`${platform} connected as ${handle}`), ...s.activity].slice(0, 40),
          };
        });
      },
      disconnect: (platform) => {
        set((s) => ({
          connections: s.connections.map((c) =>
            c.platform === platform
              ? { ...c, status: "disconnected" as const, connectedAt: null, handle: "" }
              : c,
          ),
          selectedId:
            s.conversations.find((c) => c.id === s.selectedId)?.platform === platform
              ? null
              : s.selectedId,
          activity: [log(`${platform} disconnected`), ...s.activity].slice(0, 40),
        }));
      },
      sendMessage: (conversationId, text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        const out: ChatMessage = {
          id: uid(),
          conversationId,
          direction: "out",
          text: trimmed,
          at: Date.now(),
        };
        set((s) => ({
          messages: [...s.messages, out],
          conversations: s.conversations.map((c) =>
            c.id === conversationId
              ? { ...c, preview: trimmed, updatedAt: Date.now(), unread: 0 }
              : c,
          ),
          typingId: conversationId,
        }));
        window.setTimeout(() => {
          const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
          const incoming: ChatMessage = {
            id: uid(),
            conversationId,
            direction: "in",
            text: reply,
            at: Date.now(),
          };
          set((s) => ({
            typingId: s.typingId === conversationId ? null : s.typingId,
            messages: [...s.messages, incoming],
            conversations: s.conversations.map((c) =>
              c.id === conversationId
                ? { ...c, preview: reply, updatedAt: Date.now() }
                : c,
            ),
          }));
        }, 900);
      },
      markRead: (conversationId) => {
        set((s) => ({
          conversations: s.conversations.map((c) =>
            c.id === conversationId ? { ...c, unread: 0 } : c,
          ),
        }));
      },
    }),
    {
      name: "xtobe-v1",
      skipHydration: true,
      partialize: (s) => ({
        device: s.device,
        connections: s.connections,
        conversations: s.conversations,
        messages: s.messages,
        sms: s.sms,
        activity: s.activity,
      }),
    },
  ),
);
