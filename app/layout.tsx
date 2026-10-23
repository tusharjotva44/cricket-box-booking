import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CricketBox — Find your ground",
  description: "Discover cricket turfs and box cricket grounds across India.",
  applicationName: "CricketBox"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}