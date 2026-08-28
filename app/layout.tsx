import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "websiteclub — Build better, together", description: "A club for people building the internet." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
