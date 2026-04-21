import type { ReactNode } from "react";

/**
 * Zobrazí zkrácený Git SHA z buildu na Vercelu → ověření, že produkce běží na očekávaném commitu.
 * (Na lokálu bez Vercel env proměnných se nevykreslí.)
 */
export default function OpsLayout({ children }: { children: ReactNode }) {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;
  const short = sha && sha.length >= 7 ? sha.slice(0, 7) : null;

  return (
    <>
      {children}
      {short ? (
        <div
          className="pointer-events-none fixed bottom-1 right-2 z-[100] font-mono text-[10px] tabular-nums"
          style={{ color: "var(--color-at-blue-v4)", opacity: 0.55 }}
          title={`VERCEL_GIT_COMMIT_SHA=${sha}`}
        >
          build {short}
        </div>
      ) : null}
    </>
  );
}
