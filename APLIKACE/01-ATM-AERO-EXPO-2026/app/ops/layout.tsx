/** Operativa se nemá dlouho cachovat – jinak PWA drží starý UI po deployi. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
