import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  Hash,
  Instagram,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Radio,
  Send,
  Slack,
} from "lucide-react";

export type PlatformId =
  | "whatsapp"
  | "telegram"
  | "instagram"
  | "messenger"
  | "slack"
  | "discord"
  | "sms"
  | "email"
  | "signal"
  | "x";

export type Platform = {
  id: PlatformId;
  name: string;
  blurb: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  needsSms: boolean;
  tint: string;
  icon: LucideIcon;
};

export const PLATFORMS: Platform[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    blurb: "Registers on the cloud Android. Chats land in the universal inbox.",
    fieldLabel: "Mobile number",
    fieldPlaceholder: "+971 50 000 0000",
    needsSms: true,
    tint: "bg-wa",
    icon: MessageCircle,
  },
  {
    id: "telegram",
    name: "Telegram",
    blurb: "Cloud session for channels, groups, and DMs.",
    fieldLabel: "Username or phone",
    fieldPlaceholder: "@northdesk",
    needsSms: false,
    tint: "bg-tg",
    icon: Send,
  },
  {
    id: "instagram",
    name: "Instagram",
    blurb: "Direct messages without a second handset.",
    fieldLabel: "Handle",
    fieldPlaceholder: "@studio",
    needsSms: false,
    tint: "bg-ig",
    icon: Instagram,
  },
  {
    id: "messenger",
    name: "Messenger",
    blurb: "Meta DMs routed through the virtual device.",
    fieldLabel: "Account email",
    fieldPlaceholder: "you@studio.com",
    needsSms: false,
    tint: "bg-fb",
    icon: MessageSquare,
  },
  {
    id: "slack",
    name: "Slack",
    blurb: "Workspace messages beside consumer chat.",
    fieldLabel: "Workspace",
    fieldPlaceholder: "northwind.slack.com",
    needsSms: false,
    tint: "bg-sl",
    icon: Slack,
  },
  {
    id: "discord",
    name: "Discord",
    blurb: "Servers and DMs on the same Android profile.",
    fieldLabel: "Username",
    fieldPlaceholder: "ops#2048",
    needsSms: false,
    tint: "bg-dc",
    icon: Hash,
  },
  {
    id: "sms",
    name: "SMS",
    blurb: "Carrier SMS on the virtual eSIM for codes and texts.",
    fieldLabel: "MSISDN",
    fieldPlaceholder: "+971 50 000 0000",
    needsSms: false,
    tint: "bg-sms",
    icon: Phone,
  },
  {
    id: "email",
    name: "Email",
    blurb: "IMAP inbox merged with chat threads.",
    fieldLabel: "Address",
    fieldPlaceholder: "ops@xtobe.app",
    needsSms: false,
    tint: "bg-em",
    icon: Mail,
  },
  {
    id: "signal",
    name: "Signal",
    blurb: "Encrypted chats bound to this Android identity.",
    fieldLabel: "Mobile number",
    fieldPlaceholder: "+971 50 000 0000",
    needsSms: true,
    tint: "bg-sg",
    icon: Radio,
  },
  {
    id: "x",
    name: "X",
    blurb: "Direct messages from the same device session.",
    fieldLabel: "Handle",
    fieldPlaceholder: "@desk",
    needsSms: false,
    tint: "bg-xx",
    icon: AtSign,
  },
];

export const PLATFORM_MAP = Object.fromEntries(
  PLATFORMS.map((p) => [p.id, p]),
) as Record<PlatformId, Platform>;
