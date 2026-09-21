import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as AtSign, a as Slack, c as Phone, d as Mail, f as Instagram, g as Battery, h as Check, i as Smartphone, l as MessageSquare, m as Hash, n as Wifi, o as Send, p as Inbox, s as Radio, t as X, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKqO64Hu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-elevated text-fg border border-border hover:border-border-strong",
			ghost: "text-muted hover:text-fg hover:bg-elevated",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4 rounded-md",
			sm: "h-9 px-3 rounded-sm",
			icon: "size-11 rounded-md",
			pill: "h-9 px-3 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70", className),
		...props
	});
}
var PLATFORMS = [
	{
		id: "whatsapp",
		name: "WhatsApp",
		blurb: "Registers on the cloud Android. Chats land in the universal inbox.",
		fieldLabel: "Mobile number",
		fieldPlaceholder: "+971 50 000 0000",
		needsSms: true,
		tint: "bg-wa",
		icon: MessageCircle
	},
	{
		id: "telegram",
		name: "Telegram",
		blurb: "Cloud session for channels, groups, and DMs.",
		fieldLabel: "Username or phone",
		fieldPlaceholder: "@northdesk",
		needsSms: false,
		tint: "bg-tg",
		icon: Send
	},
	{
		id: "instagram",
		name: "Instagram",
		blurb: "Direct messages without a second handset.",
		fieldLabel: "Handle",
		fieldPlaceholder: "@studio",
		needsSms: false,
		tint: "bg-ig",
		icon: Instagram
	},
	{
		id: "messenger",
		name: "Messenger",
		blurb: "Meta DMs routed through the virtual device.",
		fieldLabel: "Account email",
		fieldPlaceholder: "you@studio.com",
		needsSms: false,
		tint: "bg-fb",
		icon: MessageSquare
	},
	{
		id: "slack",
		name: "Slack",
		blurb: "Workspace messages beside consumer chat.",
		fieldLabel: "Workspace",
		fieldPlaceholder: "northwind.slack.com",
		needsSms: false,
		tint: "bg-sl",
		icon: Slack
	},
	{
		id: "discord",
		name: "Discord",
		blurb: "Servers and DMs on the same Android profile.",
		fieldLabel: "Username",
		fieldPlaceholder: "ops#2048",
		needsSms: false,
		tint: "bg-dc",
		icon: Hash
	},
	{
		id: "sms",
		name: "SMS",
		blurb: "Carrier SMS on the virtual eSIM for codes and texts.",
		fieldLabel: "MSISDN",
		fieldPlaceholder: "+971 50 000 0000",
		needsSms: false,
		tint: "bg-sms",
		icon: Phone
	},
	{
		id: "email",
		name: "Email",
		blurb: "IMAP inbox merged with chat threads.",
		fieldLabel: "Address",
		fieldPlaceholder: "ops@xtobe.app",
		needsSms: false,
		tint: "bg-em",
		icon: Mail
	},
	{
		id: "signal",
		name: "Signal",
		blurb: "Encrypted chats bound to this Android identity.",
		fieldLabel: "Mobile number",
		fieldPlaceholder: "+971 50 000 0000",
		needsSms: true,
		tint: "bg-sg",
		icon: Radio
	},
	{
		id: "x",
		name: "X",
		blurb: "Direct messages from the same device session.",
		fieldLabel: "Handle",
		fieldPlaceholder: "@desk",
		needsSms: false,
		tint: "bg-xx",
		icon: AtSign
	}
];
var PLATFORM_MAP = Object.fromEntries(PLATFORMS.map((p) => [p.id, p]));
var DEVICE_MODELS = [
	{
		id: "pixel-9-pro",
		brand: "Google",
		model: "Pixel 9 Pro",
		android: "15",
		chipset: "Tensor G4"
	},
	{
		id: "pixel-8-pro",
		brand: "Google",
		model: "Pixel 8 Pro",
		android: "15",
		chipset: "Tensor G3"
	},
	{
		id: "s24",
		brand: "Samsung",
		model: "Galaxy S24",
		android: "15",
		chipset: "Snapdragon 8 Gen 3"
	},
	{
		id: "s24u",
		brand: "Samsung",
		model: "Galaxy S24 Ultra",
		android: "15",
		chipset: "Snapdragon 8 Gen 3"
	},
	{
		id: "oneplus-13",
		brand: "OnePlus",
		model: "13",
		android: "15",
		chipset: "Snapdragon 8 Elite"
	},
	{
		id: "nothing-3",
		brand: "Nothing",
		model: "Phone (3)",
		android: "15",
		chipset: "Snapdragon 8s Gen 3"
	}
];
var REGIONS = [
	{
		id: "dxb",
		label: "Dubai",
		hint: "me-central"
	},
	{
		id: "lon",
		label: "London",
		hint: "eu-west"
	},
	{
		id: "fra",
		label: "Frankfurt",
		hint: "eu-central"
	},
	{
		id: "sgp",
		label: "Singapore",
		hint: "ap-southeast"
	},
	{
		id: "iad",
		label: "Ashburn",
		hint: "us-east"
	}
];
function luhnCheckDigit(body) {
	let sum = 0;
	const reversed = body.split("").reverse();
	for (let i = 0; i < reversed.length; i++) {
		let n = Number(reversed[i]);
		if (i % 2 === 0) {
			n *= 2;
			if (n > 9) n -= 9;
		}
		sum += n;
	}
	return String((10 - sum % 10) % 10);
}
function generateImei() {
	const body = ("35" + String(Math.floor(1e5 + Math.random() * 899999)) + String(Math.floor(1e5 + Math.random() * 899999))).slice(0, 14);
	return body + luhnCheckDigit(body);
}
function generateSerial() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let out = "";
	for (let i = 0; i < 12; i++) out += alphabet[Math.floor(Math.random() * 32)];
	return out;
}
function generateAndroidId() {
	const bytes = /* @__PURE__ */ new Uint8Array(8);
	if (typeof crypto !== "undefined" && crypto.getRandomValues) crypto.getRandomValues(bytes);
	else for (let i = 0; i < 8; i++) bytes[i] = Math.floor(Math.random() * 256);
	return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}
