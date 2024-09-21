import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

String.prototype.toSentenceCase = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

export function debounce(fn: any, delay: number) {
  let timeoutId: any;

  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function calculateReadTime(text: string): number {
  const WORDS_PER_MINUTE = 200;
  const cleanedText = text.replace(/\n/g, " ");
  const wordCount = cleanedText.trim().split(/\s+/).length;

  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}
