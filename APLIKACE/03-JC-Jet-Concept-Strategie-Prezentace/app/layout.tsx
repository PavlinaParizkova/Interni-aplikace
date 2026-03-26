import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jet Concept – Strategie 2026",
  description: "Jet Concept je integrační a certifikační entita AIR TEAM pro návrh, certifikaci, výrobu a koordinaci přestaveb a úprav letadel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
