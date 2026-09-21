import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PLATFORM_MAP, type PlatformId } from "@/lib/platforms";
import { useXtobe } from "@/lib/store";
import { cn } from "@/lib/cn";

type Props = {
  platform: PlatformId | null;
  onClose: () => void;
};

export function ConnectFlow({ platform, onClose }: Props) {
  const startVerify = useXtobe((s) => s.startVerify);
  const confirmVerify = useXtobe((s) => s.confirmVerify);
  const connectDirect = useXtobe((s) => s.connectDirect);
  const device = useXtobe((s) => s.device);
  const [handle, setHandle] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"form" | "verify" | "done">("form");
  const [error, setError] = useState("");

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

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[min(440px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2",
            "rounded-xl border border-border bg-surface p-6 shadow-none",
          )}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-lg font-semibold tracking-tight">
                {step === "done" ? "Connected" : `Connect ${meta?.name ?? ""}`}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted">
                {step === "verify"
                  ? "The code arrived as SMS on the cloud Android — open Messages on the phone, then enter it here."
                  : step === "done"
                    ? `${meta?.name} is bound to ${device.brand} ${device.model}. Threads are in the inbox.`
                    : meta?.blurb}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close" className="size-9 shrink-0">
                <X className="size-4" />
              </Button>
            </Dialog.Close>
          </div>

          {step === "form" && meta && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              <label className="block space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-subtle">
                  {meta.fieldLabel}
                </span>
                <Input
                  autoFocus
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder={meta.fieldPlaceholder}
                />
              </label>
              {meta.needsSms && (
                <p className="text-xs leading-relaxed text-muted">
                  WhatsApp and Signal verify against this Android identity — not an iPhone IMEI.
                  The SMS is delivered to the virtual device on the right.
                </p>
              )}
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <Button type="submit" className="w-full">
                {meta.needsSms ? "Send code to Android" : "Connect"}
              </Button>
            </form>
          )}

          {step === "verify" && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                submitCode();
              }}
            >
              <label className="block space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-subtle">
                  Six-digit code
                </span>
                <Input
                  autoFocus
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  className="font-mono tracking-[0.3em]"
                />
              </label>
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <Button type="submit" className="w-full" disabled={code.length !== 6}>
                Confirm on Android
              </Button>
            </form>
          )}

          {step === "done" && (
            <Button className="w-full" onClick={close}>
              Open inbox
            </Button>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
