import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternity Operator Workspace",
  description: "Internal operational intelligence workspace for compiling company information into AI systems, workflows, memory, and deployment-ready repositories.",
  metadataBase: new URL("https://eternity.ai")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
