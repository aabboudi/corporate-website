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
