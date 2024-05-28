import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone | LinkTree",
  description: "Made By Harsena Argretya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} md:bg-gray-950 bg-zinc-900 text-white`}
      >
        <Container>{children}</Container>
      </body>
    </html>
  );
}
