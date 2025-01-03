import { clsx, type ClassValue } from "clsx"
import { MouseEvent } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollSmoothToTarget(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()

  const target = (event.currentTarget as HTMLElement).getAttribute("href")
  const targetElement = document.querySelector(target!)
  if (!targetElement) return

  targetElement.scrollIntoView({ behavior: "smooth" });
}