export function getKeyWithLargestValue(obj: Record<string, number>): string {
  let largestKey = "";
  let largestValue: number = Number.MIN_SAFE_INTEGER; // Initialize with smallest possible integer value

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]!;
      if (value > largestValue) {
        largestKey = key;
        largestValue = value;
      }
    }
  }

  return largestKey;
}
