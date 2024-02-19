import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Home from "./page";
import OpenAI from "openai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braintust test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Home />
        </Theme>
      </body>
    </html>
  );
}
