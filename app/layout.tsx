import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/ui/Navigation";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secretlab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
