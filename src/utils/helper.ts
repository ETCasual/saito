import { type Result } from "@/stores/useResult";

export function countValues(
  dictionary: Record<string, Result | null | undefined>,
): {
  A: number;
  B: number;
  C: number;
  D: number;
} {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  for (const key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      const value = dictionary[key];
      if (value === "A") {
        counts.A++;
      } else if (value === "B") {
        counts.B++;
      } else if (value === "C") {
        counts.C++;
      } else if (value === "D") {
        counts.D++;
      }
    }
  }
  return counts;
}

export function getHighestOccurrence(counts: Record<string, number>): string {
  let highestProperty = "";
  let highestCount = 0;
  for (const property in counts) {
    if (counts.hasOwnProperty(property)) {
      const count = counts[property];
      if (count! > highestCount) {
        highestProperty = property;
        highestCount = count!;
      }
    }
  }
  return highestProperty;
}
