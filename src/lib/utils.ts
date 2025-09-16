type ClassValue = string | undefined | false | null | Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .map((input) => {
      if (!input) return "";
      if (typeof input === "string") return input;
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}
