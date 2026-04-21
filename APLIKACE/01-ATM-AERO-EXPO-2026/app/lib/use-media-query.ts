"use client";

import { useSyncExternalStore } from "react";

/** SSR: `ssrMatches` – po hydrataci se srovná s reálným viewportem. */
export function useMediaQuery(query: string, ssrMatches = false): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => ssrMatches
  );
}