function generateCode() {
	return String(Math.floor(1e5 + Math.random() * 9e5));
}
function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
var REPLIES = [
	"Got it — I will check and come back.",
	"On it.",
	"Received, thank you.",
	"Can we take this on a call later?",
	"Noted. Sending the rest this afternoon."
];
function makeDevice(model, region = "dxb") {
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
		provisionedAt: Date.now()
	};
}
function seedConnections() {
	return [{
		platform: "telegram",
		status: "connected",
		handle: "@northdesk",
		connectedAt: Date.now() - 3456e5
	}, {
		platform: "email",
		status: "connected",
		handle: "ops@xtobe.app",
		connectedAt: Date.now() - 10368e5
	}];
}
function seedConversations() {
	const t1 = uid();
	const t2 = uid();
	const e1 = uid();
	const now = Date.now();
	return {
		conversations: [
			{
				id: t1,
				platform: "telegram",
				name: "Leila Rahman",
				handle: "@leila",
				preview: "Deck is in the shared folder.",
				unread: 1,
				updatedAt: now - 108e4
			},
			{
				id: t2,
				platform: "telegram",
				name: "Studio Ops",
				handle: "ops channel",
				preview: "Standup moved to 09:40.",
				unread: 0,
				updatedAt: now - 48e5
			},
			{
				id: e1,
				platform: "email",
				name: "Harbor Freight",
				handle: "billing@harbor.example",
				preview: "PO-4418 cleared this morning.",
				unread: 0,
				updatedAt: now - 144e5
			}
		],
		messages: [
			{
				id: uid(),
				conversationId: t1,
				direction: "in",
				text: "Morning — can you look at the Q4 numbers before the call?",
				at: now - 3e6
			},
			{
				id: uid(),
				conversationId: t1,
				direction: "out",
				text: "Yes. I will send comments in thirty minutes.",
				at: now - 24e5
			},
			{
				id: uid(),
				conversationId: t1,
				direction: "in",
				text: "Deck is in the shared folder.",
				at: now - 108e4
			},
			{
				id: uid(),
				conversationId: t2,
				direction: "in",
				text: "Standup moved to 09:40.",
				at: now - 48e5
			},
			{
				id: uid(),
				conversationId: e1,
				direction: "in",
				text: "PO-4418 cleared this morning. Let us know if the packing list still needs a revision.",
				at: now - 144e5
			}
		]
	};
}
function whatsappPack() {
	const a = uid();
	const b = uid();
	const c = uid();
	const now = Date.now();
	return {
		conversations: [
			{
				id: a,
				platform: "whatsapp",
				name: "Maya Chen",
				handle: "+65 8123 4410",
				preview: "Did the samples ship?",
				unread: 2,
				updatedAt: now - 4e4
			},
			{
				id: b,
				platform: "whatsapp",
				name: "Northwind Ops",
				handle: "+971 4 000 2210",
				preview: "Invoice is with finance.",
				unread: 0,
				updatedAt: now - 72e4
			},
			{
				id: c,
				platform: "whatsapp",
				name: "Family",
				handle: "group",
				preview: "Dinner at 7?",
				unread: 1,
				updatedAt: now - 36e4
			}
		],
		messages: [
			{
				id: uid(),
				conversationId: a,
				direction: "in",
				text: "Hi — following up on the fabric samples.",
				at: now - 48e4
			},
			{
				id: uid(),
				conversationId: a,
				direction: "in",
				text: "Did the samples ship?",
				at: now - 4e4
			},
			{
				id: uid(),
				conversationId: b,
				direction: "out",
				text: "Sending the packing list now.",
				at: now - 12e5
			},
			{
				id: uid(),
				conversationId: b,
				direction: "in",
				text: "Invoice is with finance.",
				at: now - 72e4
			},
			{
				id: uid(),
				conversationId: c,
				direction: "in",
				text: "Dinner at 7?",
				at: now - 36e4
			}
		]
	};
}
function instagramPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "instagram",
			name: "atelier.north",
			handle: "@atelier.north",
			preview: "Can we use the west stills?",
			unread: 1,
			updatedAt: now - 9e4
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "Can we use the west stills?",
			at: now - 9e4
		}]
	};
}
function slackPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "slack",
			name: "#launch",
			handle: "northwind",
			preview: "Cutover window is Thursday 02:00.",
			unread: 0,
			updatedAt: now - 18e5
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "Cutover window is Thursday 02:00.",
			at: now - 18e5
		}]
	};
}
function discordPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "discord",
			name: "build-log",
			handle: "studio",
			preview: "Nightly is green.",
			unread: 0,
			updatedAt: now - 3e6
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "Nightly is green.",
			at: now - 3e6
		}]
	};
}
function messengerPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "messenger",
			name: "Rafi Noor",
			handle: "messenger",
			preview: "I sent the moodboard.",
			unread: 1,
			updatedAt: now - 54e4
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "I sent the moodboard.",
			at: now - 54e4
		}]
	};
}
function signalPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "signal",
			name: "Counsel",
			handle: "signal",
			preview: "Draft is in the vault.",
			unread: 0,
			updatedAt: now - 42e5
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "Draft is in the vault.",
			at: now - 42e5
		}]
	};
}
function xPack() {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "x",
			name: "press",
			handle: "@press",
			preview: "Need a line on the launch window.",
			unread: 1,
			updatedAt: now - 9e5
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "Need a line on the launch window.",
			at: now - 9e5
		}]
	};
}
function smsPack(handle) {
	const id = uid();
	const now = Date.now();
	return {
		conversations: [{
			id,
			platform: "sms",
			name: "Carrier",
			handle,
			preview: "eSIM profile active on this Android.",
			unread: 0,
			updatedAt: now - 2e4
		}],
		messages: [{
			id: uid(),
			conversationId: id,
			direction: "in",
			text: "eSIM profile active on this Android.",
			at: now - 2e4
		}]
	};
}
function packFor(platform, handle) {
	switch (platform) {
		case "whatsapp": return whatsappPack();
		case "instagram": return instagramPack();
		case "slack": return slackPack();
		case "discord": return discordPack();
		case "messenger": return messengerPack();
		case "signal": return signalPack();
		case "x": return xPack();
		case "sms": return smsPack(handle);
		default: return {
			conversations: [],
			messages: []
		};
	}
}
function log(text) {
	return {
		id: uid(),
		text,
		at: Date.now()
	};
}
var seeded = seedConversations();
var initial = {
	hydrated: false,
	view: "inbox",
	device: makeDevice(DEVICE_MODELS[0]),
	connections: seedConnections(),
	conversations: seeded.conversations,
	messages: seeded.messages,
	sms: [{
		id: uid(),
		from: "XTOBE",
		body: "Cloud Android is online. WhatsApp can register on this device.",
		at: Date.now() - 3e5
	}],
	activity: [
		log("Provisioned Google Pixel 9 Pro · Android 15"),
		log("Telegram connected as @northdesk"),
		log("Email connected as ops@xtobe.app")
	],
	selectedId: null,
	phoneScreen: "home",
	phoneApp: null,
	pending: null,
	connecting: null,
	typingId: null
};
var useXtobe = create()(persist((set, get) => ({
	...initial,
	markHydrated: () => set({ hydrated: true }),
	setView: (view) => set({
		view,
		selectedId: view === "inbox" ? get().selectedId : null
	}),
	selectConversation: (id) => set({
		selectedId: id,
		view: "inbox"
	}),
	setPhoneScreen: (screen, app = null) => set({
		phoneScreen: screen,
		phoneApp: app
	}),
	setRegion: (region) => set((s) => ({
		device: {
			...s.device,
			region
		},
		activity: [log(`Region set to ${region}`), ...s.activity].slice(0, 40)
	})),
	provision: (model) => {
		const region = get().device.region;
		set((s) => ({
			device: makeDevice(model, region),
			phoneScreen: "home",
			phoneApp: null,
			activity: [log(`Re-provisioned ${model.brand} ${model.model}`), ...s.activity].slice(0, 40)
		}));
	},
	startVerify: (platform, handle) => {
		const code = generateCode();
		set((s) => ({
			pending: {
				platform,
				handle,
				code
			},
			connecting: platform,
			phoneScreen: "messages",
			sms: [{
				id: uid(),
				from: platform === "whatsapp" ? "WhatsApp" : "Signal",
				body: `${code} is your ${platform === "whatsapp" ? "WhatsApp" : "Signal"} code. Do not share it.`,
				at: Date.now()
			}, ...s.sms],
			activity: [log(`Verification SMS delivered on cloud Android`), ...s.activity].slice(0, 40)
		}));
		return code;
	},
	confirmVerify: (code) => {
		const pending = get().pending;
		if (!pending) return false;
		if (code.trim() !== pending.code) return false;
		get().connectDirect(pending.platform, pending.handle);
		set({
			pending: null,
			connecting: null,
			phoneScreen: "app",
			phoneApp: pending.platform
		});
		return true;
	},
	connectDirect: (platform, handle) => {
		const pack = packFor(platform, handle);
		set((s) => {
			const rest = s.connections.filter((c) => c.platform !== platform);
			const nextConversations = [...pack.conversations, ...s.conversations.filter((c) => c.platform !== platform)];
			const nextMessages = [...pack.messages, ...s.messages.filter((m) => s.conversations.some((c) => c.id === m.conversationId && c.platform !== platform))];
			return {
				connections: [{
					platform,
					status: "connected",
					handle,
					connectedAt: Date.now()
				}, ...rest],
				conversations: nextConversations,
				messages: nextMessages,
				connecting: null,
				pending: null,
				view: "inbox",
				activity: [log(`${platform} connected as ${handle}`), ...s.activity].slice(0, 40)
			};
		});
	},
	disconnect: (platform) => {
		set((s) => ({
			connections: s.connections.map((c) => c.platform === platform ? {
				...c,
				status: "disconnected",
				connectedAt: null,
				handle: ""
			} : c),
			selectedId: s.conversations.find((c) => c.id === s.selectedId)?.platform === platform ? null : s.selectedId,
			activity: [log(`${platform} disconnected`), ...s.activity].slice(0, 40)
		}));
	},
	sendMessage: (conversationId, text) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		const out = {
			id: uid(),
			conversationId,
			direction: "out",
			text: trimmed,
			at: Date.now()
		};
		set((s) => ({
			messages: [...s.messages, out],
			conversations: s.conversations.map((c) => c.id === conversationId ? {
				...c,
				preview: trimmed,
				updatedAt: Date.now(),
				unread: 0
			} : c),
			typingId: conversationId
		}));
		window.setTimeout(() => {
			const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
			const incoming = {
				id: uid(),
				conversationId,
				direction: "in",
				text: reply,
				at: Date.now()
			};
			set((s) => ({
				typingId: s.typingId === conversationId ? null : s.typingId,
				messages: [...s.messages, incoming],
				conversations: s.conversations.map((c) => c.id === conversationId ? {
					...c,
					preview: reply,
					updatedAt: Date.now()
				} : c)
			}));
		}, 900);
	},
	markRead: (conversationId) => {
		set((s) => ({ conversations: s.conversations.map((c) => c.id === conversationId ? {
			...c,
			unread: 0
		} : c) }));
	}
}), {
	name: "xtobe-v1",
	skipHydration: true,
	partialize: (s) => ({
		device: s.device,
		connections: s.connections,
		conversations: s.conversations,
		messages: s.messages,
		sms: s.sms,
		activity: s.activity
	})
}));
function ConnectFlow({ platform, onClose }) {
	const startVerify = useXtobe((s) => s.startVerify);
	const confirmVerify = useXtobe((s) => s.confirmVerify);
	const connectDirect = useXtobe((s) => s.connectDirect);
	const device = useXtobe((s) => s.device);
	const [handle, setHandle] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("form");
	const [error, setError] = (0, import_react.useState)("");
	const meta = platform ? PLATFORM_MAP[platform] : null;
	const open = Boolean(platform && meta);
	function reset() {
		setHandle("");
		setCode("");
		setStep("form");
		setError("");
	}
	function close() {
		reset();
		onClose();
	}
	function submitForm() {
		if (!platform || !meta) return;
		const value = handle.trim();
		if (!value) {
			setError("Enter an account identifier.");
			return;
		}
		setError("");
		if (meta.needsSms) {
			startVerify(platform, value);
			setStep("verify");
			return;
		}
		connectDirect(platform, value);
		setStep("done");
	}
	function submitCode() {
		if (!confirmVerify(code)) {
			setError("That code does not match the SMS on the Android.");
			return;
		}
		setError("");
		setStep("done");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn("fixed left-1/2 top-1/2 z-50 w-[min(440px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-none"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-lg font-semibold tracking-tight",
						children: step === "done" ? "Connected" : `Connect ${meta?.name ?? ""}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-1 text-sm text-muted",
						children: step === "verify" ? "The code arrived as SMS on the cloud Android — open Messages on the phone, then enter it here." : step === "done" ? `${meta?.name} is bound to ${device.brand} ${device.model}. Threads are in the inbox.` : meta?.blurb
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Close",
							className: "size-9 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					})]
				}),
				step === "form" && meta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						submitForm();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wide text-subtle",
								children: meta.fieldLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoFocus: true,
								value: handle,
								onChange: (e) => setHandle(e.target.value),
								placeholder: meta.fieldPlaceholder
							})]
						}),
						meta.needsSms && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted",
							children: "WhatsApp and Signal verify against this Android identity — not an iPhone IMEI. The SMS is delivered to the virtual device on the right."
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: meta.needsSms ? "Send code to Android" : "Connect"
						})
					]
				}),
				step === "verify" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						submitCode();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wide text-subtle",
								children: "Six-digit code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoFocus: true,
								inputMode: "numeric",
								autoComplete: "one-time-code",
								maxLength: 6,
								value: code,
								onChange: (e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6)),
								placeholder: "000000",
								className: "font-mono tracking-[0.3em]"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: code.length !== 6,
							children: "Confirm on Android"
						})
					]
				}),
				step === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: close,
					children: "Open inbox"
				})
			]
		})] })
	});
}
function ConnectorsView({ onConnect }) {
	const connections = useXtobe((s) => s.connections);
	const disconnect = useXtobe((s) => s.disconnect);
	const map = Object.fromEntries(connections.map((c) => [c.platform, c]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-0 flex-1 overflow-y-auto p-4 md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold tracking-tight",
				children: "Connectors"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "Every platform registers on this cloud Android. WhatsApp and Signal verify with SMS on the device. Others bind by account handle."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-2",
			children: PLATFORMS.map((p) => {
				const conn = map[p.id];
				const on = conn?.status === "connected";
				const Icon = p.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-11 place-items-center rounded-md", p.tint),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-medium",
										children: p.name
									}), on ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), "Live"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-subtle",
										children: "Off"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted",
									children: p.blurb
								}),
								on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 truncate font-mono text-[11px] text-subtle",
									children: conn.handle
								}) : null
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-end",
						children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => disconnect(p.id),
							children: "Disconnect"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => onConnect(p.id),
							children: "Connect"
						})
					})]
				}, p.id);
			})
		})]
	});
}
function DeviceView() {
	const device = useXtobe((s) => s.device);
	const activity = useXtobe((s) => s.activity);
	const provision = useXtobe((s) => s.provision);
	const setRegion = useXtobe((s) => s.setRegion);
	const live = useXtobe((s) => s.connections).filter((c) => c.status === "connected").length;
	const rows = [
		["Brand", device.brand],
		["Model", device.model],
		["Android", device.android],
		["Chipset", device.chipset],
		["IMEI", device.imei],
		["Serial", device.serial],
		["Android ID", device.androidId],
		["Battery", `${device.battery}%`]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-0 flex-1 overflow-y-auto p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold tracking-tight",
					children: "Cloud Android"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
					children: "A dedicated ARM profile. WhatsApp sees this identity — not an iPhone IMEI, not a desktop emulator. Re-provision to mint a fresh fingerprint."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tabular-nums text-muted",
					children: [live, " connectors live"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Identity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-3 divide-y divide-border",
						children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-subtle",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "break-all text-right font-mono text-xs",
								children: v
							})]
						}, k))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium",
								children: "Hardware profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: DEVICE_MODELS.map((m) => {
									const active = device.modelId === m.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => provision(m),
										className: cn("h-11 w-full rounded-md border px-3 text-left text-xs", active ? "border-accent bg-elevated text-fg" : "border-border bg-bg text-muted hover:text-fg"),
										children: [
											m.brand,
											" ",
											m.model
										]
									}) }, m.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[11px] text-subtle",
								children: "Choosing a model mints a new IMEI, serial, and Android ID."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Egress region"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "pill",
								variant: device.region === r.id ? "default" : "secondary",
								onClick: () => setRegion(r.id),
								children: r.label
							}, r.id))
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium",
					children: "Activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2",
					children: activity.slice(0, 12).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: a.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 tabular-nums text-subtle",
							children: new Date(a.at).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit"
							})
						})]
					}, a.id))
				})]
			})
		]
	});
}
function timeAgo(at) {
	const mins = Math.max(0, Math.round((Date.now() - at) / 6e4));
	if (mins < 1) return "now";
	if (mins < 60) return `${mins}m`;
	const hours = Math.round(mins / 60);
	if (hours < 24) return `${hours}h`;
	return `${Math.round(hours / 24)}d`;
}
function InboxView({ onConnectWhatsApp }) {
	const connections = useXtobe((s) => s.connections);
	const conversations = useXtobe((s) => s.conversations);
	const selectedId = useXtobe((s) => s.selectedId);
	const selectConversation = useXtobe((s) => s.selectConversation);
	const markRead = useXtobe((s) => s.markRead);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const connected = (0, import_react.useMemo)(() => new Set(connections.filter((c) => c.status === "connected").map((c) => c.platform)), [connections]);
	const waOn = connected.has("whatsapp");
	const list = conversations.filter((c) => connected.has(c.platform)).filter((c) => filter === "all" || c.platform === filter).slice().sort((a, b) => b.updatedAt - a.updatedAt);
	const filters = ["all", ...Array.from(connected)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-0 flex-col border-b border-border lg:border-b-0 lg:border-r",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 overflow-x-auto px-4 py-3",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: cn("h-9 shrink-0 rounded-full px-3 text-xs font-medium", filter === f ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
						children: f === "all" ? "All" : PLATFORM_MAP[f].name
					}, f))
				}),
				!waOn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-4 mb-3 rounded-lg border border-border bg-elevated p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "WhatsApp is not on this Android yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: "Register it on the cloud device. The verification SMS lands on the phone, then chats merge here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "mt-3",
							onClick: onConnectWhatsApp,
							children: "Connect WhatsApp"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "min-h-0 flex-1 overflow-y-auto",
					children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-4 py-10 text-sm text-muted",
						children: "No threads on the connected platforms."
					}) : list.map((c) => {
						const p = PLATFORM_MAP[c.platform];
						const Icon = p.icon;
						const active = selectedId === c.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								selectConversation(c.id);
								markRead(c.id);
							},
							className: cn("flex w-full items-start gap-3 px-4 py-3 text-left transition-colors duration-150", active ? "bg-elevated" : "hover:bg-surface"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-0.5 grid size-10 shrink-0 place-items-center rounded-md", p.tint),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate text-sm font-medium",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-[11px] tabular-nums text-subtle",
											children: timeAgo(c.updatedAt)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block truncate text-xs text-muted",
										children: c.preview
									})]
								}),
								c.unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-fg",
									children: c.unread
								}) : null
							]
						}) }, c.id);
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadPane, {})]
	});
}
function ThreadPane() {
	const selectedId = useXtobe((s) => s.selectedId);
	const conversations = useXtobe((s) => s.conversations);
	const messages = useXtobe((s) => s.messages);
	const typingId = useXtobe((s) => s.typingId);
	const sendMessage = useXtobe((s) => s.sendMessage);
	const [draft, setDraft] = (0, import_react.useState)("");
	const endRef = (0, import_react.useRef)(null);
	const convo = conversations.find((c) => c.id === selectedId);
	const thread = messages.filter((m) => m.conversationId === selectedId);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ block: "end" });
	}, [
		thread.length,
		typingId,
		selectedId
	]);
	(0, import_react.useEffect)(() => {
		setDraft("");
	}, [selectedId]);
	if (!convo) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hidden min-h-[320px] flex-col items-center justify-center px-8 text-center lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold tracking-tight",
			children: "Universal inbox"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-sm text-sm leading-relaxed text-muted",
			children: "Pick a thread. Replies send from the cloud Android and stay bound to that platform."
		})]
	});
	const p = PLATFORM_MAP[convo.platform];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[50dvh] flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "flex items-center gap-3 border-b border-border px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: convo.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						p.name,
						" · ",
						convo.handle
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 space-y-2 overflow-y-auto px-4 py-4",
				children: [
					thread.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex", m.direction === "out" ? "justify-end" : "justify-start"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("max-w-[min(72%,28rem)] rounded-lg px-3 py-2 text-sm leading-relaxed", m.direction === "out" ? "bg-accent text-accent-fg" : "bg-elevated text-fg"),
							children: m.text
						})
					}, m.id)),
					typingId === convo.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-subtle",
						children: [convo.name, " is typing"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex gap-2 border-t border-border p-3",
				onSubmit: (e) => {
					e.preventDefault();
					sendMessage(convo.id, draft);
					setDraft("");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: draft,
					onChange: (e) => setDraft(e.target.value),
					placeholder: `Message on ${p.name}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					"aria-label": "Send",
					disabled: !draft.trim(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				})]
			})
		]
	});
}
function clockLabel() {
	return (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function PhoneFrame({ className }) {
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
	const [time, setTime] = (0, import_react.useState)(clockLabel);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setTime(clockLabel()), 15e3);
		return () => window.clearInterval(id);
	}, []);
	const connected = new Set(connections.filter((c) => c.status === "connected").map((c) => c.platform));
	const apps = [
		"whatsapp",
		"telegram",
		"instagram",
		"sms",
		"email",
		"slack"
	].filter((id) => id === "sms" || connected.has(id));
	const openThread = conversations.find((c) => c.id === selectedId && connected.has(c.platform)) ?? null;
	const threadMessages = openThread ? messages.filter((m) => m.conversationId === openThread.id) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto w-[280px]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-phone border border-border-strong bg-elevated p-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[28px] bg-bg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 pb-1 pt-2 text-[10px] font-medium tabular-nums text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-elevated" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, { className: "size-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [device.battery, "%"] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-[460px] overflow-y-auto px-3 pb-2",
						children: [
							phoneScreen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
								apps,
								onOpen: (id) => {
									if (id === "sms") setPhoneScreen("messages");
									else setPhoneScreen("app", id);
								},
								onSettings: () => setPhoneScreen("settings"),
								device
							}),
							phoneScreen === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesScreen, {
								items: sms,
								onBack: () => setPhoneScreen("home")
							}),
							phoneScreen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {
								device,
								onBack: () => setPhoneScreen("home")
							}),
							phoneScreen === "app" && phoneApp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
								platform: phoneApp,
								conversations: conversations.filter((c) => c.platform === phoneApp),
								openThread: openThread?.platform === phoneApp ? openThread : null,
								threadMessages: openThread?.platform === phoneApp ? threadMessages : [],
								onBack: () => {
									if (openThread?.platform === phoneApp) selectConversation(null);
									else setPhoneScreen("home");
								},
								onOpen: (id) => selectConversation(id)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Home",
						className: "flex w-full items-center justify-center py-2",
						onClick: () => setPhoneScreen("home"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-24 rounded-full bg-border-strong" })
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-center text-xs text-subtle",
			children: [
				device.brand,
				" ",
				device.model,
				" · Android ",
				device.android
			]
		})]
	});
}
function HomeScreen({ apps, onOpen, onSettings, device }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wide text-subtle",
				children: "Cloud Android"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold tracking-tight",
				children: device.model
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-3 gap-3",
				children: [apps.map((id) => {
					const p = PLATFORM_MAP[id];
					const Icon = p.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(id),
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-12 place-items-center rounded-lg", p.tint),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted",
							children: p.name
						})]
					}, id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onSettings,
					className: "flex flex-col items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-lg bg-elevated",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: "i"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted",
						children: "Identity"
					})]
				})]
			})
		]
	});
}
function MessagesScreen({ items, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-3 text-xs text-muted",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold",
				children: "Messages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-elevated p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: item.from
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tabular-nums text-subtle",
							children: new Date(item.at).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted",
						children: item.body
					})]
				}, item.id))
			})
		]
	});
}
function SettingsScreen({ device, onBack }) {
	const rows = [
		["Model", `${device.brand} ${device.model}`],
		["Android", device.android],
		["Chipset", device.chipset],
		["IMEI", device.imei],
		["Serial", device.serial],
		["Android ID", device.androidId]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-3 text-xs text-muted",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold",
				children: "Device identity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 space-y-2",
				children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-elevated px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[10px] uppercase tracking-wide text-subtle",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 break-all font-mono text-[11px] text-fg",
						children: v
					})]
				}, k))
			})
		]
	});
}
function AppScreen({ platform, conversations, openThread, threadMessages, onBack, onOpen }) {
	const p = PLATFORM_MAP[platform];
	if (openThread) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-3 text-xs text-muted",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold",
				children: openThread.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: threadMessages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: cn("max-w-[90%] rounded-md px-2.5 py-1.5 text-xs leading-relaxed", m.direction === "out" ? "ml-auto bg-accent text-accent-fg" : "bg-elevated text-fg"),
					children: m.text
				}, m.id))
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-3 text-xs text-muted",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold",
				children: p.name
			}),
			conversations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: "No threads on this Android yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-border",
				children: conversations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(c.id),
					className: "flex w-full items-start justify-between gap-2 py-2.5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs font-medium",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-[11px] text-muted",
						children: c.preview
					})] }), c.unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-5 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-fg",
						children: c.unread
					}) : null]
				}) }, c.id))
			})
		]
	});
}
var NAV = [
	{
		id: "inbox",
		label: "Inbox",
		icon: Inbox
	},
	{
		id: "connectors",
		label: "Connectors",
		icon: Radio
	},
	{
		id: "device",
		label: "Android",
		icon: Smartphone
	}
];
function AppShell() {
	const hydrated = useXtobe((s) => s.hydrated);
	const markHydrated = useXtobe((s) => s.markHydrated);
	const view = useXtobe((s) => s.view);
	const setView = useXtobe((s) => s.setView);
	const device = useXtobe((s) => s.device);
	const connections = useXtobe((s) => s.connections);
	const [connectId, setConnectId] = (0, import_react.useState)(null);
	const [phoneOpen, setPhoneOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useXtobe.persist.rehydrate();
		markHydrated();
	}, [markHydrated]);
	const live = connections.filter((c) => c.status === "connected").length;
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: "Starting cloud Android…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-md bg-accent text-sm font-display font-semibold text-accent-fg",
						children: "X"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: "XTOBE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted",
						children: "Universal connector"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-2 sm:inline-flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-success" }),
								device.brand,
								" ",
								device.model
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [live, " live"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-md border border-border px-3 lg:hidden",
							onClick: () => setPhoneOpen(true),
							children: "Phone"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden w-52 shrink-0 flex-col border-r border-border p-3 md:flex",
						children: [NAV.map((item) => {
							const Icon = item.icon;
							const active = view === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView(item.id),
								className: cn("mb-1 flex h-11 items-center gap-2 rounded-md px-3 text-sm", active ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
							}, item.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto px-3 pb-2 text-[11px] leading-relaxed text-subtle",
							children: "Messages stay on this Android. No second iPhone, no APK sideload from iOS."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "flex min-w-0 flex-1 flex-col pb-16 md:pb-0",
						children: [
							view === "inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InboxView, { onConnectWhatsApp: () => setConnectId("whatsapp") }),
							view === "connectors" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectorsView, { onConnect: setConnectId }),
							view === "device" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceView, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden w-[320px] shrink-0 border-l border-border p-5 lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = view === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: cn("flex h-14 flex-col items-center justify-center gap-1 text-[11px]", active ? "text-fg" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.id);
					})
				})
			}),
			phoneOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-bg/80 p-4 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-h-dvh max-w-sm flex-col overflow-y-auto pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonClose, { onClick: () => setPhoneOpen(false) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { className: "mt-3" })]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectFlow, {
				platform: connectId,
				onClose: () => setConnectId(null)
			})
		]
	});
}
function ButtonClose({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "h-11 self-end rounded-md border border-border px-4 text-sm",
		children: "Close"
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
