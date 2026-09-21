export type DeviceModel = {
  id: string;
  brand: string;
  model: string;
  android: string;
  chipset: string;
};

export const DEVICE_MODELS: DeviceModel[] = [
  {
    id: "pixel-9-pro",
    brand: "Google",
    model: "Pixel 9 Pro",
    android: "15",
    chipset: "Tensor G4",
  },
  {
    id: "pixel-8-pro",
    brand: "Google",
    model: "Pixel 8 Pro",
    android: "15",
    chipset: "Tensor G3",
  },
  {
    id: "s24",
    brand: "Samsung",
    model: "Galaxy S24",
    android: "15",
    chipset: "Snapdragon 8 Gen 3",
  },
  {
    id: "s24u",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    android: "15",
    chipset: "Snapdragon 8 Gen 3",
  },
  {
    id: "oneplus-13",
    brand: "OnePlus",
    model: "13",
    android: "15",
    chipset: "Snapdragon 8 Elite",
  },
  {
    id: "nothing-3",
    brand: "Nothing",
    model: "Phone (3)",
    android: "15",
    chipset: "Snapdragon 8s Gen 3",
  },
];

export const REGIONS = [
  { id: "dxb", label: "Dubai", hint: "me-central" },
  { id: "lon", label: "London", hint: "eu-west" },
  { id: "fra", label: "Frankfurt", hint: "eu-central" },
  { id: "sgp", label: "Singapore", hint: "ap-southeast" },
  { id: "iad", label: "Ashburn", hint: "us-east" },
] as const;
