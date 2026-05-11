import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternity — Operational Intelligence Orchestrator",
  description: "Upload your company brain and receive an operational intelligence architecture.",
  metadataBase: new URL("https://eternity.ai")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
