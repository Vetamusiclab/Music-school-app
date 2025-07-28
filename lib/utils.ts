import { clsx } from "clsx"
import { twMerge } from "tailwind-variants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ClassValue = string | number | null | boolean | undefined | ClassValue[]

