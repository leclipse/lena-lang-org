import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lena Language",
  description:
    "Lena is an LLVM-based polyglot programming language for native software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
