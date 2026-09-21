function luhnCheckDigit(body: string): string {
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
  return String((10 - (sum % 10)) % 10);
}

export function generateImei(): string {
  const tac = "35" + String(Math.floor(100000 + Math.random() * 899999));
  const serial = String(Math.floor(100000 + Math.random() * 899999));
  const body = (tac + serial).slice(0, 14);
  return body + luhnCheckDigit(body);
}

export function generateSerial(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 12; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}

export function generateAndroidId(): string {
  const bytes = new Uint8Array(8);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 8; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function generateCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
