type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassValue = string | number | null | undefined | false | ClassDictionary | ClassValue[];

function flatten(input: ClassValue, out: string[]): void {
  if (!input) return;
  if (Array.isArray(input)) {
    for (const item of input) flatten(item, out);
    return;
  }
  if (typeof input === "object") {
    for (const [key, value] of Object.entries(input)) {
      if (value) out.push(key);
    }
    return;
  }
  out.push(String(input));
}

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  flatten(inputs, out);
  return out.join(" ");
}
