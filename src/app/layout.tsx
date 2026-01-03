import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/miriam-libre"

export const metadata: Metadata = {
  title: "Parthiv Menon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
