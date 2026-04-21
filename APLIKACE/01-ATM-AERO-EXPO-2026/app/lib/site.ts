/**
 * Kanonická adresa nasazené interní aplikace na Vercelu (prezentace + Operativa).
 * Produkc: https://interni-aplikace.vercel.app/
 *
 * Pro sdílení vždy jen tato doména. Nepoužívat jiné hosty téže aplikace (preview / barevné aliasy
 * typu interni-aplikace-*.vercel.app, týmové preview URL atd.).
 *
 * Přepsat lze v .env:
 * - NEXT_PUBLIC_INTERNAL_APP_ORIGIN – např. https://interni-aplikace.vercel.app
 * - NEXT_PUBLIC_INTERNAL_APP_OPS_URL – plná URL na /ops (má přednost před odvozením z ORIGIN)
 */
export const INTERNAL_APP_ORIGIN =
  process.env.NEXT_PUBLIC_INTERNAL_APP_ORIGIN?.replace(/\/$/, "").trim() ||
  "https://interni-aplikace.vercel.app";

export const INTERNAL_APP_OPS_URL =
  process.env.NEXT_PUBLIC_INTERNAL_APP_OPS_URL?.trim() ||
  `${INTERNAL_APP_ORIGIN}/ops`;
